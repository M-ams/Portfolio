<?php

namespace App\Http\Controllers;


use stdClass;
use App\Models\Stack;
use App\Models\Works;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class WorksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $works = Works::with('stacks')->get();
        return response()->json($works);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required',
                'description' => 'required',
                'description_en' => 'required',
                'image' => 'required',
                'link' => 'required'
            ],
            [
                'title.required' => 'Title is required',
                'description.required' => 'Description is required',
                'description_en.required' => 'Description in English is required',
                'image.required' => 'Image is required',
                'link.required' => 'Link is required'
            ]
        );

        if ($validator->fails()) {
            Log::error($validator->errors());
            return response()->json($validator->errors(), 400);
        }




        $imagefullname = $request->file('image')->getClientOriginalName();
        $imagename = pathinfo($imagefullname, PATHINFO_FILENAME);
        $extension = $request->file('image')->getClientOriginalExtension();
        $imagetostore = $imagename . '_' . time() . '.' . $extension;
        $request->file('image')->storeAs('public/images', $imagetostore);


        $work = Works::create(
            [
                'title' => $request->input('title'),
                'description' => $request->input('description'),
                'description_en' => $request->input('description_en'),
                'image' => $imagetostore,
                'link' => $request->input('link')
            ]
        );

        $stacks = $request->input('stacks');

        foreach ($stacks as $stackName) {
            Stack::create([
                'name' => $stackName,
                'works_id' => $work->id,
            ]);
        }




        return response()->json(['message' => 'Work created'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $work = Works::findOrFail($id);
        $stacks = Stack::where('works_id', $work->id)->get();
        $work->stacks = $stacks;
        return response()->json($work);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {


        $work = Works::find($id);


        Log::info($request->all());
        $work->title = $request->input('title');
        $work->description = $request->input('description');
        $work->description_en = $request->input('description_en');
        $work->link = $request->input('link');

        Log::info($request->file('image'));

        if ($request->file('image')) {
            $imagefullname = $request->file('image')->getClientOriginalName();
            $imagename = pathinfo($imagefullname, PATHINFO_FILENAME);
            $extension = $request->file('image')->getClientOriginalExtension();
            $imagetostore = $imagename . '_' . time() . '.' . $extension;
            $request->file('image')->storeAs('public/images', $imagetostore);
            $work->image = $imagetostore;
        }

        Log::info($work);
        $work->save();

        $stacks = $request->input('stacks');
        if ($stacks) {
            Stack::where('works_id', $work->id)->delete();
            foreach ($stacks as $stackName) {
                Stack::create([
                    'name' => $stackName,
                    'works_id' => $work->id,
                ]);
            }
        }
        return response()->json(['message' => 'Work updated'], 200);
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $work = Works::findOrFail($id);

        // Delete associated stacks
        $work->stacks()->delete();

        // Delete the work
        $work->delete();

        return response()->json(['message' => 'Work deleted'], 200);
    }
}

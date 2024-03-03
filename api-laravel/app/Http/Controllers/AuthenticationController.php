<?php

namespace App\Http\Controllers;

use App\Http\Validation\RegisterValidation;
use App\Http\Validation\LoginValidation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthenticationController extends Controller
{
    public function register(Request $request, RegisterValidation $validation)
    {
        $validator = Validator::make($request->all(), $validation->rules());

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'api_token' => bin2hex(openssl_random_pseudo_bytes(30)),
        ]);

        $user->save();

        return response()->json([
            'message' => 'Successfully created user!',
        ], 201);
    }

    public function login(Request $request, LoginValidation $validation)
    {

        $validator = Validator::make($request->all(), $validation->rules(), $validation->messages());

        if ($validator->fails()) {
            return response()->json($validator->errors(), 401);
        }


        $user = User::where('email', $request->email)->first();

        if (!$user || !password_verify($request->password, $user->password)) {
            return response()->json([
                'message' => 'Mauvais id de connexion !',
            ], 401);
        }

        return response()->json([
            'message' => 'Successfully logged in!',
            'api_token' => $user->api_token,
        ], 200);
    }
}

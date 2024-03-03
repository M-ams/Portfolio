<?php

namespace App\Http\Middleware;

use Closure;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class React
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $token = $request->header('Authorization');
        
        if (!$token) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $user = User::where('api_token', $token)->first();
        if (!$user) {
            return response()->json(['error' => 'Invalid Credentials'], 403);
        }

        Auth::login($user, true);

        return $next($request);
    }
}

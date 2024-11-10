<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthenticationController extends Controller
{

    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required',
            'password' => ["required", 'min:3']
        ]);
        // check if user exists in the database 
        $user  = User::where('email', $request->get('email'))->first();
        if (!$user || !Hash::check($request->get('password'), $user->password)) {
            return response()->json([
                'status' => 401,
                'message' => 'invalid credentials'
            ]);
        }

        $token  = $user->createToken($request->email);
        return response()->json([
            'status' => 200,
            'user' => $user,
            'token' => $token->plainTextToken
        ]);
    }
    public function logout(
        Request $request
    ) {

        $request->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'User Logged out Successfully',

        ]);
    }

    public function register() {}
    //
}

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

        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
        $user  = User::firstWhere('email', $request->get('email'));
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

        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status' => 200,
            'message' => 'User Logged out Successfully',

        ]);
    }

   





    //
}

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

    public function register(Request $request)
    {
        // validate inputs

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string| email',
            'password' => 'required| min:4 ',
            'user_type' => 'required ',
        ]);
        // check  if users exist 
        $isUser = User::where('email', $request->get('email'))->first();
        if ($isUser) {
            return response()->json([
                'status' => 400,
                'message' => 'User Already Exists',


            ]);
        }
        //Hash the password 
        $hashedPass = Hash::make($request->get('password'));
        $user  = User::create([

            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => $hashedPass,
            'user_type' => $request->get('user_type'),
        ]);
        // return response
        return response()->json([
            'status' => 200,
            'message' => 'User Created Successfully',
            'data' => $user

        ]);
    }





    //
}

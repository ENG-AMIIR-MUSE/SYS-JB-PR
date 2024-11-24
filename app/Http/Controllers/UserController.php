<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller


{

    public  function checkUser($request)
    {
        $isUser = User::where('email', $request->get('email'))->first();
        return $isUser ? true : false;
    }
    public function index()
    {
        return User::all();
    }
    public function update(Request $request, User $user)
    {
        if ($this->checkUser($request)) {
            return response()->json([
                'status' => 400,
                'message' => 'User Already Exists',


            ]);
        }
        // Validate incoming request data
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email',
            'password' => 'sometimes|required|string|min:4',
            'user_type' => 'required|in:job_seeker,employer,admin',
        ]);

        // Update user details
        $user->name = $request->input('name', $user->name);
        $user->email = $request->input('email', $user->email);
        $user->user_type = $request->input('user_type', $user->user_type);

        // Update password only if provided
        if ($request->filled('password')) {
            $user->password = Hash::make($request->input('password'));
        }

        // Save the updated user details
        $user->save();

        return response()->json([
            'status' => 200,
            'message' => 'User updated successfully',
            'data' => $user,
        ]);
    }


    public function show(User $user)
    {

        return User::find($user);
    }

    public function store(Request $request)
    {
        // validate inputs

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string| email',
            'password' => 'required| min:4 ',
            'user_type' => 'required ',
        ]);
        // check  if users exist 

        if ($this->checkUser($request)) {
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

    public function destroy(User $user, Request $request)
    {

        if ($this->checkUser($request)) {
            User::destroy($user->id);
            return response()->json([
                'status' => 200,
                'message' => 'User Deleted successfully',
                'data' => $user,
            ]);
        }  
            return response()->json( [
                'status' => 400,
                'message' => 'User Doesn\'t Exist  ',
               
            ]);
        }
    
}

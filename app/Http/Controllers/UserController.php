<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller


{


    public function index(){
        return "index";
    }
    public function update(Request $request, $id)
    {
        // Find the user by ID
        $user = User::find($id);

        // Check if user exists
        if ($user) {
            // Validate the incoming request data
            // $request->validated([
            //     'name' => 'sometimes|required',
            //     'email' => 'sometimes|required|email',
            //     'password' => 'sometimes|required|min:8',
            //     'user_type' => 'sometimes|required'
            // ]);

            // Update user details
            $user->name = $request->input('name', $user->name);
            $user->email = $request->input('email', $user->email);
            $user->user_type = $request->input('user_type', $user->user_type);

            // Hash the password if it is present in the request
            if ($request->filled('password')) {
                $user->password = Hash::make($request->password);
            }

            // Save the updated user details
            $user->save();

            return response()->json([
                'status' => 200,
                'message' => "User updated successfully"
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => "User not found"
            ]);
        }

    
    }
}

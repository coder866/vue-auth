<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $this->validate($request,[
        "name"=>"required|min:3",
        "email"=>"required|email|unique:users",
        "password"=>"required|confirmed",
        "password_confirmation"=>"required"
        ]);

        $user=User::create([
        'name'=>$request->name,
        'email'=>$request->email,
        'password'=>Hash::make($request->password)
        ]);
        $resp=['User Created Successfully',$user];

        return $resp;
    }
    public function login(Request $request)
    {
        $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
        $token=$request->session()->regenerateToken();
        return ['LoggedIn Successfully',$token];
        }

        return back()->withErrors([
        'email' => 'The provided credentials do not match our records.',
        ]);
    }
}
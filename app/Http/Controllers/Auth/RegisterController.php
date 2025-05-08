<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Register\StoreRequest;
use App\Services\Auth\RegisterService;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    public function store(StoreRequest $request, RegisterService $registerService)
    {
        $registerService->register(
            $request->name,
            $request->email,
            $request->password,
            $request->role
        );

        return redirect()->route('home');
    }
}

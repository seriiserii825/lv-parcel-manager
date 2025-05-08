<?php
namespace App\Services\Auth;

class RegisterService {
    public function register(string $name, string $email, string $password, ?string $role = null): void
    {
        // Create the user
        $user = \App\Models\User::create([
            'name' => $name,
            'email' => $email,
            'password' => bcrypt($password),
            'role' => $role ?? 'manager',
        ]);

        // Log the user in
        auth()->login($user);
    }
}


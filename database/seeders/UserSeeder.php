<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $users = [
            [
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
                'password' => bcrypt('12345678'),
                'role' => 'admin',
            ],
            [
                'name' => 'Manager',
                'email' => 'manager@gmail.com',
                'password' => bcrypt('12345678'),
            ]
        ];

        foreach ($users as $user) {
            \App\Models\User::create($user);
        }
    }
}

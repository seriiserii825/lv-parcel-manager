<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StyleGuideController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/StyleGuide/Index');
    }
    public function button()
    {
        return Inertia::render('Admin/StyleGuide/Button');
    }
}

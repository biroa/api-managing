<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $data = 'List of Records';
        
        return view('content', [ "data" => $data ]);
    }
    
    /**
     * @param $video
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show($video)
    {
        return view('video', [ "video" => $video ]);
    }
}

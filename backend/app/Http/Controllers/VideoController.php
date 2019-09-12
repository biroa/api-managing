<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use Symfony\Component\HttpKernel\Exception\HttpException;
use GuzzleHttp\Psr7;
use GuzzleHttp\Exception\RequestException;

class VideoController extends Controller
{
    /**
     * @param null $start
     * @param null $end
     *
     * @return mixed
     */
    public function index($start = null, $end = null)
    {
        if ( !is_numeric($start) || !is_numeric($end) ) {
            $url = 'http://localhost:3000/profiles';
        } else {
            $url = 'http://localhost:3000/profiles?_start=' . $start . '&_end=' . ($start + $end);
        }
        
        
        $client = new Client([ 'http_errors' => false ]);
        $res = $client->get($url, [ 'auth' => [ 'jack', 'secret' ] ]);
        
        return json_decode($res->getBody(), true);
    }
    
}

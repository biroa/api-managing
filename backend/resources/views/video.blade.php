<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<link rel="stylesheet" href="{{ asset('/css/bootstrap.min.css') }}">
<link rel="stylesheet" href="{{ asset('/css/album.css') }}">
<script type="text/javascript" src="{{ asset('/js/angular-1.7.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('/js/controller/dataController.js') }}"></script>
<script type="text/javascript" src="{{ asset('/js/directive/dataDirective.js') }}"></script>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

</head>
<body ng-app='app'>
<div class="flex-center position-ref full-height">
    <main role="main">
        <div class="content">
            <div class="row">
                <div class="col-md2"></div>
                <div class="col-md-8">
                    <video controls="true">
                        <source src="https://s3.amazonaws.com/ve1/{{$video}}.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>
    </main>
</div>
</body>
</html>

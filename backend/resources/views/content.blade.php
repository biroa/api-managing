@extends('app')
@section('content')
    <div><h1>{{$data}}</h1></div>
    <div class="album py-5 bg-light">
        <div class="row" ng-controller="paginateController">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <a ng-click="left(5)" class="btn btn-secondary btn-lg active float-left" role="button" aria-pressed="true">Left</a>
                <a ng-click="right(5)" class="btn btn-secondary btn-lg active float-right" role="button" aria-pressed="true">Right</a>
            </div>
            <div class="col-md-4"></div>
        </div>
        <div class="row">
            <div class="col-md-4"></div>
            @verbatim
                <div class="col-md-4">
                    <div class="row" ng-controller="dataController">
                        <div class="col-md-12" ng-repeat="item in dataStore">
                            <my-component binding-foo="item">
                            </my-component>

                        </div>
                    </div>
                </div>
            @endverbatim
            <div class="col-md-4"></div>
        </div>
    </div>
@stop

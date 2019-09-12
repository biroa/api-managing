var myApp = angular.module ('myApp', []);

myApp.factory ("getDataService", [ "$http", "$rootScope", function ( $http, $rootScope ) {

    return {
        data: function ( start, end ) {
            return $http ({
                method: 'GET', url: '/api/get-videos/' + start + '/' + end
            }).then (function ( response ) {
                return response.data;
            });
        }
    };

} ]);


myApp.controller ('paginateController', [ '$scope', '$http', 'getDataService', function ( $scope, $http, getDataService ) {

    var result = 0, start = 0;
    var step = 5;
    $scope.left = function () {
        if ( result > 0 ){
            var oldResut = result;
            result = result + start - step;
            $scope.dataStore = getDataService.data (oldResut, result).then (function ( data ) {
                console.log (data);
                $scope.dataStore = data;
            });
            return result;
        }
    }
    $scope.right = function () {
        var oldResut = result;
        result = result + start + step;
        $scope.dataStore = getDataService.data (oldResut, result).then (function ( data ) {
            console.log (data);
            $scope.dataStore = data;
        });
        return result;
    }

} ]);


myApp.controller ('dataController', [ '$scope', '$http', 'getDataService', function ( $scope, $http, getDataService ) {

    getDataService.data (1, 5).then (function ( data ) {
        console.log (data);
        $scope.dataStore = data;
    })

} ]);

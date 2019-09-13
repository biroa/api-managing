var myApp = angular.module ('myApp', []);
myApp.run (function ( $rootScope ) {
    $rootScope.dataStore = {};
});
myApp.constant ('ITEM_PER_PAGE', 2);
myApp.factory ("getDataService", [ "$http", "ITEM_PER_PAGE", function ( $http, ITEM_PER_PAGE ) {

    return {
        data: function ( start, end ) {
            return $http ({
                method: 'GET', url: '/api/get-videos/' + start + '/' + ITEM_PER_PAGE
            }).then (function ( response ) {
                return response.data;
            });
        }
    };

} ]);


myApp.controller ('paginateController', [ '$rootScope', '$scope', '$http', 'getDataService', 'ITEM_PER_PAGE', function ( $rootScope, $scope, $http, getDataService, ITEM_PER_PAGE ) {

    var start = 0;
    $scope.left = function () {
        if ( start > 0 ){
            start = start - ITEM_PER_PAGE;
            $scope.dataStore = {};
            getDataService.data (start, ITEM_PER_PAGE).then (function ( data ) {
                $rootScope.dataStore = data;
            });
        }
    };
    $scope.right = function () {
        start = start + ITEM_PER_PAGE;
        $scope.dataStore = {};
        getDataService.data (start, ITEM_PER_PAGE).then (function ( data ) {
            $rootScope.dataStore = data;
        });
    };

} ]);


myApp.controller ('dataController', [ '$rootScope', '$scope', '$http', 'getDataService', 'ITEM_PER_PAGE', function ( $rootScope, $scope, $http, getDataService, ITEM_PER_PAGE ) {

    getDataService.data (0, ITEM_PER_PAGE).then (function ( data ) {
        $rootScope.dataStore = data;
    })

} ]);

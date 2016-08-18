angular.module('PouchCtrl', [])
.controller('PouchController', function($scope, pouchDB) {

  $scope.sum = function() {
    $scope.z = $scope.x + $scope.y;
  };

    var db = new PouchDB('address1');

    $scope.docs = [];

    $scope.post = function () {
      $scope.put();
      generateRand();
    }

    $scope.put = function () {
      var addr = {
        _id: $scope.id
      }
      db.put(addr, function callback(err, result) {
            if (!err) {
                $scope.docs.push(result);
                $scope.$apply();
            }
        });
    }

    generateRand = function() {
      $scope.id = (Math.ceil(Math.random() * 5000)).toString();
    };

    loadAllDocs = function(){
      db.allDocs()
        .then(function(res)
        {
          $scope.docs = res.rows;
          $scope.$apply();
        });
    }

    generateRand();
    loadAllDocs();
});

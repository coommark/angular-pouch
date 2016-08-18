angular.module('OthersCtrl', []).controller('OthersController', function($scope) {

  //Find common characters
  $scope.resultString = "";
  $scope.stringA = "Matmoh";
  $scope.stringB = "Solat";

  function find_chars(as, bs) {
      var a = as.split('');
      var b = bs.split('');
      var d = {};
      var results = [];
      for (var i = 0; i < b.length; i++) {
          d[b[i]] = true;
      }
      for (var j = 0; j < a.length; j++) {
          if (d[a[j]])
              results.push(a[j]);
      }
      return results.join("");
  }

  $scope.stringChars = function(){
    $scope.resultString = find_chars($scope.stringA, $scope.stringB);
  }

  //Array compacting
  $scope.arrToCompact = [1, 3, 7, 7, 8, 9, 9, 9, 10,];
  $scope.compacted = [];

  compactArray =  function(arr) {
    var result = [];
    var r = [];
    var len = arr.length - 1;
    if (len >= 0) {
        for (var i = 0;i < len; i++) {
            if (arr[i] !== arr[i+1]) {
                result.push (arr[i]);
                r.push(arr[i]);
            }
        }
        result.push (arr[len]);
    };
     return r;
  };

  $scope.compact = function(){
    var x = $scope.arrToCompact.toString();
    var array = x.split(',');
    for (a in array ) {
        array[a] = parseInt(array[a], 10);
    }
    $scope.compacted = compactArray(array);
  }

    //Rotate Array
    $scope.arrToRotate = [1, 2, 3, 4, 5, 6];
    $scope.rotateN = 2;
    $scope.rotatedResult = [];

    reverseArr = function (arr, left, right) {
        while (left < right) {
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        return arr;
    }

    rotate = function (arr, k) {
        var l = arr.length;
        arr = reverseArr(arr, 0, l - 1);
        arr = reverseArr(arr, 0, k - 1);
        arr = reverseArr(arr, k, l - 1);
        console.log(arr);
        return arr;
    }
    $scope.rotateArr = function(){
      $scope.rotatedResult = rotate($scope.arrToRotate, $scope.rotateN);
    }

    //LCM
    $scope.arrForLcm = [100,90,80,7];
    $scope.arrForLcmResult = "";
    array_lcm = function (arr) {
        if (toString.call(arr) !== "[object Array]")
            return  false;
            var r1 = 0, r2 = 0;
            var l = arr.length;
            for(i=0;i<l;i++) {
                r1 = arr[i] % arr[i + 1];
                if(r1 === 0) {
                    arr[i + 1] = (arr[i] * arr[i+1]) / arr[i + 1];
                }
                else {
                    r2 = arr[i + 1] % r1;
                    if(r2 === 0) {
                        arr[i + 1] = (arr[i] * arr[i + 1]) / r1;
                    }
                    else {
                        arr[i+1] = (arr[i] * arr[i + 1]) / r2;
                    }
                }
            }
        return arr[l - 1];
    }

    $scope.findLcm = function(){
      var k = array_lcm($scope.arrForLcm);
      console.log(k);
      $scope.arrForLcmResult = k;
    }

});

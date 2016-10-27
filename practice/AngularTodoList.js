var app = angular.module('myApp', []);


app.controller('myController2', ['$scope','listEdit',function($scope,listEdit) {

    var tempRemoveList = [];

    $scope.list  = listEdit.currentList();
    console.log($scope.list);

    $scope.addToList = function() {
        $scope.feedback = listEdit.add($scope.todo);

        console.log($scope.feedback);//This line to be removed
    }



    $scope.selectFromList= function(index) {
        if(tempRemoveList.indexOf(index)<0) {

            tempRemoveList.push(index);

        }
        else{

            tempRemoveList.splice[index,1]

        }


        console.log(tempRemoveList)//This line to be removed
    }

    console.log(tempRemoveList.length)
    $scope.RemoveFromList = function() {

        for(var i=0; i<tempRemoveList.length; i++) {
            listEdit.remove(tempRemoveList[i])
        }
    }

}])

app.factory('listEdit', function(){
        var _list=[];
    return {
        add: function (item) {
            if(_list.indexOf(item)<0) {
                _list.push(item);
                return item + ' is added';
            }
            return 'Item already exists'

        },
        count: function() {
            return _list.length;
        },
        currentList: function(){
            return _list;
        },
        remove: function (index) {
            var item = _list.splice(index, 1);
            return item + ' is removed';
        },

    }
})


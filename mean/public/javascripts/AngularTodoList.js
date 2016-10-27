var app = angular.module('myApp', []);
app.controller('myController1', ['$scope','listEdit',function($scope,listEdit) {
    $scope.list = [];

    listEdit.linkList($scope.list)

    $scope.addToList = function(){
        $scope.feedback = listEdit.add($scope.todo);
        console.log($scope.feedback);

        // $scope.count = listEdit.count();
        // console.log($scope.count);
        //
        // $scope.list = listEdit.currentList();
        // console.log($scope.list);
    }
}])

app.controller('myController2', ['$scope','listEdit',function($scope,listEdit) {

    $scope.getToDoList = function(){
        $scope.list  = listEdit.currentList();

        console.log($scope.list);

    }
    
    $scope.removeFromList= function(index) {
        listEdit.remove(index)
    }
}])

app.factory('listEdit', function(){
        var _list=[];
    return {
        add: function (item) {
            _list.push(item);
            return item + ' is added';
        },
        linkList: function (list) {
            _list = list;
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

app.directive('removeDirective',function(){

})
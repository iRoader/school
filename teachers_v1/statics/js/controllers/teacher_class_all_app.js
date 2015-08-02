
var app = angular.module("classApp", ['teacher.requestSvc']);

app.controller('classController', ['$scope', 'classes', function($scope, classes){

        $scope.classes = [
                        {"class_name": '三年级2班'},
                        {"class_name": '三年级3班'},
                        {"class_name": '三年级5班'}
        ];

	function _getData() {
                    classes.get(window.teacher).success(function (data, status) {
                        if (status == 200) {
                            $scope.classes = data.data.teacher_classes;
                        }
                    })
                }
    _getData();

    $scope.goDetails = function($event, name){
                    $event.preventDefault();
                    $window.location.href = "/teacher/class/" + name.id +"/detail/";
}
}]);
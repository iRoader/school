/**
 * User: KiRoader
 * Date: 15-7-2
 * Time: 下午9:00
 */
 var app = angular.module("scoreInputApp", ['teacher.requestSvc']);

 app.controller('scoreInputController', ['$scope', 'student', function($scope, student){

    $scope.items = [
                {"name": 'KiRoader'},
                {"name": 'KiRoader'},
                {"name": 'KiRoader'},
                {"name": 'KiRoader'},
                {"name": 'KiRoader'},
                {"name": 'KiRoader'},
                {"name": 'KiRoader'},
                {"name": 'KiRoader'}

        ];

 	function _getData() {
                    student.get(window.class_id).success(function (data, status) {
                        if (status == 200) {
                            $scope.items = data.data.students;
                        }
                    })
                }
    _getData();

    $scope.goDetails = function($event, item){
                    $event.preventDefault();
                    $window.location.href = "去往学生详情页";
 }
 }]);
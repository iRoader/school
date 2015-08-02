/**
 * User: KiRoader
 * Date: 15-6-29
 * Time: 下午15:00
 */
 var app = angular.module("scoreInputApp", ['teacher.requestSvc']);

 app.controller('scoreInputController', ['$scope', '$window', 'student_grade', function($scope, $window, student_grade){

    $scope.students = [
                {"username": '小明', "grade": '90'},
                {"username": '小花', "grade": '80'},
                {"username": 'KiRoader', "grade": '97'},
                {"username": 'igoda', "grade": '60'},
                {"username": '小明', "grade": '55'},
                {"username": '小明', "grade": '77'},
                {"username": '小明', "grade": '70'}
            ];


 	function _getData() {
                    student_grade.get(window.school_class).success(function(data, status) {
                        if (status == 200) {
                            $scope.students = data.data.students;
                        }
                    })
                }
    _getData();


    $scope.record = function($event){
        $event.preventDefault();

        _params = {
            term: window.term,
            data: $scope.students,
        };

        student_grade.post(_params).success(function (data, status) {
                            if (status == 200) {
                                var term = data.data.term;
                                $window.location.href = '/teacher/record/grade/success/?term=' + term;
                            }
                        });
    };

 	
 }]);
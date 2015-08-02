/**
 * User: KiRoader
 * Date: 15-6-29
 * Time: 下午15:00
 */
 var app = angular.module("recordGrade", ['teacher.requestSvc']);

 app.controller('recordController', ['$scope', '$window', function($scope, $window){


 	$scope.record = function ($event) {
        $event.preventDefault();

        $window.location.href = '/teacher/record/grade/?school_class=' + window.school_class + '&term=' + window.term;
    };



 }]);
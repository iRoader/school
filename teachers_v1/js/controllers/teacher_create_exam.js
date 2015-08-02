// var app = angular.module("courseApp", []);

// app.controller("courseCtrl", function($scope){
//     $scope.exam = [
//     			{"name": '三年级2班'},
//     			{"name": '三年级3班'},
//     			{"name": '三年级4班'},
//     			{"name": '三年级5班'}
//     ];
	            
var app = angular.module('components', ['teacher.requestSvc']);

app.controller('ngSelect', ['$scope', 'classes', '$window', function($scope, classes, $window) {

    $scope.termData = {};
    
	var examType = $scope.examType = {};
	examType.optionsData = [
				{id : 0, name : "平时测验"},
				{id : 1, name : "期中考试"},
				{id : 2, name : "期末考试"}
	];

	$scope.typeChange = function(){
		$scope.typeId = examType.selectTypeVal;
	}		

	var examClass = $scope.examClass = {};
	examClass.optionsData = [
				{id : 11, class_name : "三年级2班"},
				{id : 12, class_name : "三年级4班"},
				{id : 13, class_name : "三年级5班"}
	];
	$scope.classChange = function(){
		$scope.classId = examClass.selectClassVal;
	}

    function _getData() {
                    classes.get(window.teacher).success(function (data, status) {
                        if (status == 200) {
                            examClass.optionsData = data.data.teacher_classes;
                        }
                    })
                }
    _getData();

    $scope.addTerm = function($event){
        $event.preventDefault();

        _params = {
        school_class: $scope.termData.class,
        type: $scope.termData.type,
        name: $scope.termData.name,
        teacher: window.teacher,
        };

        classes.post(_params).success(function (data, status) {
                        if (status == 200) {
                            var school_class = data.data.school_class;
                            var term = data.data.term;
                            $window.location.href = "/teacher/create/term/success/?school_class=" + school_class +"&term=" + term;
                  }
             });
    };

}]);

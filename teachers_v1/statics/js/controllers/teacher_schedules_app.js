/**
 * User: KiRoader
 * Date: 15-6-29
 * Time: 下午14:19
 */
var app = angular.module("teacherSchduleApp", []);

app.controller('schduleController', ['$scope', '$window', function($scope){

	$scope.schedules = [
					{"day": '星期一', "clas": '三年级五班', "time": '第一节课'},
					{"day": '星期二', "clas": '三年级五班', "time": '第四节课'},
					{"day": '星期三', "clas": '三年级五班', "time": '第七节课'},
					{"day": '星期四', "clas": '三年级五班', "time": '第三节课'},
					{"day": '星期五', "clas": '三年级五班', "time": '第二节课'},
					{"day": '星期六', "clas": '三年级五班', "time": '第五节课'},
					{"day": '星期日', "clas": '三年级五班', "time": '今天休息'}
		];

 	}]);


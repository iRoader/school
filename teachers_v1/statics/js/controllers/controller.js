var app = angular.module("courseApp", []);

app.controller('courseCtrl', function($scope){

	$scope.schedules = [
					{"day": '星期一', "clas": '三年级五班', "time": '第一节课'},
					{"day": '星期二', "clas": '三年级五班', "time": '第四节课'},
					{"day": '星期三', "clas": '三年级五班', "time": '第七节课'},
					{"day": '星期四', "clas": '三年级五班', "time": '第三节课'},
					{"day": '星期五', "clas": '三年级五班', "time": '第二节课'},
					{"day": '星期六', "clas": '三年级五班', "time": '第五节课'},
					{"day": '星期日', "clas": '三年级五班', "time": '今天休息'}
		];

	$scope.subjects = [
					{"subject": '计算机', "name": '第一次模拟考试', "time": '2015-9-8'},
					{"subject": '计算机', "name": '第二次模拟考试', "time": '2015-10-8'},
					{"subject": '计算机', "name": '期中考试', "time": '2015-11-8'},
					{"subject": '计算机', "name": '期末考试', "time": '2015-12-8'},
		];

	$scope.messages = [
					{"where": '学校', "time": '6月30号', "message": '明天下午三点理工一129开会'},
					{"where": '家长', "time": '6月27号', "message": '明天下午三点理工一129开会'},
					{"where": '学校', "time": '6月24号', "message": '明天下午三点理工一129开会'},
					{"where": '家长', "time": '6月21号', "message": '明天下午三点理工一129开会'},
	];

	$scope.classes = [
					{"which": '三年级2班'},
					{"which": '三年级3班'},
					{"which": '三年级5班'},
	];

	$scope.names = [
					{"name": 'KiRoader'},
					{"name": 'igoda'},
					{"name": '小明'},
					{"name": '小花'},
					{"name": '张三'},
					{"name": '李四'},
					{"name": '王二麻'}
	];

	$scope.tests = [
					{"name": '平时测验', "time": '2015-9-8', "subject": '语文'},
					{"name": '期中考试', "time": '2015-9-8', "subject": '语文'},
					{"name": '期末考试', "time": '2015-9-8', "subject": '语文'}
	];

	$scope.names = [
				{"name": '小明', "score": '90'},
				{"name": '小明', "score": '80'},
				{"name": '小明', "score": '97'},
				{"name": '小明', "score": '90'},
				{"name": '小明', "score": '90'},
				{"name": '小明', "score": '90'},
				{"name": '小明', "score": '90'}
			];

	
});
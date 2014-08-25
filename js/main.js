'use strict'
var app = angular.module('myApp',['ngResource']);

app.controller('TwitterController',['$scope','$resource', function($scope, $resource){
	$scope.twitter = $resource('https://api.twitter.com/1.1/search/:action',
		{action: 'tweets.json', q:'angularjs', callback:'JSON_CALLBACK'},
		{get:{method: 'JSONP'}});

	$scope.doSearch = function(){
		$scope.twitterResult = $scope.twitter.get({q: $scope.searchTerm});
	}
	
}]);

app.controller('TodoController',function($scope){
	$scope.todos = [
		{text: 'Get Start with angular', done: false},
		{text: 'Complete it', done: false}
	]
	$scope.getTotalTodos = function(){
		return $scope.todos.length;
	};

	$scope.clearCompleted = function(){
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;
		})
	};

	$scope.addTodo = function(){
		$scope.todos.push({text:$scope.formTodoText, done:false})
		$scope.formTodoText = ''
	};
});

app.controller('MyController',function($scope){
	$scope.person = {
		name: "rojesh"
	};
});


var app=angular.module("musicPlay",["ui.router"])
		app.config([
		    "$stateProvider",
		    "$urlRouterProvider",
		    function($stateProvider,$urlRouterProvider){
		        $stateProvider.state("personal",{
		            url:"/personal",
		           templateUrl:"./view/personal.html"
		        }).state("net_radio",{
		            url:"/net_radio",
		           templateUrl:"./view/net_radio.html"
		        }).state("local_music",{
		            url:"/local_music",
		           templateUrl:"./view/local_music.html"
		        })
		        $urlRouterProvider.otherwise("local_music");
		    }])
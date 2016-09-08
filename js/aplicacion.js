var app = angular.module("myApp",['ui.router']);

app.config( function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state(
      "inicio", {
        url:"/inicio",
        templateUrl:"inicio.html",
        controller:"controlInicio"
      }
      )
    .state(
      "persona", {
        url:"/persona",
        abstract: true,
        templateUrl:"abstractPersona.html",
        controller:"controlPersona"
      }
      )
    .state(
      "persona.menu", {
        url:"/menu",
        views:{
          'contenido':{
            templateUrl:"personaMenu.html",
            controller:"controlPersonaMenu"
          }
        }
      }
      )
    .state(
      "persona.alta", {
        url:"/alta",
        views:{
          'contenido':{
            templateUrl:"personaAlta.html",
            controller:"controlPersonaAlta"
          }
        }
      }
      )
    $urlRouterProvider.otherwise('/inicio');
});

app.controller("controlInicio", function($scope){

});

app.controller("controlPersona", function($scope){

});

app.controller("controlPersonaMenu", function($scope, $state){
  $scope.irAlta = function(){
    $state.go('persona.alta');
  };
});

app.controller("controlPersonaAlta", function($scope){

});
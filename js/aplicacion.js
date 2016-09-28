var app = angular.module("myApp",['ui.router', 'angularFileUpload', 'satellizer']);

app.config( function($stateProvider, $urlRouterProvider, $authProvider){


  $authProvider.loginUrl="ABM_AngularJs_PHP_persona/PHP/server/jwt/php/auth.php";
  $authProvider.tokenName="myToken";
  $authProvider.tokenPrefix="myApp";
  $authProvider.authHeader="data";
  
  /*$authProvider.github({
  url: '/auth/github',
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  redirectUri: window.location.origin,
  optionalUrlParams: ['scope'],
  scope: ['user:email'],
  scopeDelimiter: ' ',
  oauthType: '2.0',
  popupOptions: { width: 1020, height: 618 }
  });*/
  
  $authProvider.github({
      clientId: '21e3c9d7b7e0f1fbde3a'
    });

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
      "persona.grilla", {
        url:"/grilla",
        views:{
          'contenido':{
            templateUrl:"personaGrilla.html",
            controller:"controlPersonaGrilla"
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
    .state(
      "juego", {
        url:"/juego",
        abstract: true,
        templateUrl:"abstractJuego.html",
        controller:"controlJuego"
      }
      )
    .state(
      "juego.menu", {
        url:"/menu",
        views:{
          'contenido':{
            templateUrl:"juegoMenu.html",
            controller:"controlJuegoMenu"
          }
        }
      }
      )
    .state(
      "juego.ejercicio1", {
        url:"/ejercicio1",
        views:{
          'contenido':{
            templateUrl:"juegoEjercicio1.html",
            controller:"controlJuegoEjercicio1"
          }
        }
      }
      )
    .state(
      "juego.ejercicio2", {
        url:"/ejercicio2",
        views:{
          'contenido':{
            templateUrl:"juegoEjercicio2.html",
            controller:"controlJuegoEjercicio2"
          }
        }
      }
      )
    .state(
      "juego.ejercicio3", {
        url:"/ejercicio3",
        views:{
          'contenido':{
            templateUrl:"juegoEjercicio3.html",
            controller:"controlJuegoEjercicio3"
          }
        }
      }
      )
    .state(
      "juego.ejercicio4", {
        url:"/ejercicio4",
        views:{
          'contenido':{
            templateUrl:"juegoEjercicio4.html",
            controller:"controlJuegoEjercicio4"
          }
        }
      }
      )
    .state(
      "juego.ejercicio5", {
        url:"/ejercicio5",
        views:{
          'contenido':{
            templateUrl:"juegoEjercicio5.html",
            controller:"controlJuegoEjercicio5"
          }
        }
      }
      )
    .state(
      "juego.ejercicio6", {
        url:"/ejercicio6",
        views:{
          'contenido':{
            templateUrl:"juegoEjercicio6.html",
            controller:"controlJuegoEjercicio6"
          }
        }
      }
      )
    .state(
      "juego.ejercicio7", {
        url:"/ejercicio7",
        views:{
          'contenido':{
            templateUrl:"juegoEjercicio7.html",
            controller:"controlJuegoEjercicio7"
          }
        }
      }
      )
    .state(
      "juego.ejercicio8", {
        url:"/ejercicio8",
        views:{
          'contenido':{
            templateUrl:"juegoEjercicio8.html",
            controller:"controlJuegoEjercicio8"
          }
        }
      }
      )
    .state(
      "juego.ejercicio9", {
        url:"/ejercicio9",
        views:{
          'contenido':{
            templateUrl:"juegoEjercicio9.html",
            controller:"controlJuegoEjercicio9"
          }
        }
      }
      )
    .state(
      "juego.ejercicio10", {
        url:"/ejercicio10",
        views:{
          'contenido':{
            templateUrl:"juegoEjercicio10.html",
            controller:"controlJuegoEjercicio10"
          }
        }
      }
      )
    .state(
      "juego.ejercicio11", {
        url:"/ejercicio11",
        views:{
          'contenido':{
            templateUrl:"juegoEjercicio11.html",
            controller:"controlJuegoEjercicio11"
          }
        }
      }
      )
    .state(
      "juego.ejercicio12", {
        url:"/ejercicio12",
        views:{
          'contenido':{
            templateUrl:"juegoEjercicio12.html",
            controller:"controlJuegoEjercicio12"
          }
        }
      }
      )
    .state(
      "juego.ejercicio13", {
        url:"/ejercicio13",
        views:{
          'contenido':{
            templateUrl:"juegoEjercicio13.html",
            controller:"controlJuegoEjercicio13"
          }
        }
      }
      )
    .state(
      "persona.login", {
        url:"/login",
        views:{
          'contenido':{
            templateUrl:"login.html",
            controller:"controlLogin"
          }
        }
      }
      )
    .state(
      "persona.register", {
        url:"/register",
        views:{
          'contenido':{
            templateUrl:"register.html",
            controller:"controlRegister"
          }
        }
      }
      );
    $urlRouterProvider.otherwise('/inicio');
});
var app = angular.module("myApp",['ui.router', 'angularFileUpload']);

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
      );
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

app.controller("controlPersonaAlta", function($scope, FileUploader){

  $scope.uploader = new FileUploader({url: 'PHP/upload.php'});
  $scope.uploader.queueLimit = 1; // indico cuantos archivos permito cargar
            
      /* Si quiero restringir los archivos a imagenes añado este filtro */
      $scope.uploader.filters.push({
              name: 'imageFilter',
              fn: function(item, options) {
                  var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                  return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
              }
          });

          /** funcion para mi boton cargar si quiero agregar funcionalidad, 
           de lo contrario uso el item.upload() en la vista **/
          $scope.cargar = function(){
            /** llamo a la funcion uploadAll para cargar toda la cola de archivos **/
            $scope.uploader.uploadAll();
            /** agrego mi funcionalidad **/

          }
      /***********************************************
      *  Funciones callbacks que nos dan informacion *
      *  en el proceso de carga de archivos          *
      ***********************************************/

      // $scope.uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
      //     console.info('onWhenAddingFileFailed', item, filter, options);
      // };
    //       $scope.uploader.onAfterAddingFile = function(fileItem) {
    //           console.info('onAfterAddingFile', fileItem);
    //       };
    //       $scope.uploader.onAfterAddingAll = function(addedFileItems) {
    //           console.info('onAfterAddingAll', addedFileItems);
    //       };
    //       $scope.uploader.onBeforeUploadItem = function(item) {
    //           console.info('onBeforeUploadItem', item);
    //       };
    //       $scope.uploader.onProgressItem = function(fileItem, progress) {
    //           console.info('onProgressItem', fileItem, progress);
    //       };
    //       $scope.uploader.onProgressAll = function(progress) {
    //           console.info('onProgressAll', progress);
    //       };
    //       $scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {
    //           console.info('onSuccessItem', fileItem, response, status, headers);
    //       };
          $scope.uploader.onErrorItem = function(fileItem, response, status, headers) {
              console.info('onErrorItem', fileItem, response, status, headers);
          };
    //       $scope.uploader.onCancelItem = function(fileItem, response, status, headers) {
    //           console.info('onCancelItem', fileItem, response, status, headers);
    //       };
    //       $scope.uploader.onCompleteItem = function(fileItem, response, status, headers) {
    //           console.info('onCompleteItem', fileItem, response, status, headers);
    //       };
          $scope.uploader.onCompleteAll = function() {
              console.info('Se cargo con exito');
              console.info('uploader', $scope.uploader);
          };


});

app.controller("controlPersonaGrilla", function($scope, $http){
    $scope.DatoTest="**grilla**";
  
 /* $http.get('PHP/nexo.php', { params: {accion :"traer"}})
  .then(function(respuesta) {       

         $scope.ListadoPersonas = respuesta.data.listado;
         console.log(respuesta.data);

    },function errorCallback(response) {
         $scope.ListadoPersonas= [];
        console.log( response);
        
   });*/

$http.get('http://www.mocky.io/v2/57c8229b120000f903e76996')
.then( function(datos){
  $scope.listadoDeDatos = datos.data;
  console.log(datos.data);
}, function(error){
  console.info("error: ", error);
  $scope.listadoDeDatos = [];
});


  /*

          https://docs.angularjs.org/api/ng/service/$http

          the response object has these properties:

        data – {string|Object} – The response body transformed with the transform functions.
        status – {number} – HTTP status code of the response.
        headers – {function([headerName])} – Header getter function.
        config – {Object} – The configuration object that was used to generate the request.
        statusText – {string} – HTTP status text of the response.
            A response status code between 200 and 299 is considered a success
             status and will result in the success callback being called. 
             Note that if the response is a redirect, XMLHttpRequest will 
             transparently follow it, meaning that 
             the error callback will not be called for such responses.
   */
  $scope.Borrar=function(persona){
    console.log("borrar"+persona);



/*$http.post("PHP/nexo.php",{accion :"borrar",persona:persona},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
.success(function(data, status, headers, config) {
    console.log("bien"+data);
  }).error(function(data, status, headers, config) {
     console.log("mal"+data);
});*/


/*
     $http.post('PHP/nexo.php', 
      headers: 'Content-Type': 'application/x-www-form-urlencoded',
      params: {accion :"borrar",persona:persona})
    .then(function(respuesta) {       
         //aca se ejetuca si retorno sin errores        
         console.log(respuesta.data);

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });

*/
  }




  $scope.Modificar=function(id){
    
    console.log("Modificar"+id);
  }

});

app.controller("controlJuego", function($scope){

});

app.controller("controlJuegoMenu", function($scope){

});

app.controller("controlJuegoEjercicio1", function($scope){

});

app.controller("controlJuegoEjercicio2", function($scope){

});

app.controller("controlJuegoEjercicio3", function($scope){

});

app.controller("controlJuegoEjercicio4", function($scope){

});

app.controller("controlJuegoEjercicio5", function($scope){

});

app.controller("controlJuegoEjercicio6", function($scope){

});

app.controller("controlJuegoEjercicio7", function($scope){

});

app.controller("controlJuegoEjercicio8", function($scope){

});

app.controller("controlJuegoEjercicio9", function($scope){

});

app.controller("controlJuegoEjercicio10", function($scope){

});

app.controller("controlJuegoEjercicio11", function($scope){

});

app.controller("controlJuegoEjercicio12", function($scope){

});

app.controller("controlJuegoEjercicio13", function($scope){

});
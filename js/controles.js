app.controller("controlInicio", function($scope, $auth, $state){
  $scope.auth = $auth.isAuthenticated();

  $scope.logout = function(){
    $auth.logout();
    console.log($auth.isAuthenticated());
    $state.reload();
  }
});

app.controller("controlPersona", function($scope){

});

app.controller("controlPersonaMenu", function($scope, $state){
  $scope.irAlta = function(){
    $state.go('persona.alta');
  };
});

app.controller("controlPersonaAlta", function($scope, FileUploader, $auth, $state){

  if(!$auth.isAuthenticated()){
    $state.go('persona.login');
  }

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

app.controller("controlPersonaGrilla", function($scope, $http, $auth){
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
    if(!$auth.isAuthenticated()){
      alert("Usted no posee permisos");
    } else {
      console.log("borrar"+persona);
    }



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
    
    if(!$auth.isAuthenticated()){
      alert("Usted no posee permisos");
    } else {
      console.log("Modificar"+id);
    }
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

app.controller("controlLogin", function($scope, $auth, $state){

  console.log(window.location.origin);

  if($auth.isAuthenticated()){
    console.info("Logged: ", $auth.getPayload(), $auth.isAuthenticated());
  }else {
    console.info("No esta logueado: ", $auth.getPayload(), $auth.isAuthenticated());
  }


  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function(response) {
        console.log($auth.isAuthenticated());
      })
      .catch(function(response) {
        // Something went wrong.
      });
  };


  $scope.Ingresar = function(){

    var user = {usuario:$scope.persona.user, clave:$scope.persona.password};

    $auth.login(user)
    .then(function(respuesta){
       console.info("info respuesta", respuesta);


      if($auth.isAuthenticated()){
        console.info("Logged: ", $auth.getPayload(), $auth.isAuthenticated());
        $state.go('inicio');
      }else {
        console.info("No esta logueado: ", $auth.getPayload(), $auth.isAuthenticated());
      }
    },function(respuesta){
       console.error("Error Login", respueta);
    });
  }
  
  
});

app.controller("controlRegister", function($scope, $http){
    $scope.usuario = {};
    
    $scope.Registrar = function(){
        $http.post('PHP/nexo.php', {datos: {accion:"registrar", usuario: $scope.usuario}})
        .then(function(respuesta){
            console.log(respuesta.data);
        },
             function(respuesta){
            console.error(respuesta);
        });
    }
});
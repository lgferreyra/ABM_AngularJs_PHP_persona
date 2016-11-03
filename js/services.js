angular.module('myApp').service('personaService', function($http){

	//var url = "http://www.lgferreyra.esy.es/PersonaPHP/ws1";
	var url = "http://localhost:8080/ABM_AngularJs_PHP_persona/ws1";

	function success(data){
		console.info(data);
        return data.data;
	}

	function failure(error){
		console.error(error)
	}

	this.traerTodas = function(){
		return $http.get(url + "/personas")
      .then(success,failure);
	}

	this.insertar = function(persona){
		return $http.post(url + "/persona/" + JSON.stringify(persona))
		.then(success,failure);
	}

	this.borrar = function(id){
		return $http.delete(url + /persona/ + id)
		.then(success,failure);
	}

	this.trearUna = function(id){
		return $http.get(url + /persona/ + id)
		.then(success,failure);
	}

	this.modificar = function(persona){
		return $http.put(url + /persona/ + JSON.stringify(persona))
		.then(success,failure);
	}

});
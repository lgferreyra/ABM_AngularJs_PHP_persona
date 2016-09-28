<?php 
require_once"accesoDatos.php";
class Usuario {
	private $user;
	private $pass;

	public function getUser(){
		return $this->user;
	}

	public function setUser($user){
		$this->user = $user;
	}

	public function getPass(){
		return $this->pass;
	}

	public function setPass($pass){
		$this->pass = $pass;
	}

	public function __construct(){

	}

	public static function ValidarUsuario($user, $pass){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from usuario where username =:user and pass = :pass");
		$consulta->bindValue(':user', $user, PDO::PARAM_STR);
		$consulta->bindValue(':pass', $pass, PDO::PARAM_STR);
		$consulta->execute();
		if($consulta->rowCount()==1){
			return true;
		} else {
			return false;
		}
	}
}
 ?>
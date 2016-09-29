<?php
require_once"accesoDatos.php";
class Persona
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id;
  	public $dni;
  	public $sexo;
  	public $partido;
  	public $fecha;
  	public $foto;

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function GetId()
	{
		return $this->id;
	}
	public function GetDni()
	{
		return $this->dni;
	}
	public function GetSexo()
	{
		return $this->sexo;
	}
    public function GetPartido()
    {
        return $this->partido;
    }
    public function GetFecha()
    {
        return $this->fecha;
    }
    public function GetFoto()
    {
        return $this->foto;
    }

	public function SetId($valor)
	{
		$this->id = $valor;
	}
	public function SetDni($valor)
	{
		$this->dni = $valor;
	}
	public function SetSexo($valor)
	{
		$this->sexo = $valor;
	}
    public function SetPartido($valor)
    {
        $this->partido = $valor;
    }
    public function SetFecha($valor)
    {
        $this->fecha = $valor;
    }
    public function SetFoto($valor)
    {
        $this->foto = $valor;
    }
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	public function __construct($dni=NULL)
	{
		if($dni != NULL){
			$obj = Persona::TraerUnaPersona($id);
			
			$this->partido = $obj->partido;
			$this->sexo = $obj->sexo;
			$this->id = $id;
			$this->fecha = $obj->fecha;
            $this->dni = $obj->dni;
		}
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnaPersona($idParametro) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from persona where id =:id");
		$consulta->bindValue(':id', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$personaBuscada= $consulta->fetchObject('persona');
		return $personaBuscada;	
					
	}
	
	public static function TraerTodasLasPersonas()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from persona");
		$consulta->execute();			
		$arrPersonas= $consulta->fetchAll(PDO::FETCH_CLASS, "persona");	
		return $arrPersonas;
	}
	
	public static function BorrarPersona($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("delete from persona	WHERE id=:id");
		$consulta->bindValue(':id',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function ModificarPersona($persona)
	{
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("
            update persona 
            set
            dni=:dni,
            partido=:partido,
            sexo=:sexo,
            fecha=:fecha
            WHERE id=:id");
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        //$consulta =$objetoAccesoDato->RetornarConsulta("CALL ModificarPersona(:id,:nombre,:apellido,:foto)");
        $consulta->bindValue(':id',$persona->id, PDO::PARAM_INT);
        $consulta->bindValue(':dni', $persona->dni, PDO::PARAM_STR);
        $consulta->bindValue(':partido', $persona->partido, PDO::PARAM_STR);
        $consulta->bindValue(':sexo', $persona->sexo, PDO::PARAM_STR);
        $consulta->bindValue(':fecha', $persona->fecha, PDO::PARAM_STR);
        return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function InsertarPersona($persona)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into persona (dni,partido,sexo,fecha)values(:dni,:partido,:sexo,:fecha)");
        $consulta->bindValue(':dni', $persona->dni, PDO::PARAM_STR);
        $consulta->bindValue(':partido', $persona->partido, PDO::PARAM_STR);
        $consulta->bindValue(':sexo', $persona->sexo, PDO::PARAM_STR);
        $consulta->bindValue(':fecha', "29/09/2016", PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
}

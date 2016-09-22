<?php
include_once '../vendor/autoload.php';
use \Firebase\JWT\JWT;

$token["exp"] = time() + 10;
$key = "123456";

/**
 * IMPORTANT:
 * You must specify supported algorithms for your application. See
 * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40
 * for a list of spec-compliant algorithms.
 */
$jwt = JWT::encode($token, $key);
$myArray["myToken"] = $jwt;
echo json_encode($myArray);


?>
<?php
$name = "user";
$value = "\tEan";
setcookie($name, $value, time()+(84600*30),"/");
if(!isset($_COOKIE[$name])){
        
}
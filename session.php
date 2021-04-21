<?php
session_start();
array_push($_SESSION['tasks'],$_POST['tasks']);
//echo $_SESSION['tasks'][0];  
//for($i=0;$i<count($_SESSION['tasks']);$i++){
echo (json_encode( $_SESSION['tasks']));
//}
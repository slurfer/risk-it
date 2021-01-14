<?php 
if( isset( $_COOKIE['Verification'])){
     include("./sites/intro/intro.html");
}
else{
     include("./sites/not_verified.html");
}
?>

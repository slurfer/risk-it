<?php 
if( isset( $_COOKIE['Verification'])){
     include("./sites/game.html");
}
else{
     include("./sites/not_verified.html");
}
?>

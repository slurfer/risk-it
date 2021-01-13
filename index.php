/*<?php
    include("./sites/game.html");
?>*/


<?php 
if( isset( $_COOKIE['cookiename']  ) )
{
     var_dump($_COOKIE ); 
}
else
{
     echo 'no cookie for you!';
}
?> 
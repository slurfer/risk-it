<?php
$cookie_name = 'Verification';
$cookie_value = 'abcdefghijklmnopqrstuvwxyz';
setcookie($cookie_name, $cookie_value, time() + (86400 * 7), "/" );
?>
<html>
    <body>
        <h1>Potvrzeno. Kliknutím <a href='../../../index.php'>sem</a> se dostaneš do hry. Potvrzení platí 7 dní.</h1>
    </body>
</html>
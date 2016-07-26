<?php


    $A = $_POST["A"];
    $B = $_POST["B"];
    $D = $_POST["D"];

    switch ($D) {
case "1":
    $sum=$A+$B;
    break;
case "2":
    $sum=$A-$B;
    break;
case "3":
    $sum=$A*$B;
    break;
case "4":
    if ($B==0)
    $sum="Деление на ноль";
    else   $sum=$A/$B;
    break;
}

   echo $sum;


?>
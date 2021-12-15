<?php

$connect = mysqli_connect('localhost', 'root', '', 'iddly');

if (!$connect) {
    die('Error connect to DataBase');
}
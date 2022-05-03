<?php

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/db.php';
require __DIR__ . '/courses.php';

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

$log = new Logger('query_log');
$log->pushHandler(new StreamHandler('logs/query.log', Logger::DEBUG));

$db = new DB($log);
$courses = new Courses($db);

// $result = $courses->create_table('create table courses ( course text, author text, creation_date text);');
$result = $courses->create_course('High Performance PHP', 'Daniel Holmes', 'November');
$result = $courses->create_course('Java Fundamentals', 'Alex Bishop', 'January');
$result = $courses->create_course('CSS for Beginners', 'Luke', 'December');

$courses->show_courses();

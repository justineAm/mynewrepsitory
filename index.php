<?php
$task = $_POST['tasks'];
if ($task != "") {
    $datahandler = fopen("tasks.txt", "a+");
    fwrite($datahandler, $task . "\n");
}
$taskarray = [$task];
while (!feof($datahandler)) {
     fgets($datahandler);
    echo json_encode(array("tasks" => $taskarray));
}
fclose($datahandler);



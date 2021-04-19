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


// if (isset($_POST["submit"])) {
//     if (file_exists('tasks.txt')) {
//         $file = fopen('tasks.txt', 'r');
//         $contents = fread($file, filesize('tasks.txt')); //read file
//         echo "<pre><h1>$contents</h1></pre>"; //printing data of file
//         echo $contents;
//         fclose($file);

//     }
// }

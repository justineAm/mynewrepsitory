<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            font-family: 'Poppins', sans-serif;
        }
           a {  
            display: block;  
            margin: 0;  
            padding: 5px 10px 5px 20px;  
            color: #777777;  
            text-decoration: none;  
            border-bottom: 1px dotted #666666;  
            background: url("orange_file.gif") no-repeat 10px center #F9F9F9;  
            outline: none;  
        }  
        img{
            height: 101%;
            width: 101%;
        }

        ul {  
            margin: 0;  
            padding: 0;  
            list-style: none;  
        }  
        li {  
            margin: 0 0 3px 0;  
            padding: 0;  
            display: list-item;  
            text-align: -webkit-match-parent;  
        }  
        #container {  
            display: block;  
            width: 700px;  
            padding: 25px;  
            background-color: black;  
            margin-bottom: 30px;  
        
        }
        #card1{
            box-shadow: 1px 2px 3px 4px rgb(17, 134, 119);
        }
    </style>
</head>
<body>
<button ><a href="enterTask.html">Add  Task now</a></button>
    <?php
        session_start();
        $_SESSION['tasks'] = [];
    
    ?>
</body>
</html>
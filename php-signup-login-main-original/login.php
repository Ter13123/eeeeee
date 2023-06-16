<?php

$is_invalid = false;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $mysqli = require __DIR__ . "/database.php";
    
    $sql = sprintf("SELECT * FROM user
                    WHERE email = '%s'",
                   $mysqli->real_escape_string($_POST["email"]));
    
    $result = $mysqli->query($sql);
    
    $user = $result->fetch_assoc();
    
    if ($user) {
        
        if (password_verify($_POST["password"], $user["password_hash"])) {
            
            session_start();
            
            session_regenerate_id();
            
            $_SESSION["user_id"] = $user["id"];
            
            header("Location: index.php");
            exit;
        }
    }
    
    $is_invalid = true;
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <meta charset="UTF-8">
    <style>
        body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-image: url("../template/image/bg.jpg");
        background-size: cover;
        background-position: center;
        }

        .container {
        max-width: 400px;
        margin: 0 auto;
        margin-top: -30px;
        padding: 20px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        background-color: white;
        }

        h2 {
        text-align: center;
        }

        h3 {
        text-align: center; 
        }

        .form-group {
        margin-bottom: 10px;
        }

        label {
        display: block;
        margin-bottom: 5px;
        color: rgb(132 44 221);
        }

        input[type="text"],
        input[type="password"],
        input[type="email"],
        select {
        width: 100%;
        height: 50px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 14px;
        box-sizing: border-box;
        font-size: 20px;
        }

        .btn {
        background-color: #4CAF50;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        }

        .btn-register {
            display: inline-block;
            background: rgb(132 44 221);
            padding: 10px 10px;
            border: none;
            border-radius: 8px;
            color: rgb(253, 253, 253);
            border: 3px solid rgb(122, 29, 215);
            background-image: linear-gradient(to right, transparent 50%, rgb(132 44 221) 50%);
            background-size: 200%;
            text-align: center;
            align-items: center;
            margin-left: 50px;
            margin-top: 10px;
            width: 300px;
            height: 50px;
            font-size: 20px;
        }

        .btn-login:hover,
        .btn-register:hover {
        opacity: 0.8;
        background-color: rgb(99, 0, 198);
        color: white;
        }

            .image {
            text-align: center;
            z-index: 2;
        }

        .image img {
            display: inline-block;
            margin: 0 auto;
        }

        .background-image {
            background-image: url('../template/image/bg.jpg');
            background-size: cover;
            background-position: center;
        }
  </style>
</head>
<body>
<div class="container">
    <?php if ($is_invalid): ?>
        <em>Invalid login</em>
    <?php endif; ?>
    
    <form method="post">
        <label for="email">email</label>
        <input type="email" name="email" id="email"
               value="<?= htmlspecialchars($_POST["email"] ?? "") ?>">
        
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
        
        <button>Log in</button>
    </form>
</div>    
</body>
</html>









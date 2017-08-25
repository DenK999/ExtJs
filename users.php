<?php

    $connectionString = "pgsql:host='localhost'; dbname='test_db'";
    $connection = new \PDO($connectionString, 'postgres', 'denys');

    $res = $connection->prepare('SELECT * FROM users ORDER BY id ASC LIMIT :count');
    $res->bindValue(':count', 300);
    $res->execute();

    $user = [];

    foreach ($res as $key => $row) {

        $user[$key][name] = $row['name'];
        $user[$key][surname] = $row['surname'];
        $user[$key][age] = $row['age'];
        $user[$key][level] = $row['level'];
        $user[$key][parent_id] = $row['parent_id'];
    }
    echo "{ \"users\": " . json_encode($user) . "}";
?>
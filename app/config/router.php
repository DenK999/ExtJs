<?php

$router = $di->getRouter();

$router->add(
        '/index/book/([0-9]*)',
        [
            'controller' => 'index',
            'action'     => 'book',
            'countRow'       => 1            
        ]);

$router->add(
        'index/delete/{id}',
        "Index::delete");

$router->handle();

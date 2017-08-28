<?php

$router = $di->getRouter();

$router->add(
        '/index/test/([0-9]*)',
        [
            'controller' => 'index',
            'action'     => 'test',
            'count'       => 1            
        ]);

$router->add(
        'index/delete/{id}',
        "Index::delete");

$router->handle();

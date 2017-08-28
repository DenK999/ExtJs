<?php

use \Phalcon\Mvc\Model;

class User extends Model {

    /**
     * Id for user
     * @var int 
     */
    public $id;

    /**
     * Name for user
     * @var string 
     */
    public $name;

    /**
     * Surname for user
     * @var string 
     */
    public $surname;

    /**
     * Age for user
     * @var int 
     */
    public $age;

    /**
     *
     * @var int 
     */
    public $level;

    /**
     *
     * @var int 
     */
    public $parent_id;

    /**
     * 
     */
    public function initialize() {
        $this->setSource("users");
    }
}

<?php

use \Phalcon\Mvc\Model;

class Book extends Model {

    /**
     * Id for book
     * @var int 
     */
    public $id;

    /**
     * Title for book
     * @var string 
     */
    public $title;

    /**
     * Author for book
     * @var string 
     */
    public $author;

    /**
     * Price for book
     * @var int 
     */
    public $price;

    /**
     *Year for book
     * @var int 
     */
    public $year;

    /**
     *Rating for book
     * @var int 
     */
    public $rating;

    /**
     * 
     */
    public function initialize() {
        $this->setSource("books");
    }
    
    public function getSequenceName()
    {
        return "book_ids";
    }
}

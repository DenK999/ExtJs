<?php

class IndexController extends ControllerBase {

    public function indexAction() {
        
    }

    public function testAction() {

        $count = (int) $this->dispatcher->getParam("count");

        $count = $count ? $count : 10;

        $this->view->disable();

        $response = new \Phalcon\Http\Response();

        $response->setContent(json_encode(Book::find(['order' => "id",
                            'limit' => $count])));
        return $response;
    }

    public function deleteAction($id) {
        $book = Book::findFirst($id);
        if ($book !== false) {
            if ($book->delete() === false) {
                return "User with title: " . $book->title . "don\'t delete";
            } else {
                return "User with id: " . $book->title . " deleted";
            }
        }
    }

    public function saveAction() {

        $bookData = (array) json_decode($_POST['bookData']);
        if ($bookData['id'] == "") {
            return $this->createBook($bookData);
        } else {
            return $this->updateBook($bookData);
        }
    }

    public function updateBook($bookData) {
        
        try {
            $book = Book::findFirst($bookData['id']);
            if ($book !== false) {
                foreach ($bookData as $key => $value) {
                    $book->$key = $bookData[$key];
                }
                $book->update();
                return "Book with title: " . $book->title . " updating";
            } else {
                return "Book with title: " . $book->title . " don\'t updating";
            }
        } catch (Exception $ex) {
            return "Book don`t update";
        }
    }

    public function createBook($bookData) {

        try {
            $book = new Book();
            $bookData = (array) json_decode($_POST['bookData']);
            foreach ($bookData as $key => $value) {
                $book->$key = $bookData[$key];
            }
            $book->create();
            return "Book title: " . $book->title . " created";
        } catch (Exception $ex) {

            return "Book don`t create";
        }
    }

}

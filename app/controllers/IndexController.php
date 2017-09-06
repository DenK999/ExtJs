<?php

use \Phalcon\Http\Response;

class IndexController extends ControllerBase {

    public function indexAction() {
        
    }

    public function bookAction() {

        $request = $_SERVER['REQUEST_METHOD'];
        $input = json_decode(file_get_contents('php://input'), true);

        switch ($request) {
            case 'GET':
                return $this->showBook();
                break;
            case 'PUT':
                return $this->updateBook($input);
                break;
            case 'POST':
                return $this->createBook($input);
                break;
            case 'DELETE':
                return $this->deleteBook($input);
                break;
        }
    }

    public function showBook() {
        $count = (int) $this->dispatcher->getParam("countRow");
        $count = $count ? $count : 10;
        $this->view->disable();

        $response = new Response();
        $response->setContent(json_encode(Book::find(['order' => "id",
                            'limit' => $count])));
        return $response;
    }

    public function deleteBook($input) {
        $book = Book::findFirst($input['id']);
        if ($book !== false) {
            if ($book->delete() === false) {
                return json_encode("Book with title: " . $book->title . "don\'t delete");
            } else {
                return json_encode("Book with title: " . $book->title . " deleted");
            }
        }
    }

    public function updateBook($bookData) {

        try {
            $book = Book::findFirst($bookData['id']);
            if ($book !== false) {
                $this->setBookAttributes($book, $bookData);
                $book->update();
                return json_encode("Book with title: " . $book->title . " updating");
            } else {
                return json_encode("Book with title: " . $book->title . " don\'t updating");
            }
        } catch (Exception $ex) {
            return json_encode("Book don`t update");
        }
    }

    public function createBook($bookData) {
        array_shift($bookData);
        try {
            $book = new Book();
            $this->setBookAttributes($book, $bookData);
            $book->create();
            return json_encode("Book title: " . $book->title . " created");
        } catch (Exception $e) {

            return json_encode("Book don`t create");
        }
    }

    public function setBookAttributes($book, $bookData) {
        foreach ($bookData as $key => $value) {
            $book->$key = $bookData[$key];
        }
    }

}

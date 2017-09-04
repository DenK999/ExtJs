<?php

class IndexController extends ControllerBase {

    public function indexAction() {

        
    }

    public function bookAction() {

        $request = $_SERVER['REQUEST_METHOD'];
        $input = json_decode(file_get_contents('php://input'),true);
        
        switch ($request) {
            case 'GET':
               return $this->showBook();
                break;
            case 'PUT':
                echo 'pre';
                var_dump($input);die;
                break;
            case 'POST':                
                return $this->createBook($input);                
                break;
            case 'DELETE':
                return 'DELETE';
                break;
        }
    }
    
    public function showBook(){
        $count = (int) $this->dispatcher->getParam("count");
        $count = $count ? $count : 10;
        $this->view->disable();

        $response = new \Phalcon\Http\Response();
        $response->setContent(json_encode(Book::find(['order' => "id",
                            'limit' => $count])));
        return $response;
    }

    public function deleteBook($id) {
        $book = Book::findFirst($id);
        if ($book !== false) {
            if ($book->delete() === false) {
                return "Book with title: " . $book->title . "don\'t delete";
            } else {
                return "Book with id: " . $book->title . " deleted";
            }
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
            array_shift($bookData);
        try {
            $book = new Book();            
            foreach ($bookData as $key => $value) {
                $book->$key = $bookData[$key];
            }
            $book->create();
            return json_encode("Book title: " . $book->title . " created");
        } catch (Exception $ex) {

            return json_encode("Book don`t create");
        }
    }

}

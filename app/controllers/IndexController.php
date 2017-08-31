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
                return "User with id: " . $book->title . "don\'t delete";
            } else {
                return "User with id: " . $book->title . " deleted";
            }
        }
    }

//    public function updateAction() {
//
//        $userData = (array) json_decode($_POST['userData']);
//        var_dump($userData);
//        die;
//
//        $user = User::findFirst($userData['id']);
//        if ($user !== false) {
//            foreach ($userData as $key => $value) {
//                $user->$key = $userData[$key];
//            }
//            $user->update();
//            return "User with id: " . $user->id . " editing";
//        } else {
//            return "User with id: " . $user->id . " don\'t editing";
//        }
//    }
//
    public function createAction() {
        
        $book = new Book();
        
        $bookData = (array) json_decode($_POST['bookData']);
        
        foreach ($bookData as $key => $value) {
            $book->$key = $bookData[$key];
        }    
        $book->create();
        return "Book title: " . $book->title . " created";
    }

}

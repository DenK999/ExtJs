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
        $user = User::findFirst($id);
        if ($user !== false) {
            if ($user->delete() === false) {
                return "User with id: " . $user->id . "don\'t delete";
            } else {
                return "User with id: " . $user->id . " deleted";
            }
        }
    }

    public function updateAction() {

        $userData = (array) json_decode($_POST['userData']);
        var_dump($userData);
        die;

        $user = User::findFirst($userData['id']);
        if ($user !== false) {
            foreach ($userData as $key => $value) {
                $user->$key = $userData[$key];
            }
            $user->update();
            return "User with id: " . $user->id . " editing";
        } else {
            return "User with id: " . $user->id . " don\'t editing";
        }
    }

    public function createAction() {
        
        $user = new User();
        
        $userData = (array) json_decode($_POST['userData']);
        
        foreach ($userData as $key => $value) {
            $user->$key = $userData[$key];
        }    
        $user->create();
        return "User with name: " . $user->name . " created";
    }

}

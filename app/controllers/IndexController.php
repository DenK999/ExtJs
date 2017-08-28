<?php

class IndexController extends ControllerBase {

    public function indexAction() {
        
    }

    public function testAction() {

        $count = (int) $this->dispatcher->getParam("count");

        $count = $count ? $count : 10;

        $this->view->disable();

        $response = new \Phalcon\Http\Response();

        $response->setContent(json_encode(User::find(['limit' => $count])));
        return $response;
    }

    public function deleteAction($id) {
        $user = User::findFirst($id);
        
        if ($user !== false) { 
            if ($user->delete() === false) {
                return "User with id: ". $user->id."don\'t delete";
            } 
            else {
                return "User with id: ". $user->id." deleted";
            }
        }
    }

}

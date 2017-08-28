<?php

class IndexController extends ControllerBase
{

    public function indexAction()
    {    
        
    }
    
    public function testAction(){        
        $count = (int)$this->dispatcher->getParam("count");
        
        $this->view->disable();

       
        $response = new \Phalcon\Http\Response();

        $array = [1, 2, 3];
        
        $count?array_push($array, $count):array_push($array, 1);
        
        $response->setContent(json_encode($array));
        return $response;
    }

}

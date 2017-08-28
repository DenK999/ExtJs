<?php

class IndexController extends ControllerBase
{

    public function indexAction()
    {    
        
    }
    
    public function testAction(){   
        
        $count = (int)$this->dispatcher->getParam("count");
        
        $count = $count?$count:10;
        
        $this->view->disable();
       
        $response = new \Phalcon\Http\Response();

        $response->setContent(json_encode(User::find(['limit' => $count])));
        return $response;
    }

}

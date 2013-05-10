var renderContent = function ($contentElement, context) {
    //$contentElement is jquery content element for my red control and context contains entity type and entity id
    $contentElement.append('<button id="stevetest">Click Me!!!</button>');
};

//Append my controls to user story view
tau.mashups.addDependency('tp/userStory/view')
    .addMashup(function (view) {
        view.addTab('CheckList', renderContent)
          
    });

var addJquery = function(data) {


	console.log(data.element);
	$element = data.element;
	$element.find('#stevetest').click(function( event ){ 
        console.log("hi");
   	
	
       	var data = new Object();
        data.Name = 'My Test';
        data.UserStory = new Object();
 
        console.log(data);
        
        console.log('view rendered');
        
        /*
      
        			$.ajax({ 
                                	type: 'POST', 
                                  	url: 'http://stevem.tpondemand.com/api/v1/Tasks', 
                                  	dataType: 'json',
	                                processData: false,
                                  	contentType: 'application/json',
        				data: JSON.stringify(data), 
        				success: function(){ console.log("yay!");}, 
       					error: function(){console.log("boo!");}
    					}); 
      
	*/
        
        });
	
        
	
                                                  
};
    
tau.mashups 
    .addDependency('app.bus') 
    .addMashup(function ($deferred) { 
 		
        $deferred.then(function (bus) { 
		//console.log(bus);
                bus.on('afterRender', function (evt, data) {
                                                            
                //console.log(evt.caller.name);
                //console.log(data);
  		if(evt.caller.name.indexOf("custom control:tab:CheckList") !== -1){
                                                                                   console.log('a');
                //console.log($(data('.tau-container ui-custom-control-content')));
                
        
                if(data.element == 'div.tau-container ui-custom-control-content'){
		//		addJquery(data);
                console.log('hello steve');  
        	}
    		
                }
      
                if (evt.caller.name !== 'custom control:tab:CheckList') { 
                    return; 
                } 
        	console.log("Rendered");
  		
            }); 
        }) 
 
    });

var button=document.getElementById('counter');
button.onclick=function(){
    //create a requets object
    
    var request= new XMLHttpRequest();
    request.onreadystatechange=check;
    request.open('GET','http://abhijitmajee1.imad.hasura-app.io/counter',true);
    request.send(null);
    
    function check()
    {
      if(request.readystate===XMLHttpRequest.DONE)
      { 
          if(request.status===200)
          {
             
              var counter=request.responseText;
              alert(counter);
              var span=document.getElementById('count');
              span.innerHTML=counter;
    
          }
      } 
      
    }
    
};
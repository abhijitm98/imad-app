
var button=document.getElementById('submit');
button.onclick=function(){
    
    //create a requets object
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;  
    alert(username);
    var request= new XMLHttpRequest();
   
    
    function check()
    {
      if(request.readystate===XMLHttpRequest.DONE)
      { 
          if(request.status===200)
          {
             alert('You have logged in successfully');
          }else if(request.status===403){
              alert('Wrong username/password');
          }else if(request.status===500){
          alert('Something went wrong');
          }
      }
      
    }
     request.onreadystatechange=check;
    request.open('POST','http://abhijitmajee1.imad.hasura-app.io/login',true);
    request.setRequestHeader('content-type','application/json');
    request.send(JSON.stringify({username:username,password:password}));
    
};
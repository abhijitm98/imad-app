
var button=document.getElementById('submit');
button.onclick=function(){
    alert('Button is responding');
    //create a requets object
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;  
    
    var request= new XMLHttpRequest();
    request.onreadystatechange=check;
    request.open('POST','http://abhijitmajee1.imad.hasura-app.io/login',true);
    request.setRequestHeader('content-type','application/json');
    request.send(JSON.stringify({username:username,password:password}));
    
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
    
};
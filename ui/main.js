console.log('Loaded!');
var element= document.getElementById('madi');
var marginLeft=0;var n=0;
function moveright()
{
    marginLeft=marginLeft+10;
    element.style.marginLeft=marginLeft+'px';
}

element.onclick=function ()
{
    var interval= setInterval(moveright,100);
};
var counter=0;
var button=document.getElementById('counter');
button.onclick=function(){
    //create a requets object
    var request= new XMLHttpRequest();
    request.onreadystatechange=function()
    {
      if(request.readystate===XMLHttpRequest.DONE)
      {
          if(request.status===200)
          {
              counter=request.ResponseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
    
          }
      } 
      request.open('GET','http://abhijitmajee1.imad.hasura-app.io/counter',true);
      request.send(null);
    };
    
    //put the counter value in the correct span
    
};
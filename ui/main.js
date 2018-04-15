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
    //make a request to the counter endpoint
    
    //put the counter value in the correct span
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
    
};
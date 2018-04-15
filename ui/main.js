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
console.log('Loaded!');
var element= document.getElementById('main');
element.innerHTML=' new value of course';
var element= document.getElementById('madi');

function moveright()
{var marginLeft=0;
  element.style.marginLeft=marginLeft+100;
}
element.onclick(moveright());
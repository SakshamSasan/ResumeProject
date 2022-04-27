

var yCoord;
var address;

/*dist is the yCoord of first section accessible by anchor i.e. About. I want
it to be reached in 10 ms and others in multiples like 20ms, 30ms and 40ms....So it is sort of scale*/


var dist=document.querySelector('#profilepic').offsetTop

/*This function is event handler. It gets the anchor's target's yCoord. That is the final
destination of our scroll
*/

function f(event) {
  event.preventDefault();
  address=this.getAttribute('href');
  yCoord=document.querySelector(address).offsetTop;
  var id = setInterval(smoothScroll,10)

  function smoothScroll() {
    if((window.pageYOffset+dist)>=yCoord||(window.innerHeight + Math.ceil(window.pageYOffset + 300)) >= document.body.offsetHeight){
      console.log(window.innerHeight,window.pageYOffset,document.body.offsetHeight)
      document.querySelector(address).style.animation = "flash 0.5s ease-in-out 2 alternate";
      clearInterval(id);
      return;
    }
    console.log(window.innerHeight,window.pageYOffset,document.body.offsetHeight)
    window.scrollBy(0,dist);
  }

}

/*This function is called by setInterval and keeps on scrolling till the window 
reaches that stage where my section is visible.*/



/*getting the anchor tags corresponding to nav-link class and adding eventListener*/
var anchorTags = document.getElementsByClassName('nav-link');
for(var i=0; i<anchorTags.length;i++) {
  anchorTags[i].addEventListener('click',f);
}
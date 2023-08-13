var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
var menuItem = document.querySelectorAll(".menu-item");
  if (prevScrollpos > currentScrollPos) {
    // document.getElementById("navbar").style.display = "block";
    menuItem.forEach((item)=>{
        item.style.display = "block"
    })
  


  } else {
    // document.getElementById("navbar").style.display = "none";
    menuItem.forEach(item=>{
        item.style.display = "none"
    })
  }
  prevScrollpos = currentScrollPos;
}
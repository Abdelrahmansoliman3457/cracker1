let bars = document.querySelector(".bars");
let navLayer = document.querySelector(".nav-layer");
let sideBar = document.querySelector(".sidebar");

bars.addEventListener("click", function () {
  this.classList.toggle("bar-tog");
  navLayer.classList.toggle("slideto");
  sideBar.classList.toggle("slideto");
});
navLayer.addEventListener("click", function () {
  this.classList.toggle("slideto");
  sideBar.classList.toggle("slideto");
  bars.classList.remove("bar-tog");
});

$(window).on("load", function () {
  setTimeout(function () {
    $(".loader").fadeOut("slow", function () {
      $(".loader").remove();
    });
  }, 0);
});


//..........................
$(document).ready(function () {
  let setLink = document.querySelectorAll(".abs-ul a");
    // console.log(setLink);
  for (var i = 0; i < setLink.length; i++) {
    // console.log("window", window.location.href);
    setLink[i].classList.remove('activate')
    
    if (window.location.href == setLink[i].href) {
      // console.log(setLink[i]);
      
      setLink[i].classList.add("activate");
      setLink[i].closest('.abs-ul').previousElementSibling.classList.add('active');
      setLink[i].closest('.abs-ul').previousElementSibling.firstElementChild.nextElementSibling.classList.add('rotate-me');
      setLink[i].parentElement.classList.add('auto-h')
      // break;
    }
  }
});

// toggle ul
// let lists = document.querySelectorAll(".flex-relative-li");
// for (let i = 0; i < lists.length; i++) {
//   lists[i].addEventListener("click", function () {
//     lists.forEach((li) => {
//       console.log(li.nextElementSibling);
//       li.classList.remove("active");
//       li.nextElementSibling.classList.remove("auto-h");
//       li.firstElementChild.nextElementSibling.classList.remove(
//         "rotate-me"
//       );
//     });
//     this.classList.toggle("active");
//     this.nextElementSibling.classList.toggle("auto-h");
//     this.firstElementChild.nextElementSibling.classList.toggle(
//       "rotate-me"
//     );
//   });
// }




// toggle ul

let lists = document.querySelectorAll(".flex-relative-li");
for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", function () {
    
    if(this.classList.contains('active')){
        removeAll();
    }else{
      removeAll()
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("auto-h");
      this.firstElementChild.nextElementSibling.classList.toggle(
        "rotate-me"
      );
    }
 
  });
}

function removeAll (){
  lists.forEach((li) => {
    console.log(li.nextElementSibling);
    // if(li.classList.contains("active")){
      li.classList.remove("active");
      li.nextElementSibling.classList.remove("auto-h");
      li.firstElementChild.nextElementSibling.classList.remove(
        "rotate-me"
      );
    // }

  });
}
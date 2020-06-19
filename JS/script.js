// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors){
//     anchor.addEventListener("click", function(event){
//         event.preventDefault();
//         const blockID = anchor.getAttribute('href')
//         document.querySelector('' + blockID).scrollIntoView({
//             behavior:"smooth",
//             block: "start"
//         })
//     })
// };


let anchors = document.querySelectorAll(' a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start',
      })
    })
  }
}
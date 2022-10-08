function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var reveals1 = document.querySelectorAll(".reveal1");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementTop1 = reveals1[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible ||elementTop1<windowHeight-elementVisible) {
        reveals[i].classList.add("active");
        reveals1[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
        reveals1[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  export function reveal2() {
    var reveals = document.querySelectorAll(".home");
    
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
     
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible ) {
        reveals[i].classList.add("active");
        
      } else {
        reveals[i].classList.remove("active");
    
      }
    }
  }
  
  window.addEventListener("scroll", reveal2);
  
document.getElementById("search-bar").addEventListener("focus", function() {
    document.getElementById("overlay").classList.add("slide-down");
    document.getElementById("overlay").style.display = "block";
  });

  document.getElementById("search-bar").addEventListener("blur", function() {
    document.getElementById("overlay").classList.add("slide-down");
    document.getElementById("overlay").style.display = "none";
  });

  var currentPageUrl = window.location.href;

  // Get all menu items
  var menuItems = document.getElementsByClassName("menu-item");

  // Iterate over menu items and add 'active' class to the matching item
  for (var i = 0; i < menuItems.length; i++) {
    var menuItemUrl = menuItems[i].href;

    if (currentPageUrl === menuItemUrl) {
      menuItems[i].classList.add("active");
    } else {
      menuItems[i].classList.remove("active");
    }
  }
  function scrollToSearch() {
  var searchbar = document.getElementById("search-bar");
  searchbar.scrollIntoView({ behavior: "smooth" });
  searchbar.focus();
}
  var notificationBox = document.getElementById("notification-box");
  var isNotificationBoxOpen = false;

  function toggleNotificationBox() {
  isNotificationBoxOpen = !isNotificationBoxOpen;
  
  if (isNotificationBoxOpen) {
      notificationBox.classList.add("show");
  } else {
      notificationBox.classList.remove("show");
  }
}
  // Slideshow logic
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  }

  // Slide to the next image every 3 seconds
  setInterval(() => {
  showSlide(currentSlide + 1);
  }, 10000);

  // Show the initial slide
  showSlide(currentSlide);
 const menuBtn = document.querySelector(".menu-icon span");
 const searchBtn = document.querySelector(".search-icon");
 const cancelBtn = document.querySelector(".cancel-icon");
 const items = document.querySelector(".nav-items");
 const form = document.querySelector("form");
 menuBtn.onclick = ()=>{
   items.classList.add("active");
   menuBtn.classList.add("hide");
   searchBtn.classList.add("hide");
   cancelBtn.classList.add("show");
 }
 cancelBtn.onclick = ()=>{
   items.classList.remove("active");
   menuBtn.classList.remove("hide");
   searchBtn.classList.remove("hide");
   cancelBtn.classList.remove("show");
   form.classList.remove("active");
   cancelBtn.style.color = "#ff3d00";
 }
 searchBtn.onclick = ()=>{
   form.classList.add("active");
   searchBtn.classList.add("hide");
   cancelBtn.classList.add("show");
 }
 function showResults() {
var results = document.getElementById("searchResults");
results.classList.toggle("show");
}
        // Login form submission
        document.getElementById("login-form").addEventListener("submit", function(event) {
          event.preventDefault(); // Prevent form submission
      
          // Retrieve input values
          var username = document.getElementById("login-username").value;
          var password = document.getElementById("login-password").value;
      
          // Perform login validation
          // Replace with actual server-side authentication logic
          if (username === "admin" && password === "password") {
              alert("Login successful!");
              // Redirect to dashboard or desired page
          } else {
              alert("Invalid credentials. Please try again.");
          }
          });
      
          // Register form submission
          document.getElementById("register-form").addEventListener("submit", function(event) {
          event.preventDefault(); // Prevent form submission
      
          // Retrieve input values
          var username = document.getElementById("register-username").value;
          var password = document.getElementById("register-password").value;
          var email = document.getElementById("register-email").value;
      
          // Perform registration validation and logic
          // Replace with actual server-side registration logic
          alert("Registration successful!");
      
          // Clear the form fields
          document.getElementById("register-form").reset();
          });
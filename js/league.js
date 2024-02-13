
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout:2500,
    rtl:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
  })


  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-linkk');
    const specialContents = document.querySelectorAll('.special-content');

    navLinks.forEach(function(link, index) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Remove 'active' class from all links
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            // Hide all special content
            specialContents.forEach(function(content) {
                content.style.display = 'none';
            });

            // Add 'active' class to the clicked link
            link.classList.add('active');

            // Show the corresponding special content
            const targetId = link.getAttribute('href').substring(1);
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });

        // Automatically trigger click on the first link
        if (index === 0) {
            link.click();
        }
    });
});


// Get the current date
let currentDate = new Date();

// Function to update the date text
function updateDateText() {
    document.getElementById('dateText').textContent = formatDate(currentDate);
}

// Function to format the date as a string
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ar-eg', options);
}

// Function to change the date based on the offset (1 for tomorrow, -1 for yesterday)
function changeDate(offset) {
    currentDate.setDate(currentDate.getDate() + offset);
    updateDateText();
}

// Initial setup
updateDateText();

let counter = 0;

    function updateCounter() {
      document.getElementById('counter').innerText = counter;
    }

    function increaseCounter() {
      counter++;
      updateCounter();
    }

    function decreaseCounter() {
      if (counter > 0) {
        counter--;
        updateCounter();
      }
    }
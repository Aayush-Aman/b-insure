document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");

    // Function to add click event listener to an element by class name
    function addNavigation(className, url) {
        console.log("addNavigation called for class:", className, "with URL:", url);
        var elements = document.getElementsByClassName(className);
        console.log("Elements found:", elements.length);
        for (var i = 0; i < elements.length; i++) {
            console.log("Adding event listener to element:", elements[i]);
            elements[i].addEventListener('click', function () {
                // console.log(Navigating to ${url});
                window.location.href = url;
            });
        }
    }

    // Adding navigation to each class
    addNavigation('sitemap', '/sitemap.html');
    addNavigation('careers', '/contact us/contact.html');
    addNavigation('contact-us', '/contact us/contact.html');
    addNavigation('blog', '/blog');
    addNavigation('faqs', '/faq/index.html');
    addNavigation('about', '/about-us.html');
    addNavigation('terms-of-use', '/terms-of-use');
    addNavigation('privacy-policy', '/privacy');
    addNavigation('cookie-policy', '/cookie-policy');
    addNavigation('home-wrapper', '/');
    addNavigation('travel-wrapper', '/travel_insurance');
    // Function to add click event listener to an element by ID
    function addNavigationById(optionId, url) {
        var option = document.getElementById(optionId);
        if (option) {
            option.addEventListener('click', function () {
                window.location.href = url;
            });
        }
    }

    // Map dropdown option IDs to URLs
    var dropdownNavigation = {
        'individualOption1': '/life_insurance',
        'individualOption2': '/car_insurance',
        'individualOption3': '/home_insurance',
        'commercialOption1': '/auto_insurance',
        'commercialOption2': '/general_liability',
        'commercialOption3': '/warehouse',
        'commercialOption4': '/restaurant',
        'supportOption1': '/contact',
        'supportOption2': '/about',
        'supportOption3': 'why',
        'supportOption4': '/faq',
        'supportOption5': '/blog'

    };

    // Add navigation to each dropdown option
    Object.keys(dropdownNavigation).forEach(function (optionId) {
        var url = dropdownNavigation[optionId];
        addNavigationById(optionId, url);
    });

    // Toggle dropdowns
    function toggleDropdown(dropdownId) {
        var dropdown = document.getElementById(dropdownId);
        if (dropdown) {
            closeAllDropdowns();
            if (dropdown.style.display === "none" || dropdown.style.display === "") {
                dropdown.style.display = "block";
            } else {
                dropdown.style.display = "none";
            }
        }
    }

    function scrollToTop() { 
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll
        });
    }

    // Adding event listener to elements with class 'group-icon'
    var elements = document.getElementsByClassName('group-icon');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', scrollToTop);
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll
        });
    }

    // Adding event listener to elements with class 'group-icon'
    var elements = document.getElementsByClassName('b-insure-variantsfooter-inner');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', scrollToTop);
    }

    // Function to close all dropdowns
    function closeAllDropdowns() {
        var dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(function (dropdown) {
            dropdown.style.display = "none";
        });
    }

    // Click events for specific containers
    var frameContainers = {
        "frameContainer3": "commercialDropdown",
        "frameContainer1": "individualDropdown",
        "frameContainer4": "support-Dropdown"
    };

    Object.keys(frameContainers).forEach(function (containerId) {
        var container = document.getElementById(containerId);
        var dropdownId = frameContainers[containerId];

        if (container) {
            container.addEventListener("click", function (e) {
                toggleDropdown(dropdownId);
                e.stopPropagation(); // Prevent click event from bubbling up
            });
        }
    });

    // Click outside dropdowns to hide them
    document.addEventListener("click", function () {
        closeAllDropdowns();
    });

    // Close dropdowns on scroll
    window.addEventListener("scroll", function () {
        closeAllDropdowns();
    });

    // Click event for closing infobar
    var closeLineIcon = document.querySelector('.close-line-icon');
    if (closeLineIcon) {
        closeLineIcon.addEventListener('click', function () {
            var infobar = document.querySelector('.infobar');
            if (infobar) {
                infobar.style.display = 'none'; // Hide the infobar
            }
        });
    }

    const getAFreeButton = document.querySelector('.get-a-free');
const closeFillIcon = document.querySelector('.close-fill-icon-new');
const getAQuoteForm1Container = document.querySelector('.property-1tool-31');
const toolsForQuotation = document.querySelector('.group-div');

if (getAFreeButton && closeFillIcon && getAQuoteForm1Container && toolsForQuotation) {
    getAFreeButton.addEventListener('click', function () {
        getAQuoteForm1Container.style.display = 'block';
        toolsForQuotation.style.display = 'none';
    });

    closeFillIcon.addEventListener('click', function () {
        getAQuoteForm1Container.style.display = 'none';
        toolsForQuotation.style.display = 'block';
    });
}

});
document.addEventListener('DOMContentLoaded', () => {
    const arrowIcons = document.querySelectorAll('.arrow-left-s-line-icon1');

    arrowIcons.forEach(arrow => {
        arrow.addEventListener('click', () => {
            // Toggle the 'rotate' class on the clicked arrow icon
            arrow.classList.toggle('rotate');

            // Find the content section that follows the clicked arrow's parent element
            const content = arrow.parentElement.nextElementSibling;

            if (content) {
                // Close all other open sections
                const allContents = document.querySelectorAll('.content');
                allContents.forEach(c => {
                    if (c !== content) {
                        c.style.maxHeight = null;
                        c.style.padding = '0';
                        // Remove the class that adjusts spacing
                        c.previousElementSibling.classList.remove('collapsed');
                    }
                });

                // Toggle the display of the clicked content section
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    content.style.padding = '0';
                    // Remove the class that adjusts spacing
                    content.previousElementSibling.classList.remove('collapsed');
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.padding = '15px 0'; // Adjust padding as needed
                    // Add the class that adjusts spacing
                    content.previousElementSibling.classList.add('collapsed');
                }
            }
        });
    });
});




const quoteButtons = document.querySelectorAll('[data-target="quote-target"]');
const quoteButtons1 = document.querySelectorAll('[data-target="quote-target"]');
quoteButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Scroll to the element with the class 'rectangle-container'
        document.querySelector('.rectangle-container').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// quoteButtons1.forEach(button => {
//     button.addEventListener('click', () => {
//         // Scroll to the element with the class 'rectangle-container'
//         document.querySelector('.rectangle-parent7').scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const scheduleCallButtons = document.querySelectorAll('.button-with-icon2, .about-hero-button');

    scheduleCallButtons.forEach(button => {
        button.addEventListener('click', () => {
            Calendly.initPopupWidget({ url: 'https://calendly.com/prince-m58/appointment' });
            return false; // Prevent default link behavior
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const faqHeaders = document.querySelectorAll('.group-parent27');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            content.classList.toggle('active');
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".new-group-parent27").forEach(function(header) {
      header.addEventListener("click", function() {
        let content = this.nextElementSibling;
        let arrow = this.querySelector(".new-arrow-left-s-line-icon1");
  
        if (content.classList.contains("active")) {
          content.classList.remove("active");
          arrow.classList.remove("collapsed");
          console.log("yhi function hai");
        } else {
          content.classList.add("active");
          arrow.classList.add("collapsed");
          console.log("yhi function hai");

        }
      });
    });
  });
//   const element=document.querySelector('#buttonWithIcon');
//   const form=document.querySelector('.get-quote-form');
// const =document.querySelector('.submit-button');
// const close=document.querySelector('.close-button');
// const moda=document.querySelector('.modal');


// moda.style.display='none';

//   form.style.display='none';
//   element.addEventListener('click',function(){
//     form.style.display='block';
//     form.style.marginLeft="680px";
//   })
// close.addEventListener('click',function(){
//     form.style.display='none';
// })
// .addEventListener('click',function(){
//     moda.style.display='block';
// })
const element = document.querySelector('#buttonWithIcon');
const form = document.querySelector('.get-quote-form');
const down_form = document.querySelector('.form-fields');
const close = document.querySelector('.close-button');
const moda = document.querySelector('.modal');

// Initially hide form and modal
moda.style.display = 'none';
form.style.display = 'none';

// Show form when button is clicked
element.addEventListener('click', function() {
    // const viewportWidth = window.innerWidth;
    // const formWidth = form.clientWidth;
    // const leftPosition = (viewportWidth - formWidth)/2;
    
    form.style.display = 'flex';
    form.style.marginLeft = '480px';
    // moda.style.marginLeft='480px'; // Adjust this value as per your layout;

    const mediaQuery1=window.matchMedia('(max-width:1183px)');
    if(mediaQuery1.matches) {
        form.style.marginLeft='280px';
        // moda.style.marginLeft='280px';
        console.log("Hey there !");
        
    }

    const mediaQuery2=window.matchMedia('(max-width:1415px)');
    if(mediaQuery2.matches) {
        form.style.marginLeft='370px';
        // moda.style.marginLeft='370px';
        console.log("Hey there !");
        
    }
    const mediaQuery3=window.matchMedia('(max-width:1215px)');
    if(mediaQuery3.matches) {
        form.style.transform='scale(0.8)';
        form.style.marginLeft='170px';
        // moda.style.transform='scale(4.5)';
        // moda.style.marginLeft='170px';
        console.log("Hey there !");
        
    }
});
//now center the form 
// function centerForm() {
   

//     // Get the viewport width and height
//     const viewportHeight = window.innerHeight;

//     // Get the form's width and height
//     const formWidth = form.offsetWidth;
//     // const formHeight = form.offsetHeight;

//     // Calculate the position to center the form
//     const topPosition = (viewportHeight - formHeight) / 2;

//     // Apply the calculated position to the form
//     form.style.marginLeft = '480px';
//     // form.style.top = `${topPosition}px`;

// }





// Hide form when close button is clicked
close.addEventListener('click', function() {
    form.style.display = 'none';
});

// Show modal when submit button is clicked, and prevent form submission
down_form.addEventListener('submit', function(event) {

   event.preventDefault();
   if (!down_form.checkValidity()) {
    alert('Please fill out all required fields before submitting.');
    return;  // Exit if the form is invalid
}

const formData = new FormData(down_form);

// Send the form data to the server using Fetch API
fetch(down_form.action, {
    method: down_form.method,
    body: formData,
})
.then(response => response.json())  // Parse the JSON response
.then(data => {
    if (data.status === "success") {
        moda.style.display = 'block'; // Show modal
    form.style.display = 'none';
    // moda.style.marginLeft = '-190px';
    // Adjust this value as per your layout
    
    
   
    
    
    down_form.reset();
    } else {
        alert('There was an issue submitting the form.'); // Handle error response
    }
})
.catch(error => {
    console.error('Error:', error);  // Log any error to the console
    alert('There was an error submitting the form.');
});
    


});
const last=document.querySelector('.sound');
last.addEventListener('click',function(){
    moda.style.display='none';
    form.style.display='none';
});
const clos = document.querySelector('.closing');
clos.addEventListener('click',function(){
    moda.style.display='none';
    // form.style.display='none';
});
const thank=document.querySelector('.above-form');
thank.addEventListener('submit',function(event){
    const thanku=document.querySelector('.thanks')

   event.preventDefault();
   if (!thank.checkValidity()) {
    alert('Please fill out all required fields before submitting.');
    return;  // Exit if the form is invalid
}

const formData = new FormData(thank);

// Send the form data to the server using Fetch API
fetch(thank.action, {
    method: thank.method,
    body: formData,
})
.then(response => response.json())  // Parse the JSON response
.then(data => {
    if (data.status === "success") {
        thanku.style.display = 'block';  // Show thank-you message
        thank.reset();
    } else {
        alert('There was an issue submitting the form.'); // Handle error response
    }
})
.catch(error => {
    console.error('Error:', error);  // Log any error to the console
    alert('There was an error submitting the form.');
});
    
});




const cross=document.querySelector('.cut-me');
cross.addEventListener('click',function(){
    const thanku=document.querySelector('.thanks')
    thanku.style.display='none';
})
const ret=document.querySelector('.back');
ret.addEventListener('click',function(){
    const thanku=document.querySelector('.thanks')
    thanku.style.display='none';
})

const openForm = document.querySelectorAll('#trav');
const form1=document.querySelector('#form-cont')
    openForm.forEach(div=>{
        div.addEventListener('click', ()=>{
            form1.style.display='flex';
    }); 
    
    });
    const traVel=document.querySelector('.rectangle-group');
    const changeSelect=document.querySelector('.group-child1-new');
    traVel.addEventListener('click',()=>{
        changeSelect.value='TRAVEL INSURANCE'
    });

    const liFe=document.querySelector('.group-parent2');
    
    liFe.addEventListener('click',()=>{
        changeSelect.value='LIFE INSURANCE'
    });

    const auTo=document.querySelector('.rectangle-container');
    
    auTo.addEventListener('click',()=>{
        changeSelect.value='AUTO INSURANCE'
    });

    const commerCial=document.querySelector('.rectangle-parent1');
    
    commerCial.addEventListener('click',()=>{
        changeSelect.value='COMMERCIAL INSURANCE'
    });

const moveDiv=document.querySelector('.button-with-icon2');
moveDiv.addEventListener('click', ()=>{
    form.style.display='flex';
    form.style.marginLeft = '480px';
    form.scrollIntoView({behavior:'smooth'});
});

//Home insurance changes starts here 




//home insurance changes ends here 
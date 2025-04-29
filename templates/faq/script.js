const elements=document.querySelectorAll('.arrow');


elements.forEach(function(element){
  const answerDiv = element.parentElement.nextElementSibling; // Get the answer div
    const isVisible = answerDiv.style.display = "none";
    element.style.transform='rotate(180deg)';
});
elements.forEach(function(element){
element.addEventListener('click',function() {
    console.log("clicked");
    const answerDiv = element.parentElement.nextElementSibling; // Get the answer div
    const isVisible = answerDiv.style.display === "block";
  
    if (isVisible) {
      answerDiv.style.display = "none"; // Hide the answer
      element.style.transform='rotate(180deg)'; // Reset the arrow rotation
    } else {
      answerDiv.style.display = "block"; // Show the answer
      element.style.transform='rotate(360deg)'; // Rotate the arrow
    }
  });
});
const element=document.querySelector('.arrow_1');
const element2=document.querySelector('#arrow-left-s-line-icon1');
element.style.transform='rotate(180deg)';

const answerDiv1 = element.parentElement.nextElementSibling;
answerDiv1.style.display="none";
element.addEventListener('click',function(){
  console.log("first element is clicked");
  console.log(element2);  

  const answerDiv = element.parentElement.nextElementSibling; // Get the answer div
    const isVisible = answerDiv.style.display === "block";
  
    if (isVisible) {
      answerDiv.style.display = "none"; // Hide the answer
      element.style.transform='rotate(180deg)'; // Reset the arrow rotation
    element2.style.marginTop = '127px';

    } else {
      answerDiv.style.display = "block"; // Show the answer
      element.style.transform='rotate(360deg)'; // Rotate the arrow
    element2.style.marginTop = '250px';

    }

})
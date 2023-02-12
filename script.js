function openNav() {
    
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } 
  function myFunction() {
    var content = document.getElementById('textArea').innerHTML;
navigator.clipboard.writeText(content)
.then(() => {
console.log("Text has been copied!")
})
.catch(err => {
console.log('Something is not right', 'Oops!');
})
      
	  }
    function myFunction1() {
      var content = document.getElementById('textarea').innerHTML;
  navigator.clipboard.writeText(content)
  .then(() => {
  console.log("Text has been copied!")
  })
  .catch(err => {
  console.log('Something is not right', 'Oops!');
  })
        
      }
document.addEventListener("DOMContentLoaded", function() {
    // Function to display the current date and time
    function displayDateAndTime() {
      var currentDate = new Date();
      var formattedDate = currentDate.toLocaleDateString();
      var formattedTime = currentDate.toLocaleTimeString();
      var dateTimeString = formattedDate + " " + formattedTime;
  
      alert("Current Date and Time: " + dateTimeString);
    }
  
    // Adding the event listener to the button
    var dateButton = document.getElementById("dateButton");
    dateButton.addEventListener("click", displayDateAndTime);
  });
  
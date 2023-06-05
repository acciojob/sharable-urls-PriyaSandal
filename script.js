// your code here
    document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Get values from the form
      var name = document.getElementById('name').value;
      var year = document.getElementById('year').value;

      // Construct the query string
      var queryString = '?name=' + encodeURIComponent(name) + '&year=' + encodeURIComponent(year);

      // Update the URL text
      var urlElement = document.getElementById('url');
      urlElement.textContent = 'https://localhost:8080/' + queryString;
    });
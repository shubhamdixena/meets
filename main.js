<html>
  <body>
    <h1>Registration Form</h1>
    <form id="registration-form">
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name"><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email"><br><br>
      <input type="submit" value="Submit">
    </form> 
    
    <div id="results" style="display: none;">
      <h1>Results</h1>
      <p>Hello <span id="name-display"></span>! You will need to attend <span id="num-meetings-display"></span> meetings.</p>
      <p>In each meeting, you will be meeting with the following students:</p>
      <ul id="meeting-students-list">
      </ul>
    </div>
    
    <script>
      // Get the form element
      const form = document.getElementById('registration-form');
      
      // Add a submit event listener to the form
      form.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Get the form data
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        
        // Calculate the number of meetings and which students the new student will be meeting with
        // TODO: implement this
        
        // Update the results display
        document.getElementById('name-display').textContent = name;
        document.getElementById('num-meetings-display').textContent = numMeetings;
        const meetingStudentsList = document.getElementById('meeting-students-list');
        meetingStudents.forEach((student) => {
          const li = document.createElement('li');
          li.textContent = student;
          meetingStudentsList.appendChild(li);
        });
        
        // Show the results
        document.getElementById('results').style.display = 'block';
      });
    </script>
  </body>
</html>

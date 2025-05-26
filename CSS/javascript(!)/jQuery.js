button id="registerBtn">Register</button>
<div id="eventCard" style="display:none;">Thank you!</div>
JavaScript with jQuery

html
Copy
Edit
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  $('#registerBtn').click(function () {
    $('#eventCard').fadeIn().delay(2000).fadeOut();
  });

  // Benefit of frameworks:
  // React and Vue allow reusable components, reactive data binding, and better state management.
</script>

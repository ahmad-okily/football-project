// Select the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check if the user has a saved theme preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggleButton.textContent = 'Light Mode';
}

// Add an event listener to the button
themeToggleButton.addEventListener('click', () => {
  // Toggle the dark mode class
  document.body.classList.toggle('dark-mode');

  // Check the current theme and update button text
  if (document.body.classList.contains('dark-mode')) {
    themeToggleButton.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark'); // Save preference to localStorage
  } else {
    themeToggleButton.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light'); // Save preference to localStorage
  }
});
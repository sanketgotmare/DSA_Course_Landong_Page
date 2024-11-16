// Select the download button and the loader
const downloadBtn = document.getElementById('download-btn');
const loader = document.getElementById('rgb-loader');

// Add click event to the button
downloadBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link action
  loader.classList.remove('hidden'); // Show the loader

  // Simulate a download process (3 seconds delay)
  setTimeout(() => {
    loader.classList.add('hidden'); // Hide the loader after 3 seconds
    alert('Download started!'); // Show confirmation
  }, 3000);
});

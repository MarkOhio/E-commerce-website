 // Get the search input and results container
 const searchInput = document.getElementById('search-input');
 const searchResults = document.getElementById('search-results');
 const searchContainer = document.getElementById('search-container');
 
 // Get all the H3 tags inside the div with the ID "adstxt"
 const h3Tags = searchContainer.querySelectorAll('.product h3');
 
 // Create an array to store the H3 tag texts
 const h3Texts = Array.from(h3Tags).map(h3 => h3.textContent.toLowerCase());
 
 // Add an event listener to the search input
 searchInput.addEventListener('input', () => {
   const searchTerm = searchInput.value.toLowerCase();
   const filteredH3Texts = h3Texts.filter(text => text.includes(searchTerm));
 
   // Clear the search results container
   searchResults.innerHTML = '';
 
   // Create a list item for each filtered h3 tag text
   filteredH3Texts.forEach((text, index) => {
     const listItem = document.createElement('LI');
     listItem.textContent = text;
     listItem.addEventListener('click', () => {
       // Scroll to the corresponding h3 tag when clicked
       h3Tags[index].scrollIntoView({ behavior: 'smooth' });
      
       // Close the search results container
       searchResults.style.display = 'none';
     });
     searchResults.appendChild(listItem);
   });
 
   // Show the search results container if there are filtered results
   if (filteredH3Texts.length > 0) {
     searchResults.style.display = 'block';
   } else {
     searchResults.style.display = 'none';
   }
 });
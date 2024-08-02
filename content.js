function addRepostMarkers() {
  console.log('Running addRepostMarkers function');
  const jobCards = document.querySelectorAll('[data-job-id]');
  console.log(`Found ${jobCards.length} job cards`);
  
  jobCards.forEach(card => {
    const dateElement = card.querySelector('time, [class*="posted-time"], [class*="job-posted-time"]');
    console.log('Date element found:', dateElement);
    
    if (dateElement && dateElement.textContent.toLowerCase().includes('repost')) {
      console.log('Reposted job found:', card);
      if (!card.querySelector('.repost-marker')) {
        const titleElement = card.querySelector('[class*="job-title"], [class*="job-card-list__title"]');
        console.log('Title element found:', titleElement);
        if (titleElement) {
          const marker = document.createElement('span');
          marker.className = 'repost-marker';
          marker.textContent = '★';
          marker.title = 'This job has been reposted';
          marker.style.color = 'red';
          marker.style.marginLeft = '5px';
          marker.style.fontSize = '16px';
          titleElement.appendChild(marker);
          console.log('Marker added to:', titleElement);
        }
      }
    }
  });
}

// Run the function when the page loads and whenever it's updated
addRepostMarkers();
new MutationObserver(addRepostMarkers).observe(document.body, {childList: true, subtree: true});
console.log('MutationObserver set up');

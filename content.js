function addRepostMarkers() {
  const jobCards = document.querySelectorAll('.job-card-container');
  
  jobCards.forEach(card => {
    const jobId = card.getAttribute('data-job-id');
    const dateElement = card.querySelector('.job-card-container__timestamp');
    
    if (dateElement && dateElement.textContent.toLowerCase().includes('reposted')) {
      if (!card.querySelector('.repost-marker')) {
        const titleElement = card.querySelector('.job-card-list__title');
        const marker = document.createElement('span');
        marker.className = 'repost-marker';
        marker.textContent = '★';
        marker.title = 'This job has been reposted';
        titleElement.appendChild(marker);
      }
    }
  });
}
// Run the function when the page loads and whenever it's updated
addRepostMarkers();
new MutationObserver(addRepostMarkers).observe(document.body, {childList: true, subtree: true});

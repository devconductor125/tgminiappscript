document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('searchBtn');
  const profileBtn = document.getElementById('profileBtn');
  const prevPostBtn = document.getElementById('prevPostBtn');
  const commentsBtn = document.getElementById('commentsBtn');
  const nextPostBtn = document.getElementById('nextPostBtn');

  searchBtn?.addEventListener('click', () => {
    alert('Search button clicked');
  });

  profileBtn?.addEventListener('click', () => {
    alert('Profile button clicked');
  });

  prevPostBtn?.addEventListener('click', () => {
    alert('Previous Post button clicked');
  });

  commentsBtn?.addEventListener('click', () => {
    alert('Comments button clicked');
  });

  nextPostBtn?.addEventListener('click', () => {
    alert('Next Post button clicked');
  });
});
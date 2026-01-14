document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("scroll", function() {
  const navbar = document.getElementById('nav');
  
    if (window.scrollY > 1000) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  function setActiveNavLink() {
  const currentPath = window.location.pathname;
  
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    
    const currentFile = currentPath.split('/').pop();
    const linkFile = linkHref.split('/').pop();
    
    if (currentPath.includes(linkHref) || 
        currentFile === linkFile ||
        (linkHref.includes('about-us') && currentPath.includes('about-us')) ||
        (linkHref.includes('download') && currentPath.includes('download')) ||
        (linkHref.includes('discover') && currentPath.includes('discover')) ||
        (linkHref.includes('contact') && currentPath.includes('contact'))) {
      
      link.classList.add('active');
      
      const parentLi = link.closest('li.nav-item');
      if (parentLi) {
        parentLi.classList.add('active');
      }
    }
  });

  if (currentPath.endsWith('index.html') || 
      currentPath.endsWith('/') || 
      currentPath === '' || 
      currentPath.split('/').pop() === '') {
    
    const homeLink = document.querySelector('.navbar-brand');
    if (homeLink) {
      homeLink.classList.add('active');
    }
  }
}
setActiveNavLink();
});


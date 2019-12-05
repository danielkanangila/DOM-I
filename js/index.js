const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
 
// Update nav items
const navItems = document.querySelector('nav').querySelectorAll('a');
navItems.forEach((itemEl, i) => itemEl.text = siteContent.nav[`nav-item-${i+1}`]);
const a = document.createElement('a');
a.text = 'Test'
document.querySelector('nav').appendChild(a)

// Updated .cta section
const ctaEl = document.querySelector('section.cta');
ctaEl.querySelector('h1').textContent = siteContent.cta['h1'];
ctaEl.querySelector('button').textContent = siteContent.cta['button'];
ctaEl.querySelector('img').src = siteContent.cta['img-src'];

// Updated section .main-content

const mainContentEl = document.querySelector('section.main-content');
mainContentEl.querySelector('.top-content')
  .querySelectorAll('.text-content').forEach((item, index) => {
     if (index == 0){
      item.querySelector('h4').textContent = siteContent['main-content']['features-h4'];
      item.querySelector('p').textContent = siteContent['main-content']['features-content'];
    } else {
      item.querySelector('h4').textContent = siteContent['main-content']['about-h4'];
      item.querySelector('p').textContent = siteContent['main-content']['about-content'];
     }
  })

// Updated .middle-img in main-content section
mainContentEl.querySelector('.middle-img').src = siteContent['main-content']['middle-img-src'];
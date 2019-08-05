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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let mainImg = document.querySelector("#cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaText = document.querySelector(".cta .cta-text h1");
console.log(ctaText);
ctaText.textContent = siteContent["cta"]["h1"];

let nav = document.querySelectorAll("nav a");
for(i = 0; i  < nav.length; i++){
  nav[i].textContent = siteContent["nav"][`nav-item-${i+1}`]
}
// Top pargraphs
let topParagraph1 = document.querySelector(".main-content .text-content:nth-child(1) h4");
topParagraph1.textContent = siteContent['main-content']['features-h4'];

let topParagraph1Text = document.querySelector(".main-content .text-content:nth-child(1) p");
topParagraph1Text.textContent = siteContent['main-content']['features-content'];

let topParagraph2 = document.querySelector(".main-content .text-content:nth-child(2) h4");
topParagraph2.textContent = siteContent['main-content']['about-h4'];

let topParagraph2Text = document.querySelector(".main-content .text-content:nth-child(2) p");
topParagraph2Text.textContent = siteContent['main-content']['product-content'];

// Bottom paragraphs
let bottomParagraph1 = document.querySelector(".bottom-content .text-content:nth-child(1) h4");
bottomParagraph1.textContent = siteContent['main-content']['services-h4'];

let bottomParagraph1Text = document.querySelector(".bottom-content .text-content:nth-child(1) p");
bottomParagraph1Text.textContent = siteContent['main-content']['servvices-content'];

let bottomParagraph2 = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
bottomParagraph2.textContent = siteContent['main-content']['product-h4'];

// let bottomParagraph2Text = document.querySelector(".bottom-content .text-content:nth-child(2) p");
// bottomParagraph2Text.textContent = siteContent['bottom-content']['product-content']

let bottomParagraph3 = document.querySelector(".bottom-content .text-content:nth-child(3) h4");
bottomParagraph3.textContent = siteContent['main-content']['vision-h4'];


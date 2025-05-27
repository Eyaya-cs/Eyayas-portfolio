const menu = document.querySelector('#menu-icon');
  const navlist = document.querySelector('.navlist');
  const header = document.querySelector('header');

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
  };

  // Close Menu on Scroll
  window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
  };

  // Initialize EmailJS
  (function() {
    emailjs.init("d1VUlCCZOmG3nZSt8"); // Your public key
  })();

  // Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const formMessages = document.getElementById('form-messages');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('.send-btn');
    
    // Disable button during submission
    submitBtn.disabled = true;
    submitBtn.value = 'Sending...';

    emailjs.sendForm("service_mf252cr", "template_z9vr6nr", this)
      .then(() => {
        formMessages.textContent = "Message sent successfully! 🎉";
        formMessages.className = 'success';
        contactForm.reset();
      })
      .catch((error) => {
        formMessages.textContent = `Error: ${error.text || 'Please try again later.'}`;
        formMessages.className = 'error';
      })
      .finally(() => {
        formMessages.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.value = 'Send Message';
        
        // Hide message after 5 seconds
        setTimeout(() => {
          formMessages.style.display = 'none';
        }, 5000);
      });
  });

  // Sticky Header
  window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 120);
  });
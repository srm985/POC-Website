$(document).ready(function() {
  function setContactBackground() {
    windowHeight = $(window).height();
    windowWidth = $(window).width();
    contactSectionHeight = $('#break_2 .container').height();
    contactFormHeight = $('#contact_form').height();
    contactFormWidth = $('#contact_form').width();
    containerWidth = $('.container').width();
    document.getElementById("contact_form_photo_wrapper").setAttribute("style","height:" + (contactSectionHeight).toString() + "px");
  };
  setContactBackground();
  
  $(window).resize(function() {
    setContactBackground();
  });
});
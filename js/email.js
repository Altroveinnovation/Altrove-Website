function feedback(el) {
  $(el).val("Thanks for contacting us!");
}

function feedback_error(el) {
  $(el).val("An error occured, please retry");
}

function wait(el) {
  $(el).val("Sending...");
}

function post_email(data, el) {
  $.ajax({
    url: "https://formspree.io/quentin.bereau@gatemedia.ch",
    method: "POST",
    data: data,
    dataType: "json",
    success: function(data){
      feedback(el);
    },
    error: function(){
      feedback_error(el);
    }
  });
}

function send_contact(el) {
  wait(el);
  var name = $('#contact_name').val();
  var company = $('#contact_company').val();
  var email = $('#contact_email').val();
  post_email({name: name, company: company, email: email}, el);
}

function send_message(el) {
  wait(el);
  var name = $('#popup_name').val();
  var email = $('#popup_email').val();
  var msg = $('#popup_msg').val();
  post_email({name: name, email: email, msg: msg}, el);
}

function send_email(el) {
  wait(el);
  var email = $('#subscribe_email').val();
  post_email({email: email}, el);
}

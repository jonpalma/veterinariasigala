$(document).ready(function(){
	$('.parallax').parallax();
	$(document).on("scroll", onScroll);
});

//On scroll change active link in navbar
function onScroll(event){
    var scrollPos = $(document).scrollTop()+106;
    $('#collapsible-nav li').each(function () {
        var currLink = $(this).children("a");
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#collapsible-nav ul li').removeClass("active");
			$(this).addClass("active");
        }
        else{
             $(this).removeClass("active");
        }
    });
}

//Ajax contact form
$(function() {

	// Get the form.
	var form = $('#contact-form');
	// Get the messages div.
	var formMessages = $('#form-output');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();
        $("#form-submit").text("Enviando...");

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('alert alert-danger');
			$(formMessages).addClass('alert alert-success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#patient').val('');
            $('#phone').val('');
			$('#email').val('');
			$('#info').val('');
            $("#form-submit").text("Enviar");
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('alert alert-success');
			$(formMessages).addClass('alert alert-danger');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
                $("#form-submit").text("Enviar");
			} else {
				$(formMessages).text('Oops! Ocurrió un error no se pudo enviar la forma.');
                $("#form-submit").text("Enviar");
			}
		});

	});

});
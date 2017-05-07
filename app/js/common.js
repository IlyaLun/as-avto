$(function() {

	$(".testimonials-head").equalHeights();
	//Анимированные цифры при скроле
	$(".s-adv").waypoint(function() {

		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1000,
			easing: 'swing',
			step: function() {
				$(".s-adv-item h3 span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".s-adv-item h3 span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "40px",
				numberStep: comma_separator_number_step},
				1000);
		}),
		this.destroy();
	}, {
		offset: '80%'
	});

	$("body").append('<div class="top"><i class="fa fa-angle-double-up">');

	$("body").on("click", ".top", function() {
		$("html, body").animate({scrollTop: 0}, "slow");
	});

// Magnific popup
	$(".popup").magnificPopup();

	//Toggle Mnu Function
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-nav").slideToggle();
		return false;
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	function heightses() {
		$(".testimonials-head").height("auto").equalHeights();
		$(".testimonials-descr").height("auto").equalHeights();
	}

	$(window).resize(function() {
		heightses();
	});

		heightses();

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".form-callback .succes").addClass(".active-popup");
			setTimeout(function() {
				// Done Functions
				$(".form-callback .succes").removeClass(".active-popup");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});

});
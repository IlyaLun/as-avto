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

// Magnific popup
	$(".popup").magnificPopup();

	// $(".popup").magnificPopup({
	// 	mainClass: 'mfp-zoom-in',
	// 	// delegate: 'a',
	// 	type: 'inline',
	// 	tLoading: '',
	// 	gallery:{
	// 		enabled:true,
	// 	},
	// 	removalDelay: 300,
	// 	callbacks: {
	// 		beforeChange: function() {
	// 			this.items[0].src = this.items[0].src + '?=' + Math.random();
	// 		},
	// 		open: function() {
	// 			$.magnificPopup.instance.next = function() {
	// 				var self = this;
	// 				self.wrap.removeClass('mfp-image-loaded');
	// 				setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
	// 			}
	// 			$.magnificPopup.instance.prev = function() {
	// 				var self = this;
	// 				self.wrap.removeClass('mfp-image-loaded');
	// 				setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
	// 			}
	// 		},
	// 		imageLoadComplete: function() {
	// 			var self = this;
	// 			setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
	// 		}
	// 	}
	// });


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
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
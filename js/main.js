(function ($) {

	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();

	var carousel = function () {
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});
		$('.carousel-destination').owlCarousel({
			center: false,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 4
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function () {

		$('#section-counter, .hero-wrap, .ftco-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber({
						number: num,
						numberStep: comma_separator_number_step
					}, 7000);
				});

			}

		}, {
			offset: '95%'
		});

	}
	counter();


	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, {
			offset: '95%'
		});
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	$('.checkin_date, .checkout_date').datepicker({
		'format': 'm/d/yyyy',
		'autoclose': true
	});




})(jQuery);

// Ambil elemen input jumlah pesanan
const jumlahPesananInput = document.getElementById('jumlah-pesanan');

// Ambil elemen tombol min
const btnMin = document.getElementById('btn-min');

// Tambahkan event click pada tombol min
btnMin.addEventListener('click', function () {
	// Ambil nilai jumlah pesanan
	let jumlahPesanan = jumlahPesananInput.value;

	// Kurangi jumlah pesanan sebanyak 1
	jumlahPesanan--;

	// Jika jumlah pesanan kurang dari 1, set nilai jumlah pesanan menjadi 1
	if (jumlahPesanan < 1) {
		jumlahPesanan = 1;
	}

	// Update nilai jumalh
	// Update nilai jumlah pesanan pada input
	jumlahPesananInput.value = jumlahPesanan;
});

// Ambil elemen tombol plus
const btnPlus = document.getElementById('btn-plus');

// Tambahkan event click pada tombol plus
btnPlus.addEventListener('click', function () {
	// Ambil nilai jumlah pesanan
	let jumlahPesanan = jumlahPesananInput.value;
	jumlahPesanan++;

	// Update nilai jumlah pesanan pada input
	jumlahPesananInput.value = jumlahPesanan;
});

const tanggalInput = document.getElementById('tanggal');

// Set nilai awal tanggal menjadi tanggal hari ini
tanggalInput.valueAsDate = new Date();
const tanggalHariIni = new Date();
tanggalInput.setAttribute('min', tanggalHariIniString);

// function tampilkanModal() {
// 	var modal = document.getElementById("modalPemesanan");
// 	modal.classList.add("show");
// }

// $("#myBtn").click(function (event) {
// 	event.preventDefault();
// 	// kode Anda di sini
//   });

//   function tampilkanModal() {
// 	var tanggal = document.getElementById("tanggal").value;
// 	var jumlah = document.getElementById("jumlah-pesanan").value;
// 	document.getElementById("tanggal_modal").value = tanggal;
// 	document.getElementById("jumlah_modal").value = jumlah;

// 	var modal = document.getElementById("modalPemesanan");
// 	modal.style.display = "block";
//   }

//   var span = document.getElementsByClassName("close")[0];
//   span.onclick = function () {
// 	var modal = document.getElementById("modalPemesanan");
// 	modal.style.display = "none";
//   }

//   window.onclick = function (event) {
// 	var modal = document.getElementById("modalPemesanan");
// 	if (event.target == modal) {
// 	  modal.style.display = "none";
// 	}
//   }


$('.bt-lihatPaket').on('click', function () {
	$(this).toggleClass('clicked');
});


function sendWhatsApp() {
	var namaPaket = document.getElementById("paket").value;
	var name = document.getElementById("nama").value;
	var wa = document.getElementById("numberWa").value;
	var email = document.getElementById("email").value;
	var namaHotel = document.getElementById("hotel").value;
	var tanggalPesanan = document.getElementById("tanggal").value;
	var jumlahPesanan = document.getElementById("jumlah-pesanan").value;

	var message = "Hai, Saya ingin memesan " + namaPaket + "%0Aatas Nama: " + name + "%0ANomer WA: " + wa + "%0AEmail: " + email + "%0APaket Hotel: " + namaHotel + "%0ATanggal Perjalanan: " + tanggalPesanan + "%0AJumlah Peserta: " + jumlahPesanan + "%20Orang";
	var url = "https://wa.me/" + 6281338422762 + "?text=" + message;
	window.open(url);
}

function sendWhatsAppNusa() {
	var namaPaket = document.getElementById("paket").value;
	var name = document.getElementById("nama").value;
	var wa = document.getElementById("numberWa").value;
	var email = document.getElementById("email").value;
	var tanggalPesanan = document.getElementById("tanggal").value;
	var jumlahPesanan = document.getElementById("jumlah-pesanan").value;

	var message = "Hai, Saya ingin memesan " + namaPaket + "%0Aatas Nama: " + name + "%0ANomer WA: " + wa + "%0AEmail: " + email + "%0APaket Hotel: " + tanggalPesanan + "%0AJumlah Peserta: " + jumlahPesanan + "%20Orang";
	var url = "https://wa.me/" + 6281338422762 + "?text=" + message;
	window.open(url);
}

$("form").submit(function (e) {
	e.preventDefault();
	var name = $("#name").val();
	var email = $("#email").val();
	var subject = $("#subject").val();
	var message = $("#message").val();
	var mailto = "mailto:dewa@balimutiaratours.id?subject=" + subject + "&body=" + message + " Name :" + name + " Email :" + email;
	window.location.href = mailto;
	$(".alert-success").addClass("show");
});
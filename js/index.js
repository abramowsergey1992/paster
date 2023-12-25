document.addEventListener("scroll", function (event) {
	if (window.scrollY > 50) {
		document.querySelector(".header").classList.add("_scroll");
	} else {
		document.querySelector(".header").classList.remove("_scroll");
	}
});

new AirDatepicker("#datapicker", {
	range: true,
	multipleDatesSeparator: " - ",
});

const swiper = new Swiper(".hotel__swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	spaceBetween: 20,
	slidesPerView: "auto",
	centeredSlides: true,
});

const swiper2 = new Swiper(".entertainment__swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
	breakpoints: {
		320: {
			spaceBetween: 12,
		},
		721: {
			spaceBetween: 30,
		},
	},
});

const swiper4 = new Swiper(".rooms__swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	spaceBetween: 20,
	slidesPerView: "auto",
	centeredSlides: true,
	breakpoints: {
		320: {
			spaceBetween: 16,
		},
		721: {
			spaceBetween: 20,
		},
	},
});

const swiper5 = new Swiper(".nav-swiper", {
	direction: "horizontal",
	loop: false,
	spaceBetween: 30,
	slidesPerView: "auto",
});

const swiper6 = new Swiper(".pills-service__swiper", {
	direction: "horizontal",
	loop: true,
	spaceBetween: 30,
	loopAdditionalSlides: 3,
	slidesPerView: "auto",
	centeredSlides: true,
	mousewheel: {
		forceToAxis: true,
	},
});

const swiper7 = new Swiper(".round__swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
	spaceBetween: 20,
	mousewheel: {
		forceToAxis: true,
	},
});

const swiper8 = new Swiper(".base-slider", {
	direction: "horizontal",
	loop: true,
	slidesPerView: "auto",
	spaceBetween: 20,
	centeredSlides: true,
	mousewheel: {
		forceToAxis: true,
	},
});

const swiper9 = new Swiper(".room-choice__swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
	spaceBetween: 20,
	navigation: {
		nextEl: ".room-choice-next",
		prevEl: ".room-choice-prev",
	},
});

const swiper10 = new Swiper(".hero__benefits-swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
	spaceBetween: 10,
});

const swiper11 = new Swiper(".base-detail__swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: 1,
	spaceBetween: 30,
	navigation: {
		nextEl: ".base-detail-swiper-button-next",
		prevEl: ".base-detail-swiper-button-prev",
	},
});

const swiper12 = new Swiper(".wedding-round-swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
});

const swiper13 = new Swiper(".bath-services__swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
	spaceBetween: 20,
	navigation: {
		nextEl: ".bath-button-next",
		prevEl: ".bath-button-prev",
	},
});

const swiper14 = new Swiper(".bath-accessories__swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
	spaceBetween: 30,
});

const swiper15 = new Swiper(".bath__room-param-swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: 1,
	spaceBetween: 20,
});

const swiper16 = new Swiper(".bath__room-param-swiper-1", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
	spaceBetween: 20,
});

const swiper17 = new Swiper(".alcove-round__swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
});

const swiper18 = new Swiper(".alcove__swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
});

const swiper19 = new Swiper(".contacts-page-round__swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
});
const swiper20 = new Swiper(".contacts-page-round__swiper-2", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
});

const swiper21 = new Swiper(".img-swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
	initialSlide: 1,
});

const swiper22 = new Swiper(".loyalty-round__swiper ", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
	preventClicks: false,
});

const swiper23 = new Swiper(".wedding-round-swiper-2", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
	preventClicks: false,
});

const swiper24 = new Swiper(".wedding-new-swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
	spaceBetween: 16,
	navigation: {
		nextEl: ".wedding-button-next",
		prevEl: ".wedding-button-prev",
	},
});

const swiper25 = new Swiper(".news__bottom-swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
	spaceBetween: 16,
	navigation: {
		nextEl: ".news__bottom-next",
		prevEl: ".news__bottom-prev",
	},
});

const swiper26 = new Swiper(".welcome-pills-swiper ", {
	direction: "horizontal",
	loop: false,
	slidesPerView: "auto",
	spaceBetween: 30,
});

const swiper50 = new Swiper(".base-detail__swiper", {
	direction: "horizontal",
	loop: false,
	slidesPerView: 1,
	spaceBetween: 30,
	navigation: {
		nextEl: ".base-detail-swiper-button-next",
		prevEl: ".base-detail-swiper-button-prev",
	},
});

new WOW().init();

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const closeButton = document.querySelector("#close-btn");
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
	e.preventDefault();
	popup.classList.toggle("open");
	hamb.classList.toggle("active");

	renderPopup();
}

function renderPopup() {
	popup.appendChild(menu);
}

closeButton.addEventListener("click", closeMenu);

function closeMenu() {
	popup.classList.remove("open");
	hamb.classList.remove("active");
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
	link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
	popup.classList.remove("open");
	hamb.classList.remove("active");
	body.classList.remove("noscroll");
}
function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
if (document.body.classList.contains("accommodation-page")) {
	document.addEventListener("DOMContentLoaded", function () {
		var accommodationSection = document.querySelector(".return-nav");

		var logo = document.querySelector(".fixed-logo");
		var headerLogo = document.querySelector(".header__logo");
		var headerTel = document.querySelector(".header__tel");
		var headerFlex = document.querySelector(".header__flexbox");
		var bar = document.querySelector(".bar");
		var bar2 = document.querySelector(".bar-2");
		var bar3 = document.querySelector(".bar-3");
		var headerBottom = document.querySelector(".header-fixed-bottom");
		var roomsNav = document.querySelector(".rooms__nav-fixed");
		var scrollUp = document.querySelector(".scroll-up");
		var telIcon = document.querySelector(".tel-icon");
		var reterunNav = document.querySelector(".return-nav");
		var headerBlock = document.querySelector(".header__block");
		var headerBlock1 = document.querySelector(".header__block-1");

		scrollUp.addEventListener("click", function () {
			accommodationSection.scrollIntoView({ behavior: "smooth" });
		});

		function handleScroll() {
			var accommodationOffsetTop = offset(accommodationSection).top - 150;

			var scrollPosition = window.pageYOffset;

			if (scrollPosition >= accommodationOffsetTop) {
				headerBottom.style.cssText = `
    display: block;
    padding: 20px 0 0;
    border-top: 1px solid #B0AAA1;
    transition: all 0.5s ease;
  `;
				// ... Other elements style changes ...
			} else {
				headerBottom.style.cssText = `
    display: '';
    padding: '';
    border-top: '';
    transition: all 0.5s ease;
  `;
				// ... Other elements style changes ...
			}

			if (scrollPosition >= accommodationOffsetTop) {
				headerBottom.style.display = "block";
				headerBottom.style.padding = "20px 0 0";
				headerBottom.style.borderTop = "1px solid #B0AAA1";
				headerFlex.style.padding = "0 0 20px";
				headerBlock.style.marginTop = "unset";
				headerBlock1.style.marginTop = "unset";

				// tabs //
				roomsNav.style.marginBottom = "0";
				roomsNav.classList.add("rooms__nav--sticky");
				headerBottom.appendChild(roomsNav);
			} else {
				headerBottom.style.display = "";
				headerBottom.style.padding = "";
				headerBottom.style.borderTop = "";
				headerFlex.style.padding = "";
				headerBlock.style.marginTop = "";
				headerBlock1.style.marginTop = "";

				// tabs //
				roomsNav.style.marginBottom = "";
				roomsNav.classList.remove("rooms__nav--sticky");
				reterunNav.appendChild(roomsNav);
			}
		}

		handleScroll(); // Выполняем проверку при загрузке страницы

		window.addEventListener("scroll", handleScroll); // Обработка события при прокрутке страницы

		var navSwiper = document.querySelector(".nav-swiper");
		var buttons = navSwiper.querySelectorAll(".rooms__btn");

		buttons.forEach(function (button) {
			button.addEventListener("click", function () {
				buttons.forEach(function (btn) {
					if (btn !== button) {
						btn.classList.remove("active");
					}
				});
				button.classList.add("active");
			});
		});
	});
}

if (document.body.classList.contains("bath-page")) {
	var tabButtons = document.querySelectorAll(".sale-tab__btn");
	var tabContents = document.querySelectorAll(".tab-content");
	let ACTIVE_TAB_ID = 1;

	tabContents.forEach((el) => {
		if (el.classList.contains("tab_none")) {
			el.style.display = "none";
		}
	});

	tabButtons.forEach(function (button) {
		button.addEventListener("click", function () {
			var tabId = button.getAttribute("id");

			// Добавить класс active__tab к активной кнопке таба
			tabButtons.forEach(function (btn) {
				btn.classList.remove("active__tab1");
			});
			button.classList.add("active__tab1");

			// Показать контент, соответствующий нажатой кнопке

			tabContents.forEach(function (content) {
				var contentTabId = content.getAttribute("data-tab");

				if (contentTabId === tabId) {
					content.classList.remove("tab_none");

					setTimeout(() => (content.style.display = "block"), 300);
				} else {
					content.classList.add("tab_none");

					setTimeout(() => (content.style.display = "none"), 300);
				}
			});
		});
	});

	// Проверить, есть ли кнопка с классом active__tab при загрузке страницы
	var activeTabButton = document.querySelector(".sale-tab__btn.active__tab1");

	if (activeTabButton) {
		var activeTabId = activeTabButton.getAttribute("id");
		var activeTabContent = document.querySelector(
			'.tab-content[data-tab="' + activeTabId + '"]'
		);

		activeTabContent.style.display = "block";
	}

	var tabButtons1 = document.querySelectorAll(".bath-accessories-tab__btn");
	var tabContents1 = document.querySelectorAll(
		".bath-accessories-tab-content"
	);

	tabContents1.forEach((el) => {
		if (el.classList.contains("tab_none")) {
			el.style.display = "none";
		}
	});

	tabButtons1.forEach(function (button) {
		button.addEventListener("click", function () {
			var tabId = button.getAttribute("id");

			// Добавить класс active__tab к активной кнопке таба
			tabButtons1.forEach(function (btn) {
				btn.classList.remove("active__tab1");
			});
			button.classList.add("active__tab1");

			// Показать контент, соответствующий нажатой кнопке
			tabContents1.forEach(function (content) {
				var contentTabId = content.getAttribute("data-tab");

				if (contentTabId === tabId) {
					content.classList.remove("tab_none");

					setTimeout(() => (content.style.display = "block"), 300);
				} else {
					content.classList.add("tab_none");

					setTimeout(() => (content.style.display = "none"), 300);
				}
			});
		});
	});

	// Проверить, есть ли кнопка с классом active__tab при загрузке страницы
	var activeTabButton1 = document.querySelector(
		".bath-accessories-tab__btn.active__tab1"
	);

	if (activeTabButton1) {
		var activeTabId = activeTabButton.getAttribute("id");
		var activeTabContent = document.querySelector(
			'.tab-content[data-tab="' + activeTabId + '"]'
		);

		activeTabContent.style.display = "block";
	}
}

if (document.body.classList.contains("gaiety-page")) {
	var tabButtons = document.querySelectorAll(".sale-tab__btn");
	var tabContents = document.querySelectorAll(".tab-content");

	tabContents.forEach((el) => {
		if (el.classList.contains("tab_none")) {
			el.style.display = "none";
		}
	});

	tabButtons.forEach(function (button) {
		button.addEventListener("click", function () {
			var tabId = button.getAttribute("id");

			// Добавить класс active__tab к активной кнопке таба
			tabButtons.forEach(function (btn) {
				btn.classList.remove("active__tab");
			});
			button.classList.add("active__tab");

			// Показать контент, соответствующий нажатой кнопке
			tabContents.forEach(function (content) {
				var contentTabId = content.getAttribute("data-tab");

				if (contentTabId === tabId) {
					content.style.display = "block";

					setTimeout(() => content.classList.remove("tab_none"), 300);
				} else {
					content.classList.add("tab_none");

					setTimeout(() => (content.style.display = "none"), 300);
				}
			});
		});
	});

	// Проверить, есть ли кнопка с классом active__tab при загрузке страницы
	var activeTabButton = document.querySelector(".sale-tab__btn.active__tab");

	if (activeTabButton) {
		var activeTabId = activeTabButton.getAttribute("id");
		var activeTabContent = document.querySelector(
			'.tab-content[data-tab="' + activeTabId + '"]'
		);

		activeTabContent.style.display = "block";
	}

	function handleViewportChange(viewport) {
		if (viewport.matches) {
			// Ваш код для ширины экрана 576 пикселей или меньше
			const swiper9 = new Swiper(".sale__swiper", {
				direction: "horizontal",
				loop: false,
				slidesPerView: "auto",
				spaceBetween: 30,
			});

			// Добавьте здесь вашу логику
		}
	}

	var viewport576 = window.matchMedia("(max-width: 576px)");
	handleViewportChange(viewport576); // Обработка исходного положения окна просмотра

	// Добавление обработчика события для отслеживания изменений в окне просмотра
	viewport576.addEventListener("change", handleViewportChange);
}

if (document.body.classList.contains("main-page")) {
	var navSwiper = document.querySelector(".nav-swiper");
	// var buttons = navSwiper.querySelectorAll(".rooms__btn");

	// buttons.forEach(function (button) {
	// 	button.addEventListener("click", function () {
	// 		buttons.forEach(function (btn) {
	// 			if (btn !== button) {
	// 				btn.classList.remove("active");
	// 			}
	// 		});
	// 		button.classList.add("active");
	// 	});
	// });
}

if (document.body.classList.contains("loyalty-page")) {
	var header = document.querySelector(".header");
	var table = document.getElementById("table");
	var fixedLogo = document.querySelector(".header-fixed-logo");
	var logo = document.querySelector(".header__logo-svg");
	var headerFlexbox = document.querySelector(".header__flexbox");
	var headerFixedMenu = document.querySelector(".header__fixed-menu");

	function handleScroll() {
		var tableOffset = table.offsetTop;
		var scrollPosition =
			window.pageYOffset || document.documentElement.scrollTop;
		var windowWidth = window.innerWidth;

		if (scrollPosition >= tableOffset && windowWidth >= 1240) {
			header.style.position = "fixed";
			header.style.top = "0";
			header.style.width = "100%";
			header.style.backgroundColor = "#FFF";
			header.style.padding = "25px 0 0";
			headerFlexbox.style.borderBottom = "1px solid #B5B6B7";
			headerFlexbox.style.padding = "0 0 25px";
			headerFixedMenu.style.display = "flex";
			fixedLogo.style.display = "block";
			logo.style.display = "none";
		} else {
			header.style.position = "static";
			header.style.top = "";
			header.style.width = "";
			header.style.backgroundColor = "";
			header.style.padding = "";
			headerFlexbox.style.borderBottom = "";
			headerFlexbox.style.padding = "";
			headerFixedMenu.style.display = "";
			fixedLogo.style.display = "";
			logo.style.display = "";
		}
	}

	window.addEventListener("scroll", handleScroll);
}

if (document.body.classList.contains("room-page")) {
	var tabButtons = document.querySelectorAll(".sale-tab__btn");
	var tabContents = document.querySelectorAll(".tab-content");

	tabButtons.forEach(function (button) {
		button.addEventListener("click", function () {
			var tabId = button.getAttribute("id");

			// Добавить класс active__tab к активной кнопке таба
			tabButtons.forEach(function (btn) {
				btn.classList.remove("active__tab");
			});
			button.classList.add("active__tab");

			// Показать контент, соответствующий нажатой кнопке
			tabContents.forEach(function (content) {
				var contentTabId = content.getAttribute("data-tab");

				if (contentTabId === tabId) {
					content.style.display = "block";
				} else {
					content.style.display = "none";
				}
			});
		});
	});

	// Проверить, есть ли кнопка с классом active__tab при загрузке страницы
	var activeTabButton = document.querySelector(".sale-tab__btn.active__tab");

	if (activeTabButton) {
		var activeTabId = activeTabButton.getAttribute("id");
		var activeTabContent = document.querySelector(
			'.tab-content[data-tab="' + activeTabId + '"]'
		);

		activeTabContent.style.display = "block";
	}

	function handleViewportChange(viewport) {
		if (viewport.matches) {
			// Ваш код для ширины экрана 576 пикселей или меньше
			const swiper9 = new Swiper(".sale__swiper", {
				direction: "horizontal",
				loop: false,
				slidesPerView: "auto",
				spaceBetween: 30,
			});

			// Добавьте здесь вашу логику
		}
	}

	var viewport576 = window.matchMedia("(max-width: 576px)");
	handleViewportChange(viewport576); // Обработка исходного положения окна просмотра

	// Добавление обработчика события для отслеживания изменений в окне просмотра
	viewport576.addEventListener("change", handleViewportChange);
}

if (document.body.classList.contains("sale-page")) {
	var tabButtons = document.querySelectorAll(".sale-tab__btn");
	var tabContents = document.querySelectorAll(".tab-content");

	tabContents.forEach((el) => {
		if (el.classList.contains("tab_none")) {
			el.style.display = "none";
		}
	});

	tabButtons.forEach(function (button) {
		button.addEventListener("click", function () {
			var tabId = button.getAttribute("id");

			// Добавить класс active__tab к активной кнопке таба
			tabButtons.forEach(function (btn) {
				btn.classList.remove("active__tab1");
			});
			button.classList.add("active__tab1");

			// Показать контент, соответствующий нажатой кнопке

			tabContents.forEach(function (content) {
				var contentTabId = content.getAttribute("data-tab");

				if (contentTabId === tabId) {
					content.style.display = "block";

					setTimeout(() => content.classList.remove("tab_none"), 300);
				} else {
					content.classList.add("tab_none");

					setTimeout(() => (content.style.display = "none"), 300);
				}
			});
		});
	});

	// Проверить, есть ли кнопка с классом active__tab при загрузке страницы
	var activeTabButton = document.querySelector(".sale-tab__btn.active__tab1");

	if (activeTabButton) {
		var activeTabId = activeTabButton.getAttribute("id");
		var activeTabContent = document.querySelector(
			'.tab-content[data-tab="' + activeTabId + '"]'
		);

		activeTabContent.style.display = "block";
	}

	function handleViewportChange(viewport) {
		if (viewport.matches) {
			// Ваш код для ширины экрана 576 пикселей или меньше
			const swiper9 = new Swiper(".sale__swiper", {
				direction: "horizontal",
				loop: false,
				slidesPerView: "auto",
				spaceBetween: 30,
			});

			// Добавьте здесь вашу логику
		}
	}

	var viewport576 = window.matchMedia("(max-width: 576px)");
	handleViewportChange(viewport576); // Обработка исходного положения окна просмотра

	// Добавление обработчика события для отслеживания изменений в окне просмотра
	viewport576.addEventListener("change", handleViewportChange);
}

(() => {
	"use strict";

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	Array.from(forms).forEach((form) => {
		form.addEventListener(
			"submit",
			(event) => {
				event.preventDefault();
				event.stopPropagation();

				if (form.checkValidity()) {
					sendForm(form);
				}

				form.classList.add("was-validated");
			},
			false
		);
	});
})();

if (document.body.classList.contains("welcome-page")) {
	var tabButtons = document.querySelectorAll(".sale-tab__btn");
	var tabContents = document.querySelectorAll(".tab-content");

	tabButtons.forEach(function (button) {
		button.addEventListener("click", function () {
			var tabId = button.getAttribute("id");

			// Добавить класс active__tab к активной кнопке таба
			tabButtons.forEach(function (btn) {
				btn.classList.remove("active__tab2");
			});
			button.classList.add("active__tab2");

			// Показать контент, соответствующий нажатой кнопке
			tabContents.forEach(function (content) {
				var contentTabId = content.getAttribute("data-tab");

				if (contentTabId === tabId) {
					content.style.display = "block";
				} else {
					content.style.display = "none";
				}
			});
		});
	});

	// Проверить, есть ли кнопка с классом active__tab при загрузке страницы
	var activeTabButton = document.querySelector(".sale-tab__btn.active__tab2");

	if (activeTabButton) {
		var activeTabId = activeTabButton.getAttribute("id");
		var activeTabContent = document.querySelector(
			'.tab-content[data-tab="' + activeTabId + '"]'
		);

		activeTabContent.style.display = "block";
	}

	function handleViewportChange(viewport) {
		if (viewport.matches) {
			// Ваш код для ширины экрана 576 пикселей или меньше
			const swiper9 = new Swiper(".sale__swiper", {
				direction: "horizontal",
				loop: false,
				slidesPerView: "auto",
				spaceBetween: 30,
			});

			// Добавьте здесь вашу логику
		}
	}

	var viewport576 = window.matchMedia("(max-width: 576px)");
	handleViewportChange(viewport576); // Обработка исходного положения окна просмотра

	// Добавление обработчика события для отслеживания изменений в окне просмотра
	viewport576.addEventListener("change", handleViewportChange);
}

const fonds = document.querySelectorAll(".number-fond");
fonds.forEach((fond) => {
	const filters = fond.querySelectorAll(".number-fond__filter");
	const items = fond.querySelectorAll(".number-fond__item");
	const swiper = new Swiper(fond.querySelector(".number-fond__slider"), {
		direction: "horizontal",
		slidesPerView: "auto",
		spaceBetween: 16,
		centeredSlides: true,
		loop: true,
	});
	filters.forEach((filter) => {
		filter.addEventListener("click", function () {
			let q = filter.dataset.filter;
			filters.forEach((btn) => {
				btn.classList.remove("active");
			});
			filter.classList.add("active");

			if (q == "all") {
				items.forEach((item) => {
					item.classList.remove("hidden");
					item.classList.add("swiper-slide");
				});
			} else {
				items.forEach((item) => {
					if (q == item.dataset.filter) {
						item.classList.remove("hidden");
						item.classList.add("swiper-slide");
					} else {
						item.classList.add("hidden");
						item.classList.remove("swiper-slide");
					}
				});
			}

			swiper.update();
		});
	});
});
const videos = document.querySelectorAll(".video-modal");
videos.forEach((video) => {
	video.addEventListener("hidden.bs.modal", (event) => {
		video
			.querySelector("iframe")
			.setAttribute(
				"src",
				video.querySelector("iframe").getAttribute("src")
			);
	});
});
document.querySelectorAll(".more-block").forEach((block) => {
	const count = block.dataset.count;
	const btn = block.querySelector(".more-block__btn");

	let i = 1;
	block.querySelectorAll(".more-block__item").forEach((item) => {
		if (i > count) {
			item.classList.add("_hidden");
		}
		i++;
	});
	if (block.querySelectorAll(".more-block__item._hidden").length == 0) {
		btn.classList.add("_hidden");
	}
	btn.addEventListener("click", function () {
		let i = 1;
		block.querySelectorAll(".more-block__item._hidden").forEach((item) => {
			if (i <= count) {
				item.classList.remove("_hidden");
			}
			i++;
		});
		if (block.querySelectorAll(".more-block__item._hidden").length == 0) {
			btn.classList.add("_hidden");
		}
	});
});

async function sendForm(form) {
	let json;
	const modalSuccess = document.querySelector(
		`.modal[data-id="${form.dataset.idSuccess}"]`
	);
	const modalFailed = document.querySelector(
		`.modal[data-id="${form.dataset.idFailed}"]`
	);

	const response = await fetch(form.getAttribute("action"), {
		method: "POST",
		body: new FormData(form),
	});

	if (!response.ok) {
		console.log("Fetch failed");
		openModal(form.dataset.idFailed);
		return;
	}

	// JSON parsing
	try {
		json = await response.json();
	} catch (error) {
		console.log("JSON parsing error");
		openModal(form.dataset.idFailed);
		return;
	}

	if (json) {
		if (json.success) {
			openModal(form.dataset.idSuccess);
			setTimeout(() => {
				closeModal(form.dataset.id);
			}, 300);
		} else {
			openModal(form.dataset.idFailed);
		}
	}
}

const modals = {};
document.querySelectorAll(".modal[data-id]").forEach((el) => {
	modals[el.dataset.id] = new bootstrap.Modal(el);
});

function openModal(id) {
	try {
		modals[id].show();
	} catch (error) {}
}

function closeModal(id) {
	try {
		modals[id].hide();
	} catch (error) {}
}

document.querySelectorAll(".js-close-modal").forEach((btn) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		closeModal(btn.dataset.modalId);
	});
});

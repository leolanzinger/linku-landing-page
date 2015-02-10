var red = '#F44336';
var pink = '#E91E63'
var purple = '#9C27B0';
var deeppurple = '#673AB7';
var indigo = '#3F51B5'
var blue = '#2196F3';
var lightblue = '#03A9F4';
var cyan = '#00BCD4';
var teal = '#009688';
var green = '#4CAF50';
var lightgreen = '#8BC34A';
var lime = '#CDDC39';
var yellow = '#FFEB3B';
var amber = '#FFC107';
var orange = '#FF9800';
var deeporange = '#FF5722';
var bluegray = '#607D8B';

function changePrimary(index) {
	switch(index) {
		case 0:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-red");
			break;
		case 1:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-pink");
			break;
		case 2:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-purple");
			break;
		case 3:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-deeppurple");
			break;
		case 4:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-indigo");
			break;
		case 5:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-blue");
			break;
		case 6:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-lightblue");
			break;
		case 7:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-cyan");
			break;
		case 8:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-teal");
			break;
		case 9:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-green");
			break;
		case 10:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-lightgreen");
			break;
		case 11:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-lime");
			break;
		case 12:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-yellow");
			break;
		case 13:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-amber");
			break;
		case 14:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-orange");
			break;
		case 15:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-deeporange");
			break;
		case 16:
			removeBackgroundClasses();
			$('.coloured-row').addClass("icon-bluegray");
			break;
	}
}

function changeSecondary(index) {
	switch(index) {
		case 0:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-red");
			break;
		case 1:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-pink");
			break;
		case 2:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-purple");
			break;
		case 3:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-deeppurple");
			break;
		case 4:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-indigo");
			break;
		case 5:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-blue");
			break;
		case 6:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-lightblue");
			break;
		case 7:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-cyan");
			break;
		case 8:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-teal");
			break;
		case 9:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-green");
			break;
		case 10:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-lightgreen");
			break;
		case 11:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-lime");
			break;
		case 12:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-yellow");
			break;
		case 13:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-amber");
			break;
		case 14:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-orange");
			break;
		case 15:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-deeporange");
			break;
		case 16:
			removeSecondaryBackgroundClasses();
			$('.secondary-color').addClass("icon-bluegray");
			break;
	}
}

function removeBackgroundClasses() {
	$('.coloured-row').removeClass("icon-red");	
	$('.coloured-row').removeClass("icon-pink");
	$('.coloured-row').removeClass("icon-purple");
	$('.coloured-row').removeClass("icon-deeppurple");
	$('.coloured-row').removeClass("icon-indigo");
	$('.coloured-row').removeClass("icon-blue");
	$('.coloured-row').removeClass("icon-lightblue");
	$('.coloured-row').removeClass("icon-cyan");
	$('.coloured-row').removeClass("icon-teal");
	$('.coloured-row').removeClass("icon-green");
	$('.coloured-row').removeClass("icon-lightgreen");
	$('.coloured-row').removeClass("icon-lime");
	$('.coloured-row').removeClass("icon-yellow");
	$('.coloured-row').removeClass("icon-amber");
	$('.coloured-row').removeClass("icon-orange");
	$('.coloured-row').removeClass("icon-deeporange");
	$('.coloured-row').removeClass("icon-bluegray");
}

function removeSecondaryBackgroundClasses() {
	$('.secondary-color').removeClass("icon-red");	
	$('.secondary-color').removeClass("icon-pink");
	$('.secondary-color').removeClass("icon-purple");
	$('.secondary-color').removeClass("icon-deeppurple");
	$('.secondary-color').removeClass("icon-indigo");
	$('.secondary-color').removeClass("icon-blue");
	$('.secondary-color').removeClass("icon-lightblue");
	$('.secondary-color').removeClass("icon-cyan");
	$('.secondary-color').removeClass("icon-teal");
	$('.secondary-color').removeClass("icon-green");
	$('.secondary-color').removeClass("icon-lightgreen");
	$('.secondary-color').removeClass("icon-lime");
	$('.secondary-color').removeClass("icon-yellow");
	$('.secondary-color').removeClass("icon-amber");
	$('.secondary-color').removeClass("icon-orange");
	$('.secondary-color').removeClass("icon-deeporange");
	$('.secondary-color').removeClass("icon-bluegray");
}

function setDarkPrimary(dark) {
	if (dark) {
		$('.coloured-row').removeClass('light-text');
		$('.coloured-row').addClass('dark-text');
		$('.logo-color-change').attr("src","assets/img/svg/linku-logo-black.svg");
		$('.business-color-change').attr("src","assets/img/business-black.png");
	}
	else {
		$('.coloured-row').removeClass('dark-text');
		$('.coloured-row').addClass('light-text');
		$('.logo-color-change').attr("src","assets/img/svg/linku-logo-white.svg");
		$('.business-color-change').attr("src","assets/img/business-white.png");
	}
}

function setDarkSecondary(dark) {
	if (dark) {
		$('.secondary-color').removeClass('light-text');
		$('.secondary-color').addClass('dark-text');
	}
	else {
		$('.secondary-color').removeClass('dark-text');
		$('.secondary-color').addClass('light-text');
	}
}
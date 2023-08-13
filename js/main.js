const burgerButton = document.querySelector('.burger-menu');
const menuItems = document.querySelectorAll('.menu-item');
const backgroundImages = document.querySelector('.background');
burgerButton.addEventListener('click', () => {
	document.querySelector('.header').classList.toggle('open')
})
menuItems.forEach((item) => {
	item.addEventListener('click', () => {
		document.querySelector('.clock-text').style.textShadow = ' 1px 1px 20px black'
		document.querySelectorAll('.background').forEach((item) => {
			item.classList.add('hidden');
			item.classList.remove('active');
		})
		document.querySelector('#' + item.id + '-img').classList.remove('hidden');
		document.querySelector('#' + item.id + '-img').classList.add('active');
	})
})
window.onload = function() {
	window.setInterval(function (){
		let date = new Date();
		let hours = date.getHours();
		let min = date.getMinutes();
		let sec = date.getSeconds();
		if(document.querySelector('.active').id == 'la-img') hours = date.getUTCHours() -7;
		if(document.querySelector('.active').id == 'new-york-img') hours = date.getUTCHours() -4;
		if(document.querySelector('.active').id == 'london-img') hours = date.getUTCHours();
		if(document.querySelector('.active').id == 'moscow-img') hours = date.getUTCHours() +3;
		if(document.querySelector('.active').id == 'beijing-img') hours = date.getUTCHours() +8;
		if(document.querySelector('.active').id == 'tokyo-img') hours = date.getUTCHours() +9;
		if(hours >= 24) hours = hours -24;
		if (hours < 10) hours = "0" + hours;
		if (min < 10) min = "0" + min;
		if (sec < 10) sec = "0" + sec;
		let clock = hours + ':' + min + ':' + sec;
		document.querySelector('.clock-text').innerText = clock;
	}, 100);
}

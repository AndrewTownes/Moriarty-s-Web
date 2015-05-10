// JavaScript Document


var menuA = document.getElementById('menuA');
	var menuB = document.getElementById('menuB');
	var tabA = document.getElementById('tabA');
	var tabB = document.getElementById('tabB');
	tabA.addEventListener('click', function() {
		if(menuA.classList.contains('active')){
			return;
		} else {
			menuB.classList.remove('active');
			menuA.classList.add('active');	
		}
		
	});
	tabB.addEventListener('click', function() {
		if(menuB.classList.contains('active')){
			return;
		} else {
			menuA.classList.remove('active');
			menuB.classList.add('active');	
		}
		
	});
function init(showAtStartup){
	navigateView(showAtStartup);
	document.querySelector('[data-target]').addEventListener('click', function(){
		navigateView(this.dataset.target);
	});
};
function navigateView(sectionToShow) {
	let sections = document.querySelector('[data-lang]');
	let error = true;
	for (let i = 0; i < sections.length; i++) {
		if (sections[i].dataset.lang == sectionToShow) {
			debugger;
		}
	
	}
};
	init('home');


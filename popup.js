function newScript() {
	chrome.tabs.executeScript({
		file: 'background.js'
	});
}
FSBL.addEventListener('onReady', function () {
	//drag and drop receiver
	FSBL.Clients.WindowClient.setWindowTitle("Lonely Earth");
	FSBL.Clients.DragAndDropClient.addReceivers({
		receivers: [
			{
				type: 'message',
				handler: function (err, response) {
					if (!err) {
						var theDiv = document.getElementById('messageHere');
						theDiv.innerHTML = "Hello, World!";
						document.getElementById("earth").src = "happyEarth.svg";
						FSBL.Clients.WindowClient.setWindowTitle("Happy Earth");
					};
				}
			}
		]
});
})
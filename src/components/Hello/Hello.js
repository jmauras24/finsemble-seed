FSBL.addEventListener('onReady', function () {
	FSBL.Clients.DragAndDropClient.setEmitters({
		emitters: [
			{
				type: "message",
				data: "Hello, World!"
			}
		]
	});
});
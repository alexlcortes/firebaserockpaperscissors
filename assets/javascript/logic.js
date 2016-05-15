var nameData = new Firebase("https://dazzling-torch-1929.firebaseio.com/");
var nameSaved = "";

$("#save-name").on("click", function() {

	console.log("Saved Clicked.")

	nameSaved = $('#save-name').val().trim();

	nameData.set({
			name: nameSaved
		});

	alert(nameSaved + " Saved.");
});


nameData.on("value", function(snapshot) {

	console.log(snapshot.val());

	$("#display-name").html(snapshot.val().nameSaved);

	nameSaved = snapshot.val().name;

});
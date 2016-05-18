$(document).ready(function() {

// firebase link
var url ='https://trainchoochootime.firebaseio.com/'

var dataRef = new Firebase(url);

// form values
var trainName = "";
var destination = "";
var firstTrainTime = 0;
var frequency = 0;


// capture train information from button click
$("#submitTrain").on("click", function() {

	trainName = $('#nameinput').val().trim();
	destination = $('#destinationinput').val().trim();
	firstTrainTime = $('#timeinput').val().trim();
	frequency = $('#frequencyinput').val().trim();


	// code to push to firebase
	dataRef.push({
		trainName: trainName,
		destination: destination,
		firstTrainTime: firstTrainTime,
		frequency: frequency,
		dateAdded: Firebase.ServerValue.TIMESTAMP
	})

	return false;

});


dataRef.on("child_added", function(childSnapshot) {
	// Log everything that's coming out of snapshot
	console.log(childSnapshot.val().trainName);
	console.log(childSnapshot.val().destination);
	console.log(childSnapshot.val().firstTrainTime);
	console.log(childSnapshot.val().frequency);
	console.log(childSnapshot.val().joinDate);


// I am not sure how this will pan out
$('.tname').append("<div class='row'><span id='trainname'> "
	+childSnapshot.val().trainName+" </span></div>")

$('.destinat').append("<div class='row'><span id='destin'> "
	+childSnapshot.val().destination+" </span></div>")

$('.frequent').append("<div class='row'><span id='frequen'> "
	+childSnapshot.val().frequency+" </span></div>")






	// " </span><span id='destination'> "
	// +childSnapshot.val().destination+" </span><span id='firstTrainTime'> "
	// +childSnapshot.val().firstTrainTime+" </span><span id='frequency'> "
	// +childSnapshot.val().frequency+" </span></div>")

}, function(errorObject) {

});

// dataRef.orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
// 	$('#train-name').html(snapshot.val().trainName);
// 	$('#destination').html(snapshot.val().destination);
// 	$('#frequency').html(snapshot.val().frequency);
// })

});


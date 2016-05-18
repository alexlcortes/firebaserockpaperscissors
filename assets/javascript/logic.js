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
	firstTrainTime = moment($('#timeinput').val().trim(), "HH:mm").format("HH:mm");
	frequency = $('#frequencyinput').val().trim();


	// code to push to firebase
	dataRef.push({
		trainName: trainName,
		destination: destination,
		firstTrainTime: firstTrainTime,
		frequency: frequency,
		dateAdded: Firebase.ServerValue.TIMESTAMP
	})

	// Hopefully clears the boxes after values submited
	$("#trainName").val("");
	$("#trainDest").val("");
	$("#trainTime").val("");
	$("#trainFreq").val("");



	return false;

});

dataRef.on("child_added", function(childSnapshot) {
	// Log everything that's coming out of snapshot
	console.log(childSnapshot.val().trainName);
	console.log(childSnapshot.val().destination);
	console.log(childSnapshot.val().firstTrainTime);
	console.log(childSnapshot.val().frequency);
	console.log(childSnapshot.val().joinDate);


	var nextArrival = moment().diff(moment.firstTrainTime);
	var away = moment().diff(moment.firstTrainTime);


	// Use first arrival time and frequency to calculate the next arrival time
	var nextArr = moment().diff(moment.unix(firstTrainTime, 'X'), "months");


// I am not sure how this will pan out
$('.tname').append("<div class='row'><span id='trainname'> "
	+childSnapshot.val().trainName+" </span></div>")

$('.destinat').append("<div class='row'><span id='destin'> "
	+childSnapshot.val().destination+" </span></div>")

$('.frequent').append("<div class='row'><span id='frequen'> "
	+childSnapshot.val().frequency+" </span></div>")

});
});

// console.log(nextArrival);


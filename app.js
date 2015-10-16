var carSearch;

$(document).ready(function(){

	$("body").on('click', '.submit', function(event){ //Action initiated on clicking the search button
			event.preventDefault();
		    $("#yearMakeModel").empty();// clear old values for a new search
			carSearch = $('#searchCar').val(); //assigning the search string to a variable
		    carSearch = carSearch.replace(/[']+/g, '');// removes single quotes(')
			search(carSearch); //Calling the search function


	});

// Function to append the data to the dom
function appendToDom(data){
		console.log(data);
		$("#yearMakeModel").append("<p><h3>" + "Search Results: " + "</p></h3>");
	    if(data.Trims.length==0){
			$("#yearMakeModel").append("<p><h3>" + "Car not found! Please try again" + "</p></h3>"); // Error handling for bad user data
		}
		else{
			$("#yearMakeModel").append("<p><h3>" + "Total number of cars found meeting the criteria: "+data.Trims.length + "</p></h3>");
		}
	   for(var i=0; i<data.Trims.length; i++) { //looping through the Trims array contained in the data object
		   var car = data.Trims[i]; // assigning to a variable helps in a more cleaner looking elegant code
		   var engine= parseInt(car.model_engine_cc)/1000;// converting the engine cc from a string to a number and getting the value in liters
		   engine= engine.toFixed(1);// rounding to one decimal place

		   if(car.model_trim===""){
			   car.model_trim= "No trim name found"; // When there is no trim name found
		   }
		   //Appending the car information to the DOM
		   $("#yearMakeModel").append("<p><h2>" + car.model_year + " " + car.make_display+ " " + car.model_name+"</h2></p>" +
		  "<h3>" + car.model_trim+"</h3>" +
		   "<p><h4>" +"Engine: "+ engine+"L" + " " + car.model_engine_type + car.model_engine_cyl + "</h4></p>" +
		   "<p><h4>" +"Transmission: " + car.model_transmission_type + "</h4></p>"+
		   "<p><h4>" +"Horsepower: " + car.model_engine_power_ps +"hp"+ "</h4></p>" );

	   }
};

// Function to make ajax calls to the api
function search(query){
	query= query.toLowerCase();//converts the string to all lowercase to make sure the model_make_id is matched
	$.ajax({
		type: 'GET',
		dataType: 'json',
		crossDomain: true,
		url:'http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&keyword='+ query ,
		success: function(data){                          
			appendToDom(data);
		},
		error: function (xhr, textStatus, errorThrown) {
                         console.log(textStatus);
                     },
        complete: function() {
	        console.log("Ajax complete!");
	    }
	});
}


});

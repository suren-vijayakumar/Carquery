
Problem Desc: In this challenge the task is to search the carquery API and display the search results for the car namely its year, make, model, trim, engine type and displacement, transmission, horsepower to the Document Object Model(DOM). 
Acceptance Criteria: Variations in year format must be handled. Multiple trims for a single car must be displayed as a separate result. Errors must be handled gracefully.

Tools used: Javascript, Ajax, jQuey, HTML, CSS

Solution: Input is passed  as a string via a single text box in the index.html page. When the submit button is clicked the string is passed to the javascript file and is stored inside a variable. It is then cleared of any quotes(') using a standard javascript function. Then a search function is called with the cleaned string as a parameter.

Inside the search function, the string is then made all lowercase. This is to make sure, that the model_make_id field is matched.  An ajax call to the carquery api is then initiated with the search string appended.  Upon successful retrieval of the data object from the api, a function
call is made to the appendtodom function. Error handlers are in place to handle server errors.

Inside the appendtodom function, a bad query requested is handled with an error message. Then the data.Trims array is looped through and the  the information for car year, make, model, trim, engine type and displacement, transmission, horsepower is appended to the dom.

Finally the DOM is styled using css and bootstrap.

Challenges: On going though the carquery documentation, it wasn't immediately clear which html link was the correct api link. On doing some research it turned out all the info for this exercise was in the GetTrims link. 
For getting the engine info( type and displacement) a few calculations had to be made.
Also it turns out car make in the search string has to match the model_make_id key in the returned car object. This helped in returning the 92 Pontiac Firebird where the car make was in lowercase






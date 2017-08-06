var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];
// var stepTerm;

steps.forEach(function(value,index,array) {
  var stepTerm
	switch(index) {
		case 0:
				stepTerm = "First";
				break;
		case array.length -1:
				stepTerm	= "Finally";
				break;
		default:
				stepTerm = "Then";
	}
console.log(stepTerm + " we " + array[index]);
});

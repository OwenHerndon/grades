var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;
//var letter = [A,B,C,D,F];

//scores given to sort
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
//console.log(scores);

//if(scores >= 91){
//	console.log(scores[i]);
//}

for (var i = 0; i < scores.length; i++) {
	//console.log(scores[i]);
	
	if(100 >= scores[i] && scores[i] >= 91){
		console.log(scores[i], "A");
		gradeA++;
	}

	if(90 >= scores[i] && scores[i] >= 81){
		console.log(scores[i], "B");
		gradeB++;
	}

	if(80 >= scores[i] && scores[i] >= 71){
		console.log(scores[i], "C");
		gradeC++;
	}

	if(70 >= scores[i] && scores[i] >= 61){
		console.log(scores[i], "D");
		gradeD++;
	}

	if(60 >= scores[i] && scores[i] >= 50){
		console.log(scores[i], "F");
		gradeF++;
	}
	
}
console.log("A",gradeA,"B",gradeB,"C",gradeC,"D",gradeD,"F",gradeF);

//lowesr grade math.min

//highest grade math.max
var max = Math.max(...scores);
console.log("the highest score is ",max);

var min = Math.min(...scores);
console.log("the lowest score is ",min);

console.log("The lowest score is ", Math.min(...scores));
console.log("The highest score is ", Math.max(...scores));
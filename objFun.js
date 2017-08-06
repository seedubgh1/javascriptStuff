var mod = {}
mod.exp = {
	"questions_en_gb" : [
        {
            "Reindeer have very thick coats, how many hairs per square inch do they have?": [
                "13,000",
                "1,200",
                "5,000",
                "700",
                "1,000",
                "120,000"
            ]
        }
			],
		questions_de_de: [
			{
					"Reince Preibus has a very thick coat, how many hairs per square inch does he have?": [
							"13,000",
							"1,200",
							"5,000",
							"700",
							"1,000",
							"120,000"
					]
			}
		]
}

console.log(mod.exp);
console.log('---==============================---');
console.log(mod.exp['questions_en_gb']);
console.log(mod.exp['questions_de_de']);
console.log(mod.exp.questions_en_gb);
console.log(mod.exp.questions_de_de);
// console.log(mod.exp[questions_en_gb]);

function showProps(obj, objName) {
  var result = '';
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += objName + '.' + i + ' = ' + obj[i] + '\n';
    }
  }
  return result;
}

// console.log(showProps(mod,'mod'));

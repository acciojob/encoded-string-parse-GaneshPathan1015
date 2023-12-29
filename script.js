const parseCode = (str) => {
  // your code here
	let words = str.split(/00*/g);
	let obj = {
		firstName: "",
		lastName:"",
		id: ""
	}
	for(let key in obj){
		if(words.length>0){
			obj[key] = words.shift();
		}
	}
	return obj;
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));

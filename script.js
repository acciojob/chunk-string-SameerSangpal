function stringChop(str, size) {
  // your code here
	if(str === null) return [];
	const chunks = [];
	for(let i = 0; i < str.length; i += size){
		chunks.push(str.slice(i, i + size));
	}
	return chunks;
}

/* const result = stringChop("12345", 2);
console.log(JSON.stringify(result)); */
// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."));
alert(JSON.stringify(stringChop(str, size)));
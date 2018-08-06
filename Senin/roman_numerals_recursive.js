function toRoman(input) {
	var uniqArr = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
 	var romanUniqArr = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
 	var result = ''

 	if(input === 0){
 		return ''
 	}
 	for(i=uniqArr.length-1;i>=0;i--){
 		if(input>= uniqArr[i]){
 			result += romanUniqArr[i]
 			input -= uniqArr[i]
 			return result + toRoman(input)
 		}
 	}	
 	
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

module.exports = toRoman

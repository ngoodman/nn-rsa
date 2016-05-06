
var randInt = function(n){
	return Math.floor(Math.random()*n)
}

var sample_array = function(a){
	var i = randInt(a.length)
	return a[i]
}

module.exports = {
    sample_array: sample_array
}
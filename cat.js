function CreateCat(name){
	var cat={}
	cat.name=name
	cat.hunger=Math.floor(Math.random()*10)
    cat.lonliness=Math.floor(Math.random()*10)
	cat.happiness=Math.floor(Math.random()*10)
	cat.tiredness=Math.floor(Math.random()*10)
	cat.feed=feed 
	cat.sleep=sleep
	cat.petting=petting
	cat.state=state
	return cat 
}
var feed=function(){
	if (this.hunger>7){
return this.name +' is  full'

	}
else {
	this.happiness++
	this.hunger+=3
return "meaw"}
}
var sleep = function(){
this.hunger--
this.happiness++
this.lonliness++
this.tiredness--
}

var petting=function(){
	this.happiness++
	this.lonliness--
	this.tiredness++
	this.hunger--

}
var state=function(){
if (this.hunger<3){
	return this.name+ " is hungry"
}
else if (this.lonliness<3){
	 return this.name+" is lonely"
}
else if (this.tiredness<3){
	return this.name + " need to sleep"
}
else if (this.happiness<3){
	return this.name+" is sad"
}
return this.name+" is HAPPY"

}
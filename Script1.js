var request = new XMLHttpRequest();
var url="http://api.countrylayer.com/v2/lang/en?access_key=b2216f8e8b59574474c4ec16060dd09e";
request.open('GET', url);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    
        console.log(data) 
    
}
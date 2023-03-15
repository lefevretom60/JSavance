function getRandom(){
    
    fetch('../mainapi.php').then((resp) => resp.json())
    .then(function(data) {
        
        console.log(data);
        UpdateDiv("arenne",data[0]);
        
    })
    .catch(function(error) {
        console.log(error);
    });
}
function UpdateDiv(id,text){
    var e = document.getElementById(id).innerHTML = text;
}
function toto() {
    setInterval(getRandom,2000);
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var food = response.food;


var svDropDown=document.getElementById("sv")
var enDropDown=document.getElementById("en")



function swedishDefault(){
    console.log("user chose Svensk")

    var sveName="";
    var sveDescrition="";
    
    for (var i=0;i<food.length;i++){
        var num=i+1;
        var currentItem=food[i];
    
        sveName=currentItem.nameSV;
        sveDescrition=currentItem.descriptionSV;
    
        document.querySelector("#"+"food"+num).innerHTML= sveName;
        document.querySelector("#"+"description"+num).innerHTML= sveDescrition;
        document.querySelector("#"+"food"+num) .style.fontFamily = "'Poppins', sans-serif";
        document.querySelector("#"+"description"+num) .style.fontFamily = "'Poppins', sans-serif";
        document.querySelector("#"+"food"+num).style.fontSize = "16pt";
        document.querySelector("#"+"description"+num) .style.fontSize = "11pt";
        document.querySelector("#"+"food"+num).style.textAlign = "center";
        document.querySelector("#"+"description"+num) .style.textAlign = "center";



        document.querySelector("#h1").textContent="Meny";
        document.querySelector("#h1").style.fontSize = "";
        document.querySelector("#h1").style.fontFamily = "'Poppins', sans-serif";

    }
    }
    swedishDefault();


     
svDropDown.addEventListener("click", function(){
console.log("user chose Svensk")

var sveName="";
var sveDescrition="";

for (var i=0;i<food.length;i++){
    var num=i+1;
    var currentItem=food[i];

    sveName=currentItem.nameSV;
    sveDescrition=currentItem.descriptionSV;

    document.querySelector("#"+"food"+num).innerHTML= sveName;
    document.querySelector("#"+"description"+num).innerHTML= sveDescrition;
}
document.querySelector("#h1").textContent="Meny";
document.querySelector("#h1").style.fontSize = "30pt";
document.querySelector("#"+"food"+num) .style.fontFamily = "'Poppins', sans-serif";
document.querySelector("#"+"description"+num) .style.fontFamily = "'Poppins', sans-serif";
})


enDropDown.addEventListener("click", function(){
    console.log("user chose Engeleska")

    var engName="";
    var engDescrition="";

    for (var i=0;i<food.length;i++){
        var num=i+1;
        var currentItem=food[i];
    
        engName=currentItem.nameENG;
        engDescrition=currentItem.descriptionENG;
    
        document.querySelector("#"+"food"+num).innerHTML= engName;
        document.querySelector("#"+"description"+num).innerHTML= engDescrition;

}
document.querySelector("#h1").innerHTML="Menu";
document.querySelector("#h1").style.fontSize = "30pt";
document.querySelector("#"+"food"+num).fontSize.style.fontFamily = "'Poppins', sans-serif";
document.querySelector("#"+"description"+num) .style.fontFamily = "'Poppins', sans-serif";


})

        //själva filtret--glutenfritt--funkar!
        // var filerGluten = food.filter(function(item) {
        //     return item.glutenfree == "yes";
        // });

        // var output = "<ul>";
        // for (var i = 0; i < filerGluten.length; i++) {
        //     output += "<li>" + filerGluten[i].nameSV + "</li>";
        // }
        // output += "</ul>";//länmnar ut  resultatet 
        // document.getElementById("mainSV").innerHTML = output;

    }
};

xhttp.open("GET", "food.json", true);
xhttp.send();

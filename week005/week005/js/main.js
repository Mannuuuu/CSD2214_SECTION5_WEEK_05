function myFunction(a, b){
    return a+b;  // The function returns he product of p1 and p2
}

function arrays() {
    var pens;
    pens = new Array("red", "orange", "green", "blue", "purple");
    marker = pens;
    console.log(marker);
    console.log(marker[0]);
    for (i = 0; i < marker.length; i++) {
        alert(marker[i]);
    }
    alert("Length of array is : ", +  marker.length);
}
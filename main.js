var arr = [];
function press(){
    var n1 = document.getElementById("name1").value;
    var n2 = document.getElementById("name2").value;
    var n3 = document.getElementById("name3").value;
    arr.push(n1);
    arr.push(n2);
    arr.push(n3);
    document.getElementById("display").innerHTML = arr;
    document.getElementById("btn").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
console.log(arr);
}
function sort(){
    arr.sort();
    document.getElementById("display").innerHTML = arr;
}
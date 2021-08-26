var student_name = [] ;
function submit() {
var display_name = [] ;
for (var k = 1; k<=4 ; k++) {
    var s_name = document.getElementById("name_of_the_student_"+ k).value ;
    student_name.push(s_name);
    console.log(s_name);
}
console.log(student_name);

var array_length = student_name.length;
console.log(array_length);
for (var i = 0; i<array_length ; i++) {
    display_name.push("<h4>Name -" + student_name[i]+ "</h4>");
}
console.log(display_name);
document.getElementById("display_name_with_commas").innerHTML= display_name ;

var removed_comma = display_name.join(" ");
document.getElementById("display_name_without_commas").innerHTML= removed_comma ;

document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";

}
function sorting() {
    student_name.sort();
    var display_name = [];
    var array_length = student_name.length;
console.log(array_length);
for (var l = 0; l<array_length ; l++) {
    display_name.push("<h4>Name -" + student_name[l]+ "</h4>");
}
console.log(display_name);
var removed_comma = display_name.join(" ");
document.getElementById("display_name_without_commas").innerHTML= removed_comma ;
}
function new_update () {
    document.getElementById("display_name_without_commas").innerHTML= "<h1>" + student_name + "</h1>" ;
}
//$('span').each(function(index, element) {
//    if(index % 2 == 0) {
//        $(element).css("color", "red");
//    }
//});



$("span:even").css('color', 'red');

/*
var paragraphs = $('p');
paragraphs.each(function(index, element) {

    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
    $(element).append(button);

});
*/

//wersja skrocona
$('p').each(function(index, element) {
    $(element).append($('<button class="btn" data-tmp="' + index + '">Click me</button>'));
});


$("button").click(function(){
    alert($(this).attr("data-tmp"));
});
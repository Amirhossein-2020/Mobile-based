$(document).ready(function () {
    $("body").load();
    var source = [
        "./Pictures/1.jpg",
        "./Pictures/2.jpg",
        "./Pictures/3.jpg",
        "./Pictures/4.jpg",
        "./Pictures/5.jpg",
        "./Pictures/6.jpg",
        "./Pictures/7.jpg",
        "./Pictures/8.jpg"
    ];
    let len = source.length;
    for (let i = 0; i <= len; i++) {
        $("#" + i).attr("src", source[i]);
    }
}); 

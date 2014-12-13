function test() {
    $.ajax({ url: "http://155.155.155.60/SB/JSONP-EndPoint.asmx/Sum",
    data: { x: JSON.stringify("Now i am getting jsop string") },
        dataType: "jsonp",
        success: function(json) {
            alert(json.d);
        },
        error: function() {
            alert("Hit error fn!");
        }
    });
}

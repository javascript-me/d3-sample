

var data = [{x:100, y:100}, {x:200, y:200}, {x:300, y:300}, {x:400, y:400}];

function updatePicture() {
    var svg = d3.select("svg");

    var circle = svg.selectAll("circle")
        .data(data);

    circle.exit()
        .transition()
        .attr("r", 0)
        .remove();

    circle.enter().append("circle")
        .attr("r", 0)
        .attr("cx", function (d) {
            return d.x;
        })
        .attr("cy", function (d) {
            return d.y;
        })
        .transition()
        .attr("r", 50 * 1.414)
        .attr("cx", function (d) {
            return d.x;
        })
        .attr("cy", function (d) {
            return d.y;
        });
}

updatePicture();

document.getElementById("add").addEventListener("click", function (e) {
    data.push({x:(data.length + 1) * 100, y:(data.length + 1) * 100});
    updatePicture();
});

document.getElementById("remove").addEventListener("click", function (e) {
    //data = data.slice(0, data.length - 1);
    data.splice(data.length - 1, 1);
    updatePicture();
});
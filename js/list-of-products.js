// id: 1, code: 'ECHO', name: 'Amazon Echo', price: 99.99,
//         vendor: { id: 1, name: 'Amazon' }

//var nproducts = products

function oLoad()
{
    buildTable();
}

function buildTable()
{
    var tbC = document.getElementById("tbody");
    tbC.innerHTML = "";
    var ccR = false;

    for(var p of products)
    {
        if(ccR == true)
        {
            var tr = "<tr class='nc'>"
        }
        else
        {
            var tr = "<tr>"
        }

        //var tr = "<tr>";
        tr += "<td class='c'>" + p.id + "</td>";
        tr += "<td>" + p.code + "</td>";
        tr += "<td>" + p.name + "</td>";
        tr += "<td class='r'>" + (p.price == 0 ? "Free":p.price) + "</td>";
        tr += "<td>" + p.vendor.name + "</td>";
        tr += "</tr>";

        tbC.innerHTML += tr;
        
        ccR = !ccR;
    }
}
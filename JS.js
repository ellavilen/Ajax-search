function ajax(url, fn) {
    try {
        var xhr = new XMLHttpRequest();
    } catch(e) {
        alert(e);
    }
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            fn(xhr.responseText);
        }
    }
}

function loadData() {
    hakujono = elem.value;
    url = "ajax-suggest.php?q=" + hakujono;
    ajax(url, function(response) {
        document.getElementById("demo").innerHTML = response;
    });
}

function ajaxSearch(field, event) {
    // 40=Down,38=Up,13=Enter,27=Esc
    var keyCode = event.keyCode;
    
    if(keyCode == 40) {
        index++;
    } else if(keyCode == 38) {
        index--;
    } else if(keyCode == 13) {
        field.value = "";
    }
}

/*function appendPersonResultsToResultsDiv(array) {
    if (array.length !=0 && resultsDiv.children.length ==  0) {
        for(var i = 0; i < array.length; i++) {
            var div = document.createElement("div");
            var a = document.createElement("a");
        }
    searchURLResults.push(a);
    searchPlainResults.push(array[i]);
    }
}*/

var elem = document.getElementById('loota');
elem.addEventListener("keyup", loadData);
/*var tulos = document.getElementById("demo");
tulos.addEventListener("keyup", loadData);*/
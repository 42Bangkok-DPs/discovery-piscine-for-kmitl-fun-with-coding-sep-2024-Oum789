const TDL = document.getElementById("ft_list");

window.addEventListener("load",loadTDs);

function saveTDs() {
    const tds = document.querySelectorAll("#ft_list .TD");
    const tdArray = Array.from(tds).map(td => td.innerText);
    document.cookie = `tds=${encodeURIComponent(JSON.stringify(tdArray))}`;
    console.log(document.cookie);
}

function loadTDs() {
    const cookies = document.cookie.split("=")[1];
    console.log(cookies);
    de_cookie = decodeURIComponent(cookies);
    console.log(de_cookie);
    if (de_cookie) {
        var tdArray = JSON.parse(de_cookie);
        tdArray.reverse();
        tdArray.forEach(tdText => {
            const TD = document.createElement("div");
            TD.innerText = tdText;
            TD.classList.add("TD");
            TDL.insertBefore(TD, TDL.firstChild);
        });
    }
}


document.getElementById("btn").addEventListener("click", function() {
    let TDM = prompt("Please enter your TD");
    if (TDM && TDM.trim()) {
        const TD = document.createElement("div");
        TD.innerText = TDM;
        TD.classList.add("TD");
        TDL.insertBefore(TD, TDL.firstChild);
        saveTDs();
    }
});

document.addEventListener('click', function(e) {
    var target = e.target;
    if (target.nodeName === 'DIV' && target.className === "TD") {
        if (confirm("Remove This TD?") === true) {
            target.remove();
            saveTDs();
        }
    }
}, false);




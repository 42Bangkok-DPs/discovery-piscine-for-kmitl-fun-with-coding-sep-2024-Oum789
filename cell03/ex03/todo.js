const TDL = document.getElementById("ft_list");

function saveTDs() {
    const tds = document.querySelectorAll("#ft_list .TD");
    const tdArray = Array.from(tds).map(td => td.innerText);
    document.cookie = `tds=${JSON.stringify(tdArray)}; path=/`;
}

function loadTDs() {
    const cookies = document.cookie.split('; ');
    const tdsCookie = cookies.find(cookie => cookie.startsWith('tds='));
    if (tdsCookie) {
        const tdArray = JSON.parse(tdsCookie.split('=')[1]);
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
    if (TDM != null) {
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

window.addEventListener('load', loadTDs);




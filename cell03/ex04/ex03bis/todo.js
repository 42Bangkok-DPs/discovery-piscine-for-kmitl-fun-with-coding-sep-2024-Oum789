$(document).ready(function() {
    function saveTDs() {
        const tdArray = $('#ft_list .TD').map(function() {
            return $(this).text();
        }).get();
        document.cookie = `tds=${JSON.stringify(tdArray)}`;
        console.log(document.cookie);
    }

    function loadTDs() {
        const cookies = document.cookie;
        console.log(cookies);
        if (cookies) {
            const tdArray = JSON.parse(cookies.split('=')[1]);
            tdArray.forEach(tdText => {
                const $TD = $('<div>').text(tdText).addClass('TD');
                $('#ft_list').append($TD);
            });
        }
    }

    $('#btn').on('click', function() {
        const TDM = prompt("Please enter your TD");
        if (TDM && TDM.trim()) {
            const $TD = $('<div>').text(TDM).addClass('TD');
            $('#ft_list').prepend($TD);
            saveTDs();
        }
    });

    $(document).on('click', '.TD', function() {
        if (confirm("Remove This TD?")) {
            $(this).remove();
            saveTDs();
        }
    });

    loadTDs();
});

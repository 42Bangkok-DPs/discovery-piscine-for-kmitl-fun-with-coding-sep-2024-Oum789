$(document).ready(function() {
    function saveTDs() {
        const tdArray = $('#ft_list .TD').map(function() {
            return $(this).text();
        }).get();
        document.cookie = `tds=${JSON.stringify(tdArray)}; path=/`;
    }

    function loadTDs() {
        const cookies = document.cookie.split('; ');
        const tdsCookie = cookies.find(cookie => cookie.startsWith('tds='));
        if (tdsCookie) {
            const tdArray = JSON.parse(tdsCookie.split('=')[1]);
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

    // Load TDs when the page is ready
    loadTDs();
});
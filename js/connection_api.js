$('#datosasamblea').on('click', function() {
    var html = ""

    var data2 = []
    var data3 = []



    //for (let index = 0; index < 6; index++) {
    $.ajax({
            type: 'GET',
            url: `https://swapi.dev/api/films/1/`,
            dataType: 'json',
            success: function(data) {
                data2 = data
                for (let index = 0; index < data.length; index++) {
                    console.log(data.title)
                    html += `Titulo: ${data.title} <br>
                        Planetas ${data.planets} <br><br>`

                }
            }
        }).then(function() {
            $.ajax({
                type: 'GET',
                url: 'https://swapi.dev/api/films/',
                dataType: 'json',
                success: function(data) {
                    data3 = data
                    for (let index = 0; index < data.results.length; index++) {
                        console.log(data.results[index])
                        html += `Titulo: ${data.results[index].title} <br>
                         Planetas ${data.results[index].planets} <br><br>`

                    }
                }
            }).then(function() {
                $('#pregunta').html(html);

            });
        })
        //}


})
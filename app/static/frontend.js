function dataValidation(data)
{
    if (data.name !== "" && data.photo !== "")
    {
        for (let i = 0; i < data.scores.length; i++)
        {
            if (data.scores[i] == "")
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
    else
    {
        return false;
    }
}


$('#submit').on('click', function(event) {
    event.preventDefault();

    var userData = {
        name: $('#name').val(),
        photo: $('#photo').val(),
        scores: [
            $('#q1').val(),
            $('#q2').val(),
            $('#q3').val(),
            $('#q4').val(),
            $('#q5').val(),
            $('#q6').val(),
            $('#q7').val(),
            $('#q8').val(),
            $('#q9').val(),
            $('#q10').val()
        ]
    };

    $.post('/api/friends', userData, function(data) {
        if (data)
        {
            console.log(data);
        }
        else
        {
            console.log("No data submitted");
        }
    })
});
(function (User) {


    //let url ='https://node-cero.herokuapp.com/user';
    let url = 'http://localhost:3000/user';

    User.init = () => {
        $.ajax({
            type: "GET",
            url: url,  
            headers: { 'Authorization': 'some value' },             
            success: function (data,textStatus,jqXHR ) {
                console.log('textStatus '  + textStatus);
                console.log('jqXHR '  + jqXHR);
                var data = data;

            },
            error: function (xhr, status, error) {
                alert('peto');

            }
        });
    }

}
)(window.User = window.User || {});

User.init();
$(function(){
    $('#req-register').on('click', function(e){
        $('#register-container').show();
        $('#login-container').hide();
    });

    $('#req-login').on('click', function(e){
        $('#register-container').hide();
        $('#login-container').show();
    });

    $('#login').on('click', function(e){
        var acc = $('#account').val();
        var mail = $('#mail').find('option:selected').val();
        var pwd = $('#pwd').val();
        var account = acc + '@' + mail

        if(acc.length == 0){
            alert('請輸入帳號');
            return;
        }

        if(pwd.length == 0){
            alert('請輸入密碼');
            return;
        }


        $.ajax({
            url: "/",
            type: "POST",
            dataType: 'json',
            data: {'ACC':account,'PWD':pwd},
            success: function(data) {
                if(data['res']=='success'){
                    window.location.replace('/templates/index.html'); //跳轉頁面
                }
                else{
                    alert(data['msg']);
                }
            },
            error: function(jqXHR) {
                alert(jqXHR.statusText);
                alert(jqXHR.responseText);
            }
        });
    });

    $('#register').on('click',function(e){
        

        $.ajax({
            url: "/",
            type: "POST",
            dataType: 'json',
            data: {'ACC':account,'PWD':pwd},
            success: function(data) {
                if(data['res']=='success'){
                    // window.location.replace('/templates/index.html'); //跳轉頁面
                    location.reload();
                }
                else{
                    alert(data['msg']);
                }
            },
            error: function(jqXHR) {
                alert(jqXHR.statusText);
                alert(jqXHR.responseText);
            }
        });
    });
});

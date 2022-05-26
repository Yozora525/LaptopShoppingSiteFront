
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
        let acc = $('#account').val();
        let mail = $('#mail').find('option:selected').val();
        let pwd = $('#pwd').val();
        let account = acc + '@' + mail;

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

    $('#register').on('click',function(event){
        let formData = new FormData();
        let user = $('#username').val();
        let sex = $('#sex').val();
        let phone = $('#phone').val();
        let birth = $('#birth').val();
        let acc = $('#reg-account').val();
        let mail = $('#reg-mail').find('option:selected').val();
        let pwd = $('#reg-pwd').val();
        let account = acc + '@' + mail;

        if(user.length == 0) {
            alert('請輸入姓名');
            return;
        }
        else{
            formData.append('user', user);
        }

        formData.append('sex', sex);

        if(phone.length == 0) {
            alert('請輸入手機號碼');
            return;
        }
        else{
            formData.append('phone', phone);
        }

        if(birth.length == 0) {
            alert('請填寫生日');
            return;
        }
        else{
            formData.append('birth', birth);
        }

        if(acc.length == 0) {
            alert('請輸入電子信箱');
            return;
        }
        else{
            formData.append('acc', account);
        }

        if(pwd.length == 0) {
            alert('請輸入密碼');
            return;
        }
        else{
            formData.append('pwd', pwd);
        }
        
        $.ajax({
            url: "/test.jsp",
            type: "POST",
            dataType: 'json',
            data: formData,
            // 告訴jQuery不要去處理髮送的資料
            processData : false, 
            // 告訴jQuery不要去設定Content-Type請求頭
            contentType : false,
            success: function(data) {
                if(data['res']=='success'){
                    alert('註冊成功')
                    window.location.replace('/templates/index.html'); //跳轉頁面
                    // location.reload();
                }
                else{
                    // alert(data['msg']);
                    alert('OK')
                }
            },
            error: function(jqXHR) {
                alert(jqXHR.statusText);
                alert(jqXHR.responseText);
            }
        });
    });

    $('#phone').on('keyup', function(e){
        let phone = $('#phone').val();

        if(phone.slice(0, 2) != "09"){
            $('#phone-tip').html('手機號碼格式錯誤！');
        }else if(phone.length != 10){
            $('#phone-tip').html('手機號碼應為10碼！');
        }else{
            $('#phone-tip').html('');
        }
    });

    $('#reg-pwd').on('keyup', function(e){
        let pwd = $('#reg-pwd').val();
        if(pwd.length < 8){
            $('#pwd-tip').html('密碼至少為8字元');
        }else{
            $('#pwd-tip').html('');
        }
    });

    $('#check-pwd').on('keyup', function(e){
        let pwd = $('#reg-pwd').val();
        let check_pwd = $('#check-pwd').val();

        if(pwd != check_pwd){
            $('#check-pwd-tip').html('兩次輸入密碼不一樣');
        }else{
            $('#check-pwd-tip').html('');
        }
    });


});

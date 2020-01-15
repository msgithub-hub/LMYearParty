function myPost(url, data, success) {
    $.ajax({
        url: window.property.BASE_URL + url,
        type: 'post',
        dataType: 'json',
        data: data,
        success: function (res) {
            handleResponse(res);
            success && success(res);
        },
        error: function () {
            layer.msg('数据有误')
        }
    });
}

function handleResponse(res) {
    switch (res.code) {
        case 200:
            break;
        case 301:
            location.href = res.data.jump;
            break;
        case 302:
            if(!window.location.href.includes('/login.html')){
                location.href ='http://tools.goosdk.com/apps/LM_yearParty/login.html';
            }
            break;
        case 109:
            break;
        case 113:
        case 112:
            is_start=2;
            clearInterval(timeAjax);
            break;
        default:
            layer.msg(res.msg);
    }
    layer.close(loadIndex);
}
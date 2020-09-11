$(document).ready(function(){

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300){
            $(".gototop").fadeIn();
        } else {
            $(".gototop").fadeOut();
        }
    });

    $("div.thumb div img").click(function(){
		$("#mainImg").attr("src", $(this).attr("src"));
	});

    function kt (element) {
        if (element.value == "") {
            element.style.border = "1px solid red"
            return true
        }
        element.style.border = ""
        return false
    }

    $('#btnS').click(function(){
        var tk = document.getElementById('timkiem')
        if(tk != undefined){
            if(kt(tk) == true)
            return
        }
    });

    $('#btn').click(function(){
        var hoTen = document.getElementById('ht')
        var diaChi = document.getElementById('dc')
        var email = document.getElementById('mail')
        var dienThoai = document.getElementById('dt')
        var noiDung = document.getElementById('nd')
        if (hoTen != undefined && diaChi != undefined && email != undefined && dienThoai != undefined && noiDung != undefined) {
            if (kt(hoTen) == true || kt(diaChi) == true || kt(email) == true || kt(dienThoai) == true || kt(noiDung) == true)
            return
        }
        alert("Chào " + hoTen.value + " bạn đã đặt hàng thành thành công! :>")
    });
        
});
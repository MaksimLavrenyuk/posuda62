$(document).ready(function() {

	// Запрет ввода букв
	$('[data-order="num"]').keypress(function( b ){
        var C = /[0-9\x25\x27\x24\x23]/;
        var a = b.which;
        var c = String.fromCharCode(a);
        return !!(a==0||a==8||a==9||a==13||c.match(C));
    });

    // сохраняю значение в переменную
	var orderNum = $('[data-order="num"]').val();
	//преобразую ее в число
	orderNum = +orderNum;

	// по нажатию на минус
	$('[data-order-action="increase"]').click(function() {
		//проверяю количество больше 0 или нет
 		if (orderNum > 0) {
 			//больше то уменьшаю
 			orderNum = --orderNum;
 			// вывожу новое количество
 			$('[data-order="num"]').val(orderNum);
 		};
	});

	// по нажатию на плюс
	$('[data-order-action="reduce"]').click(function() {
		// увеличиваю значение
 		orderNum = ++orderNum;

 		// вывожу новое количество
 		$('[data-order="num"]').val(orderNum);
	});

	//ajax для отправки "Обратной свзяи"
    $("#orderGoods").submit(function() {
        $.ajax({
            beforeSend: function() {
                $("#orderSubmit").css({ "justify-content": "center", "height": "44px"});
                var text = $("#orderSubmit").html("");
                $('<img class="preloader" src="img/preloader.svg" alt="">').appendTo($("#orderSubmit"));
            },
            type: "POST",
            url: "order.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#orderSubmit').html("В корзине");
            $('#orderSubmit').prop('disabled', true);
            $("#orderSubmit").css("cursor", "default");

        });
        return false;
    });
	
});


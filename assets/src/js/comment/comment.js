$(document).ready(function() {
    //ajax для отправки "Обратной свзяи"
    $("#commentForm").submit(function() {
        $.ajax({
            beforeSend: function() {
                $(".comment-form__submit").css("justify-content", "center");
                var text = $(".comment-form__submit").html("");
                $('<img class="preloader" src="img/preloader.svg" alt="">').appendTo($(".comment-form__submit"));
            },
            type: "POST",
            url: "comment.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("textarea").val("");
            $('.comment-form__submit').html("Отправлено");
            $('.comment-form__submit').prop('disabled', true);
            $(".comment-form__submit").css("cursor", "default");

        });
        return false;
    });
});
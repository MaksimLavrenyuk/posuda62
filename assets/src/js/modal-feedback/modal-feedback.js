$(document).ready(function() {
    //ajax для отправки "Обратной свзяи"
    $("#FeedbackForm").submit(function() {
        $.ajax({
            beforeSend: function() {
                $("#FeedbackSubmit").css("justify-content", "center");
                var text = $("#FeedbackSubmit").html("");
                $('<img class="preloader" src="img/preloader.svg" alt="">').appendTo($("#FeedbackSubmit"));
            },
            type: "POST",
            url: "modal-feedback.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#FeedbackSubmit').html("Отправлено");
            $('#FeedbackSubmit').prop('disabled', true);
            $("#FeedbackSubmit").css("cursor", "default");

        });
        return false;
    });
});
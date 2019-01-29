$(document).ready(function() {
    
    //скрипт для слайдера цены в фильтре
    $(function() {
        var priceMin = $('[data-price="min"]').val();
        var priceMax = $('[data-price="max"]').val();
        var priceMinNumInt = parseInt(priceMin, 10);
        var priceMaxNumInt = parseInt(priceMax, 10);
        $("#priceSlider").slider({
            range: true,
            min: priceMinNumInt,
            max: priceMaxNumInt,
            values: [priceMinNumInt, priceMaxNumInt],
            slide: function(event, ui) {
                $('[data-price="min"]').val(ui.values[0]);
                $('[data-price="max"]').val(ui.values[1]);
            }
        });

        $('[data-price="min"]').val($("#priceSlider").slider("values", 0)); 
        $('[data-price="max"]').val($("#priceSlider").slider("values", 1));

        //изменения поля инпут ведет за собой изменение слайдера
        $('[data-price="min"]').change(function() {
            $("#priceSlider").slider('values', 0, $(this).val());
            $('[data-price="min"]').val($("#priceSlider").slider("values", 0));
        });
        $('[data-price="max"]').change(function() {
            $("#priceSlider").slider('values', 1, $(this).val());
            $('[data-price="max"]').val($("#priceSlider").slider("values", 1));
        });
        
    });


});
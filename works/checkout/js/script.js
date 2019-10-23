$(document).ready(function(){
    $(document).on('keyup', '#phone', function() {
        $('#phone').mask('+38(099)999-99-99');
    });
});
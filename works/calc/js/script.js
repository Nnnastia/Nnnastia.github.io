$(document).ready(function () {
    let deleteAll = $('#delete');
    let deleteBottomDisp = $('#to-zero');
    let deleteLastChar = $('#cancel');
    // скинути значення нижнього екрану до 0
    deleteBottomDisp.on('click', function toZero() {
        $('.calc__result').text(0);
        if ($('.calc__text') != '') {
            $('.calc__text').empty();
        }
    });
    // скинути значення для верхнього та нижнього екранів
    deleteAll.on('click', function () {
        $('.calc__result').text(0);
        $('.calc__display').empty();
        if ($('.calc__text') != '') {
            $('.calc__text').empty();
        }
    });
    //видалити останню цифру на нижньому екрані
    deleteLastChar.on('click', function () {
        let bottomDisplay = $('.calc__result').html();
        bottomDisplay = bottomDisplay.slice(0, -1);
        $('.calc__result').text(bottomDisplay);
    });
    //встановлення та видалення крапки
    $('#dot').on('click', function () {
        let dot = $(this).attr('data-name');
        let bottomDisplay = $('.calc__result').html();
        if (bottomDisplay[bottomDisplay.length - 1] != '.') {
            $('.calc__result').append(dot);
        } else {
            bottomDisplay = bottomDisplay.slice(0, -1);
            $('.calc__result').text(bottomDisplay);
        }
    });
    // встановлення та видалення негативного значення
    $('#negative').on('click', function () {
        let negative = $(this).attr('data-name');
        let bottomDisplay = $('.calc__result').html();
        if (bottomDisplay != 0 && bottomDisplay[0] != '-') {
            $('.calc__result').prepend(negative);
        } else if (bottomDisplay[0] == '-') {
            bottomDisplay = bottomDisplay.substr(1);
            $('.calc__result').text(bottomDisplay);
        }
    });
    // виведення цифр на нижній екран
    $('.number').on('click', function num() {
        let number = $(this).attr('data-name');
        let display = $('.calc__display').html();
        let bottomDisplay = $('.calc__result').html();
        let resultAttr = $('.calc__result').attr('data-name')
        if (bottomDisplay == '0' || bottomDisplay == '' || resultAttr != '0') {
            $('.calc__result').text(number);
            $('.calc__result').attr('data-name', '0');
        } else {
            $('.calc__result').append(number);
        }
    });
    //математичні операціїї та виведення проміжного результату
    $('.operator').on('click', function () {
        let display = $('.calc__display').html();
        let number = $('.calc__result').html();
        let operator = $(this).html();
        let displayOperator = display[display.length - 2];
        let a = $('.calc__display').attr('data-name');
        let result;
        if (display == '') {
            $('.calc__display').append(number + ' ' + operator + ' ');
            $('.calc__display').attr('data-name', number);
            $('.calc__result').text('');
        } else if (displayOperator == displayOperator && number == '') {
            $('.calc__display').append();
        } else {
            if (displayOperator == '-') {
                result = +a - +number;
                result = parseFloat(result.toFixed(6));
                $('.calc__display').append(number + ' ' + operator + ' ');
                $('.calc__result').text(result);
                $('.calc__display').attr('data-name', result);
                $('.calc__result').attr('data-name', result);
            } else if (displayOperator == '+') {
                result = +a + +number;
                result = parseFloat(result.toFixed(6));
                $('.calc__display').append(number + ' ' + operator + ' ');
                $('.calc__result').text(result);
                $('.calc__display').attr('data-name', result);
                $('.calc__result').attr('data-name', result);
            } else if (displayOperator == '×') {
                result = +a * +number;
                result = parseFloat(result.toFixed(6));
                $('.calc__display').append(number + ' ' + operator + ' ');
                $('.calc__result').text(result);
                $('.calc__display').attr('data-name', result);
                $('.calc__result').attr('data-name', result);
            } else if (displayOperator == '÷') {
                if (number == 0) {
                    $('.calc__text').css('display', 'block');
                } else {
                    result = +a / +number;
                    result = parseFloat(result.toFixed(6));
                    $('.calc__display').append(number + ' ' + operator + ' ');
                    $('.calc__result').text(result);
                    $('.calc__display').attr('data-name', result);
                    $('.calc__result').attr('data-name', result);
                }
            }
        }
    });
    //математичні операціїї та виведення кінцевого результату
    $('#equal').on('click', function () {
        let display = $('.calc__display').html();
        let displayOperator = display[display.length - 2];
        let number = $('.calc__result').html();
        let a = $('.calc__display').attr('data-name');
        let result;
        if (displayOperator == '-') {
            result = +a - +number;
            result = parseFloat(result.toFixed(6));
            $('.calc__display').append(number);
            $('.calc__result').text(result);
        } else if (displayOperator == '+') {
            result = +a + +number;
            result = parseFloat(result.toFixed(6));
            $('.calc__display').append(number);
            $('.calc__result').text(result);
        } else if (displayOperator == '×') {
            result = +a * +number;
            result = parseFloat(result.toFixed(6));
            $('.calc__display').append(number);
            $('.calc__result').text(result);
        } else if (displayOperator == '÷') {
            if (number == 0) {
                $('.calc__text').css('display', 'block');
            } else {
                result = +a / +number;
                result = parseFloat(result.toFixed(6));
                $('.calc__display').append(number);
                $('.calc__result').text(result);
            }
        }
    });
})
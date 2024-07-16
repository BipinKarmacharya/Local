document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const values = document.querySelectorAll('.values');
    const reset = document.getElementById('reset');
    const equals = document.getElementById('equals');
    let deleteBtn = document.getElementById('del');

    values.forEach(value => {
        value.addEventListener('click', function() {
            const valueText = value.innerText;
            display.value = display.value + valueText;
        });
    });

    reset.addEventListener('click', function() {
        display.value='';
    });

    deleteBtn.addEventListener('click', function() {
        display.value = display.value.toString().slice(0,-1);
    });

    equals.addEventListener('click', function() {
        display.value = eval(display.value);
    });

});
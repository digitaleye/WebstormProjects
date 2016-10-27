/**
 * Created by fjatori on 9/2/2016.
 */
function myRemoveClass(){
    var inputRadio = document.getElementById('returnDate');
    if  (!inputRadio.classList.contains('ehide')){
        inputRadio.classList.add('ehide');
    }

    console.log(document.getElementById('returnRadio').classList);

    //inputRadio
}

function myAddClass(){
    var inputRadio = document.getElementById('returnDate');
    if  (inputRadio.classList.contains('ehide')){
        inputRadio.classList.remove('ehide');
    }

    console.log(document.getElementById('returnRadio').classList);

    //inputRadio
}

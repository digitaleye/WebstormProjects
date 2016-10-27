/**
 * Created by fjatori on 9/2/2016.
 */

function myAddClass(){

    if(!$('returnRadio').hasClass('ehide')){
        $('oneWayRadio').removeClass('ehide');
    }
}
function myRemoveClass(){
    if($('oneWayRadio').hasClass('ehide')){
        $('oneWayRadio').removeClass('ehide');
    }
}
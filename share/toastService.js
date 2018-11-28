var showToast = showToast;
var hideToast = hideToast;
var hideLoading = hideLoading;
var showLoading = showLoading;

var toastElem = document.getElementById("divToast");

// TO DO: WRITE INPUT AND RETURNS FOR EVERY FUNCTION
/*
* @input {}
*/
function showToast (toastMsg, inpTime) {
    if ( toastMsg ) {
        document.getElementById("divDesc").innerText = toastMsg;
        toastElem.className = "show";

        if (inpTime) {
            setTimeout(hideToast, inpTime);
        }
        //  else {
        //     hideToast();
        // }
    }
} // FN SHOW-TOAST

// TO DO: HID TOAST WILL TAKE RED OR GREEN CLASS BASED ON THE XHR RESULT
function hideToast () {
// function hideToast (inpColorClass) {
    // if ( inpColorClass ) {
        toastElem.className += " " + "successToast";
    // }

    setTimeout(function () {
        toastElem.className = toastElem.className.replace("show", "");
        toastElem.className = toastElem.className.replace(" successToast", "");
    }, 3000);
} // FN HIDE-TOAST

function hideLoading () {
    document.getElementById('divLoading').className = 'none';
} // FN-HIDE-LOADING

function showLoading () {
    document.getElementById('divLoading').className = 'display';
} // FN-SHOW-LOADING

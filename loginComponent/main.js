// FETCH LOADING
// taken care by index.html


// SHOW LOADING
// taken care by index.html


// CHECK IF LOGGED IN
// do it in DOM_ready()


// IF NOT LOGGED IN
// FETCH & BIND BASIC CSS
// FETCH & BIND WELCOME PAGE
// FETCH & BIND BASIC JS


// IF LOGGED IN
// FETCH & BIND DASHBOARD HTML
// FETCH & BIND SIDEBAR JSON
// FETCH & BIND FRAMEWORK
// FETCH & BIND DEFAULT COMPONENT
// FETCH & BIND DEFAULT COMPONENT's DATA



// console.log("PRE JS");
// setTimeout(() => {
//     console.log("TIME PRE");
// }, 5000);


// TO DO : LOGGER SERVICE (ONLY FOR DEVELOPMENT)

// TO DO - AFTER DEVELOPMENT : REMOVE THIS FN
(function testSetLogin () {
    console.log("SETTING LOGIN INFORMATION");
    var tempObj = {isTokenValid:true};
    localStorage.setItem("myne", JSON.stringify(tempObj))
})();
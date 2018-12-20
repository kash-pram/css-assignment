(function testSetLogin () {
    console.log("SETTING LOGIN INFORMATION");
    var tempObj = {isTokenValid:true};
    localStorage.setItem("myne", JSON.stringify(tempObj))
})();
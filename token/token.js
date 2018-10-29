var jwt = require("jwt-simple");
var SessionTime = require('../configuracion/variables').SessionTime;
var JWT_SECRET = require('../configuracion/variables').JWT_SECRET;

var  expiresIn = function(numMin) {
    var dateObj = new Date();
    return dateObj.setMinutes(dateObj.getMinutes() + numMin);
}


exports.OnlygenToken = function (user, ip) {
    var expires = expiresIn(SessionTime); // Minutos de session
    var token = jwt.encode({
        exp: expires,
        user: user,
        ip : ip
    }, JWT_SECRET);

    return {token : token, exp : expires} ;
}
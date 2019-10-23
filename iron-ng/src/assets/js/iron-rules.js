var ironValidator =  function(){
    var validateName = function(name){
        console.log("validating " + name);
        return true;
    };

    var validateNBusinessRules = function(name){
        console.log("validating business rules about name: " + name);
        return true;
    };

    return {
        validateName : validateName,
        validateNBusinessRules : validateNBusinessRules
    }
}();
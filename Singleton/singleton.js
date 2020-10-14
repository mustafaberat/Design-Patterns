var Singleton = (() => {
    var _instance; //static object that can be created only one time

    return {
        getInstance: function () {
            if (!_instance) { // if instance is null then assign with creating
                _instance = new Object("Im always The One"); //creating instance object
            }
            return _instance; //return new one if doesnt exist or old static instance
        }
    };
})();

run = () => {
    var instance1 = Singleton.getInstance(); //creating an object by method
    var instance2 = Singleton.getInstance(); //creating an object by method
    console.log("Are Instances the same: ", (instance1 === instance2)); //compare these objects
}

run(); //to start
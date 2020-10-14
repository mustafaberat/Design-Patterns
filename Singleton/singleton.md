# Singleton Design Pattern

The single design pattern based on the number of one-time object creation.

## Why we use

Singleton is useful in situations where system-wide action <b> need to be coordinated from a single central place </b> such as database connection pool. That pool manages the creation, destruction and connections for entire application ensuring that no connections are lost.

Singletons reduce the need for global variables which is particulary important for any languages becuase it limits namespace pollution and associated risk of name collisions.

Several other patterns, such as, Factory, Prototype, and Façade are frequently implemented as Singletons when only one instance is needed.

## Codes

```javascript
var Singleton = (() => {
  var _instance; //static object that can be created only one time

  return {
    getInstance: function () {
      if (!_instance) {
        // if instance is null then assign with creating
        _instance = new Object("Im always The One"); //creating instance object
      }
      return _instance; //return new one if doesnt exist or old static instance
    },
  };
})();

run = () => {
  var instance1 = Singleton.getInstance(); //creating an object by method
  var instance2 = Singleton.getInstance(); //creating an object by method
  console.log("Are Instances the same: ", instance1 === instance2); //compare these objects
};

// run(); //to start
```

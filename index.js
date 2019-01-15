fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      if (Array.isArray(collection)){
        for(let i=0; i<collection.length; i++){
          cb(collection[i], i, collection);
        }
      }else{
        for(const key in collection){
          cb(collection[key], key, collection);
        }
      }
      return collection;
    },

    map: function(collection, cb) {
      let returnArray=[];
      if (Array.isArray(collection)){
        for(let i=0; i<collection.length; i++){
          returnArray.push(cb(collection[i], i, collection));
        }
      }else{
        for(const key in collection){
          returnArray.push(cb(collection[key], key, collection));
        }
      }
      return returnArray;
    },

    reduce: function(collection, cb, acc=0) {
      for(let i=0; i<collection.length; i++){
        acc=cb(acc, collection[i], collection);
      }
      return acc;
    },

    find: function(collection, predicate){
      for(let i=0; i<collection.length; i++){
        if (predicate(collection[i])){
          return collection[i];
        }
      }
    },
    // var sum = fi.reduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 0);
    filter: function(collection, predicate) {
      let returnArray=[];
      for(let i=0; i<collection.length; i++){
        if (predicate(collection[i])){
          returnArray.push( collection[i] );
        }
      }
      return returnArray;
    },

    size: function(collection){
      if (Array.isArray(collection)){
        return collection.length;
      }else{
        return Object.keys(collection).length;
      }
    },

    first: function(array, n=1){
      let returnValue = array.slice(0, n);
      if (returnValue.length===1){
        return returnValue[0]
      }else{
        return returnValue;
      }
    },

    last: function(array, n=1){
      let returnValue = array.slice(n*-1);
      if (returnValue.length===1){
        return returnValue[0]
      }else{
        return returnValue;
      }
    },

    compact: function(array){
      return fi.filter(array, function(condition){return !!condition;});
    },

    sortBy: function(collection, cb){
      if (Array.isArray(collection)){
        let returnArray=[]
        let resultsArray=[]
        for (let i=0; i<collection.length; i++){
          resultsArray[i]=([collection[i], cb(collection[i])])
        }
        resultsArray.sort(function(a, b){
          if (typeof(a[1])==='string'){
            return a[1].localeCompare(b[1])
          }else{
            return a[1]-b[1]
          }
        })
        for(let key in resultsArray){
          returnArray.push(resultsArray[key][0])
        }
        return returnArray;
      }
    },

    flatten: function(array, shallow=false){
      let returnArray=[];

      const recFlat=function(array){
        for (let i=0; i<array.length; i++){
          if (Array.isArray(array[i])){
            recFlat(array[i])
          }else{
            returnArray.push(array[i]);
          }
        }
      }

      for (let i=0; i<array.length; i++){
        if (Array.isArray(array[i])){
          if (shallow===true){
            for(let j=0; j<array[i].length; j++){
              returnArray.push(array[i][j]);
            }
          }else{
            recFlat(array[i]);
          }
        }else{
          returnArray.push(array[i])
        }
      }
      return returnArray;
    },

    uniq: function(array, issorted=false, callback=function(num){return num}){
      console.log(issorted);
      returnArray=[];
      arrayResults=[];
      for (i=0; i<array.length; i++){
        inArray=false;
        for (j=0; j<arrayResults.length; j++){
          if (callback(array[i])===arrayResults[j]){
            inArray=true;
          }
        }
        if (!inArray){
          returnArray.push(array[i]);
          arrayResults.push(callback(array[i]))
        }
      }
      return returnArray;
    },

    keys: function(object){
      let keys=[]
      for (let key in object){
        keys.push(key)
      }
      return keys
    },

    values: function(object){
      let values=[]
      for (let key in object){
        values.push(object[key]);
      }
      return values;
    },

    functions: function(object) {
      let functions=[]
      for (let key in object){
        if (typeof(object[key])==="function"){
          functions.push(key);
        }
      }
      return fi.sortBy(functions, function(r){return r});
    },

    giveMeMore: function(){
      return true;
    },

  }
})()

fi.libraryMethod()

var _ = require('lodash');
var async = require('async');

module.exports = {
  sync:  replaceSync,
  async: replaceAsync
};

function replaceSync(obj, replace){
  if(_.isObject(obj)){
    for(var key in obj){
      obj[key] = replaceSync(obj[key], replace);
    }
  }
  else if(_.isArray(obj)){
    for(var i=0; i<obj.length; i++){
      obj[i] = replaceSync(obj[i], replace);
    }
  }
  else if(_.isString(obj)){
    obj = replace(obj);
  }
  return obj;
}

function replaceAsync(obj, replace, callback){
  if(_.isObject(obj) || _.isArray(obj)){
    async.mapValues(obj, function(elem, key, callback){
      replaceAsync(elem, replace, callback);
    }, function(err, data){
      callback(err, data);
    });
  }
  else if(_.isString(obj)){
    obj = replace(obj, callback);
  }
  else{
    callback(null, obj);
  }
}

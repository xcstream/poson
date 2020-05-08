const fetch = require('node-fetch')
const { MethodMissingClass } = require('unmiss')
class Post extends MethodMissingClass {
    methodMissing(name, ...args) {
        console.log(name,args[0])
        return new Promise(function(resolve,reject){
            var opt = {
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(args[0])
            }
            fetch(name, opt).then(function(rx){
                rx.json().then(function(r){
                    resolve(r)
                }).catch(function(e){
                    reject(e)
                })
            }).catch(function(e){
                reject(e)
            })
        })
    }
}
const A = new Post;
module.exports = A
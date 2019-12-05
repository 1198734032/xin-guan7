//GET
const url='http://39.107.142.107:3000/mock/25/getText'
fetch(url,{
    method:'GET',
    headers:{'Content-Type':'application/json'}
})
.then (function(response){
    return response.json()
})
.then(function(myjson){
    console.log(myjson)
})



//POST
let msg={
    name:'唐椰涵'
}
const url='http://39.107.142.107:3000/mock/25/testPost'
fetch(url,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(msg),
})
.then (function(response){
    return response.json()
})
.then(function(myjson){
    console.log(myjson)
})

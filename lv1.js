//GET
let btn = document.getElementById('btn');
const url = 'http://39.107.142.107:3000/mock/25/getText'
btn.addEventListener('click',()=>{ //Get(), false);
//function Get() {
    const client = new XMLHttpRequest();
    client.open("GET", url, true)
    client.setRequestHeader('Content-Type', 'application/json')
    client.send()

    client.onreadystatechange =()=> {
        if (client.readyState === 4) {
            if (client.status === 200) {
                console.log(client.responseText)
                console.log("请求成功")
            } else {
                console.log("请求失败")
            }
        }

    }

})


//POST
let msg={
    name:"唐椰涵"
}
let btn=document.getElementById('btn');
const url='http://39.107.142.107:3000/mock/25/testPost';
btn.addEventListener('click',()=>{
    let client2=new XMLHttpRequest()
    client2.open('POST',url,true)
    client2.setRequestHeader('Content-Type', 'application/json')
    client2.send(JSON.stringify(msg))

    client2.onreadystatechange=()=>{
        if(client2.readyState===4){
            if(client2.status===200){
                console.log(JSON.parse(client2.responseText))
                console.log("请求成功")
            }else{
                console.log("请求失败")
            }
        }
    }
})

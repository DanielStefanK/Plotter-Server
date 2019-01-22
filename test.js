const net = require("net");
const socket = new net.Socket()
let response

socket.on('ready', () =>  {
    let i = 0;
    console.log ("ready")
    socket.write(JSON.stringify({
        operation: "moveTo",
        x: 10,
        y: 10
    }) + '\n')
    socket.write(JSON.stringify({
        operation: "drawTo",
        x: 100,
        y: 0
    }) + '\n')
    socket.write(JSON.stringify({
        operation: "drawTo",
        x: 0,
        y: 100
    }) + '\n')
    socket.write(JSON.stringify({
        operation: "drawTo",
        x: -100,
        y: 0
    }) + '\n')
    socket.write(JSON.stringify({
        operation: "drawTo",
        x: 0,
        y: -100
    }) + '\n')
    socket.write(JSON.stringify({
        operation: "drawTo",
        x: 100,
        y: 100
    }) + '\n')
    socket.on('data', (data) => {
        console.log(data)
        i++
        if (i>=8) {
            socket.destroy()
        }
    })
})
socket.on('error', (e)=> {
    console.log("error", e)
})
socket.on("data", (data)=>{
 response = data
})
socket.connect(1337, '192.168.1.101', ()=>{
    console.log("connected");
    
})
const net = require("net");
const socket = new net.Socket()

module.exports = {
    connect (ip, cb) {
        return new Promise ((resolve, reject) =>{
            socket.connect(1337, ip, ()=>{
                resolve ()
            })
        })
        
    },

    send (data) {
        return new Promise ((resolve, reject) => {
            socket.write(data)
            socket.once ('data', (res)=>{
                console.log (res.toString('utf-8'))
                resolve (res)
            })
        })
    }, 

    destroy () {
        return new Promise ( (resolve, reject) => {
            socket.destroy()
            resolve ()
        })
    }
}
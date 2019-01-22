const net = require("net");
const socket = new net.Socket()

module.exports = {
    sendData (data) {
        let i 
        const sendData = data.map(item => {
            return JSON.stringify(item) + '\n')
        })

        socket.on('ready', () => {
            socket.write(sendData, ()=>{
                socket.close()
            })
        })
        
    },

    connect (ip, cb) {
        socket.connect(1337, ip, ()=>{
            cb()
        })
    }
}
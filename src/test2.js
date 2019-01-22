const socketWrapper = require ('./socket')

socketWrapper.connect('192.168.1.101').then (
    (data) => {
        return socketWrapper.send(JSON.stringify({
            operation: "moveTo",
            x: 10,
            y: 10
        }) + '\n')
    }
).then ((data) => {
        return socketWrapper.send(JSON.stringify({
            operation: "drawTo",
            x: 100,
            y: 0
        }) + '\n')
    }
).then ((data) => {
    return socketWrapper.send(JSON.stringify({
        operation: "drawTo",
        x: 0,
        y: 100
    }) + '\n')
}
).then ((data) => {
    return socketWrapper.send(JSON.stringify({
        operation: "drawTo",
        x: -100,
        y: 0
    }) + '\n')
}
).then ((data) => {
    return socketWrapper.send(JSON.stringify({
        operation: "drawTo",
        x: 0,
        y: -100
    }) + '\n')
}
).then ((data)=>{
    return socketWrapper.send (JSON.stringify({
        operation: "drawTo",
        x: 100,
        y: 100
    }) + '\n')
}).then (()=>{
    socketWrapper.destroy ()
}).catch (()=>{
    socketWrapper.destroy ()
})
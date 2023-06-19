const Express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');



const server = Express();
server.use(morgan("dev"));

server.use("/personajes",createProxyMiddleware({
    target:"http://personajes:8001",
    changeOrigin:true
}))

server.use("/planetas",createProxyMiddleware({
    target:"http://planetas:8002",
    changeOrigin:true
}))

server.use("/films",createProxyMiddleware({
    target:"http://films:8003",
    changeOrigin:true
}))


server.use(morgan("dev"));


server.listen(8000 , () => {
    console.log("servidor escuchando en el puerto " + 8000)
})
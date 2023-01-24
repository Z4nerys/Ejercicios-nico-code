const fs = require('fs')

const guardarArchivo = (path, data) => {
    console.log("guardar archivo: " + path)
    fs.writeFileSync(path, JSON.stringify(data))
}

const readFile = (path) => {
    console.log("readFile")
    if(fs.existsSync(path)){
        return JSON.parse(fs.readFileSync(path, "utf-8"))
    }
    console.log("no se encontro el archivo")
    return false
}

module.exports = {
    guardarArchivo,
    readFile
}
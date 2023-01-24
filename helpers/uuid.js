const uuid = require("uuid")

const generarUuid = () => {
    return uuid.v4()
}

module.exports = generarUuid
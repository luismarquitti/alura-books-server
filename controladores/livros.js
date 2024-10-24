function getLivros(req, res) {
    try {
        res.send("Você fez uma requisição GET")
    } catch (error) {
        res.status(500)
        res.send({error})
    }
}

module.exports = {
    getLivros
}
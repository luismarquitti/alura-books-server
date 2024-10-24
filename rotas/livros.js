const {Router} = require("express")
const router = Router()
const {getLivros} = require("../controladores/livros")

router.get("/", getLivros)

router.post("/", (req, res) => {
    res.send("você fez um POST")
})
router.patch("/", (req, res) => {
    res.send("você fez um PATCH")
})
router.delete("/", (req, res) => {
    res.send("você fez um DELETE")
})

module.exports = router
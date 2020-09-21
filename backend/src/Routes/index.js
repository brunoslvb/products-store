const router = require('express').Router();

router.get('/', (req, res) => {

    return res.json({

        title: "",
        description: "",
        author: {
            nome: "Bruno da Silva Barros",
            email: "brunosilva2365@gmail.com",
            telefone: "(11) 95465-7495"
        }

    });

});

module.exports = router;
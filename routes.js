let express = require('express');
let router = express.Router();
let shopItem = require('../model/shoppingItem');
router.get('/AllItems', (req, res) => {
    shopItem.find((err, itemss1) => {
        if (err)
            res.json(err)
        else
            res.send(itemss1)
    })
})
router.get('/AllItems/:id', (req, res) => {
    shopItem.findOne({ _id: req.params.id }, (err, itemss1) => {
        if (err)
            res.json(err)
        else
            res.json(itemss1)
    })
})


router.post('/postItem', (req, res, next) => {
    let newShopItem = new shopItem({
        id: req.body.id,
        itemName: req.body.itemName,
        itemBought: req.body.itemBought
    });

    newShopItem.save((err, shopItem) => {
        if (err)
            res.json(err)
        else
            res.json(shopItem)
    })
})

router.post('/postItem/:id', (req, res, next) => {
    shopItem.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            id: req.body.id,
            itemName: req.body.itemName,
            itemBought: req.body.itemBought
        }
    }, function (err, result) {
        if (err)
            // res.json(err)
            res.send({ "update": "fail" });
        else
            //   res.json(result)
            res.send({ "update": "success" })
    })
})


router.delete('/postItem/:id', (req, res, next) => {
    shopItem.remove({ _id: req.params.id }, function (err, result) {
        if (err)
            res.send({ "delete": "fail" })
        else
            res.send({ "deltet": "success" })
    })
})

module.exports = router;
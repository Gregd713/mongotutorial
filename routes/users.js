const {User}=require('../models/user');
const {Product, validate}=require('../models/prodcut');
const express = require('express');
const router = express.Router();

router.post('/:userID/shoppingcart/:productId', async (req,res)=>{
    try{
        const user= await User.findById(req.params.userId);
        if (!user) return res.status(400).send(`The product with id"${req.params.productId}" does not exist.`);
        user.shoppingCart.push(product);
        await user.save();
       return res.send(user.shoppingCart);
    }catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports=router;
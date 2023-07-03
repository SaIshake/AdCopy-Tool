const express = require("express")
const router = express.Router();
const Ad = require("../models/Ad.js")
const { verifyUser, verifyToken } = require("../middleware/verifyToken.js");
const createError = require("../middleware/error.js");
const mongoose = require("mongoose")

router.post("/save", verifyToken, async(req, res, next) => {
    const allData = req.body;

    const newAd = new Ad({ ...allData, creator: req.user.id})

    try {
        const oldAd = await Ad.findOne({ ad: req.body.ad });


        if (oldAd) return next(createError(404, "Ad Already Exist"));
        
        await newAd.save();

        res.status(201).json(newAd);
    } catch (error) {
        next(error)
    }
})

router.get("/adbyuser", verifyToken,  async(req, res, next) => {
    try {
        const ads = await Ad.find({ creator: req.user.id });
        res.json(ads);
    } catch (error) {
        next(error)
    }
})

router.delete("/delete/:id", verifyToken, async(req, res, next) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return next(createError(404, "Token is not valid!"));

    try {
        await Ad.findByIdAndRemove(id);

        res.json({ message: "Post deleted successfully." });
    } catch (error) {
        next(error)
    }
})

module.exports = router



const mongoose = require("mongoose");
class Drinks {
    constructor(data) {
        this.strDrink = data.strDrink;
        this.strDrinkThumb = data.strDrinkThumb;
        this.idDrink = data.idDrink;
    }
}



const DrinkSchema = new mongoose.Schema({

    strDrink: { type: String },
    strDrinkThumb: { type: String },
    idDrink: { type: String },
});

const DrinkModel = mongoose.model("drinks", DrinkSchema);


module.exports = { Drinks ,DrinkModel};
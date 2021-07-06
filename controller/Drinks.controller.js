const { Drinks, DrinkModel } = require('../models/Drinks.model');
const axios = require('axios');

getDrinksData = async (req, res) => {
    axios.get("http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic").then(response => {
        let resData = response.data.drinks.map(data => {
            return new Drinks(data);
        })
        res.send(resData);
    }
    ).catch(error => console.log(error));

}


createFav = (req, res) => {
    const {
        strDrink,
        strDrinkThumb,
        idDrink,
    } = req.body;
    DrinkModel.find({ strDrink: strDrink }, (error, data) => {

        if (data.length > 0) {
            res.send('already exsist')

        } else {
            let newDrink = new DrinkModel({
                strDrink: strDrink,
                strDrinkThumb: strDrinkThumb,
                idDrink: idDrink,
            });
            newDrink.save();
            res.send(newDrink);
        }

    })


}
getFav = (req, res) => {
    DrinkModel.find({}, (error, data) => {
        if (error) {
            res.send(message.error);

        } else {
            res.send(data);
        }
    }
    );
}

deleteFav = (req, res) => {
    const idx = req.params.idx;
    DrinkModel.find({}, (error, data) => {
        if (error) {
            res.send(message.error);

        } else {
            data[idx].remove();
            DrinkModel.find({}, (error, data) => {
                res.send(data);
               
            }
            );
        }
    }
    );

}
updateFav = (req, res) => {
    const idx = req.params.idx;
    const {
        strDrink,
        strDrinkThumb,
        idDrink,
    } = req.body;
    DrinkModel.find({}, (error, data) => {
        if (error) {
            res.send(message.error);

        } else {
            data[idx].strDrink=strDrink;
            data[idx].strDrinkThumb=strDrinkThumb;
            data[idx].idDrink=idDrink;
            data[idx].save();
            res.send(data);
        }
    }
    );



}

module.exports = { getDrinksData, createFav, getFav ,deleteFav ,updateFav};
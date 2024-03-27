const { getClient } = require("./db");

const client = getClient()

const addForm = (req, res) => {
    const {morphologie, tourhanche, tourepaule , tourtaille} = req.body;

    client.query("INSERT INTO requetemorpho (M,TH,TE,TT,daterequete) VALUES('A', 322 23, 13, now()) RETURNING *;", [morphologie, tourhanche, tourepaule, tourtaille], (err,result) =>{
        if(err){
            console.log(err)
           console.log('Error when fectching');
        }
        console.log(result) 
    });
}

module.exports = ({
    addForm,
})
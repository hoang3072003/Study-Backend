const { name } = require('ejs');
const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs');
    // res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let {email,name,city} = req.body;
    // console.log(req.body);
    // connection.query(
    //     `INSERT into
    //     Users(email,name,city)
    //     values (?,?,?)`,
    //     [email,name,city],
    //     function(err, results){
    //         console.log(results);
    //         res.send("Succesful")
    //     }
    //   );
    let [results, fields] = await connection.query('INSERT INTO Users(email, name, city) VALUES (?, ?, ?)', [email, name, city]);
    console.log("check results: ", results)
    res.send("Created Successful")
    }
const getCreatePage = ( req, res) => {
    res.render('create.ejs');
}
module.exports = {
    getHomepage,
    postCreateUser,
    getCreatePage
}
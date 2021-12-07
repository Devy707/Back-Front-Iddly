const mysql = require('mysql');
// config package

const connection = mysql.createConnectionSync({
    host: "Back-Front-Iddly",
    user: "root",
    database: "comp_tech",
    password: "",
})

connection.connect(err => {
    if (err) {
        console.log(err)
    }
    else{
        console.log('Database - OK!')
    }
})

let takeList = "SELECT * FROM computers_technology";
let newList = [];
connection.query(takeList, (err, result, field) =>{
    newList = result
    console.log(newList)
});

let addInfo = "INSERT INTO computers_technology(name, model, price) VALUES('ASUS TUF Dash','FX516PM-HN130T',35999)"

connection.querySync(addInfo, (err, result, field) =>{
    console.log(err)
    console.log(result)
});
connection.end(err => {
    if (err) {
        console.log(err)
    }
    else{
        console.log('Database - Closed!')
    }
})


// export default {newList};


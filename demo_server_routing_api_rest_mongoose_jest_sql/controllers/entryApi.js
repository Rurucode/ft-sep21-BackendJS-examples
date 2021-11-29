const Entry = require('../models/entry')

//http://localhost:3000/api/entries?email=alejandro@thebdrigeschool.com
const getEntries = async (req,res) => {
    console.log("*******************");
    console.log(req.query.email);

    // Consulta 
    // Los datos
    // del producto correspondiente
    let data;
    try{
        if(req.query.email){
            data = await Entry.getEntriesByEmail(req.query.email);
            res.status(200).json({entries:data}) // Envio un array con N datos
        } else{
            data = await Entry.getAllEntries();
            res.status(200).json({entries:data}) // Envio un array con N datos
        }
    }catch(err){
        res.status(400).json({"error":err})
    } 
}
/*
req.body
{title,content,category,email}
*/

const createEntry = async (req,res) => {
    console.log(req.body); // En req.body está el objeto a guardar

    try{
        const result = await Entry.createEntry(req.body) // Lo guarda en BBDD

        console.log("Entry creada!!!!!**************");
        console.log(result);
        res.status(201).json({datos_guardados:result,status:"SUCCESS"});
    } catch(err){
        res.status(400).json({"error":err})
    }  
}

const entries = {
    getEntries,
    createEntry
}
module.exports = entries;
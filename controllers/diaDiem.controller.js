var DiaDiem = require('../models/diaDiem.model')

module.exports.index =async function(req, res){
    let diaDiems= await DiaDiem.find();
    
    res.send(diaDiems);
}
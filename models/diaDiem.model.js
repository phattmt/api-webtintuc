var mongoose = require('mongoose');


var diadiemSchema = new mongoose.Schema({
    ten: String,
    diaChi: String,
    soDienThoai: String,
    tenKhongDau:String
});

var DiaDiem = mongoose.model('DiaDiem', diadiemSchema, 'diadiems');

module.exports = DiaDiem;
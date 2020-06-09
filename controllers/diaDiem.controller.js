var DiaDiem = require('../models/diaDiem.model')

module.exports.index =async function(req, res){
    let diaDiems= await DiaDiem.find();    
    res.json(diaDiems);
}

module.exports.getTenKhongDau =async function(req, res){
    // console.log(req.params)
    let diaDiem= await DiaDiem.find({tenKhongDau: req.params.tenKhongDau});    
    res.json(diaDiem);
}

module.exports.createDiaDiem =async function(req, res){
    // console.log(req.params)
    // let diaDiem= await DiaDiem.create({
    //     ten: "QUÁN NHẬU 330",
    //     diaChi: "Khu K2, Mỹ Bình",
    //     soDienThoai: "0924241",
    //     gia: "110.000 -> 301.000",
    //     hinhAnh: "",
    //     toaDo: "https://www.google.com/maps/search/L%C3%B4+12-23+Khu+K1,+Tr%E1%BA%A7n+Nh%C3%A2n+T%C3%B4ng,+Thanh+Son,+Phan+Rang-Th%C3%A1p+Ch%C3%A0m,+Ninh+Thu%E1%BA%ADn,+Vietnam/@11.5708493,108.9991,18z/data=!3m1!4b1",
    //     tenKhongDau: "quannhau330"
    // });
    // console.log(diaDiem);
    // diaDiem.save();    
    // res.json(diaDiem);
 // a document instance
 var diaDiem = new DiaDiem({ 
         ten: "QUÁN NHẬU 330",
        diaChi: "Khu K2, Mỹ Bình",
        soDienThoai: "0924241",
        gia: "110.000 -> 301.000",
        hinhAnh: "",
        toaDo: "https://www.google.com/maps/search/L%C3%B4+12-23+Khu+K1,+Tr%E1%BA%A7n+Nh%C3%A2n+T%C3%B4ng,+Thanh+Son,+Phan+Rang-Th%C3%A1p+Ch%C3%A0m,+Ninh+Thu%E1%BA%ADn,+Vietnam/@11.5708493,108.9991,18z/data=!3m1!4b1",
        tenKhongDau: "quannhau330"
  });
 
 // save model to database
 diaDiem.save(function (err, book) {
   if (err) return console.error(err);
   console.log(book.ten + " saved to bookstore collection.");
 });

}
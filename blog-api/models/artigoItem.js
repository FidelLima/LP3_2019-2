const {Schema, model}=require('mongoose');

const test = new Schema({
    titulo:{
       type: String,
       required:true 
    },
    texto:{
        type:String,
        required: true
    }
});

const Artigo = model('Artigo', test);

module.exports = Artigo;
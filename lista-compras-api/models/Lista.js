const { Schema, model, ObjectId} = require ('mongoose');


const esquema = new Schema({
    nome: {
        type:String,
        require: true
    },
    itens: {
        type: [
            {
                type:ObjectId,
                ref: 'Item'
            }
        ]
    }

});

const Lista = model('Lista', esquema);

module.exports=Lista;
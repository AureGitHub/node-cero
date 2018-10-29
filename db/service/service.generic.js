var db = require('../index');

exports.login = async(identificador, password)=>{
    var where = {usuario : !identificador ? '#' : identificador, password : password}
    return await db.sequelize['user'].findOne({where : where});

    
}

exports.getAll = async (tabla)=>{
    return await db.sequelize[tabla].findAll();
}

exports.get =  async (tabla,id)=>{
    var id = Number(id);
    return await db.sequelize[tabla].findById(Number(id));
};

exports.create = async(tabla, obj)=>{    
    return await db.sequelize[tabla].create(obj);;
}


exports.update = async (tabla,id, obj)=>{
    var id = Number(id);
    var item = await db.sequelize[tabla].findById(Number(id));
    if(item){                 
        return await item.update(obj);   
    }
    return null;
}

exports.destroy = async(tabla,id) => {
    var id = Number(id);
    var item = await db.sequelize[tabla].findById(Number(id));
    if(item){        
        await item.destroy();    
    }
    
    return item;
}






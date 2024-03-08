const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const UserModel = require('../models/user');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  
  const rows = await UserModel.find();

  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getOne(id){
  const rows = await UserModel.find({"_id" : id})
  const data = helper.emptyOrRows(rows);
  console.log(id);
  console.log(rows);

  return {
    data
  }
}

async function create(user){
    const data = new UserModel({
      Firstname: user.Firstname,
      Lastname: user.Lastname,
      Email: user.Email,
      Password: user.Password,
      Phonenumber: user.Phonenumber,
      IsCollaborator: user.IsCollaborator
    })

  try {
      dataToSave = await data.save();
      return dataToSave;
  }
  catch (error) {
      return error.message;
  }
}

async function update(id, user){
  try {
      result = await UserModel.findByIdAndUpdate(id, user, {new: true})
      return result;
    }
    catch (error){
      return error;
    }
}

async function remove(id){
  try{  
    const result = await UserModel.findByIdAndDelete(id);
    return result;
  }
  catch(error){
    return error;
  }
}

module.exports = {
    getMultiple,
    getOne,
    remove,
    update,
    create
}
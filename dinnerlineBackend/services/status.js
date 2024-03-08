const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const StatusModel = require('../models/status');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  
  const rows = await StatusModel.find();

  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getOne(id){
  const rows = await StatusModel.find({"_id" : id})
  const data = helper.emptyOrRows(rows);
  console.log(id);
  console.log(rows);

  return {
    data
  }
}

async function create(status){
    const data = new StatusModel({
        Name: status.Name,
        Description: status.Description,
    })

  try {
      dataToSave = await data.save();
      return dataToSave;
  }
  catch (error) {
      return error.message;
  }
}

async function update(id, meal){
  try {
      result = await StatusModel.findByIdAndUpdate(id, meal, {new: true})
      return result;
    }
    catch (error){
      return error;
    }
}

async function remove(id){
  try{  
    const result = await StatusModel.findByIdAndDelete(id);
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
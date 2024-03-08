const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const MealModel = require('../models/meal');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  
  const rows = await MealModel.find();

  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getOne(id){
  const rows = await MealModel.find({"_id" : id})
  const data = helper.emptyOrRows(rows);
  console.log(id);
  console.log(rows);

  return {
    data
  }
}

async function create(meal){
    const data = new MealModel({
      Name: meal.Name,
      Description: meal.Description,
      Content: meal.Content,
      Price: meal.Price,
      ImageUrl: meal.ImageUrl,
      Tags: meal.Tags,
      CategoryId: meal.CategoryId
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
      result = await MealModel.findByIdAndUpdate(id, meal, {new: true})
      return result;
    }
    catch (error){
      return error;
    }
}

async function remove(id){
  try{  
    const result = await MealModel.findByIdAndDelete(id);
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
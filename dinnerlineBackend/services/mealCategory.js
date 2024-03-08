const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const MealCategoryModel = require('../models/mealCategory');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  
  const rows = await MealCategoryModel.find();

  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getOne(id){
  const rows = await MealCategoryModel.find({"_id" : id})
  const data = helper.emptyOrRows(rows);
  console.log(id);
  console.log(rows);

  return {
    data
  }
}

async function create(category){
    const data = new MealCategoryModel({
      Name: category.Name,
      Description: category.Description,
    })

  try {
      dataToSave = await data.save();
      return dataToSave;
  }
  catch (error) {
      return error.message;
  }
}

async function update(id, category){
  try {
      result = await MealCategoryModel.findByIdAndUpdate(id, category, {new: true})
      return result;
    }
    catch (error){
      return error;
    }
}

async function remove(id){
  try{  
    const result = await MealCategoryModel.findByIdAndDelete(id);
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
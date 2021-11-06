'use strict'
const prisma = require('../../services/prisma');

exports.save = async (profesor) =>{
  let result = undefined;
  try {
    result = await prisma.profesor.create({data:profesor});
  } catch (error) {
    console.log(error);
    result = error;
  }
  return result;
}

exports.updateById = async (profesor)=>{
  let result = undefined;
  const {id ,...info} = profesor;
  try {
    result = await prisma.profesor.update({
      where:{id : profesor.id},
      data:info
    }); 
  } catch (error) {
    console.log(error);
    result = error;
  }
  return result;
}

exports.deleteById = async (id)=>{
  let result = undefined;
  try {
    result = await prisma.profesor.delete({
      where:{id},
    });
  } catch (error) {
    console.log(error);
    result = error;
  }
  return result;
}

exports.getAll = async ()=>{
  let result = undefined;
  try {
    result = await prisma.profesor.findMany();
  } catch (error) {
    console.log(error);
    result = error;
  }
  return result;
}

exports.getbyId = async (id)=>{
  let result = undefined;
  try {
    result = await prisma.profesor.findUnique({
      where: {id}
    });
  } catch (error) {
    console.log(error);
    result = error;
  }
  return result;
}
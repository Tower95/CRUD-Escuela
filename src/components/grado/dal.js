'use strict'
const prisma = require('../../services/prisma');

exports.save = async (grado) =>{
  let result = undefined;
  try {
    result = await prisma.grado.create({data:grado});
  } catch (error) {
    console.log(error);
    result = error;
  }
  return result;
}

exports.updateById = async (grado)=>{
  let result = undefined;
  const {id ,...info} = grado;
  try {
    result = await prisma.grado.update({
      where:{id : grado.id},
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
    result = await prisma.grado.delete({
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
    result = await prisma.grado.findMany();
  } catch (error) {
    console.log(error);
    result = error;
  }
  return result; 
}

exports.getbyId = async (id)=>{
  let result = undefined;
  try {
    result = await prisma.grado.findUnique({ 
      where: {id}
    });
  } catch (error) {
    console.log(error);
    result = error;
  }
  return result;
} 
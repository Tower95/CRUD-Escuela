'use strict'
const prisma = require('../../services/prisma');

exports.save = async (alumnogrado) =>{
  let result = undefined;
  try {
    console.log(alumnogrado);
    result = await prisma.alumnoGrado.create({data:alumnogrado});
  } catch (error) {
    console.log(error);
    result = error;
  }
  return result;
}

exports.updateById = async (alumnogrado)=>{
  let result = undefined;
  const {id ,...info} = alumnogrado;
  try {
    result = await prisma.alumnoGrado.update({
      where:{id : alumnogrado.id},
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
    result = await prisma.alumnoGrado.delete({

      where:{id:Number(id)},
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
    result = await prisma.alumnoGrado.findMany();
  } catch (error) {
    console.log(error);
    result = error;
  }
  return result;
}

exports.getbyId = async (id)=>{
  let result = undefined;
  try {
    result = await prisma.alumnoGrado.findUnique({
      where: {id}
    });
  } catch (error) {
    console.log(error);
    result = error; 
  }
  return result;
} 
'use strict'
const prisma = require('../../services/prisma');

exports.save = async (alumno) =>{
  let result = undefined;
  try {
    result = await prisma.alumno.create({data:alumno});
  } catch (error) {
    console.log(error);
    result = error;
  }
  return result;
}

exports.updateById = async (alumno)=>{
  let result = undefined;
  const {id ,...info} = alumno;
  try {
    result = await prisma.alumno.update({
      where:{id : alumno.id},
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
    result = await prisma.alumno.delete({

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
    result = await prisma.alumno.findMany();
  } catch (error) {
    console.log(error);
    result = error;
  }
  return result;
}

exports.getbyId = async (id)=>{
  let result = undefined;
  try {
    result = await prisma.alumno.findUnique({
      where: {id}
    });
  } catch (error) {
    console.log(error);
    result = error;
  }
  return result;
}
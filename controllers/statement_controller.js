import { request } from "express";
import { StatementModel } from "../models/statement_model.js";

export const addStatement = async (req,res) => {
    try{
        console.log('request', req.body)
        const addData = await StatementModel.create(req.body)
        res.status (200).send(addData);
    } catch (error) {
        console.log(error);
    }
    
}

export const getStatement = async (req,res) => {
  try {
      console.log('request', req.body)
      const getData = await StatementModel.find();
      res.status(200).send(getData)
  } catch (error) {
    console.log(error);
  }
}
 export const getStatementById = async (req,res) => {
    try {
        console.log('request', req.body)
        const getDataById = await StatementModel.findById(req.params.id);
        res.status(200).send(getDataById);
    } catch (error) {
        console.log(error);
    }
 }

 export const updateStatementbyId = async (req,res) => {
    try {
        const status = req.body.caseStatus;
        console.log('request', status);
        const updatedStatement = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus: status});
        res.status(200).send(updatedStatement)
    } catch (error) {
        
    }
 }

 export const deleteStatementbyId = async (req,res) => {
    try {
        console.log('request',req.body)
        const deleteDataById = await StatementModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Statement deleted successfully")
    } catch (error) {
        console.log (error)
    }
 }
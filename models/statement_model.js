import { Schema, model } from "mongoose"

const statementSchema = new Schema({
    incidentType: {type: String,
      enum: ['non-criminal', 'criminal']},
    civilianStatus: {type: String ,
        enum: ['suspect', 'complainant', 'witness']},
    statement: {type: String},
    caseStatus: {type: String,
        enum: ['open', 'closed']},
    civilianId: {type: String},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
});

export const StatementModel = model('Statement',statementSchema)
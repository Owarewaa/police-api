import express from "express";
import statementRouter from "./routes/statement.js";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";
import { addStatement } from "./controllers/statement_controller.js";
import { getStatement } from "./controllers/statement_controller.js";
import { getStatementById } from "./controllers/statement_controller.js";

 
const app = express();
app.use(express.json());

dbConnection();

app.use(statementRouter);


app.listen(8080, () => {
    console.log('App listening on port 8080')
});
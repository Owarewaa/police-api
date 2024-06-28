import { Router} from "express";
import { addStatement, deleteStatementbyId, getStatement, getStatementById, updateStatementbyId } from "../controllers/statement_controller.js";


const statementRouter = Router();

statementRouter.post('/statement', addStatement);

statementRouter.get('/statement', getStatement);

statementRouter.get('/statement/:id', getStatementById);

statementRouter.patch('/statement/:id', updateStatementbyId);

statementRouter.delete('/statement/:id', deleteStatementbyId);



// statementRouter.get('/statement', (req,res) => {
//     res.json('All statement');
// });

// statementRouter.post('/statement', (req, res) => {
//     res.json('Statement added');
// });

export default statementRouter;
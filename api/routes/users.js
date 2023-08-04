import express from "express";
import {
    getUsers, 
    addUser, 
    updateUser, 
    deleteUser
} from "../controllers/user.js";
/// Estamos importando funções de manipulação [crud] 

const router = express.Router();
///  O Router é um objeto que nos permite definir rotas para o aplicativo

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default  router;
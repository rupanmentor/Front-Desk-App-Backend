import express from "express"
import { bookService } from "../Controllers/bookingController.js";
import { authMiddleware } from "../Middleware/authMiddleware.js";


const router = express.Router();

router.post("/book",authMiddleware,bookService)



export default router;
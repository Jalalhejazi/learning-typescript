import { Request , Response, Router } from "express"
import { About } from "../config"

const aboutRouter : Router = Router(); 

aboutRouter.get("/" , (request: Request, response: Response) =>{
	response.json({
		about : About,
		version : '2.0.0'
	})
})

export {  aboutRouter }
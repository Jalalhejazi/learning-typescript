import { Request , Response, Router } 	from "express"
import * as fetch						from "node-fetch" 
import { WeatherUrl } 					from '../config'


const vejretRouter : Router = Router(); 

vejretRouter.get("/" , (request: Request, response: Response) =>{

	fetch(WeatherUrl)
	.then( res  =>  res.text() )
	.then( data => {
		
		const temperaturArray = data.split(/(\s+)/)

		const temperaturObject = {
			byNavn     : 'Odense',
			dato       : temperaturArray[0],
			tid        : temperaturArray[2],
			temperatur : temperaturArray[4]
		}
		response.json(temperaturObject)

	})
})

export {  vejretRouter }
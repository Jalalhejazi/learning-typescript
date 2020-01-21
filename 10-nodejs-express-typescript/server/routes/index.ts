import { Request, Response, Router } from "express";

const landingPage: Router = Router();

const data = {
  name: "Jalal Hejazi  @ SuperUers .dk ",
  titel: "DevOps Engineer" , 
  api : {
    public : "/api/public", 
    about  : "/about" ,
    vejret : "/api/vejret"

  }
};

landingPage.get("/", (request: Request, response: Response) => {
  response.json(data);
});



export { landingPage };

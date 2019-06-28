import { Request, Response, Router } from "express";

const publicRouter: Router = Router();

publicRouter.get("/", (request: Request, response: Response) => {
  response.json({
    text: "Hello TypeScript from the Serverside",
    title: "Greetings.",
  });
});

export { publicRouter };

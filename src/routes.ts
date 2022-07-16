import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "Nodejs",
    duration: 10,
    educator: "Daniele Leão"
  });

  return response.send();
}
interface User {
  name: string;
  duration: number;
  educator: string;
}

class CreateCourseService {
  execute({ name, duration, educator }: User) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
import { Router } from "express";
import user from "./user.routes";
import admin from "./admin.routes";
import task from "./task.routes";
export interface Route {
  path: string;
  route: Router;
}
const router = Router();
const routes: Route[] = [
  {
    path: "/user",
    route: user,
  },
  {
    path: "/admin",
    route: admin,
  },
  {
    path: "/task",
    route: task,
  },
];
routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;

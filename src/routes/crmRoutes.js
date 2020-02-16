import { addNewTask, getTasks, getTasksOfUser } from '../controllers/crmControllers';
import { addNewUser, getUser, login } from '../controllers/UserController';
import { checkAuthenticated } from '../controllers/helper';
const cors = require('cors')
const routes = (app) => {
  app.use(cors());
  app.route('/alltasks')
    .get(checkAuthenticated, getTasks)
  app.route('/addTask')
    .post(checkAuthenticated, addNewTask);
  app.route('/user/:userId')
    .get(checkAuthenticated, getUser)

  app.route('/register')
    .post(addNewUser);
  app.route('/login')
    .post(login);
  app.route('/tasks')
    .get(checkAuthenticated, getTasksOfUser)
}

export default routes;

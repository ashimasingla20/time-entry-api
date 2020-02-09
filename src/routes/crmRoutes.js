import { addNewTask, getTasks } from '../controllers/crmControllers';

const routes = (app) => {
  app.route('/task')
      .get((req,res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
      }, getTasks)
      .post(addNewTask);

  // app.route('/contact/:contactID')
  //     .put((req,res) =>
  //     res.send('PUT request successful!'))

  //     .delete((req,res) =>
  //     res.send('DELETE request successful!'));
}

export default routes;

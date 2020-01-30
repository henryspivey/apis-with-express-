import { addNewContact, getContact, getContactWithId } from '../controllers/crmController';

const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) => {
      console.log(`request from: ${req.originalUrl}`);
      console.log(`request from: ${req.method}`);
      next();
    }, getContact)
    .post(addNewContact);

  app.route('/contact/:contactID')
    .get(getContactWithId)
    .put((req, res) => {

    })
    .delete((req, res) => {
      res.send('PUT request successful');
    });
};

export default routes;

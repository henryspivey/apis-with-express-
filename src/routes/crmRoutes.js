import { addNewContact, getContact, getContactWithId, updateContact, deleteContact } from '../controllers/crmController';

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
    .put(updateContact)
    .delete(deleteContact);
};

export default routes;

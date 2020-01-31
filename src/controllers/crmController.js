import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
  const NewContact = new Contact(req.body);
  NewContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};


export const getContact = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContactWithId = (req, res) => {
  Contact.findById(req.params.contactID, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};


export const updateContact = (req, res) => {
  Contact.findOneAndUpdate({_id: req.params.contactID}, req.body, {new: true, useFindAndModify: false}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};


export const deleteContact = (req, res) => {
  Contact.remove({_id: req.params.contactID}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json({message: "successfully deleted contact"});
  });
};
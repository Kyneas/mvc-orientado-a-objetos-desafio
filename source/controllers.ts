import { Contact, ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
  }

  processOptions(options: ContactsControllerOptions) {
    switch (options.action) {
      case "get":
        let contacto: Contact | undefined;
        if ((contacto = this.contacts.getOneById(options.params.id)))
          return contacto;
        else return this.contacts.getAll();
        break;

      case "save":
        return this.contacts.addOne(options.params);
        break;

      default:
        return "Parametros incorrectos";
        break;
    }
  }
}

export { ContactsController };

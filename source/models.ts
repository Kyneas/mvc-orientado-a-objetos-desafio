import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class ContactsCollection {
  data: Contact[] = [];

  constructor() {
    this.load();
  }

  load() {
    const json = jsonfile.readFileSync("contacts.json");
    json.forEach((element) => {
      this.data.push(new Contact(element.id, element.name));
    });
  }

  getAll(): Contact[] {
    return this.data;
  }

  addOne(contact) {
    if (typeof contact.id == "number" && typeof contact.name == "string") {
      this.data.push(contact);
      return "Contacto agregado";
    }
    return "No se agrego, error en los datos";
  }

  save(): void {
    jsonfile.writeFileSync("contacts.json", this.data);
  }

  getOneById(id: number): Contact | undefined {
    return this.data.find((c) => c.id == id);
  }
}
export { Contact, ContactsCollection };

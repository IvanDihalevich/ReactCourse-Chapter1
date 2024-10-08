import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";
import Book from "../models/Book";
import EditContactForm from "./EditContactForm";

const ContactsManager = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const handleAdd = (contact) => {
    const newContact = new Book(
      contacts.length + 1,
      contact.firstName,
      contact.lastName,
      contact.phone
    );
    setContacts([...contacts, newContact]);
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  const handleUpdate = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditingContact(null);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <ContactForm onAdd={handleAdd} />
      <ContactTable
        contacts={contacts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {editingContact && (
        <EditContactForm
          contact={editingContact}
          onUpdate={handleUpdate}
          onCancel={() => setEditingContact(null)}
        />
      )}
    </>
  );
};

export default ContactsManager;

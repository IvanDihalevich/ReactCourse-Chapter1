
import PropTypes from 'prop-types';

const ContactTable = ({ contacts, onEdit, onDelete }) => {
    if (contacts.length === 0) {
        return <p>No data to display</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button onClick={() => onEdit(contact)}>Edit</button>
                            <button onClick={() => onDelete(contact.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

ContactTable.propTypes = {
    contacts: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactTable;

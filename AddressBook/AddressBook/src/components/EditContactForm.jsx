import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const EditContactForm = ({ contact, onUpdate, onCancel }) => {
    const [firstName, setFirstName] = useState(contact.firstName);
    const [lastName, setLastName] = useState(contact.lastName);
    const [phone, setPhone] = useState(contact.phone);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (contact) {
            setFirstName(contact.firstName);
            setLastName(contact.lastName);
            setPhone(contact.phone);
        }
    }, [contact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!firstName) newErrors.firstName = 'The first name is required';
        if (!lastName) newErrors.lastName = 'The last name is required';
        if (!phone) newErrors.phone = 'The phone is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            onUpdate({ ...contact, firstName, lastName, phone });
            onCancel();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
            <button type="submit">Update</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

EditContactForm.propTypes = {
    contact: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default EditContactForm;


import PropTypes from 'prop-types';
import useForm from '../hooks/useForm';

const ContactForm = ({ onAdd }) => {
    const { values, errors, handleChange, validate, setValues } = useForm({
        firstName: '',
        lastName: '',
        phone: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate((values) => {
            const newErrors = {};
            if (!values.firstName) newErrors.firstName = 'The first name is required';
            if (!values.lastName) newErrors.lastName = 'The last name is required';
            if (!values.phone) newErrors.phone = 'The phone is required';
            return newErrors;
        });

        if (isValid) {
            onAdd(values);
            setValues({
                firstName: '',
                lastName: '',
                phone: '',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
            />
            {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
            />
            {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
            />
            {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
            <button type="submit">Add</button>
        </form>
    );
};

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

export default ContactForm;

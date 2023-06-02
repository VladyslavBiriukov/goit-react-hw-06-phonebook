import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from "../../redux/contactsSlice";
import { nanoid } from 'nanoid'

import { Button, Input, Label } from './ContactForm.styled';

const ContactForm = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name': setName(value);
                break;
            
            case 'number': setNumber(value);
                break;
            
            default: return;
        }
    };

    const contacts = useSelector((state) => state.contacts.contacts);

    const handleSubmit = e => {
        e.preventDefault();

        const newContact = {
            id: nanoid(),
            name,
            number,
        };

        const normalizeName = newContact.name.toLowerCase();
        const isNameInContact = contacts.find(newContact => newContact.name.toLowerCase() === normalizeName);
        isNameInContact ? toast.success(`${newContact.name} is already in contacts`) : dispatch(addContacts(newContact));
        reset();
    };
    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Label>
                Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    placeholder="Enter your name..."
                    onChange={handleChange}
                />
            </Label>
            <Label>
                Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    placeholder="Enter your number..."
                    onChange={handleChange}
                />
            </Label>
            <Button type="submit">Add contact</Button>
            <Toaster />
        </form>
    );
};


export default ContactForm;
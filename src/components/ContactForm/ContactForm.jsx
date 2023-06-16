import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid'
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from 'redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


import { Button, Input, Label } from './ContactForm.styled';


const ContactForm = () => {

  const contacts = useSelector(getContacts);
  const [inputName, setTypeName] = useState('');
  const [inputNumber, setTypetNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.inputName === inputName)) {
      toast.success(`${inputName} is already in contacts`)
    } else {
      dispatch(addContact({ id: nanoid(), inputName, inputNumber }));
    }
    
    reset();
  };
    
      const reset = () => {
        setTypeName('');
        setTypetNumber('');
      };
    
    
      const handleChangeName = e => {
        if (e.target.type === 'text') {
          setTypeName(e.target.value);
        }
      };

      const handleChangeNumber = e => {
        if (e.target.type === 'tel') {
          setTypetNumber(e.target.value);
        }
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
                    value={inputName}
                    placeholder="Enter your name..."
                    onChange={handleChangeName}
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
                    value={inputNumber}
                    placeholder="Enter your number..."
                    onChange={handleChangeNumber}
                />
            </Label>
            <Button type="submit">Add contact</Button>
            <Toaster />
        </form>
    );
};


export default ContactForm;
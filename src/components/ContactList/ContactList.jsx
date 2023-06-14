import ContactItem from 'components/ContactIteam';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/filterSlice';

import { List } from './ContactList.styled';

function ContactList() {
     const contacts = useSelector(getContacts);
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            ))}
        </List>
    );
};

export default ContactList;
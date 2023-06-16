import ContactItem from 'components/ContactIteam';
import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';


import { getContacts, getFilter } from 'redux/selector';
import { getFilteredContacts } from 'redux/selector';

function ContactList() {

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);


    const filteredContacts = getFilteredContacts(filter, contacts);
    console.log(filteredContacts);

    return (
        <List>
            {filteredContacts &&
                filteredContacts.map(({ id, inputName, inputNumber }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={inputName}
                    number={inputNumber}
                />
            ))}
        </List>
    );
};

export default ContactList
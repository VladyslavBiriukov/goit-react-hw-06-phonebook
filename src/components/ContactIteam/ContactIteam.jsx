import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import { ListItem, Button } from './ContactIteam.styled';

function ContactItem({ id, name, number }) {

    const dispatch = useDispatch();
    const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
    };
    
    return (
        <ListItem key={id}>
            <p>
                {name}: {number}
            </p>
            <Button type="button" onClick={() => onDeleteContact(id)}>
                Delete
            </Button>
        </ListItem>
    );
};



export default ContactItem;
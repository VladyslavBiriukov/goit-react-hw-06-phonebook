import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { ListItem, Button } from './ContactIteam.styled';
import { deleteContact } from '../../redux/contactsSlice';

function ContactItem({ id, name, number }) {

    const dispatch = useDispatch();

    const onDeleteContact = id => {
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

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired, 
};

export default ContactItem;


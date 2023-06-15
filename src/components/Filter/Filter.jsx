import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contactsSlice';
import { getFilter } from 'redux/selector';

import { Input, FilterLabel} from './Filter.styled';

const Filter = () => {

    const filterValue = useSelector(getFilter);
    const dispatch = useDispatch();

    const onChange = e => {
        const value = e.target.value.toLowerCase();
        dispatch(filterContacts(value));
    };
    
    
    return (
        <FilterLabel>
            Find contacts by name
            <Input type="text"
                name="filter" value={filterValue}
                onChange={onChange}
                placeholder="Enter search name" />
        </FilterLabel>
    );
}

export default Filter;


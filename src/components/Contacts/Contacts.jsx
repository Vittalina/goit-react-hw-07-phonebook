import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import { ListItem, Button } from 'components/Contacts/Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/actions';
import { selectContacts, selectSetFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  const filter = useSelector(selectSetFilter);
  console.log(filter);

  const normalizedFilter = filter.toLowerCase();
  const filteredNames = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  console.log(filteredNames);

  return (
    <ul>
      {filteredNames.map(contact => (
        <ListItem key={nanoid()}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <Button
            type="button"
            id={contact.number}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;

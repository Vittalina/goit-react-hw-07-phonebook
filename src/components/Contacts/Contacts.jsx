import PropTypes from 'prop-types';
import React from 'react';
import { ListItem, Button } from 'components/Contacts/Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
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
        <ListItem key={contact.id}>
          <span>
            {contact.name}: {contact.phone}
          </span>
          <Button
            type="button"
            id={contact.id}
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

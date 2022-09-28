import { Box } from 'components/Box';
import Phonebook from 'components/Phonebook/Phonebook';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

const App = () => {
  return (
    <Box
      p={100}
      px
      mr="auto"
      ml="auto"
      width="500px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      as="main"
    >
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Box>
  );
};

export default App;

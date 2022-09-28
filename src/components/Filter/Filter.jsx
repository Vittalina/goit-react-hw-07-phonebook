import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';
import { FormField, Input, Label } from 'components/Filter/Filter.styled';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FormField>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search"
        />
      </Label>
    </FormField>
  );
};

export default Filter;

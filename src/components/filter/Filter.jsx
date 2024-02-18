import { selectFilter } from '../../redux/contacts/selectors';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const value = event.currentTarget.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <div className={css.wrapperFilter}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChangeFilter}
        />
      </label>
    </div>
  );
};

export { Filter };

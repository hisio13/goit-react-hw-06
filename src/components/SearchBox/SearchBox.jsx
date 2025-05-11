import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  return (
    <div className={css.box}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
}

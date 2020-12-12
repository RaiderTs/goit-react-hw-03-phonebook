import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={style.label}>
      Enter name for search
      <input
        className={style.input}
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        placeholder="Enter a name to search"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

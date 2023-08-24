import PropTypes from 'prop-types';
import css from './filter.module.css'

export const Filter =({filter, handleChange})=> {
    return (
        <div className={css.contactForm}>
            
        <label  className={css.form}>Find contact by name
            <input className={css.input}
                type="text"
                            value={filter}
  name="filter"
  onChange={handleChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
            >
            </input>
            </label>
            </div>
)
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}
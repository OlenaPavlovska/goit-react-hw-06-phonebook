import PropTypes from 'prop-types';
import css from './contactList.module.css'



export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={css.contactList}>
            {contacts.map(({id,name,number}) => (
                <li className={css.list} key={id}>
                    <p className={css.text}>{name}:  {number}</p>
                    <button className={css.btnAddContacts}  type='button' onClick={()=>onDelete(id)}>Delete</button>
                </li>
            ))}

        </ul>
    )


}
 





ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}
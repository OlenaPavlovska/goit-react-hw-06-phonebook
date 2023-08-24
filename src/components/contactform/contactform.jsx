import { useState } from "react";
import css from './contactform.module.css'

export const ContactForm = ({ onSubmit }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    
  

    const handleChange = e =>  {
        const{name,value}=e.target
        switch(name){
            case'name':
            setName(value)
            break
            case'number':
            setNumber(value)
            break
            default:
                break;
        }
    }

    const reset = () => {
        setName('')
        setNumber('')
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, number })
         reset()
    }

 return (
            <>
                <div className={css.contactForm} >
                    <form className={css.form} onSubmit={handleSubmit}>
                        <label className={css.label}
                            htmlFor="name">
                            Name
                            <input className={css.input}
                                type="text"
                                value={name}
                                name="name"
                                onChange={handleChange}
                                pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                required
                            />
                        </label>

                        <label className={css.label} htmlFor="number">
                            Number
                            <input className={css.input}
                                type="tel"
                                value={number}
                                name="number"
                                onChange={handleChange}
                                pattern= "\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                required
                            />
                        </label>
                        <button className={css.btnAddContacts}
                            type="submit" disabled={!name || !Number(number)}>Add Contact</button>
                    </form>
                </div>
            </>
        )
    }








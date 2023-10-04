import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from "redux/itemsSlice";

const ContactList = () => {

    const contacts=useSelector(state=>state.items.items);
    const dispatch=useDispatch();

    const onClickDelete = id => {
        dispatch(remove(id));
    }
    
    
    const filter=useSelector(state=>state.filter.value);
    return (<div className={css.contacts__list__container}>
        <ul>
            {contacts.map(contact => {
                if (contact.name.toLowerCase().includes(filter.toLowerCase()) || filter === 0)
                    return (
                        <li key={contact.id}>
                            <p>{contact.name}: {contact.number}</p>
                            <button type="button" onClick={() => onClickDelete(contact.id)}>Delete</button>
                        </li>)
                else return "";
            })}</ul>
    </div>);
}

export default ContactList;
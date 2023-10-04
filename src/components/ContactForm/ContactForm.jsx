import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { add } from "redux/itemsSlice";
import { Outlet} from "react-router-dom";
import Notiflix from 'notiflix';

const ContactForm = () => {

    const dispatch=useDispatch();
    const contacts=useSelector(state=>state.items.items)
    
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const number=e.currentTarget.elements.number.value;
        const name=e.currentTarget.elements.name.value;

        const namePattern = new RegExp("^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$");
      const numberPattern = new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-/s/./0-9]*$");

    if (!namePattern.test(name) && !numberPattern.test(number))
      Notiflix.Notify.failure("Name and phone number are incorrect!");
    else if (!namePattern.test(name))
      Notiflix.Notify.failure("Name is incorrect!")
    else if (!numberPattern.test(number))
      Notiflix.Notify.failure("Phone number is incorrect! Accepted type is: +380000000000")
    else {

      if (contacts.find(contact => contact.number === number))
        Notiflix.Notify.failure("This contact exists!")
      else {
        const newUser = { id: "id:" + number, name: name, number: number };
        dispatch(add(newUser))
        localStorage.setItem("contacts", JSON.stringify([...contacts, newUser]));

        var getValue = document.getElementById("name");
        if (getValue.value !== "") {
          getValue.value = "";
        }

        getValue = document.getElementById("tel");
        if (getValue.value !== "") {
          getValue.value = "";
        }
      }
    }}

    return (<section className={css.main_page_container}>
      <form className={css.add__contact__container} onSubmit={handleSubmit}>
        <div className={css.name_container}>
            <h3>Name</h3>
            <input
                type="text"
                id="name"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </div>
        <div className={css.number_container}>
            <h3>Number</h3>
            <input
                type="tel"
                id="tel"
                name="number"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                className={css.number__input}
            />
        </div>
        <button type="submit">Add Contact</button>
    </form> <Outlet></Outlet></section>);
}

export default ContactForm;
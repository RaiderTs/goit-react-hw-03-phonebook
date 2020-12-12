import PropTypes from "prop-types";
import style from "./ContactList.module.css";

function ContactList({ contacts, onRemove }) {
  if (contacts.length === 0) return null;
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={style.item} key={id}>
          <p className={style.info}>
            {name}: {number}
          </p>
          <button className={style.btn} onClick={() => onRemove(id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

// const ContactListItem = ({ id, name, phone, onRemove }) => {
//   return (
//     <li className={style.item} key={id}>
//       <p className={style.info}>
//         {name}: {phone}
//       </p>
//       {/* С контактом на будет приходить ID, по нему будем удалять контакт. Вставляем его в метод onREMOVE */}
// <button className={style.btn} onClick={() => onRemove(id)}>
//   Remove
// </button>
//     </li>
//   );
// };
// // Пишем компонент для разметки текста
// // В него приходит наш массив контактов и метод Remove
// const ContactsList = ({ contacts, onRemove }) => {
//   // проверяем наличие контактов
//   if (contacts.length === 0) return null; // т.е. список контактов не отрендерится
//   // Если все хорошо возвращаем список
//   return (
//     <ul className={style.list}>
//       {contacts.map((contact) => (
//         <ContactListItem {...contact} onRemove={onRemove} />
//       ))}
//     </ul>
//   );
// };

// ContactListItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string,
//   onRemove: PropTypes.func.isRequired,
// };

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;

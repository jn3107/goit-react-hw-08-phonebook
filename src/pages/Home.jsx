import { SectionTitle } from 'components/sectionTitle/SectionTitle';
import css from './contacts/Contacts.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <SectionTitle title="Phonebook Application" />
      <p className={css.text}>
        To open your Phonebook please log in. If you do not have an account yet,
        please register.
      </p>
    </div>
  );
};

export default Home;

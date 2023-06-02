import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import { ContactsTitle, Container, Title } from './App.styled';


function App() {
        return (
            <Container>
                <section title="Phonebook">
                    <Title>Phonebook</Title>
                    <ContactForm />
                </section>
                <section title="Contacts">
                    <ContactsTitle>Contacts</ContactsTitle>
                    <Filter />
                    <ContactList />
                </section>
            </Container>
        );
};

export default App;


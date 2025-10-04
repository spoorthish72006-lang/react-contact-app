import { useState } from "react";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContact] = useState([
    {
      id: "user39",
      name: "sanvi",
      email: "sanvi@gmail.com",
    },
  ]);

  return (
    <div className="ui container">
      <Header />
      <AddContact contacts={contacts} setContact={setContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}
export default App;

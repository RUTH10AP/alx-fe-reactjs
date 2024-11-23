import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";
function App() {
  return (
    <div>
      <FormikForm />
      <h1>User Registration</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;

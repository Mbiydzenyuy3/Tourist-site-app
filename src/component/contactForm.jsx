import { Formik, Form, Field } from "formik";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
`;

const InputField = styled(Field)`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  color: #555;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

const TextAreaField = styled(Field)`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  color: #555;
  font-family: "Arial", sans-serif; /* Consistent font */
  height: 120px;
  resize: vertical;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #367c39;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ContactForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Simulate an API call
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm(); // Clear the form after submission
    }, 500);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormContainer>
            <Label>Name:</Label>
            <InputField type="text" id="name" name="name" />

            <Label>Email:</Label>
            <InputField type="email" id="email" name="email" />

            <Label>Message:</Label>
            <TextAreaField as="textarea" id="message" name="message" rows="4" />

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Send Message"}
            </SubmitButton>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

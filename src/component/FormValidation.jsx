
import { useForm } from "react-hook-form";
// import "./ContactForm.css"; 

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
      />
      {errors.name && <span>{errors.name.message}</span>}

      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email.message}</span>}

      <textarea
        {...register("message", { required: "Message is required" })}
        placeholder="Message"
      ></textarea>
      {errors.message && <span>{errors.message.message}</span>}

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;

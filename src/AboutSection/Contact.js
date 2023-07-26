import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => <Form.Control type="text" {...field} />}
        />
        {errors.name && (
          <Form.Text className="text-danger">{errors.name.message}</Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          }}
          render={({ field }) => <Form.Control type="email" {...field} />}
        />
        {errors.email && (
          <Form.Text className="text-danger">{errors.email.message}</Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Controller
          name="message"
          control={control}
          rules={{ required: "Message is required" }}
          render={({ field }) => (
            <Form.Control as="textarea" rows={4} {...field} />
          )}
        />
        {errors.message && (
          <Form.Text className="text-danger">
            {errors.message.message}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Contact Number</Form.Label>
        <Controller
          name="contactNumber"
          control={control}
          rules={{
            required: "Contact number is required",
            pattern: {
              value: /^\d+$/,
              message: "Invalid contact number",
            },
          }}
          render={({ field }) => <Form.Control type="tel" {...field} />}
        />
        {errors.contactNumber && (
          <Form.Text className="text-danger">
            {errors.contactNumber.message}
          </Form.Text>
        )}
      </Form.Group>

      <button
        type="submit"
        className="btn btn-transparent mt-4"
        style={{
          backgroundColor: "rgba(0, 0, 255, 0.5)",
          color: "white", // Set the text color to a contrasting color for better visibility
          borderColor: "transparent", // Optional: Set border color to transparent for a borderless button
          //   width: "10vw",
        }}
      >
        Submit
      </button>
    </Form>
  );
};

export default ContactForm;

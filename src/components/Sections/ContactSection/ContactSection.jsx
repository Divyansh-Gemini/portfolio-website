import React, { useRef, useState } from "react";
import Heading from "../../Heading";
import InputField from "./InputField";
import Label from "./Label";
import emailjs from "@emailjs/browser";
import Icon from "@mdi/react";
import {
  mdiCheck,
  mdiCheckCircle,
  mdiCheckboxMarkedCircleAutoOutline,
} from "@mdi/js";

const ContactSection = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section>
      <Heading text="contact" width="1/3" />

      <form
        action="#"
        method="post"
        className="flex flex-col gap-7 md:w-2/3  xl:w-1/2 mx-auto"
        ref={form}
        onSubmit={sendEmail}
      >
        {/* name */}
        <div className="flex flex-col">
          <Label forValue="name" />
          <InputField type="text" name="name" />
        </div>

        {/* email */}
        <div className="flex flex-col">
          <Label forValue="email" />
          <InputField type="email" name="email" />
        </div>

        {/* message */}
        <div className="flex flex-col">
          <Label forValue="message" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            required
            className="p-2 text-sm above-fold:text-base md:text-lg bg-gray-300 focus:outline-none rounded-lg font-medium text-[var(--background)] border-4 border-gray-300
            placeholder-gray-500 focus:placeholder-gray-400 focus:ring-4 focus:ring-purple-600 focus:ring-opacity-30 transition duration-200 resize-none"
            style={{ caretColor: "var(--background)" }}
            placeholder="message..."
          />
        </div>

        {/* submit btn & success msg */}
        <div className="flex justify-center">
          {isSubmitted ? (
            <div className="flex gap-3 py-2">
              <Icon
                path={mdiCheckboxMarkedCircleAutoOutline}
                size={1}
                color="rgb(34, 197, 94)"
              />
              <span className="text-green-500 font-medium">
                Submitted successfully 🎉
              </span>
            </div>
          ) : (
            <input
              type="submit"
              value="submit-message"
              className="mt-5 py-2 px-4 inline-block rounded-lg border transition duration-200 border-[var(--background)] 
                bg-[var(--primary)] text-[var(--background)] font-semibold hover:font-normal hover:border-[var(--primary)] 
                hover:bg-[var(--background)] hover:text-[var(--white)] active:bg-gray-900 active:scale-95 focus:ring-2"
            />
          )}
        </div>
      </form>
    </section>
  );
};

export default ContactSection;

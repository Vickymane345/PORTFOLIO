import { FormEvent, useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { UserContext } from "../Main/main";
import Image from "next/image";
import picture from "../images/dev2.png";

const SERVICE_ID = "service_v2qik6a";
const TEMPLATE_ID = "template_qpnxewl";
const PUBLIC_KEY = "rjW1PnNH-zajPgd14";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setSuccess(true);
        form.current?.reset();
      })
      .catch((error) => {
        console.error("Email error:", error);
        setSuccess(false);
      });
  };
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContext.Provider");
  }
  const { visibleSection } = context;

  return (
    <div className={` ${visibleSection === 4 ? "block" : "hidden"} md:py-10 h-full  `}>
      <div className="md:grid md:grid-cols-2 grid grid-cols-1 md:px-5  items-center justify-evenly">
        <div className="animate-bounce">
          <Image src={picture} alt="" className="w-56 md:w-full m-auto" />
        </div>
        <div className=" max-w-xl  p-6 m-auto md:m-0 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Request a Service</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              name="user_name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              name="user_email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              placeholder="Describe what you need..."
              required
              className="w-full p-2 border border-gray-300 rounded h-32"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Request
            </button>
            {success === true && (
              <p className="text-green-600">Message sent successfully!</p>
            )}
            {success === false && (
              <p className="text-red-600">Failed to send message. Try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

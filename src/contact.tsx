import { useState } from "react";
import emailjs from "emailjs-com";
import 'animate.css';

// Define the form data type
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Typing the event parameter for handleChange function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;


    emailjs
      .sendForm(
        "service_80kb1h8", // Replace with your EmailJS service ID
        "template_cvasbie", // Replace with your EmailJS template ID
        form, // Form data is taken from the target form element
        "8UK4RWWrJhG_8MKoB" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Message sent: ", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending message: ", error.text);
          alert("There was an error. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 animate__animated animate__fadeInUp">Get In Touch</h2>
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate__animated animate__fadeInUp animate__delay-1s">
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 transform hover:scale-105"
            />
          </div>
          <div className="animate__animated animate__fadeInUp animate__delay-1.2s">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 transform hover:scale-105"
            />
          </div>
          <div className="md:col-span-2 animate__animated animate__fadeInUp animate__delay-1.4s">
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 transform hover:scale-105"
            />
          </div>
          <div className="md:col-span-2 animate__animated animate__fadeInUp animate__delay-1.6s">
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 transform hover:scale-105"
            ></textarea>
          </div>
          <div className="md:col-span-2 animate__animated animate__fadeInUp animate__delay-1.8s">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-300 to-blue-900 text-white py-3 rounded-lg hover:bg-gradient-to-l hover:from-blue-900 hover:to-blue-600 transition-colors duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  
  );
};

export default ContactForm;

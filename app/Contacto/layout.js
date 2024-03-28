// ContactoLayout.js
import Footer from "../components/ui/Footer";
import ContactForm from "../components/contacto/ContactForm";
const ContactoLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-sky-800 to-gray-800 min-h-screen flex flex-col color-changing-background">
      <main className="container mx-auto flex-grow p-4">
        <div className="bg-blue-900 rounded p-6">
        
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactoLayout;


import Contactsection from "./components/global/Contactsection";
import ContactUser from "./components/global/ContactUser";
import Projectsection from "./components/global/Projectsection";
import Skills from "./components/global/Skills";
import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {
  return (
    <div className="flex flex-col min-h-[100vh]">
    {/* Inlude Header */}
    <Header/>
    {/* Include Hero section */}
    <Hero/>
    {/* Poject Secgtion */}
    <Projectsection/>
    {/* SKill Section */}
    <Skills/>
    {/* Contact Section */}
    <Contactsection/>
    <ContactUser/>
    </div>
  );
}
export default App;

import { MarcineFishNavbar } from './MarcineFishNavbar';
import { Footer } from './Footer';
import { Chatbot } from './Chatbot';
import Testimonials from './Testimonials';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <MarcineFishNavbar />
      
    
      <main className="flex-grow">
        {children}
      </main>
      
     <Testimonials/>
      <Footer />
      
     
      <Chatbot />
    </div>
  );
};

export default Layout;
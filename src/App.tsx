import { ModalProvider, useModal } from './context/ModalContext';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Suitability } from './components/sections/Suitability';
import { TeacherMatching } from './components/sections/TeacherMatching';
import { Results } from './components/sections/Results';
import { PhotoInsert } from './components/sections/PhotoInsert';
import { BeforeAfter } from './components/sections/BeforeAfter';
import { Reviews } from './components/sections/Reviews';
import { EventsVideo } from './components/sections/EventsVideo';
import { About } from './components/sections/About';
import { Teachers } from './components/sections/Teachers';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Contacts } from './components/sections/Contacts';
import { BookingModal } from './components/sections/BookingModal';

const MainContent = () => {
  const { isModalOpen, closeModal } = useModal();
  
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-yellow-400 selection:text-black">
      <Header />
      <Hero />
      <Suitability />
      <TeacherMatching />
      <Results />
      <PhotoInsert />
      <BeforeAfter />
      <Reviews />
      <EventsVideo />
      <About />
      <Teachers />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Contacts />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};

export default function App() {
  return (
    <ModalProvider>
      <MainContent />
    </ModalProvider>
  );
}

import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Messages from '@/components/sections/messages';
import Classes from '@/components/sections/classes';
import Admissions from '@/components/sections/admissions';
import Gallery from '@/components/sections/gallery';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Messages />
        <Classes />
        <Admissions />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

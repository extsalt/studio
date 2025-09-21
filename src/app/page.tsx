import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import HistoryAndValues from '@/components/sections/history-and-values';
import EducationalPrograms from '@/components/sections/educational-programs';
import LearningEnvironment from '@/components/sections/learning-environment';
import Admissions from '@/components/sections/admissions';
import NewsAndUpdates from '@/components/sections/news-and-updates';
import Newsletter from '@/components/sections/newsletter';
import Gallery from '@/components/sections/gallery';
import Testimonials from '@/components/sections/testimonials';
import UpcomingEvents from '@/components/sections/upcoming-events';
import Footer from '@/components/layout/footer';
import Contact from '@/components/sections/contact';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Messages from '@/components/sections/messages';
import Classes from '@/components/sections/classes';

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <HistoryAndValues />
        <Messages />
        <EducationalPrograms />
        <Classes />
        <LearningEnvironment />
        <Admissions />
        <Gallery />
        <Testimonials />
        <Contact />
        <UpcomingEvents />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

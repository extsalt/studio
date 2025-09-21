import { contactData } from '@/lib/data';
import ContactForm from '../client/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">{contactData.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{contactData.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-card p-8 rounded-lg shadow-xl h-full">
             <ContactForm />
          </div>
          <div className="space-y-8 bg-card p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span>{contactData.address}</span>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <a href={`tel:${contactData.phone}`} className="hover:text-primary transition-colors">{contactData.phone}</a>
                </div>
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <a href={`mailto:${contactData.email}`} className="hover:text-primary transition-colors">{contactData.email}</a>
                </div>
            </div>
             <div>
                <h3 className="text-2xl font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                    {contactData.officeHours.map((item, index) => (
                        <div key={index} className="flex justify-between">
                            <span>{item.days}</span>
                            <span>{item.time}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { admissionsData } from '@/lib/data';
import AdmissionForm from '../client/admission-form';

export default function Admissions() {
  return (
    <section id="admissions" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold font-headline md:text-4xl">{admissionsData.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{admissionsData.description}</p>
            </div>
            <ol className="space-y-6">
              {admissionsData.steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="ml-4 text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <AdmissionForm />
          </div>
        </div>
      </div>
    </section>
  );
}

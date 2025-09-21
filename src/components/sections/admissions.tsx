import { admissionsData } from '@/lib/data';
import AdmissionForm from '../client/admission-form';

export default function Admissions() {
  return (
    <section id="admissions" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-1">
            <div className="max-w-2xl mx-auto">
              <AdmissionForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

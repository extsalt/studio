import { admissionsData } from '@/lib/data';
import AdmissionForm from '../client/admission-form';

export default function Admissions() {
  return (
    <section id="admissions" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mx-auto">
            <AdmissionForm />
        </div>
      </div>
    </section>
  );
}

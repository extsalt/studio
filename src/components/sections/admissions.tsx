import AdmissionForm from '../client/admission-form';

export default function Admissions() {
  return (
    <section id="admissions" className="py-16 md:py-24 bg-secondary/30">
      <div className="container flex justify-center">
        <div className="max-w-2xl w-full">
          <AdmissionForm />
        </div>
      </div>
    </section>
  );
}

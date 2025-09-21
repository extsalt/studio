import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Newsletter() {
  return (
    <section className="bg-primary">
      <div className="container py-16 md:py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Stay updated with school news, events, and announcements
          </p>
          <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/90 text-card-foreground flex-grow"
              aria-label="Email for newsletter"
            />
            <Button type="submit" variant="secondary" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

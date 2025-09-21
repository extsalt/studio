import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { heroData } from '@/lib/data';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
            src={heroData.image.imageUrl}
            alt={heroData.image.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroData.image.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl font-headline md:text-7xl font-bold tracking-tight drop-shadow-2xl">
          {heroData.headline}
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl text-primary-foreground/90 drop-shadow-xl">
          {heroData.subheadline}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#admissions">Apply Now</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

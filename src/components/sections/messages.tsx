import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { messagesData } from '@/lib/data';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

const MessageCard = ({ name, title, message, bio, image, reverse = false }: { name: string; title: string; message: string; bio: string; image: ImagePlaceholder; reverse?: boolean; }) => (
  <Card className="overflow-hidden shadow-xl border-none bg-card">
    <div className={`grid md:grid-cols-5 items-stretch`}>
      <div className={`relative h-80 md:h-auto ${reverse ? 'md:order-last md:col-span-2' : 'md:col-span-2'}`}>
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 40vw"
          data-ai-hint={image.imageHint}
        />
      </div>
      <div className={`p-8 md:p-12 flex flex-col justify-center text-center ${reverse ? 'md:col-span-3' : 'md:col-span-3'}`}>
        <h3 className="text-3xl font-bold font-headline text-primary">{name}</h3>
        <p className="text-muted-foreground font-semibold mb-6">{title}</p>
        <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-foreground/80">
          {message}
        </blockquote>
        <p className="mt-6 text-sm text-muted-foreground">{bio}</p>
      </div>
    </div>
  </Card>
);

export default function Messages() {
    const { principal, chairman } = messagesData;

    return (
        <section id="about" className="py-16 md:py-24 bg-secondary/30">
            <div className="container space-y-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold font-headline md:text-4xl">Words from Our Leaders</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Guiding our vision for a better future in education.
                    </p>
                </div>

                <div className="space-y-16 max-w-5xl mx-auto">
                    <MessageCard {...principal} />
                    <MessageCard {...chairman} reverse={true} />
                </div>
            </div>
        </section>
    );
}

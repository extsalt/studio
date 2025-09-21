import { galleryData } from '@/lib/data';
import GalleryGrid from '../client/gallery-grid';
import { Button } from '../ui/button';

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">{galleryData.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-2 mb-4"></div>
          <p className="mt-4 text-lg text-muted-foreground">{galleryData.description}</p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
            <Button>All</Button>
            <Button variant="outline">Campus Life</Button>
            <Button variant="outline">Events</Button>
            <Button variant="outline">Sports</Button>
            <Button variant="outline">Arts</Button>
        </div>

        <GalleryGrid images={galleryData.images} />
      </div>
    </section>
  );
}

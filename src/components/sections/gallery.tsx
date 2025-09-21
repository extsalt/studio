import { galleryData } from '@/lib/data';
import GalleryGrid from '../client/gallery-grid';

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">{galleryData.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{galleryData.description}</p>
        </div>

        <GalleryGrid images={galleryData.images} />
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

export default function GalleryGrid({ images }: { images: ImagePlaceholder[] }) {
    const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image) => (
                    <button
                        key={image.id}
                        onClick={() => setSelectedImage(image)}
                        className="relative aspect-video w-full h-auto overflow-hidden rounded-lg shadow-lg group transition-all duration-300 hover:shadow-2xl"
                    >
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                            data-ai-hint={image.imageHint}
                        />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-end justify-center">
                            <p className="text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">{image.description}</p>
                        </div>
                    </button>
                ))}
            </div>

            <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
                <DialogContent className="max-w-4xl p-0 border-0">
                    {selectedImage && (
                        <div className="relative aspect-video">
                            <Image
                                src={selectedImage.imageUrl}
                                alt={selectedImage.description}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                data-ai-hint={selectedImage.imageHint}
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}

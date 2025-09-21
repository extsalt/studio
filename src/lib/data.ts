import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';

function getImage(id: string): ImagePlaceholder {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) {
        // Fallback for safety, though this should not happen if JSON is correct
        return { id: 'error', description: 'Image not found', imageUrl: 'https://placehold.co/600x400', imageHint: 'placeholder' };
    }
    return image;
}

export const siteConfig = {
    name: "Acme Academy",
    description: "Excellence in Education. Nurturing young minds for a brighter future.",
    navLinks: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#classes', label: 'Classes' },
      { href: '#admissions', label: 'Admissions' },
      { href: '#gallery', label: 'Gallery' },
      { href: '#contact', label: 'Contact' },
    ],
};

export const heroData = {
    headline: "Welcome to Acme Academy",
    subheadline: "Nurturing young minds for a brighter future.",
    image: getImage('hero'),
};

export const messagesData = {
    principal: {
        name: "Dr. Evelyn Reed",
        title: "Principal",
        message: "At Acme Academy, we are dedicated to providing a nurturing and challenging environment that encourages high expectations for success. Our goal is to develop inquiring, knowledgeable, and caring young people who help to create a better and more peaceful world.",
        bio: "With over 20 years of experience in education, Dr. Reed has a passion for student-centered learning and curriculum development.",
        image: getImage('principal'),
    },
    chairman: {
        name: "Mr. Johnathan Smith",
        title: "Chairman",
        message: "Our vision at Acme Academy is to empower students to acquire, demonstrate, articulate, and value knowledge and skills that will support them as life-long learners. We are committed to investing in our facilities and our staff to provide the best possible education.",
        bio: "Mr. Smith is a renowned philanthropist and a strong advocate for quality education for all. He founded Acme Academy with a dream to make a difference.",
        image: getImage('chairman'),
    },
};

export const classesData = {
    title: "Our Classes",
    description: "We offer a wide range of classes designed to foster creativity, critical thinking, and a love for learning in every student.",
    classes: [
        {
            name: "Mathematics",
            ageGroup: "Ages 10-18",
            subject: "Mathematics",
            description: "From algebra to calculus, our math program builds strong analytical and problem-solving skills.",
            image: getImage('class-math'),
        },
        {
            name: "Science",
            ageGroup: "Ages 10-18",
            subject: "Science",
            description: "Explore the wonders of biology, chemistry, and physics through hands-on experiments and projects.",
            image: getImage('class-science'),
        },
        {
            name: "Art & Design",
            ageGroup: "Ages 8-18",
            subject: "Arts",
            description: "Unleash creativity with painting, sculpture, and digital design in our state-of-the-art studios.",
            image: getImage('class-art'),
        },
        {
            name: "Music",
            ageGroup: "Ages 8-18",
            subject: "Music",
            description: "Develop musical talents with instruction in various instruments, voice, and music theory.",
            image: getImage('class-music'),
        },
    ],
};

export const admissionsData = {
    title: "Admissions Process",
    description: "Join the Acme Academy family. Follow our simple admission process to start your journey with us.",
    steps: [
        "Submit the online inquiry form with your details.",
        "Our admissions team will contact you to schedule a school tour and an interview.",
        "Complete the application form and submit the required documents.",
        "Receive the admission offer and complete the enrollment process.",
    ]
};

export const galleryData = {
    title: "Gallery",
    description: "A glimpse into life at Acme Academy. Explore our events, activities, and the vibrant student community.",
    images: [
        getImage('gallery-1'),
        getImage('gallery-2'),
        getImage('gallery-3'),
        getImage('gallery-4'),
        getImage('gallery-5'),
        getImage('gallery-6'),
    ],
};

export const contactData = {
    title: "Get in Touch",
    description: "We'd love to hear from you. Please fill out the form below or use our contact details to reach us.",
    address: "123 Education Lane, Learning City, 12345",
    phone: "+1 (234) 567-890",
    email: "info@acmeacademy.edu",
    map: {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 13,
    }
};

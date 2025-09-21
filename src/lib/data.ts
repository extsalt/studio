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
    name: "Prabhawati VidyaPeeth",
    description: "Excellence in Education Since 2010 | Nurturing Future Leaders.",
    navLinks: [
      { href: '#home', label: 'Home' },
      { 
        label: 'About',
        href: '#about',
        items: [
            { href: '#about', label: 'Our Mission' },
            { href: '#gallery', label: 'Gallery' },
        ]
      },
      { 
        label: 'Academics',
        href: '#classes',
        items: [
            { href: '#classes', label: 'Classes' },
            { href: '#admissions', label: 'Admissions' },
        ]
      },
      { href: '#contact', label: 'Contact' },
    ],
};

export const heroData = {
    headline: "Welcome to Prabhawati VidyaPeeth",
    subheadline: "Excellence in Education Since 2010 | Nurturing Future Leaders",
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
    title: "Photo Gallery",
    description: "Capturing moments and memories from our school life",
    images: [
        getImage('gallery-1'),
        getImage('gallery-2'),
        getImage('gallery-3'),
        getImage('gallery-4'),
        getImage('gallery-5'),
        getImage('gallery-6'),
        getImage('gallery-7'),
        getImage('gallery-8'),
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

export const newsAndUpdatesData = {
  title: 'School News & Updates',
  description: 'Stay updated with the latest happenings at our school',
  featuredNews: {
    date: 'June 15, 2024',
    title: 'Annual Science Fair 2024: Innovation Unleashed',
    description: 'Join us for an extraordinary showcase of student innovations and scientific discoveries at our upcoming Annual Science Fair...',
    link: '#',
  },
  otherNews: [
    {
      date: 'June 12, 2024',
      title: 'Students Win National Debate Championship',
      description: 'Our debate team secured first place in the National School Debate Championship...',
      link: '#',
    },
    {
      date: 'June 9, 2024',
      title: 'New STEM Lab Inauguration',
      description: 'State-of-the-art STEM laboratory equipped with latest technology...',
      link: '#',
    },
    {
      date: 'June 7, 2024',
      title: 'Cultural Festival Announcement',
      description: 'Mark your calendars for our annual cultural festival celebration...',
      link: '#',
    },
  ],
  latestUpdates: [
    {
      date: 'June 10, 2024',
      title: 'Sports Day Registration Now Open',
      link: '#',
      color: 'bg-green-500',
    },
    {
      date: 'June 8, 2024',
      title: 'Parent-Teacher Meeting Schedule',
      link: '#',
      color: 'bg-yellow-500',
    },
    {
      date: 'June 5, 2024',
      title: 'New Library Resources Available',
      link: '#',
      color: 'bg-purple-500',
    },
  ],
};

export const testimonialsData = {
  title: 'What People Say',
  description: 'Hear from our students, parents, and alumni about their experiences',
  mainTestimonial: {
    quote: 'The quality of education and personal attention each student receives here is exceptional. My children have grown both academically and personally.',
    name: 'Mohan',
    role: 'Parent of Two Students',
  },
  testimonials: [
    {
      initial: 'R',
      name: 'Rahul',
      role: 'Alumni, Class of 2022',
      quote: 'The foundation I received here has been invaluable in my university studies. The teachers really prepare you for future success.',
      rating: 5,
      avatarBg: 'bg-blue-100',
      avatarText: 'text-blue-700',
    },
    {
      initial: 'M',
      name: 'Abhishek',
      role: 'Current Student',
      quote: 'I love the diverse range of activities and opportunities available here. The teachers are supportive and truly care about our success.',
      rating: 5,
      avatarBg: 'bg-green-100',
      avatarText: 'text-green-700',
    },
    {
      initial: 'J',
      name: 'Sinesh',
      role: 'Parent',
      quote: "The school's commitment to excellence and character development has made a significant impact on my child's growth.",
      rating: 5,
      avatarBg: 'bg-purple-100',
      avatarText: 'text-purple-700',
    },
  ],
};

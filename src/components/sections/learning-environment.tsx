import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Activity, Monitor, Pencil, Book, FlaskConical, Utensils, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FacilityCardProps {
  icon: LucideIcon;
  title: string;
  features: string[];
  color: string;
}

const FacilityCard = ({ icon: Icon, title, features, color }: FacilityCardProps) => (
  <Card className="flex flex-col shadow-lg rounded-lg overflow-hidden w-full">
    <CardHeader className={`${color} text-white p-6 flex items-center justify-center h-40`}>
      <Icon className="h-16 w-16" />
    </CardHeader>
    <CardContent className="p-6 bg-card flex-grow">
      <h3 className="text-xl font-bold mb-4 text-card-foreground">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-card-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

interface MiniCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

const MiniCard = ({ icon: Icon, title, description, iconBgColor, iconColor }: MiniCardProps) => (
    <Card className="p-6 flex items-center space-x-4 shadow-md">
        <div className={`p-3 rounded-full ${iconBgColor}`}>
            <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <div>
            <h4 className="font-semibold text-lg text-card-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    </Card>
)

const facilities = [
  {
    icon: Activity,
    title: 'Athletic Facilities',
    features: ['Indoor Sports Arena', 'Olympic-size Swimming Pool', 'Tennis and Basketball Courts'],
    color: 'bg-blue-600',
  },
  {
    icon: Monitor,
    title: 'Digital Learning Center',
    features: ['Computer Labs', '3D Printing Studio', 'Robotics Lab'],
    color: 'bg-green-600',
  },
  {
    icon: Pencil,
    title: 'Performing Arts Theater',
    features: ['Performing Arts Theater', 'Music Studios', 'Art Galleries'],
    color: 'bg-purple-600',
  },
];

const smallFacilities = [
    {
        icon: Book,
        title: 'Library',
        description: 'Modern library with digital resources',
        iconBgColor: 'bg-blue-100',
        iconColor: 'text-blue-600',
    },
    {
        icon: FlaskConical,
        title: 'Science Labs',
        description: 'State-of-the-art research facilities',
        iconBgColor: 'bg-green-100',
        iconColor: 'text-green-600',
    },
    {
        icon: Utensils,
        title: 'Cafeteria',
        description: 'Healthy and nutritious meals',
        iconBgColor: 'bg-yellow-100',
        iconColor: 'text-yellow-600',
    },
    {
        icon: Heart,
        title: 'Medical Center',
        description: '24/7 healthcare support',
        iconBgColor: 'bg-red-100',
        iconColor: 'text-red-600',
    },
]

export default function LearningEnvironment() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Learning Environment</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-2 mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience world-class facilities designed to enhance learning and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {facilities.map((facility) => (
            <FacilityCard key={facility.title} {...facility} />
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {smallFacilities.map((facility) => (
                <MiniCard key={facility.title} {...facility} />
            ))}
        </div>
      </div>
    </section>
  );
}

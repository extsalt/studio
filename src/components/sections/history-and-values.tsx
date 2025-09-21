import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ShieldCheck, Users, CheckCircle } from 'lucide-react';

const values = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'Our Mission',
    description: 'To nurture young minds with quality education and shape them into responsible global citizens through innovative teaching methods and holistic development.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Our Vision',
    description: 'To be a leading educational institution that sets new standards in academic excellence and character building while fostering creativity and innovation.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Our Values',
    description: 'Excellence, integrity, innovation, and inclusivity form the cornerstone of our educational philosophy and guide our every action.',
  },
];

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '100+', label: 'Expert Teachers' },
  { value: '50+', label: 'Awards Won' },
  { value: '100%', label: 'Parent Satisfaction' },
  { value: '1000+', label: 'Alumni Network' },
];

const features = [
    {
        icon: <CheckCircle className="h-6 w-6 text-green-500" />,
        title: 'Expert Faculty',
        description: 'Highly qualified and experienced teachers dedicated to student success.',
    },
    {
        icon: <CheckCircle className="h-6 w-6 text-green-500" />,
        title: 'Modern Facilities',
        description: 'State-of-the-art infrastructure and learning resources.',
    },
    {
        icon: <CheckCircle className="h-6 w-6 text-green-500" />,
        title: 'Holistic Development',
        description: 'Focus on academic, physical, and emotional growth.',
    },
];

export default function HistoryAndValues() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">School History &amp; Values</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((item) => (
            <Card key={item.title} className="text-center p-8 bg-background shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  {item.icon}
                </div>
              </div>
              <CardTitle className="text-xl font-bold mb-2 text-card-foreground">{item.title}</CardTitle>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 max-w-lg mx-auto text-center">
            <h3 className="text-3xl font-bold text-card-foreground">Why Choose Us?</h3>
            <ul className="space-y-6 text-left">
                {features.map((feature) => (
                    <li key={feature.title} className="flex items-start gap-4">
                        <div className="flex-shrink-0">{feature.icon}</div>
                        <div>
                            <h4 className="font-semibold text-lg text-card-foreground">{feature.title}</h4>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
          </div>
          <div className="bg-primary text-primary-foreground p-12 rounded-lg">
            <div className="grid grid-cols-2 gap-y-12 text-center">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`${index === 0 ? "col-span-2" : ""}`}>
                  <p className="text-4xl font-bold">{stat.value}</p>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

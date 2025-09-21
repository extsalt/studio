import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MenuBarDemo } from '@/components/layout/menubar';
import HistoryAndValues from '@/components/sections/history-and-values';
import EducationalPrograms from '@/components/sections/educational-programs';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground flex flex-col p-4">
        <MenuBarDemo />
        <div className="flex-grow flex items-center justify-center">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Leading UPMSP School in Ballia | Prabhawati VidyaPeeth
                </h1>
                <p className="text-lg text-foreground/80">
                  Excellence in Education Since 2010 | Nurturing Future Leaders
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-gray-200">
                    Apply Now
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Virtual Tour
                  </Button>
                </div>
                <div className="flex justify-center lg:justify-start space-x-8 pt-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold">1500+</p>
                    <p className="text-sm text-foreground/70">Students</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">100%</p>
                    <p className="text-sm text-foreground/70">Success Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">50+</p>
                    <p className="text-sm text-foreground/70">Programs</p>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-md mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-card-foreground">Enquire Now</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <Input type="text" placeholder="Full Name" />
                      <Input type="email" placeholder="Email Address" />
                      <Input type="tel" placeholder="Phone Number" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="commerce">Commerce</SelectItem>
                          <SelectItem value="arts">Arts</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button type="submit" className="w-full">
                        Submit Enquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HistoryAndValues />
      <EducationalPrograms />
    </>
  );
}

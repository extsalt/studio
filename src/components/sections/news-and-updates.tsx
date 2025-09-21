import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { newsAndUpdatesData } from '@/lib/data';

export default function NewsAndUpdates() {
  const { title, description, featuredNews, otherNews, latestUpdates } = newsAndUpdatesData;

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">{title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured and other news */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Article */}
            <Card className="overflow-hidden shadow-lg border-primary border-t-4">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <Badge variant="secondary">Featured</Badge>
                  <span>{featuredNews.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                  <Link href={featuredNews.link} className="hover:text-primary transition-colors">
                    {featuredNews.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">{featuredNews.description}</p>
                <Link href={featuredNews.link} className="font-semibold text-primary inline-flex items-center gap-1">
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Other News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherNews.map((newsItem, index) => (
                <Card key={index} className="shadow-md">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{newsItem.date}</p>
                    <h4 className="font-bold text-lg mb-2 text-card-foreground">
                        <Link href={newsItem.link} className="hover:text-primary transition-colors">
                            {newsItem.title}
                        </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{newsItem.description}</p>
                    <Link href={newsItem.link} className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Latest Updates */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground">Latest Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6">
                  {latestUpdates.map((update, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div>
                        <span className={`block h-2.5 w-2.5 rounded-full mt-1.5 ${update.color}`}></span>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{update.date}</p>
                        <p className="font-semibold text-card-foreground">
                          <Link href={update.link} className="hover:text-primary transition-colors">
                            {update.title}
                          </Link>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

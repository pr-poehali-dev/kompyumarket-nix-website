import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Shield',
    title: 'Гарантия качества',
    description: 'Все товары сертифицированы и имеют официальную гарантию от производителя',
  },
  {
    icon: 'Truck',
    title: 'Быстрая доставка',
    description: 'Доставка по всей России. В пределах МКАД — в течение 24 часов',
  },
  {
    icon: 'HeadphonesIcon',
    title: 'Техподдержка 24/7',
    description: 'Наши специалисты всегда готовы помочь с выбором и настройкой оборудования',
  },
  {
    icon: 'Award',
    title: '15 лет на рынке',
    description: 'Проверенный временем поставщик компьютерной техники и электроники',
  },
];

const About = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">О компании КомпьюМаркет</h2>
          <p className="text-lg text-muted-foreground">
            Мы специализируемся на продаже компьютерной техники, комплектующих и электроники.
            Наша миссия — предоставить клиентам доступ к качественным технологиям по справедливым ценам.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-primary/10">
                  <Icon name={feature.icon} size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1500+</div>
              <div className="text-muted-foreground">Товаров в каталоге</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50 000+</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Положительных отзывов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
            Компьютерная техника и электроника
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in">
            Широкий ассортимент ноутбуков, комплектующих, периферии и электроники по выгодным ценам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button size="lg" className="gap-2">
              <Icon name="ShoppingBag" size={20} />
              Перейти в каталог
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Phone" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

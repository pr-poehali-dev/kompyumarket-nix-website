import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const categories = [
  { name: 'Ноутбуки', icon: 'Laptop', count: '250+' },
  { name: 'Компьютеры', icon: 'Monitor', count: '180+' },
  { name: 'Комплектующие', icon: 'Cpu', count: '500+' },
  { name: 'Периферия', icon: 'Keyboard', count: '300+' },
  { name: 'Сетевое оборудование', icon: 'Network', count: '150+' },
  { name: 'Серверы', icon: 'Server', count: '80+' },
];

const Categories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Популярные категории</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon name={category.icon} size={32} className="text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} товаров</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

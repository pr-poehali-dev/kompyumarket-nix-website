import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'ASUS ROG Strix G16',
    category: 'Ноутбуки',
    price: '159 990',
    image: 'https://via.placeholder.com/300x200/0EA5E9/ffffff?text=ASUS+ROG',
    specs: 'Intel i7, 16GB RAM, RTX 4060',
    inStock: true,
    isNew: true,
  },
  {
    id: 2,
    name: 'AMD Ryzen 9 7950X',
    category: 'Процессоры',
    price: '54 990',
    image: 'https://via.placeholder.com/300x200/1A1F2C/ffffff?text=AMD+Ryzen',
    specs: '16 ядер, 32 потока, 5.7 GHz',
    inStock: true,
    isNew: false,
  },
  {
    id: 3,
    name: 'NVIDIA RTX 4080',
    category: 'Видеокарты',
    price: '119 990',
    image: 'https://via.placeholder.com/300x200/0EA5E9/ffffff?text=RTX+4080',
    specs: '16GB GDDR6X, DLSS 3',
    inStock: true,
    isNew: true,
  },
  {
    id: 4,
    name: 'Samsung 990 PRO 2TB',
    category: 'Накопители',
    price: '17 990',
    image: 'https://via.placeholder.com/300x200/1A1F2C/ffffff?text=Samsung+SSD',
    specs: 'NVMe M.2, 7450 MB/s',
    inStock: false,
    isNew: false,
  },
  {
    id: 5,
    name: 'Logitech MX Master 3S',
    category: 'Периферия',
    price: '9 990',
    image: 'https://via.placeholder.com/300x200/0EA5E9/ffffff?text=Logitech',
    specs: '8K DPI, Bluetooth, USB-C',
    inStock: true,
    isNew: false,
  },
  {
    id: 6,
    name: 'Dell UltraSharp U2723DE',
    category: 'Мониторы',
    price: '44 990',
    image: 'https://via.placeholder.com/300x200/1A1F2C/ffffff?text=Dell+Monitor',
    specs: '27" QHD IPS, 120Hz, USB-C',
    inStock: true,
    isNew: true,
  },
];

const ProductCatalog = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Популярные товары</h2>
          <Button variant="outline" className="gap-2">
            Весь каталог
            <Icon name="ArrowRight" size={16} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                  <Badge className="absolute top-4 left-4 bg-primary">
                    Новинка
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge className="absolute top-4 right-4 bg-destructive">
                    Нет в наличии
                  </Badge>
                )}
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">{product.specs}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">₽</span>
                  </div>
                  
                  <Button
                    size="sm"
                    disabled={!product.inStock}
                    className="gap-2"
                  >
                    <Icon name="ShoppingCart" size={16} />
                    {product.inStock ? 'В корзину' : 'Недоступно'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;

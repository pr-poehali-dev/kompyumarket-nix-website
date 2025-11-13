import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Laptop" size={24} className="text-primary" />
              <span className="text-lg font-bold">КомпьюМаркет</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Компьютерная техника и электроника с доставкой по всей России
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Ноутбуки
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Компьютеры
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Комплектующие
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Периферия
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Гарантия
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <span className="text-secondary-foreground/80">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <span className="text-secondary-foreground/80">info@compumarket.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span className="text-secondary-foreground/80">г. Москва, ул. Примерная, д. 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © 2024 КомпьюМаркет. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

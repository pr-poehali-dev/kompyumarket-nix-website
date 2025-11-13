import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Laptop" size={28} className="text-primary" />
            <span className="text-xl font-bold text-foreground">КомпьюМаркет</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setActiveSection('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'home' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveSection('catalog')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'catalog' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Каталог
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'about' ? 'text-primary' : 'text-foreground'
              }`}
            >
              О компании
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

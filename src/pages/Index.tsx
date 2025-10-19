import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const weddingDate = new Date('2026-06-26T15:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-secondary/10 to-muted/20">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/3b0464e8-950c-419a-9c87-cdbc3801b292/files/982856b5-f1c4-4ae9-8abb-6c448c8a4c27.jpg')] bg-cover bg-center opacity-10" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <Icon name="Heart" size={48} className="mx-auto text-secondary mb-4" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-serif font-light mb-6 text-foreground">
            Алиса <span className="text-primary">&</span> Владислав
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
            Приглашаем вас разделить с нами самый важный день в нашей жизни
          </p>
          
          <div className="flex items-center justify-center gap-3 text-lg text-foreground/80">
            <Icon name="Calendar" size={20} />
            <span className="font-medium">26 июня 2026</span>
            <span className="text-primary">•</span>
            <Icon name="Clock" size={20} />
            <span className="font-medium">15:00</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto animate-fade-in-delay">
          <h2 className="text-5xl md:text-6xl font-serif text-center mb-16 text-foreground">
            До нашего торжества
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Дней', value: timeLeft.days },
              { label: 'Часов', value: timeLeft.hours },
              { label: 'Минут', value: timeLeft.minutes },
              { label: 'Секунд', value: timeLeft.seconds },
            ].map((item) => (
              <Card key={item.label} className="p-8 text-center bg-white/80 border-primary/20 hover:shadow-lg transition-shadow">
                <div className="text-5xl md:text-6xl font-serif font-bold text-primary mb-2">
                  {item.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif text-center mb-16 text-foreground">
            Дресс-код
          </h2>
          
          <Card className="p-8 md:p-12 bg-white/80 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Icon name="Sparkles" size={64} className="text-primary" />
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-serif mb-4 text-foreground">Элегантный стиль</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Мы будем рады видеть вас в нарядных вечерних платьях и костюмах. 
                  Цветовая палитра: пастельные оттенки лаванды, розового и персикового прекрасно впишутся в атмосферу нашего праздника.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif text-center mb-16 text-foreground">
            Место проведения
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/80 border-primary/20 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Church" size={32} className="text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif mb-2 text-foreground">Церемония</h3>
                  <p className="text-muted-foreground">15:00</p>
                </div>
              </div>
              
              <p className="text-lg mb-4 text-foreground">Центральный парк культуры и отдыха</p>
              <p className="text-muted-foreground mb-6">
                ул. Рихарда Зорге, 48<br />
                Курган, Россия
              </p>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-foreground">
                <Icon name="MapPin" size={18} className="mr-2" />
                Посмотреть на карте
              </Button>
            </Card>

            <Card className="p-8 bg-white/80 border-primary/20 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Wine" size={32} className="text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif mb-2 text-foreground">Банкет</h3>
                  <p className="text-muted-foreground">17:00</p>
                </div>
              </div>
              
              <p className="text-lg mb-4 text-foreground">Ресторан "Palazzo"</p>
              <p className="text-muted-foreground mb-6">
                Троицкая площадь, 1а<br />
                Курган, Россия
              </p>
              
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-foreground">
                <Icon name="MapPin" size={18} className="mr-2" />
                Посмотреть на карте
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-t from-primary/20 to-transparent">
        <div className="max-w-2xl mx-auto text-center">
          <Icon name="Heart" size={48} className="mx-auto text-secondary mb-8" />
          
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
            С любовью,
          </h2>
          <p className="text-3xl md:text-4xl font-serif text-primary mb-8">
            Алиса & Владислав
          </p>
          
          <p className="text-lg text-muted-foreground">
            Мы с нетерпением ждём встречи с вами!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
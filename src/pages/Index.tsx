import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const weddingDate = new Date('2026-06-26T10:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    attendance: 'yes',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    const audio = new Audio('https://cdn.poehali.dev/files/beautiful-boys-gentle-love.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    
    const playAudio = () => {
      audio.play().catch(() => {});
      document.removeEventListener('click', playAudio);
    };
    
    document.addEventListener('click', playAudio);
    
    return () => {
      audio.pause();
      document.removeEventListener('click', playAudio);
    };
  }, []);

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
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/files/d0081829-e288-4879-967d-9b9ade32ba04.jpeg')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl max-w-md mx-auto mb-8">
              <img
                src="https://cdn.poehali.dev/files/d0081829-e288-4879-967d-9b9ade32ba04.jpeg"
                alt="Алиса и Владислав"
                className="w-full h-auto object-cover"
              />
            </div>
            <Icon name="Heart" size={48} className="mx-auto text-secondary" />
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
            <span className="font-medium">10:00</span>
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
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Мы будем рады видеть вас в нарядных вечерних платьях и костюмах. 
                  Цветовая палитра: пастельные оттенки лаванды, розового и персикового прекрасно впишутся в атмосферу нашего праздника.
                </p>
                <div className="flex gap-3 justify-center md:justify-start mt-4">
                  <div className="w-12 h-12 rounded-full bg-purple-200 border-2 border-purple-300" title="Лаванда"></div>
                  <div className="w-12 h-12 rounded-full bg-pink-200 border-2 border-pink-300" title="Розовый"></div>
                  <div className="w-12 h-12 rounded-full bg-orange-200 border-2 border-orange-300" title="Персиковый"></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 md:p-12 bg-white/80 border-primary/20 mt-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Icon name="Info" size={64} className="text-primary" />
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-serif mb-4 text-foreground">Важная информация</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Наше мероприятие рассчитано на взрослую компанию (18+). 
                  Мы будем признательны, если детей оставите дома — это позволит всем насладиться праздником в полной мере.
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
                  <p className="text-muted-foreground">10:00</p>
                </div>
              </div>
              
              <p className="text-lg mb-4 text-foreground">ЗАГС города Кургана</p>
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
              
              <p className="text-lg mb-4 text-foreground">«Мамин зал»</p>
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

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif text-center mb-8 text-foreground">
            Подтверждение присутствия
          </h2>
          
          <p className="text-center text-lg text-muted-foreground mb-12">
            Пожалуйста, подтвердите своё участие до 1 июня 2026 года
          </p>

          {!isSubmitted ? (
            <Card className="p-8 md:p-12 bg-white/80 border-primary/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя и фамилия *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Количество гостей *
                  </label>
                  <Input
                    type="number"
                    required
                    min="1"
                    max="5"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    placeholder="2"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Вы придёте? *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="attendance"
                        value="yes"
                        checked={formData.attendance === 'yes'}
                        onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="text-foreground">Да, с удовольствием!</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="attendance"
                        value="no"
                        checked={formData.attendance === 'no'}
                        onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="text-foreground">К сожалению, не смогу</span>
                    </label>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-foreground text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить подтверждение
                </Button>
              </form>
            </Card>
          ) : (
            <Card className="p-8 md:p-12 bg-white/80 border-primary/20 text-center">
              <Icon name="CheckCircle" size={64} className="mx-auto text-green-500 mb-4" />
              <h3 className="text-2xl font-serif mb-3 text-foreground">Спасибо за ответ!</h3>
              <p className="text-lg text-muted-foreground">
                Мы получили ваше подтверждение. До встречи на празднике!
              </p>
            </Card>
          )}
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
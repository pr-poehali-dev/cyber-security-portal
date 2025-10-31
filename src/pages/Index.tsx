import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={28} className="text-primary" />
              <span className="text-xl font-bold">CyberShield</span>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'education', label: 'Обучение' },
                { id: 'articles', label: 'Статьи' },
                { id: 'solutions', label: 'Решения' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Защитите ваши данные с <span className="text-primary">CyberShield</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Базовые советы и рекомендации по кибербезопасности для всех пользователей. 
                Защитите себя от цифровых угроз уже сегодня.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('education')}>
                  Начать обучение
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('articles')}>
                  Читать статьи
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/d9d177a7-7fc1-4ca6-b812-71e35018de75/files/d2a3498f-c74d-45df-abe2-79a324cc456d.jpg" 
                alt="Кибербезопасность" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              { icon: 'Lock', title: 'Надежная защита', desc: 'Проверенные методы защиты данных' },
              { icon: 'Users', title: 'Для всех', desc: 'Простые решения для каждого' },
              { icon: 'Zap', title: 'Быстрый старт', desc: 'Начните защиту за 5 минут' }
            ].map((item, idx) => (
              <Card key={idx} className="border-border hover:border-primary transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <Icon name={item.icon as any} size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Курсы обучения</h2>
            <p className="text-xl text-muted-foreground">
              Пошаговые программы для изучения основ кибербезопасности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Key',
                title: 'Основы паролей',
                duration: '30 мин',
                level: 'Начальный',
                desc: 'Создание надежных паролей и управление ими'
              },
              {
                icon: 'Mail',
                title: 'Безопасность email',
                duration: '45 мин',
                level: 'Начальный',
                desc: 'Защита от фишинга и спама'
              },
              {
                icon: 'Wifi',
                title: 'Безопасный интернет',
                duration: '1 час',
                level: 'Средний',
                desc: 'Безопасный серфинг и защита в сети'
              },
              {
                icon: 'Smartphone',
                title: 'Мобильная безопасность',
                duration: '40 мин',
                level: 'Начальный',
                desc: 'Защита смартфона и личных данных'
              },
              {
                icon: 'Cloud',
                title: 'Облачные сервисы',
                duration: '50 мин',
                level: 'Средний',
                desc: 'Безопасное использование облака'
              },
              {
                icon: 'Database',
                title: 'Резервное копирование',
                duration: '35 мин',
                level: 'Начальный',
                desc: 'Сохранность важных данных'
              }
            ].map((course, idx) => (
              <Card key={idx} className="border-border hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Icon name={course.icon as any} size={32} className="text-primary" />
                    <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{course.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Полезные статьи</h2>
            <p className="text-xl text-muted-foreground">
              Практические советы по защите от киберугроз
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: '10 признаков фишинга',
                date: '25 октября 2024',
                icon: 'AlertTriangle',
                desc: 'Как распознать мошеннические письма и не попасться на удочку'
              },
              {
                title: 'Двухфакторная аутентификация',
                date: '20 октября 2024',
                icon: 'ShieldCheck',
                desc: 'Почему 2FA – это ваша первая линия защиты'
              },
              {
                title: 'VPN: когда и зачем?',
                date: '15 октября 2024',
                icon: 'Globe',
                desc: 'Полное руководство по использованию VPN-сервисов'
              },
              {
                title: 'Обновления системы',
                date: '10 октября 2024',
                icon: 'RefreshCw',
                desc: 'Почему важно своевременно устанавливать обновления'
              },
              {
                title: 'Антивирусная защита',
                date: '5 октября 2024',
                icon: 'Bug',
                desc: 'Выбор и настройка антивирусного ПО'
              },
              {
                title: 'Социальная инженерия',
                date: '1 октября 2024',
                icon: 'Users',
                desc: 'Как защититься от манипуляций и обмана'
              }
            ].map((article, idx) => (
              <Card key={idx} className="border-border hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Icon name={article.icon as any} size={24} className="text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription>{article.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Решения для защиты</h2>
            <p className="text-xl text-muted-foreground">
              Комплексный подход к безопасности ваших данных
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <Icon name="Home" size={40} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Домашняя сеть</CardTitle>
                <CardDescription>Защита домашних устройств и Wi-Fi</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Настройка роутера',
                    'Гостевая сеть',
                    'Родительский контроль',
                    'Умные устройства'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary border-2">
              <CardHeader>
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Briefcase" size={40} className="text-primary" />
                  <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded-full">
                    Популярное
                  </span>
                </div>
                <CardTitle className="text-2xl">Малый бизнес</CardTitle>
                <CardDescription>Защита корпоративных данных</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Корпоративный VPN',
                    'Защита почты',
                    'Обучение сотрудников',
                    'Аудит безопасности'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Icon name="User" size={40} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Личная защита</CardTitle>
                <CardDescription>Безопасность в цифровом мире</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Менеджер паролей',
                    'Шифрование данных',
                    'Анонимность онлайн',
                    'Защита соцсетей'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Есть вопросы? Мы поможем разобраться с вашей безопасностью
            </p>
          </div>

          <Card className="border-border">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашей проблеме..." rows={5} />
                </div>
                <Button size="lg" className="w-full">
                  Отправить сообщение
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>

              <div className="grid md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
                {[
                  { icon: 'Mail', label: 'Email', value: 'info@cybershield.ru' },
                  { icon: 'Phone', label: 'Телефон', value: '+7 (999) 123-45-67' },
                  { icon: 'MapPin', label: 'Офис', value: 'Москва, Россия' }
                ].map((contact, idx) => (
                  <div key={idx} className="text-center">
                    <Icon name={contact.icon as any} size={24} className="text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                    <p className="text-sm font-medium">{contact.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={24} className="text-primary" />
              <span className="font-semibold">CyberShield</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 CyberShield. Все права защищены.
            </p>
            <div className="flex gap-4">
              {['Github', 'Twitter', 'Linkedin'].map((social) => (
                <button key={social} className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name={social as any} size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
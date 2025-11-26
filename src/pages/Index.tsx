import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
    directions: [] as string[],
  });

  const directions = [
    { id: "ecology", label: "Экология и природа", icon: "Leaf" },
    { id: "social", label: "Социальная помощь", icon: "Heart" },
    { id: "education", label: "Образование и наука", icon: "GraduationCap" },
    { id: "culture", label: "Культура и искусство", icon: "Palette" },
    { id: "animals", label: "Помощь животным", icon: "Dog" },
    { id: "events", label: "Организация мероприятий", icon: "Calendar" },
  ];

  const projects = [
    {
      title: "Чистый парк",
      description: "Уборка и благоустройство городских парков",
      participants: 45,
      status: "active",
      icon: "TreePine",
    },
    {
      title: "Доброе сердце",
      description: "Помощь пожилым людям и людям с ограниченными возможностями",
      participants: 32,
      status: "active",
      icon: "HeartHandshake",
    },
    {
      title: "Умный город",
      description: "Образовательные программы для школьников",
      participants: 28,
      status: "active",
      icon: "BookOpen",
    },
    {
      title: "Дружба без границ",
      description: "Культурный обмен и интеграция",
      participants: 19,
      status: "planning",
      icon: "Users",
    },
  ];

  const team = [
    { name: "Анна Петрова", role: "Координатор", avatar: "👩‍💼" },
    { name: "Михаил Иванов", role: "Организатор проектов", avatar: "👨‍💻" },
    { name: "Елена Смирнова", role: "PR-менеджер", avatar: "👩‍🎨" },
    { name: "Дмитрий Козлов", role: "Логист", avatar: "👨‍🔧" },
  ];

  const events = [
    { date: "15 дек", title: "Акция по сбору макулатуры", time: "10:00" },
    { date: "20 дек", title: "Новогодний концерт в доме престарелых", time: "14:00" },
    { date: "27 дек", title: "Уборка пляжной зоны", time: "09:00" },
    { date: "10 янв", title: "Мастер-класс для детей", time: "15:00" },
  ];

  const handleDirectionToggle = (directionId: string) => {
    setFormData((prev) => ({
      ...prev,
      directions: prev.directions.includes(directionId)
        ? prev.directions.filter((d) => d !== directionId)
        : [...prev.directions, directionId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Icon name="Heart" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-primary">Волонтёры</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">
              Проекты
            </a>
            <a href="#team" className="text-foreground/80 hover:text-primary transition-colors">
              Команда
            </a>
            <a href="#events" className="text-foreground/80 hover:text-primary transition-colors">
              События
            </a>
            <a href="#reports" className="text-foreground/80 hover:text-primary transition-colors">
              Отчёты
            </a>
            <a href="#join" className="text-foreground/80 hover:text-primary transition-colors">
              Присоединиться
            </a>
          </nav>
          <Button className="hidden md:inline-flex">
            <Icon name="UserPlus" size={18} className="mr-2" />
            Стать волонтёром
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Меняем мир к лучшему
          </h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Присоединяйся к команде неравнодушных людей, которые делают наш город добрее и чище. 
            Вместе мы можем больше!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Стать волонтёром
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Info" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">450+</div>
              <div className="text-sm text-foreground/60">Волонтёров</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">127</div>
              <div className="text-sm text-foreground/60">Проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">32</div>
              <div className="text-sm text-foreground/60">Города</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5 лет</div>
              <div className="text-sm text-foreground/60">Опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши проекты</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Мы работаем в разных направлениях, чтобы каждый мог найти дело по душе
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={project.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <Icon name="Users" size={16} />
                      <span>{project.participants} участников</span>
                    </div>
                    <Badge variant={project.status === "active" ? "default" : "secondary"}>
                      {project.status === "active" ? "Активен" : "Планируется"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-foreground/70">Люди, которые делают всё возможным</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Календарь событий</h2>
            <p className="text-foreground/70">Ближайшие мероприятия нашего отряда</p>
          </div>
          <div className="space-y-4">
            {events.map((event, idx) => (
              <Card key={idx} className="hover:shadow-md transition-all">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="text-center min-w-[80px]">
                    <div className="text-3xl font-bold text-primary">{event.date.split(" ")[0]}</div>
                    <div className="text-sm text-foreground/60 uppercase">{event.date.split(" ")[1]}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Icon name="Clock" size={16} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Участвовать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section id="reports" className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши достижения</h2>
            <p className="text-foreground/70">Результаты совместной работы за 2024 год</p>
          </div>
          <Tabs defaultValue="impact" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="impact">Влияние</TabsTrigger>
              <TabsTrigger value="stats">Статистика</TabsTrigger>
              <TabsTrigger value="thanks">Благодарности</TabsTrigger>
            </TabsList>
            <TabsContent value="impact" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Социальное влияние</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="TreePine" className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">Высажено деревьев</div>
                      <div className="text-2xl font-bold text-primary">3,240</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Icon name="Users" className="text-secondary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">Людям оказана помощь</div>
                      <div className="text-2xl font-bold text-secondary">1,850</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="Trash2" className="text-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">Собрано мусора (кг)</div>
                      <div className="text-2xl font-bold text-accent">12,450</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="stats" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Статистика активности</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Экология</span>
                      <span className="text-sm text-foreground/60">45%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "45%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Социальная помощь</span>
                      <span className="text-sm text-foreground/60">30%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-secondary" style={{ width: "30%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Образование</span>
                      <span className="text-sm text-foreground/60">15%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-accent" style={{ width: "15%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Прочее</span>
                      <span className="text-sm text-foreground/60">10%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-muted-foreground" style={{ width: "10%" }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="thanks">
              <Card>
                <CardHeader>
                  <CardTitle>Отзывы и благодарности</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="italic mb-2">
                      "Благодаря волонтёрам наш двор преобразился! Огромное спасибо за ваш труд и заботу."
                    </p>
                    <p className="text-sm text-foreground/60">— Жители ул. Ленина, 45</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="italic mb-2">
                      "Ребята помогли организовать концерт в доме престарелых. Столько радости в глазах наших бабушек и дедушек!"
                    </p>
                    <p className="text-sm text-foreground/60">— Администрация дома престарелых</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="italic mb-2">
                      "Мастер-классы для детей — это просто чудо! Спасибо за вашу энергию и креативность."
                    </p>
                    <p className="text-sm text-foreground/60">— Родители учеников школы №12</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Registration Form */}
      <section id="join" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Присоединяйся к нам!</h2>
            <p className="text-foreground/70">Заполни анкету, и мы свяжемся с тобой</p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Иван Петров"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="about">Расскажите о себе</Label>
                  <Textarea
                    id="about"
                    placeholder="Почему вы хотите стать волонтёром? Какой у вас опыт?"
                    value={formData.about}
                    onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                    rows={4}
                  />
                </div>
                <div className="space-y-3">
                  <Label>Выберите интересующие направления *</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {directions.map((direction) => (
                      <div key={direction.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={direction.id}
                          checked={formData.directions.includes(direction.id)}
                          onCheckedChange={() => handleDirectionToggle(direction.id)}
                        />
                        <Label
                          htmlFor={direction.id}
                          className="flex items-center gap-2 cursor-pointer font-normal"
                        >
                          <Icon name={direction.icon} size={18} className="text-primary" />
                          {direction.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Icon name="Heart" className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold">Волонтёры</span>
              </div>
              <p className="text-sm text-foreground/60">Делаем мир добрее вместе</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@volunteers.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ссылки</h4>
              <div className="space-y-2 text-sm text-foreground/60">
                <div><a href="#projects" className="hover:text-primary transition-colors">Проекты</a></div>
                <div><a href="#team" className="hover:text-primary transition-colors">Команда</a></div>
                <div><a href="#events" className="hover:text-primary transition-colors">События</a></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-foreground/10 mt-8 pt-8 text-center text-sm text-foreground/60">
            © 2024 Волонтёрский отряд. Вместе меняем мир к лучшему! 💚
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

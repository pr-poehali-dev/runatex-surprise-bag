import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20 animate-gradient bg-[length:200%_200%]" />
        
        <div className="relative max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-4">
            <span className="text-sm font-semibold text-primary">✨ Эксклюзивное предложение</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Сумочка-сюрприз
            </span>
            <br />
            <span className="text-foreground">от Runa Tex</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            1,5 кг тканевого волшебства — и ни один набор не повторяется
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105">
              <Icon name="ShoppingBag" className="mr-2" size={24} />
              Забрать свой набор
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
              Узнать больше
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>

          <div className="pt-12">
            <img 
              src="https://cdn.poehali.dev/projects/4a755d57-1033-42e0-b30d-11cc19e4bed8/files/3c3f1436-9d16-4e6e-970f-727dbd12c212.jpg"
              alt="Сумочка-сюрприз с тканями"
              className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full animate-scale-in"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Что внутри?
            </h2>
            <p className="text-xl text-muted-foreground">
              Тут и нежные однотонные отрезки, и принты-истории, и лоскуты разной длины — <br />
              всё, как в сундуке у феи творчества
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card/80 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 mx-auto">
                <Icon name="Sparkles" size={32} className="text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-center">Уникальность</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Каждый набор собран вручную. Ни одна сумочка не повторяется — это ваша эксклюзивная коллекция тканей
              </p>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur border-secondary/20 hover:border-secondary/50 transition-all hover:scale-105 animate-fade-in [animation-delay:200ms]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 mx-auto">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-center">Качество</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Отборные ткани от Runa Tex. Только проверенные материалы, которые вдохновят на новые проекты
              </p>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur border-accent/20 hover:border-accent/50 transition-all hover:scale-105 animate-fade-in [animation-delay:400ms]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 mx-auto">
                <Icon name="Lightbulb" size={32} className="text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-center">Вдохновение</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Идеальный старт для нового проекта. Разнообразие текстур и цветов разбудит вашу творческую фантазию
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30 backdrop-blur animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="Gift" size={28} className="text-white" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Идеальный подарок к праздникам
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ищете особенный подарок для творческого человека? Сумочка-сюрприз — это не просто ткани, 
              это целый мир возможностей. Подарите вдохновение и радость создания чего-то уникального своими руками.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                <span className="text-sm font-semibold">Новый год</span>
              </div>
              <div className="px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30">
                <span className="text-sm font-semibold">День рождения</span>
              </div>
              <div className="px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
                <span className="text-sm font-semibold">8 марта</span>
              </div>
              <div className="px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                <span className="text-sm font-semibold">Просто так ✨</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient bg-[length:200%_200%]" />
        
        <div className="relative max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-semibold text-muted-foreground italic">
              Не вскрывать. Не трогать. <br />
              Просто взять — и вдохновиться.
            </p>
            
            <h2 className="font-heading text-5xl md:text-6xl font-bold leading-tight">
              Каждый набор — <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                идеальный старт
              </span>
              <br />
              для нового проекта
            </h2>
          </div>

          <p className="text-xl text-muted-foreground">
            Заберите свой — пока он есть.
          </p>

          <Button size="lg" className="text-xl px-12 py-8 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all hover:scale-105 shadow-2xl">
            <Icon name="Sparkles" className="mr-2" size={24} />
            Заказать сумочку-сюрприз
          </Button>

          <div className="pt-16">
            <p className="font-heading text-3xl md:text-4xl font-bold">
              Runa Tex: где ткань становится историей
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Runa Tex. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

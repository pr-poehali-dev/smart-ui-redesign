import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">⛏️ Сервер онлайн</Badge>,
    title: "Твой мир. Твои правила.",
    image: "https://cdn.poehali.dev/projects/0d005678-866b-4077-afa6-79e593c15aca/files/6280c1b0-72c2-443f-be73-9c22386c834d.jpg",
    showButton: true,
    buttonText: 'Начать играть',
    scrollTo: 'join'
  },
  {
    id: 'about',
    title: 'Почему наш сервер?',
    content: 'Мощное железо, минимальный пинг и дружное комьюнити. Никаких лагов — только чистый геймплей и бесконечные возможности для строительства.',
    image: "https://cdn.poehali.dev/projects/0d005678-866b-4077-afa6-79e593c15aca/files/32fba1e6-4c62-42c9-922f-da351577de36.jpg",
  },
  {
    id: 'features',
    title: 'Что тебя ждёт',
    content: 'Уникальные режимы игры, кастомные плагины, регулярные ивенты и система кланов. Выживание, креатив, мини-игры — выбирай свой путь.',
    image: "https://cdn.poehali.dev/projects/0d005678-866b-4077-afa6-79e593c15aca/files/511773f6-c279-4d55-975a-72fa669e06c9.jpg",
  },
  {
    id: 'testimonials',
    title: 'Наше комьюнити',
    content: 'Тысячи игроков уже строят, сражаются и исследуют вместе. Присоединяйся к одному из самых активных Minecraft-сообществ.'
  },
  {
    id: 'join',
    title: 'Готов к приключениям?',
    content: 'Скопируй IP сервера, запускай Minecraft и погружайся в игру. Новички получают стартовый набор ресурсов бесплатно.',
    showIp: true,
    ip: 'https://preview--smart-ui-redesign.poehali.dev/',
  },
]
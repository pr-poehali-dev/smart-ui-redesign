import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">⛏️ Сервер онлайн</Badge>,
    title: "Твой мир. Твои правила.",
    showButton: true,
    buttonText: 'Начать играть'
  },
  {
    id: 'about',
    title: 'Почему наш сервер?',
    content: 'Мощное железо, минимальный пинг и дружное комьюнити. Никаких лагов — только чистый геймплей и бесконечные возможности для строительства.'
  },
  {
    id: 'features',
    title: 'Что тебя ждёт',
    content: 'Уникальные режимы игры, кастомные плагины, регулярные ивенты и система кланов. Выживание, креатив, мини-игры — выбирай свой путь.'
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
    showButton: true,
    buttonText: 'Подключиться'
  },
]

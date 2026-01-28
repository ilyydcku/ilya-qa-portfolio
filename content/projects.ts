import type { Locale } from "./profile";

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  year: string;
  role: Record<Locale, string>;
  tags: string[];
  intro: Record<Locale, string>;
  bullets: Record<Locale, string[]>;
  cover: { src: string; alt: Record<Locale, string> };
  gallery: { src: string; alt: Record<Locale, string>; caption?: Record<Locale, string> }[];
};

export const projects: Project[] = [
  {
    slug: "regression-optimization",
    title: {
      ru: "Оптимизация регресса и ускорение обработки задач",
      en: "Regression optimization & faster delivery",
    },
    year: "2026",
    role: {
      ru: "QA Engineer",
      en: "QA Engineer",
    },
    tags: ["Regression", "Scrum", "Quality"],
    intro: {
      ru: "Оптимизировал регрессионное тестирование и сократил время обработки задач примерно на 30%.",
      en: "Optimized regression testing and reduced task processing time by ~30%.",
    },
    bullets: {
      ru: [
        "Пересобрал регресс-набор: убрал дубли, приоритизировал критичные сценарии, выделил smoke.",
        "Стандартизировал чек-листы и критерии готовности, чтобы быстрее принимать изменения.",
        "Сократил цикл проверки за счёт фокусного прогона и повторного использования наборов кейсов.",
        "В результате ускорил обработку задач и снизил время регресса примерно на 30%.",
      ],
      en: [
        "Rebuilt the regression suite: removed duplicates, prioritized critical flows, выделил smoke.",
        "Standardized checklists and DoD/DoR style criteria to speed up review.",
        "Reduced verification cycle with focused runs and reusable test sets.",
        "Result: ~30% faster task processing and regression cycle.",
      ],
    },
    cover: {
      src: "/projects/release/cover.jpg",
      alt: {
        ru: "Превью: оптимизация регресса",
        en: "Preview: regression optimization",
      },
    },
    gallery: [
      {
        src: "/projects/release/01.jpg",
        alt: { ru: "Регресс-набор", en: "Regression suite" },
        caption: { ru: "Набор тестов", en: "Test set" },
      },
      {
        src: "/projects/release/02.jpg",
        alt: { ru: "Чек-листы", en: "Checklists" },
        caption: { ru: "Чек-листы", en: "Checklists" },
      },
      {
        src: "/projects/release/03.jpg",
        alt: { ru: "Дефекты", en: "Defects" },
        caption: { ru: "Дефекты", en: "Defects" },
      },
      {
        src: "/projects/release/04.jpg",
        alt: { ru: "Релизный процесс", en: "Release workflow" },
        caption: { ru: "Процесс", en: "Workflow" },
      },
    ],
  },

  {
    slug: "skill-growth",
    title: {
      ru: "Рост навыков и внедрение улучшений в работу",
      en: "Skill growth & improvements at work",
    },
    year: "2026",
    role: {
      ru: "QA Engineer",
      en: "QA Engineer",
    },
    tags: ["Learning", "Process", "Team"],
    intro: {
      ru: "Стабильно повышал квалификацию и внедрял новые практики в работе после согласования с тим-лидом.",
      en: "Consistently improved skills and introduced new practices after aligning with the team lead.",
    },
    bullets: {
      ru: [
        "Системно прокачивал навыки: теория тестирования, тест-дизайн, API и базовый SQL.",
        "Внедрял улучшения в процесс: более понятные чек-листы, единый формат баг-репортов, прозрачные критерии проверки.",
        "Договаривался о внедрении изменений с тим-лидом и аккуратно раскатывал их на команду.",
        "В итоге проверки стали стабильнее, а коммуникация по качеству — быстрее и понятнее.",
      ],
      en: [
        "Upgraded skills: testing theory, test design, API and basic SQL.",
        "Improved process: clearer checklists, unified bug report format, transparent verification criteria.",
        "Aligned changes with the team lead and rolled them out carefully to the team.",
        "Result: more stable checks and faster, clearer quality communication.",
      ],
    },
    cover: {
      src: "/projects/cross-browser/cover.jpg",
      alt: { ru: "Превью: рост навыков", en: "Preview: skill growth" },
    },
    gallery: [],
      },
    ],
  },

  {
    slug: "fraud-detection",
    title: {
      ru: "Обнаружение фрода и усиление безопасности транзакций",
      en: "Fraud detection & transaction safety",
    },
    year: "2026",
    role: {
      ru: "QA Engineer",
      en: "QA Engineer",
    },
    tags: ["Security", "Data", "Payments"],
    intro: {
      ru: "Обнаружил сложную фродовую механику, из-за которой деньги отмывались на неблагонадёжных пользователей, что приносило ущерб компании.",
      en: "Detected a complex fraud mechanism that enabled money laundering to unreliable users, causing company losses.",
    },
    bullets: {
      ru: [
        "Выявил аномальные сценарии и несостыковки, указывающие на фродовую механику.",
        "Сформулировал гипотезы и подтверждал их через проверки и анализ поведения/данных.",
        "Разработал план мер по устранению: дополнительные проверки транзакций, контрольные сценарии и усиление валидации.",
        "В результате повысил безопасность и снизил риск повторения подобных кейсов.",
      ],
      en: [
        "Identified anomalous flows and inconsistencies indicating a fraud pattern.",
        "Formed and validated hypotheses via checks and behavior/data analysis.",
        "Designed a mitigation plan: additional transaction checks, control scenarios and stronger validation.",
        "Result: improved safety and reduced recurrence risk.",
      ],
    },
    cover: {
      src: "/projects/data/cover.jpg",
      alt: { ru: "Превью: антифрод и безопасность", en: "Preview: fraud & security" },
    },
    gallery: [
      {
        src: "/projects/data/01.jpg",
        alt: { ru: "Проверка данных и сигналов", en: "Data & signals checks" },
        caption: { ru: "Данные и сигналы", en: "Data & signals" },
      },
      {
        src: "/projects/data/02.jpg",
        alt: { ru: "Запросы и проверки", en: "Queries & checks" },
        caption: { ru: "Проверки", en: "Checks" },
      },
      {
        src: "/projects/data/03.jpg",
        alt: { ru: "Сводка", en: "Summary" },
        caption: { ru: "Сводка", en: "Summary" },
      },
      {
        src: "/projects/data/04.jpg",
        alt: { ru: "Мониторинг", en: "Monitoring" },
        caption: { ru: "Контроль", en: "Monitoring" },
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

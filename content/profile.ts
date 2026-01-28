export type Locale = "ru" | "en";

type L<T> = { ru: T; en: T };

export const profile = {
  name: "Мошков Илья",

  role: {
    ru: "Тестировщик ПО",
    en: "QA Engineer / Software Tester",
  } satisfies L<string>,

  location: {
    ru: "Москва",
    en: "Moscow, Russia",
  } satisfies L<string>,

  contacts: {
    email: "moshkov_2707@mail.ru",
    phone: "+7 (901) 786 58 55",
  },

  links: {
    github: "",
    telegram: "",
    linkedin: "",
  },

  tagline: {
    ru: "QA-инженер: UI, API и данные — проверяю так, чтобы релизы выходили спокойно.",
    en: "QA engineer: UI, API and data — making releases feel safe.",
  } satisfies L<string>,

  summary: {
    ru: [
      "Коммерческий опыт в Scrum (2-недельные спринты, релизы в конце спринта).",
      "Функциональное, регрессионное и smoke-тестирование; кросс-браузерные проверки UI.",
      "API: Postman (GET/POST/PUT/PATCH/DELETE). Данные: Metabase + базовый SQL.",
      "Инструменты: Jira, Qase/TestRail, BrowserStack, DevTools.",
    ],
    en: [
      "Commercial experience in Scrum (2-week sprints, releases at sprint end).",
      "Functional, regression and smoke testing; cross-browser UI checks.",
      "API: Postman (GET/POST/PUT/PATCH/DELETE). Data: Metabase + basic SQL.",
      "Tools: Jira, Qase/TestRail, BrowserStack, DevTools.",
    ],
  } satisfies L<string[]>,

  // ✅ ВАЖНО: items тут — МАССИВ строк (не {ru,en})
  // About сам возьмёт label[lang], а items просто .map()
  skills: [
    {
      label: { ru: "Тестирование", en: "Testing" },
      items: ["Теория тестирования", "Тест-дизайн", "Функциональное / регресс / smoke"],
    },
    {
      label: { ru: "UI", en: "UI" },
      items: ["Кросс-браузер: BrowserStack", "DevTools: Elements / Network / Console"],
    },
    {
      label: { ru: "API", en: "API" },
      items: ["Postman: GET/POST/PUT/PATCH/DELETE", "Проверка контрактов и статусов"],
    },
    {
      label: { ru: "Данные", en: "Data" },
      items: ["Metabase", "SQL (база): SELECT / JOIN / GROUP BY"],
    },
    {
      label: { ru: "Процессы", en: "Process" },
      items: ["Jira", "Qase / TestRail", "Scrum"],
    },
  ],

  tools: [
    "Jira",
    "Postman",
    "Qase / TestRail",
    "BrowserStack",
    "DevTools",
    "Metabase",
    "SQL (basic)",
  ],

  blocks: {
    skills: { ru: "Навыки", en: "Skills" },
    tools: { ru: "Инструменты", en: "Tools" },
  } satisfies {
    skills: L<string>;
    tools: L<string>;
  },

  education: {
    ru: [
      "РУДН, Инженерная академия — «Управление в технических системах» (неоконченное высшее, 2027).",
    ],
    en: [
      "RUDN University, Engineering Academy — “Control in Technical Systems” (incomplete higher education, 2027).",
    ],
  } satisfies L<string[]>,

  languages: {
    ru: "Русский — родной",
    en: "English — B1",
  } satisfies L<string>,
};

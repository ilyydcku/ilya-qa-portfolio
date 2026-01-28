export type Locale = "ru" | "en";

export const profile = {
  name: "Мошков Илья",
  role: {
    ru: "Тестировщик ПО",
    en: "QA Engineer / Software Tester",
  },

  location: {
    ru: "Москва",
    en: "Moscow, Russia",
  },

  contacts: {
    email: "moshkov_2707@mail.ru",
    phone: "+7 (901) 786 58 55",
  },

  links: {
    github: "",
    telegram: "",
    linkedin: "",
  },

  // Короткий “слоган/описание” на главной (если используется)
  tagline: {
    ru: "QA-инженер: качество релизов, проверка UI и API, валидация данных.",
    en: "QA engineer: release quality, UI/API testing, data validation.",
  },

  // Короткое резюме (если блок есть на About/главной)
  summary: {
    ru: [
      "QA-инженер с коммерческим опытом: Scrum, 2-недельные спринты, релизы в конце спринта.",
      "Функциональное, регрессионное и smoke-тестирование; кросс-браузерные проверки UI.",
      "API: Postman (GET/POST/PUT/PATCH/DELETE). Данные: Metabase + базовый SQL.",
      "Инструменты: Jira, Qase/TestRail, BrowserStack, DevTools.",
    ],
    en: [
      "QA Engineer with commercial experience: Scrum, 2-week sprints, releases at sprint end.",
      "Functional, regression and smoke testing; cross-browser UI checks.",
      "API: Postman (GET/POST/PUT/PATCH/DELETE). Data: Metabase + basic SQL.",
      "Tools: Jira, Qase/TestRail, BrowserStack, DevTools.",
    ],
  },

  // Навыки (может использоваться на About)
  skills: {
    ru: [
      "Теория тестирования, тест-дизайн",
      "Функциональное / регрессионное / smoke",
      "Кросс-браузер: BrowserStack",
      "DevTools: Elements / Network / Console",
      "API: Postman",
      "Данные: Metabase + SQL (база)",
      "Jira, Scrum",
      "Тест-кейсы и баг-репорты",
    ],
    en: [
      "Testing theory, test design",
      "Functional / regression / smoke",
      "Cross-browser: BrowserStack",
      "DevTools: Elements / Network / Console",
      "API: Postman",
      "Data: Metabase + SQL (basic)",
      "Jira, Scrum",
      "Test cases and bug reports",
    ],
  },

  // ✅ ВОТ ЭТО КРИТИЧНО ДЛЯ /about: profile.tools.map(...)
  tools: [
    "Jira",
    "Postman",
    "Qase / TestRail",
    "BrowserStack",
    "DevTools",
    "Metabase",
    "SQL (basic)",
  ],

  // ✅ И это для t.blocks.tools (если используется в About)
  blocks: {
    tools: {
      ru: "Инструменты",
      en: "Tools",
    },
  },

  education: {
    ru: [
      "РУДН, Инженерная академия — «Управление в технических системах» (неоконченное высшее, 2027).",
    ],
    en: [
      "RUDN University, Engineering Academy — “Control in Technical Systems” (incomplete higher education, 2027).",
    ],
  },

  languages: {
    ru: "Русский — родной",
    en: "English — B1",
  },
};

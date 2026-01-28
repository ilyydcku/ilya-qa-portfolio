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
    phone: "+7 (901) 786 58 55",
    email: "moshkov_2707@mail.ru",
  },
  links: {
    telegram: "", // optional
    linkedin: "", // optional
    github: "", // optional
  },
  languages: {
    ru: "Русский — родной",
    en: "English — B1",
  },
  summary: {
    ru: [
      "QA-инженер с коммерческим опытом: Scrum, 2-недельные спринты, релизы в конце спринта.",
      "Функциональное, кросс-браузерное, регрессионное и smoke-тестирование (UI, формы, client–server).",
      "API: Postman (GET/POST/PUT/PATCH/DELETE). Данные: Metabase + базовый SQL.",
      "Работаю с Jira; тест-кейсы в Qase/TestRail; проверяю в DevTools и BrowserStack.",
    ],
    en: [
      "QA Engineer with commercial experience: Scrum, 2-week sprints, releases at the end of sprint.",
      "Functional, cross-browser, regression and smoke testing (UI, forms, client–server).",
      "API: Postman (GET/POST/PUT/PATCH/DELETE). Data: Metabase + basic SQL.",
      "Jira; test cases in Qase/TestRail; checks in DevTools and BrowserStack.",
    ],
  },
  skills: {
    ru: [
      "Теория тестирования, тест-дизайн",
      "Функциональное / регрессионное / smoke",
      "Кросс-браузер: BrowserStack",
      "DevTools: элементы, сеть, консоль",
      "API: Postman",
      "Данные: Metabase + SQL (база)",
      "Jira, Scrum",
      "Документация: тест-кейсы, баг-репорты",
    ],
    en: [
      "Testing theory, test design",
      "Functional / regression / smoke",
      "Cross-browser: BrowserStack",
      "DevTools: elements, network, console",
      "API: Postman",
      "Data: Metabase + SQL (basic)",
      "Jira, Scrum",
      "Docs: test cases, bug reports",
    ],
  },
  education: {
    ru: [
      "РУДН, Инженерная академия — «Управление в технических систеемах (неоконченное высшее, 2027).",
    ],
    en: [
      "RUDN University, Engineering Academy — “Control in Technical Systems” (incomplete higher education, 2027).",
    ],
  },
};

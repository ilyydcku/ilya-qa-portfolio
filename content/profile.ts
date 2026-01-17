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
    phone: "+7 (901) 786 58 55",
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
      "Баг-репорты с артефактами и понятными шагами; плотная работа с аналитиками и разработчиками.",
    ],
    en: [
      "QA engineer with commercial experience (Scrum, 2-week sprints, end-of-sprint releases).",
      "Functional, cross-browser, regression and smoke testing (UI, forms, client–server).",
      "API testing in Postman (GET/POST/PUT/PATCH/DELETE). Data checks in Metabase + basic SQL.",
      "Clear bug reports with evidence and reproducible steps; close collaboration with devs and analysts.",
    ],
  },
  tools: [
  "Jira",
  "BrowserStack",
  "DevTools (Network/Console/Elements)",
  "Postman",
  "Metabase",
  "DBeaver",
  "MySQL",
  "Android Studio",
  "Xcode",
  "TestRail",
  "Qase"
],
  skills: [
    { label: { ru: "Теория и тест-дизайн", en: "Testing fundamentals & design" }, items: ["виды/уровни тестирования", "техники тест-дизайна", "SDLC"] },
    { label: { ru: "Web UI", en: "Web UI" }, items: ["соответствие дизайну", "валидация форм", "кросс-браузер"] },
    { label: { ru: "API", en: "API" }, items: ["Postman коллекции", "статус-коды и ответы", "негативные сценарии"] },
    { label: { ru: "Данные и БД", en: "Data & DB" }, items: ["Metabase", "SQL (SELECT/INSERT/UPDATE/DELETE/JOIN)", "проверка консистентности"] },
    { label: { ru: "Mobile (базово)", en: "Mobile (basic)" }, items: ["iOS (Xcode)", "Android Studio", "проверка UI/поведения"] },
    { label: { ru: "Soft skills", en: "Soft skills" }, items: ["работа в команде", "внимательность к деталям", "грамотная коммуникация"] },
  ],
  education: {
    ru: "РУДН, Инженерная академия — ‘Управление в технических системах’ (неоконченное высшее, 2027).",
    en: "RUDN University, Engineering Academy — ‘Control and Informatics in Technical Systems’ (incomplete higher education, 2027).",
  },
  experienceNote: {
    ru: "Entertainment Art B. V. · 7 месяцев · Тестировщик · Scrum/Agile, Jira, Qase/TestRail, UI/API/Data проверки",
    en: "Entertainment Art B. V. · 7 months · QA · Scrum/Agile, Jira, Qase/TestRail, UI/API/Data checks",
  },
} as const;

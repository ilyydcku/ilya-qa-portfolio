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
    slug: "cross-browser-ui",
    title: { ru: "Кросс‑браузерная стабильность и UI‑качество", en: "Cross‑browser stability & UI quality" },
    year: "2026",
    role: { ru: "QA · Web testing", en: "QA · Web testing" },
    tags: ["Web", "UI", "BrowserStack", "DevTools"],
    intro: {
      ru: "Как я проверял UI, формы и клиент‑серверное взаимодействие на разных браузерах и разрешениях.",
      en: "How I validated UI, forms, and client–server behavior across browsers and screen sizes.",
    },
    bullets: {
      ru: [
        "UI: соответствие дизайну, состояния, тексты, крайние кейсы.",
        "DevTools: Network/Console/Elements для поиска причин расхождений.",
        "BrowserStack: матрица браузеров/девайсов, стабильная воспроизводимость.",
      ],
      en: [
        "UI checks: design fidelity, states, copy, edge cases.",
        "DevTools (Network/Console/Elements) for root-cause analysis.",
        "BrowserStack: device/browser matrix with reproducible runs.",
      ],
    },
    cover: {
      src: "/projects/cross-browser/cover.jpg",
      alt: { ru: "Превью кейса: кросс-браузер и UI", en: "Case preview: cross-browser & UI" },
    },
    gallery: [
      { src: "/projects/cross-browser/01.jpg", alt: { ru: "UI baseline", en: "UI baseline" }, caption: { ru: "Desktop baseline", en: "Desktop baseline" } },
      { src: "/projects/cross-browser/02.jpg", alt: { ru: "Mobile layout", en: "Mobile layout" }, caption: { ru: "Mobile layout", en: "Mobile layout" } },
      { src: "/projects/cross-browser/03.jpg", alt: { ru: "DevTools Network", en: "DevTools Network" }, caption: { ru: "Network inspection", en: "Network inspection" } },
      { src: "/projects/cross-browser/04.jpg", alt: { ru: "Browser matrix", en: "Browser matrix" }, caption: { ru: "Browser matrix", en: "Browser matrix" } },
    ],
  },
  {
    slug: "api-postman",
    title: { ru: "API‑тестирование в Postman", en: "API testing in Postman" },
    year: "2026",
    role: { ru: "QA · API testing", en: "QA · API testing" },
    tags: ["API", "Postman", "REST"],
    intro: {
      ru: "Работа с коллекциями запросов и базовая проверка контрактов: коды, ответы, негативные сценарии.",
      en: "Using request collections and validating contracts: status codes, payloads, negative scenarios.",
    },
    bullets: {
      ru: [
        "Коллекции: GET/POST/PUT/PATCH/DELETE, повторяемые прогоны.",
        "Проверка ответов, статус‑кодов и негативных сценариев.",
        "Сверка UI ↔ API: где фронт ожидает одно, а сервер отдаёт другое.",
      ],
      en: [
        "Collections: GET/POST/PUT/PATCH/DELETE with repeatable runs.",
        "Validating payloads, status codes, and negative scenarios.",
        "UI ↔ API consistency checks (expectations vs actual responses).",
      ],
    },
    cover: {
      src: "/projects/api/cover.jpg",
      alt: { ru: "Превью кейса: Postman", en: "Case preview: Postman" },
    },
    gallery: [
      { src: "/projects/api/01.jpg", alt: { ru: "Postman collection", en: "Postman collection" }, caption: { ru: "Collections", en: "Collections" } },
      { src: "/projects/api/02.jpg", alt: { ru: "API response", en: "API response" }, caption: { ru: "Response validation", en: "Response validation" } },
      { src: "/projects/api/03.jpg", alt: { ru: "Negative test", en: "Negative test" }, caption: { ru: "Negative cases", en: "Negative cases" } },
      { src: "/projects/api/04.jpg", alt: { ru: "UI/API mapping", en: "UI/API mapping" }, caption: { ru: "UI ↔ API mapping", en: "UI ↔ API mapping" } },
    ],
  },
  {
    slug: "data-sql-metabase",
    title: { ru: "Валидация данных: Metabase + SQL", en: "Data validation: Metabase + SQL" },
    year: "2026",
    role: { ru: "QA · Data checks", en: "QA · Data checks" },
    tags: ["SQL", "Metabase", "Data"],
    intro: {
      ru: "Как я проверяю корректность данных и нахожу расхождения между UI и БД.",
      en: "How I validate data correctness and find mismatches between UI and the database.",
    },
    bullets: {
      ru: [
        "Простые запросы: SELECT/INSERT/UPDATE/DELETE/JOIN для проверки гипотез.",
        "Проверка консистентности и бизнес‑логики на данных.",
        "Поддержка расследований: из бага — в SQL‑проверку — в чёткий репорт.",
      ],
      en: [
        "Simple queries: SELECT/INSERT/UPDATE/DELETE/JOIN to validate hypotheses.",
        "Checking consistency and data-level business rules.",
        "Supporting investigations: bug → SQL check → clear report.",
      ],
    },
    cover: {
      src: "/projects/data/cover.jpg",
      alt: { ru: "Превью кейса: Metabase + SQL", en: "Case preview: Metabase + SQL" },
    },
    gallery: [
      { src: "/projects/data/01.jpg", alt: { ru: "Metabase dashboard", en: "Metabase dashboard" }, caption: { ru: "Metabase view", en: "Metabase view" } },
      { src: "/projects/data/02.jpg", alt: { ru: "SQL query", en: "SQL query" }, caption: { ru: "SQL checks", en: "SQL checks" } },
      { src: "/projects/data/03.jpg", alt: { ru: "UI vs data", en: "UI vs data" }, caption: { ru: "UI vs data", en: "UI vs data" } },
      { src: "/projects/data/04.jpg", alt: { ru: "Findings", en: "Findings" }, caption: { ru: "Findings", en: "Findings" } },
    ],
  },
  {
    slug: "release-regression",
    title: { ru: "Регресс перед релизом: 100+ тест‑кейсов", en: "Release regression: 100+ test cases" },
    year: "2026",
    role: { ru: "QA · Regression", en: "QA · Regression" },
    tags: ["Regression", "Qase/TestRail", "Scrum"],
    intro: {
      ru: "Подготовка тест‑ранов, прогон регресса, smoke после деплоя и релиз на production.",
      en: "Preparing test runs, running regression, post-deploy smoke, and shipping to production.",
    },
    bullets: {
      ru: [
        "Чек‑листы и тест‑кейсы в Qase/TestRail; формирование тестовых прогонов.",
        "Регресс (~100 тест‑кейсов) перед релизом; smoke после деплоя.",
        "Баг‑репорты: шаги, ожидаемое/фактическое, приоритет, скриншоты.",
      ],
      en: [
        "Checklists & test cases in Qase/TestRail; building test runs.",
        "Regression (~100 test cases) before release; post-deploy smoke.",
        "Bug reports with steps, expected/actual, priority, and screenshots.",
      ],
    },
    cover: {
      src: "/projects/release/cover.jpg",
      alt: { ru: "Превью кейса: регресс и релиз", en: "Case preview: regression & release" },
    },
    gallery: [
      { src: "/projects/release/01.jpg", alt: { ru: "Test run", en: "Test run" }, caption: { ru: "Test runs", en: "Test runs" } },
      { src: "/projects/release/02.jpg", alt: { ru: "Checklist", en: "Checklist" }, caption: { ru: "Checklists", en: "Checklists" } },
      { src: "/projects/release/03.jpg", alt: { ru: "Bug report", en: "Bug report" }, caption: { ru: "Bug reports", en: "Bug reports" } },
      { src: "/projects/release/04.jpg", alt: { ru: "Release flow", en: "Release flow" }, caption: { ru: "Release workflow", en: "Release workflow" } },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

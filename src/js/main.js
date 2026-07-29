import * as bootstrap from 'bootstrap';
import { translations, projects, experiences, skills } from './content.js';

const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'portfolio-language';

const resumeAssets = {
  en: {
    url: new URL(
      '../../assets/resume/Thevenel_Joazard_Resume_EN.pdf',
      import.meta.url
    ).href,
    filename: 'Thevenel_Joazard_Resume_EN.pdf'
  },
  fr: {
    url: new URL(
      '../../assets/resume/Thevenel_Joazard_CV_FR.pdf',
      import.meta.url
    ).href,
    filename: 'Thevenel_Joazard_CV_FR.pdf'
  }
};

function getNestedValue(object, path) {
  return path.split('.').reduce((value, key) => value?.[key], object);
}

function createTag(label) {
  const tag = document.createElement('span');
  tag.className = 'technology-tag';
  tag.textContent = label;
  return tag;
}

function renderProjects(language) {
  const container = document.querySelector('#projectsGrid');
  container.replaceChildren();

  projects[language].forEach((project, index) => {
    const column = document.createElement('div');
    column.className = 'col-md-6';

    const article = document.createElement('article');
    article.className = 'project-card h-100';

    const indexLabel = document.createElement('span');
    indexLabel.className = 'project-index';
    indexLabel.textContent = String(index + 1).padStart(2, '0');

    const status = document.createElement('span');
    status.className = 'project-status';
    status.textContent = project.status;

    const top = document.createElement('div');
    top.className = 'd-flex justify-content-between align-items-start gap-3';
    top.append(indexLabel, status);

    const title = document.createElement('h3');
    title.textContent = project.title;

    const subtitle = document.createElement('p');
    subtitle.className = 'project-subtitle';
    subtitle.textContent = project.subtitle;

    const description = document.createElement('p');
    description.textContent = project.description;

    const tags = document.createElement('div');
    tags.className = 'technology-list';
    project.technologies.forEach((technology) => tags.append(createTag(technology)));

    article.append(top, title, subtitle, description, tags);
    column.append(article);
    container.append(column);
  });
}

function renderExperience(language) {
  const container = document.querySelector('#experienceList');
  container.replaceChildren();

  experiences[language].forEach((experience) => {
    const article = document.createElement('article');
    article.className = 'experience-item';

    const header = document.createElement('div');
    header.className = 'experience-header';

    const identity = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = experience.role;
    const company = document.createElement('p');
    company.className = 'experience-company';
    company.textContent = experience.company;
    identity.append(title, company);

    const metadata = document.createElement('div');
    metadata.className = 'experience-metadata';
    const date = document.createElement('span');
    date.textContent = experience.date;
    const location = document.createElement('span');
    location.textContent = experience.location;
    metadata.append(date, location);

    header.append(identity, metadata);

    const list = document.createElement('ul');
    experience.bullets.forEach((bullet) => {
      const item = document.createElement('li');
      item.textContent = bullet;
      list.append(item);
    });

    article.append(header, list);
    container.append(article);
  });
}

function renderSkills(language) {
  const container = document.querySelector('#skillsGrid');
  container.replaceChildren();

  skills[language].forEach((group) => {
    const column = document.createElement('div');
    column.className = 'col-md-6 col-xl-3';

    const section = document.createElement('section');
    section.className = 'skill-group h-100';

    const title = document.createElement('h3');
    title.textContent = group.title;

    const list = document.createElement('ul');
    group.items.forEach((skill) => {
      const item = document.createElement('li');
      item.textContent = skill;
      list.append(item);
    });

    section.append(title, list);
    column.append(section);
    container.append(column);
  });
}

function updateStaticText(language) {
  document.documentElement.lang = language;
  document.title = translations[language].meta.title;
  document.querySelector('meta[name="description"]').setAttribute('content', translations[language].meta.description);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getNestedValue(translations[language], element.dataset.i18n);
    if (typeof value === 'string') {
      element.textContent = value;
    }
  });

  const resume = resumeAssets[language];

  document.querySelectorAll('.resume-link').forEach((link) => {
    link.setAttribute('href', resume.url);
    link.setAttribute('download', resume.filename);
  });
}

function updateLanguageButtons(language) {
  document.querySelectorAll('[data-language]').forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : DEFAULT_LANGUAGE;
  localStorage.setItem(STORAGE_KEY, selectedLanguage);
  updateStaticText(selectedLanguage);
  updateLanguageButtons(selectedLanguage);
  renderProjects(selectedLanguage);
  renderExperience(selectedLanguage);
  renderSkills(selectedLanguage);
}

function setupNavigation() {
  const collapseElement = document.querySelector('#primaryNavigation');
  const collapse = bootstrap.Collapse.getOrCreateInstance(collapseElement, { toggle: false });

  document.querySelectorAll('#primaryNavigation a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992 && collapseElement.classList.contains('show')) {
        collapse.hide();
      }
    });
  });
}

function initialize() {
  const savedLanguage = localStorage.getItem(STORAGE_KEY);
  const browserLanguage = navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : DEFAULT_LANGUAGE;
  const initialLanguage = savedLanguage || browserLanguage;

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });

  document.querySelector('#currentYear').textContent = String(new Date().getFullYear());
  setupNavigation();
  setLanguage(initialLanguage);
}

document.addEventListener('DOMContentLoaded', initialize);

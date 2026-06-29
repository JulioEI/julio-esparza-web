/**
 * render.js — Pure DOM-builder functions.
 * Each function receives data and returns an HTMLElement or DocumentFragment.
 * No side effects; no direct DOM queries. Easy to unit-test.
 */

/**
 * Create an element with optional classes and inner HTML.
 * @param {string} tag
 * @param {string|string[]} [classes]
 * @param {string} [html]
 * @returns {HTMLElement}
 */
function el(tag, classes = [], html = '') {
  const node = document.createElement(tag);
  const classList = Array.isArray(classes) ? classes : [classes];
  if (classList.length) node.classList.add(...classList.filter(Boolean));
  if (html) node.innerHTML = html;
  return node;
}

/**
 * Render the hero section content.
 * @param {{ eyebrow: string, nameShort: string, statement: string, links: object }} profile
 * @returns {DocumentFragment}
 */
export function renderHero(profile) {
  const frag = document.createDocumentFragment();

  const eyebrow = el('p', 'hero__eyebrow', profile.eyebrow);

  const name = el('h1', 'hero__name');
  name.innerHTML = profile.nameShort.replace('\n', '<br>');

  const statement = el('p', 'hero__statement', profile.statement);

  const links = el('div', 'hero__links');

  const primaryLink = el('a', ['hero__link', 'hero__link--secondary']);
  primaryLink.href        = '#research';
  primaryLink.textContent = 'Publications';

  const aboutLink = el('a', ['hero__link', 'hero__link--secondary']);
  aboutLink.href        = '#about';
  aboutLink.textContent = 'About';

  const skillsLink = el('a', ['hero__link', 'hero__link--secondary']);
  skillsLink.href        = '#skills';
  skillsLink.textContent = 'Skills';

  const contactLink = el('a', ['hero__link', 'hero__link--secondary']);
  contactLink.href        = '#contact';
  contactLink.textContent = 'Get in touch';

  links.append(aboutLink, skillsLink, primaryLink, contactLink);
  frag.append(eyebrow, name, statement, links);
  return frag;
}

/**
 * Render the about section.
 * @param {{ lead: string, paragraphs: string[], stats: {number: string, label: string}[] }} about
 * @returns {DocumentFragment}
 */
export function renderAbout(about) {
  const frag = document.createDocumentFragment();

  const grid = el('div', 'about__grid');

  // Left column: lead
  const lead = el('p', 'about__lead', about.lead);

  // Right column: body paragraphs + stats
  const right = el('div');
  const body  = el('div', 'about__body');
  about.paragraphs.forEach(p => body.appendChild(el('p', [], p)));

  const stats = el('div', 'about__stats');
  about.stats.forEach(({ number, label }) => {
    const stat = el('div');
    stat.appendChild(el('div', 'stat__number', number));
    stat.appendChild(el('div', 'stat__label',  label));
    stats.appendChild(stat);
  });

  right.append(body, stats);
  grid.append(lead, right);
  frag.appendChild(grid);
  return frag;
}

/**
 * Render one paper row.
 * @param {import('./data.js').Paper} paper
 * @returns {HTMLAnchorElement}
 */
export function renderPaper(paper) {
  const a = el('a', 'paper');
  a.href   = paper.doi;
  a.target = '_blank';
  a.rel    = 'noopener';

  const year  = el('div', 'paper__year', paper.year);
  const body  = el('div');
  const venue = el('span', ['paper__venue', paper.primary ? 'paper__venue--primary' : ''], paper.venue);
  const title = el('div', 'paper__title',   paper.title);
  const auth  = el('div', 'paper__authors', paper.authors);

  body.append(venue, title, auth);

  const arrow = el('div', 'paper__arrow', '→');
  a.append(year, body, arrow);
  return a;
}

/**
 * Render the skills section.
 * @param {import('./data.js').SkillGroup[]} skills
 * @returns {HTMLElement}
 */
export function renderSkills(skills) {
  const grid = el('div', 'skills-grid');

  skills.forEach(({ heading, items }) => {
    const group   = el('div', 'skill-group');
    const h3      = el('h3', 'skill-group__heading', heading);
    const ul      = el('ul', 'skill-group__list');
    items.forEach(item => ul.appendChild(el('li', 'skill-group__item', item)));
    group.append(h3, ul);
    grid.appendChild(group);
  });

  return grid;
}

/**
 * Render one timeline entry.
 * @param {import('./data.js').TimelineItem} item
 * @returns {HTMLElement}
 */
export function renderTimelineItem(item) {
  const row    = el('div', 'timeline-item');
  const period = el('div', 'timeline-item__period', item.period);
  const body   = el('div');

  body.appendChild(el('div', 'timeline-item__role',   item.role));
  body.appendChild(el('div', 'timeline-item__where',  item.where));
  body.appendChild(el('div', 'timeline-item__detail', item.detail));

  row.append(period, body);
  return row;
}

/**
 * Render one talk row.
 * @param {import('./data.js').Talk} talk
 * @returns {HTMLElement}
 */
export function renderTalk(talk) {
  const row      = el('div', 'talk');
  const year     = el('div', 'talk__year', talk.year);
  const body     = el('div', 'talk__body');
  const type     = el('span', 'talk__type', talk.type);
  const event    = el('div', 'talk__event', talk.event);
  const location = el('div', 'talk__location', talk.location);

  body.append(type, event, location);
  if (talk.note) body.appendChild(el('div', 'talk__note', talk.note));
  row.append(year, body);
  return row;
}

/**
 * Render one project card (square tile for the grid).
 * @param {import('./data.js').Project} project
 * @returns {HTMLButtonElement}
 */
export function renderProjectCard(project) {
  const btn      = el('button', 'project-card');
  btn.type       = 'button';
  btn.dataset.id = project.id;

  const category = el('span', 'project-card__category', project.category);
  const title    = el('h3',   'project-card__title',    project.title);
  const tagline  = el('p',    'project-card__tagline',  project.tagline);
  const year     = el('span', 'project-card__year',     project.year);

  btn.append(category, title, tagline, year);
  return btn;
}

/**
 * Render one award row.
 * @param {import('./data.js').Award} award
 * @returns {HTMLElement}
 */
export function renderAward(award) {
  const row  = el('div', 'award');
  const year = el('div', 'award__year', award.year);
  const body = el('div');

  body.appendChild(el('div', 'award__name', award.name));
  body.appendChild(el('div', 'award__org',  award.org));

  row.append(year, body);
  return row;
}

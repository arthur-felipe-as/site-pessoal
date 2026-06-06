[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/QVt4rQj9)
# JavaScript Challenge

Upgrade your personal website with Tailwind CSS, dark mode, a sidebar, and dynamic project cards.

## How this scaffold was created

```bash
npm create vite@latest . --template vanilla
npm install -D tailwindcss @tailwindcss/vite
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Tasks

### 1. Migrate your old website to Tailwind

- Copy your old HTML into the `<body>` of `index.html` — the sections `#hero`, `#projects`, and `#contact` are already there as placeholders
- Remove your old `<link>` to external stylesheets — `css/style.css` is already linked
- Replace your CSS classes with equivalent Tailwind utility classes
- Reference: [Tailwind CSS docs](https://tailwindcss.com/docs)

### 2. Replace hardcoded colors with Tailwind classes

- Instead of writing `color: #111827` or `background: white`, use Tailwind classes like `text-foreground`, `bg-background`, `text-primary`
- These classes come from the CSS variables defined in `css/style.css` under `@theme`
- Adjust the default values in `@theme` to match your own color palette
- For extra colors, add new `--color-*` variables inside `@theme`

### 3. Dark mode toggle (`js/darkMode.js`)

- Add a dark mode toggle button inside `<nav>` in `index.html`
- In `js/darkMode.js`, select the button and add a `click` listener
- On click, toggle the `dark` class on the root element:
  ```js
  document.documentElement.classList.toggle('dark')
  ```
- Update the color values inside `.dark` in `css/style.css` to set your dark palette

### 4. Sidebar toggle (`js/sidebar.js`)

- Add a sidebar toggle button inside `<nav>` in `index.html`
- In `js/sidebar.js`, select `#sidebar` and the button, then toggle a class to show/hide the sidebar on button click (e.g. `-translate-x-full`)
- Use Tailwind's `transition` and `translate` utilities for smooth animation:
  ```html
  <aside class="fixed top-0 left-0 h-full w-64 transition-transform duration-300 -translate-x-full" id="sidebar">
  ```

### 5. Dynamic Projects section (`js/projects.js` + `js/projectsData.js`)

- Open `js/projectsData.js` and fill in the `projects` array with your projects:
  ```js
  export const projects = [
    { title: 'My Project', description: 'What it does.', url: 'https://...' },
  ]
  ```
- In `js/projects.js`, loop over the array and render a card for each project into `#projects`:
  ```js
  const container = document.querySelector('#projects')
  projects.forEach(({ title, description, url }) => {
    const card = document.createElement('div')
    card.className = 'flex flex-col bg-background'
    card.innerHTML = `<h3>${title}</h3><p>${description}</p><a href="${url}">View</a>`
    container.appendChild(card)
  })
  ```

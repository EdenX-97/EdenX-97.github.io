---
title: Use Nextjs with Tailwindcss
icon: article
article: true
index: false
category: 
  - Frontend
tag:
  - Nextjs
  - Tailwindcss
---
While studying the use of Nextjs+Tailwindcss, I encountered issues when trying to integrate them correctly according to the official documentation for both Nextjs and Tailwindcss. I resolved these issues and recorded my solution to help others who are also trying to use these technologies together.

- Nextjs version: ^13.0.2
- Tailwindcss version: ^3.2.4

## Create Project

In terminal:

```bash
npx create-next-app@latest my-project --typescript --eslint
cd my-project
```

## Install Tailwind CSS

In terminal:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install autoprefixer
```

::: note Note

You need to use npm install autoprefixer, otherwise you will meet errors.

:::

## Configure

In project root path, in `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Then, add a new file `./styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally, add one line to your `./pages/_app.tsx`:

```typescript
import "../styles/globals.css";
```

## Use Tailwindcss

For example:

```typescript
export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

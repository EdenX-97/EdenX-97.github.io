---
title: Build and customize a personal knowledge base and blog by Vuepress + Github Pages
icon: article
timeline: true
article: true
index: false
---

## 0. Related Resources

1. [Vuepress](https://vuepress.vuejs.org/)
2. [Vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/)
3. [Github Pages](https://pages.github.com/)

## 1. Introduction

Building a personal knowledge base and blog can be a great way to share your knowledge, thoughts, and experiences with others. With the right tools, it's easy to create a professional-looking website for your knowledge base and blog and make it accessible to others.

One option for building a knowledge base and blog is to use VuePress, a static site generator based on Vue.js. VuePress allows you to quickly create high-quality documentation websites with a minimal amount of effort. And with the Vuepress-theme-hope plugin, you can add a professional and attractive theme to your VuePress site.

Once you have VuePress and Vuepress-theme-hope installed, you can create your knowledge base and blog website by adding documents, articles, links, and other content to your VuePress project. You can use VuePress to create a separate section for your blog, where you can add your blog posts and organize them by category or tag. Then, you can use VuePress to generate a static website that can be shared with others.

To make your knowledge base and blog website even more accessible, you can use GitHub Pages to host it. GitHub Pages is a free hosting service provided by GitHub that makes it easy to create and host static websites on GitHub. With GitHub Pages, you can host your knowledge base and blog website on GitHub and make it available to anyone with an internet connection.

Now, let's use VuePress, Vuepress-theme-hope, and GitHub Pages to quickly build a personal knowledge base and blog website and share your knowledge, thoughts, and experiences with the world.

## 2. Installation and Setup

### Install Nodejs

Please refer to [Nodejs official website](https://nodejs.org/en/)

:::  note Note

Suggest Nodejs version >= 14

:::

### Create New Vuepress-theme-hope Project

Create a vuepress-theme-hope project in `[dir]` folder:

```bash
npm init vuepress-theme-hope@next [dir]
```

::: note Note

`[dir]` is a parameter here, replace it with real folder names, such as `docs`, `blog` or other name you like.

:::

Choose:

```bash
english (US)
npm
your-project-name
your-project-version
your-project-description
your-project-licenses
Y
blog
Y
```

Then you can run your project locally by use the command:

```bash
npm run docs:dev
```

And you can browse the project through http://localhost:8080/

## 3. Creating Knowledge Base and Blog

### Remove Chinese Language (Optional)

You can remove `/zh` folder and locales setting in `/src/.vuepress/config.ts` to remove the Chinese language, and remove all related settins in `/src/.vuepress/`.

### Modify Title and Navbar

In `/src/.vuepress/config.ts`, modify the `title` and `description` for your knowledge base website, for example:

```typescript
locales: {
  "/": {
    lang: "en-US",
      title: "Eden's Knowledge Base",
        description: "Eden's knowledge base and blog",
  },
},
```

You can change the logo by replace the logo images in `/src/.vuepress/public`.

### Configure Blog

Then, under `/src`, set the home page in `/src/README.md` to blog page, for example:

```markdown
---
home: true
layout: Blog
icon: home
title: Blog
heroImage: /logo.svg
heroText: Eden's Knowledge Base
tagline: Eden's personal knowledge base and blog
bgImage: /bgImage.webp
heroFullScreen: false
projects:
  - icon: project
    name: project name
    desc: project detailed description
    link: https://your.project.link
copyright: false
footer: MIT Licensed, Copyright © 2022-present Eden Xu
---
```

::: note Note

You can remove below few lines start with: `This is a blog home ...`

:::

### Configure Topbar and Sidebar

The file of topbar configuration is `/src/.vuepress/navbar/en.ts`, for example:

```typescript
export const enNavbar = navbar([
  "/",
  {
    text: "Notes",
    icon: "note",
    link: "/notes/",
  },
]);
```

The file of sidebar is `/src/.vuepress/sidebar/en.ts`, for example:

```typescript
export const enSidebar = sidebar({
  "/": [
    {
      icon: "note",
      text: "Notes",
      prefix: "notes/",
      link: "notes/",
      children: "structure",
    },
  ],
});
```

After setting, when you add new notes under `/src/notes`, the article will automatically added to the blog, also you can access the article through Knowledge Base tab.

### Configure Author Informations

In `/src/.vuepress/theme.ts`, for example:

```typescript
author: {
  name: "Eden Xu",
},
docsDir: "notes",
blog: {
  avatar: "/avatar.jpg",
  roundAvatar: true,
  description: "Nice to meet you.",
  medias: {
    GitHub: "https://github.com/EdenX-97",
    Linkedin: "https://www.linkedin.com/in/moxu97/",
    Email: "mailto:edenxu97@outlook.com",
  },
},
```

::: note Note

You need to configure other basic informations like: repo/hostname.

If you need comment function, configure `plugins: {comment: {}}`, according to: https://vuepress-theme-hope.gitee.io/v2/guide/feature/comment.html

:::

### Add Notes

Write your notes with `.md`, put the files into `/src/notes`.

You can create folders to have some structures, the blog and `Notes` part will automatically recognize the structure.

::: note Note

Suggest to use `Typora` to write markdown files, you can use [Markdown Enhance](https://vuepress-theme-hope.github.io/v2/md-enhance/guide/) to beautify notes or use functions such as inserting charts.

:::

## 4. Hosting the Website on Github Pages

Github Actions is a powerful tool that allows users to automate various aspects of their workflows, including the deployment of projects to Github Pages. In this part, we will use Github Actions to set up an automated process for deploying this project to Github Pages. Then we can access the website through a public url.

### Create Github Pages Repository

Go to your Github Account, create a repository named `<your_username>.github.io`, for example:

![image-20221208011944004](/assets/notes/images/image-20221208011944004.png)

Then, in terminal, go to your project root folder, enter following commands:

``` bash
git add -A
git commit -m "first commit"
git remote add origin https://github.com/<your_username>/<your_username>.github.io.git
git push -u origin main
```

::: note Note

You need to set correct `hostname` in `/src/.vuepress/theme.ts` like `EdenX-97.github.io` which is same to your Github Pages link, then you can use this url to access your project.

:::

Final step, go to your repository, in `Settings-Pages` tab, change the Branch to `gh-pages`.

![image-20221208014857098](/assets/notes/images/image-20221208014857098.png)

After all actions completed, you can access your website through `<your_username>.github.io`, enjoy!
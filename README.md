This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## SVG Icons
We use SVG icons from [https://fontawesome.com/](https://fontawesome.com/).
#### Set Up with React

We use npm to install the core package which includes all the utilities to make the icons
work:

```bash
npm i --save @fortawesome/fontawesome-svg-core
```
For more details [https://fontawesome.com/docs/web/use-with/react/](https://fontawesome.com/docs/web/use-with/react/)

#### Add Icon Packages

For Free icons we add these styles:

```bash
# Free icons styles
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
```
#### Add the React Component

And lastly, install the Font Awesome React component:

```bash
npm i --save @fortawesome/react-fontawesome@latest
```

#### How To Add Icons:
On this project we add Individual Icons Explicitly:
If you can't or don't want to use the Dynamic Icon Importing method, you can explicitly add individual icons to each
component. Here's a simple example:

```
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />

ReactDOM.render(element, document.body)
```



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

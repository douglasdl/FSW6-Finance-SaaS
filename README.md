# FSW6 - Finance-SaaS

Create the NextJS Project:

```sh
npx create-next-app@14.2.16
```

Install the dependencies:

```sh
npm i prisma
npm i -D prettier prettier-plugin-tailwindcss
```

Create Prisma Schema:

```sh
npx prisma init
```

Format the Prisma Schema:

```sh
npx prisma format
```

Create the Database migrations:

```sh
npx prisma migrate dev --name init_db
```

Create/Apply the database and migration in a new development database:

```sh
npx prisma migrate dev
```

Create/Apply the database and migration in a new production database:

```sh
npx prisma migrate deploy
```

Install the Shadcn:

```sh
pnpm dlx shadcn@latest init
```

Install Shadcn components:

```sh
pnpm dlx shadcn@latest add button

```

Install Clerk:

```sh
npm i @clerk/nextjs
npm i @clerk/themes
```

Install Githooks: Husky and Lint-Staged:

```sh
npm i -D husky
npm i -D lint-staged
npm i -D git-commit-msg-linter
npx husky init
npx husky add .husky/commit-msg ".git/hooks/commit-msg \$1"
```

Start the project:

```sh
npm run dev
```

- [Figma](https://www.figma.com/design/AotbJaT5gvfQUJBH599qEZ/FSW-Finance?node-id=264-1627&node-type=canvas&t=3IKgbF89QuNx8l56-0)
- [Notion](https://narrow-beach-a00.notion.site/Full-Stack-Week-6-0-Guia-do-Evento-f29407dc306545eaa3c803d29e148358)

## Database

- [Eraser](https://app.eraser.io/workspace/pCPA6mfY0Xq6Gxd306VC)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Neon DB](https://neon.tech/)
- [Supabase](https://supabase.com/)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)

## Technologies / Packages

- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn](https://ui.shadcn.com/)
- [Clerk](https://clerk.com/) - Alternative option -> [Next Auth](https://next-auth.js.org/)
- [Husky](https://github.com/typicode/husky#readme)
- [Lint Staged](https://github.com/lint-staged/lint-staged#readme)
- [git-commit-msg-linter](https://github.com/legend80s/git-commit-msg-linter#readme)

## VS Code Extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Plugin Tailwind Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Others

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Docker

Start the container:

```sh
docker-compose up -d
```

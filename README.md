# Run Locally

Clone the project

```bash
  git clone https://github.com/shaqeebakhtar/movie-library-backend.git
```

Go to the project directory

```bash
  cd movie-library-backend
```

Install dependencies

```bash
  pnpm install
```

Copy .env.example to .env

```bash
  cp .env.example .env
```

Update .env with your local MySQL database details

```bash
  PORT=5000 // node
  DATABASE='db_name'
  DB_ROOT_PASS='root_pass'
  DB_PASS='pass'
  DB_USER='username'
```

Start the server

```bash
  pnpm dev
```

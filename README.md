# Vue Clean Architecture Template

A frontend-only template designed for developers who value **clarity, sovereignty, and maintainability** over quick-and-dirty shipping.

Built for Vue 3 with Vite, this template enforces a real **Clean Architecture** separation from day one. Whether you're targeting Vue, Svelte, React, or just building an SDK-like UI layer, this template ensures your business logic and structure are never held hostage by your framework.

---

## ✨ Why this template exists

The frontend ecosystem is a mess of half-baked abstractions and broken conventions. Most boilerplates are:

* framework-coupled (Nuxt, Next, SvelteKit...)
* backend-bound (API routes and server logic fused inside)
* structureless, naming-thin, or DX-hostile

This template is **different**:

* ✅ Framework-contained (Vue lives in `Framework/`, nowhere else)
* ✅ No backend — you bring your own
* ✅ Clean Architecture enforced — Application, Domain, Infrastructure, Presentation clearly separated
* ✅ Ready for CLI tooling (gollum\:make ... coming soon)
* ✅ Vite + Vitest + Prettier + ESLint pre-configured

---

## 📁 Directory Structure

```bash
src/
  Application/       # Use cases, ports, orchestration
  Domain/            # Pure logic, value objects, entities, no imports
  Infrastructure/    # HTTP clients, storage, gateways (framework-agnostic)
  Persistence/       # State management (store adapters, IndexedDB, etc.)
  Presentation/      # Components, routes, UI logic
    CLI/             # Human-facing command-line interface (generators, scaffolding)
    Tests/           # All test files (unit/integration)
  Framework/         # Vue, Pinia, and anything UI-framework-specific
```

---

## 🧪 Testing

Vitest is not installed yet — but the structure is prepared.
You’ll be able to test your application at all levels:

* `Domain/`: unit tests for pure logic
* `Application/`: integration tests with mocks
* `Framework/`: component mount tests

Dummy test to be added soon to validate initial setup.

---

## 🧹 Code Style & Linting

* ESLint (`.eslintrc.cjs`) with Vue 3 + TypeScript + Prettier integration
* Prettier (`.prettierrc`) for consistent formatting
* Strict import rules, no relative hell

### Scripts:

```bash
pnpm lint     # Runs ESLint
pnpm format   # Runs Prettier
```

---

## 🚀 How to use it

```bash
pnpm create vite MyAwesomeApp --template gollumeo/vue-clean-archi-template
cd MyAwesomeApp
pnpm install
```

Then start your app, build features, inject logic.

---

## 🧠 Philosophy

This isn’t just a Vue boilerplate. It’s a mindset:

* Your logic lives outside of your UI.
* Your state is abstracted, injectable, and testable.
* Your structure protects you from framework lock-in.
* You control the shape, flow, and naming of your code.

All interaction layers—whether UI or CLI—are treated as Presentation concerns.
No logic should leak into the CLI: it orchestrates use cases, never implements them.

**Build apps like systems, not like spaghetti.**

---

## 📌 Roadmap

* [ ] `acherus:make` CLI generator
* [ ] Built-in Vitest test with dummy use case
* [ ] Vue + Pinia default injection example
* [ ] Svelte + React switchable adapter playgrounds

---

## License

MIT — build responsibly, don’t ship trash.

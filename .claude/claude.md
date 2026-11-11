
# CLAUDE.md

## 1. Role and General Principles

Act as a Senior Frontend Engineer specialized in Next.js, React and TypeScript.

Your responsibilities:
- Write clean, maintainable and scalable code.
- Follow SOLID principles where relevant.
- Prefer simple solutions over unnecessary abstractions.
- Avoid duplicated code (DRY).
- Follow existing project conventions before introducing new patterns.
- Never introduce a dependency without a valid reason.
- Understand the existing code before modifying it.
- Do not rewrite working code unnecessarily.

## 2. Technology Stack

- Next.js (App Router)
- React
- TypeScript (strict mode)
- Tailwind CSS
- HTML5
- TanStack Query when already adopted by the project
- Zod for runtime validation when appropriate

Always use the versions and dependencies already defined in package.json.

## 3. Project Architecture

Organize code by feature whenever possible.

Suggested structure:

src/
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── api/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   └── shared/
├── features/
│   ├── users/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
├── lib/
├── hooks/
├── types/
└── utils/

Rules:
- Keep business logic outside UI components.
- Group feature-specific code inside its feature.
- Keep reusable components in components/.
- Keep shared utilities in lib/ or utils/.
- Avoid creating unnecessary folders or layers.
- Do not put all application logic inside app/.

Adapt this structure to the existing project.

## 4. Next.js Best Practices

- Use App Router.
- Prefer Server Components by default.
- Use "use client" only when browser APIs, state or event handlers are required.
- Keep Client Components as small as possible.
- Use Server Components for server-side data fetching.
- Use loading.tsx for loading states when appropriate.
- Use error.tsx for route-level error handling.
- Use not-found.tsx for missing resources.
- Use next/image for optimized images.
- Use next/link for internal navigation.
- Use metadata API for SEO.

Never add "use client" to an entire page when only one component needs client-side interaction.

## 5. React and TypeScript

- Use functional components.
- Define explicit types for component props.
- Avoid using `any`.
- Prefer interfaces for object contracts when appropriate.
- Use type inference when it improves readability.
- Avoid unnecessary useEffect.
- Avoid unnecessary useMemo and useCallback.
- Never mutate React state directly.
- Use stable keys when rendering lists.
- Extract complex logic into custom hooks or utility functions.

Example:

interface UserCardProps {
  id: string;
  name: string;
  email: string;
}

export function UserCard({ name, email }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

## 6. API and Data Management

- Keep API calls outside presentation components.
- Centralize API configuration.
- Use typed request and response DTOs.
- Handle HTTP errors consistently.
- Validate external data when necessary.
- Avoid duplicating API calls.
- Never expose private API keys or secrets.
- Use environment variables for configuration.
- Only NEXT_PUBLIC_ variables may be exposed to the browser.
- Keep authentication and authorization checks on the server.

When using an existing backend:
- Respect its API contracts.
- Do not invent endpoints or response properties.
- Do not duplicate backend business rules.
- Handle pagination, filtering and sorting consistently.

## 7. State Management

Choose the simplest state solution for the use case.

- useState for local component state.
- useReducer for complex local state.
- Context for shared state with limited scope.
- TanStack Query for server state when installed.
- Avoid introducing global state libraries without justification.

Do not duplicate server state inside global client state.

## 8. UI and Styling

- Use Tailwind CSS consistently.
- Prefer reusable UI components.
- Maintain consistent spacing, colors and typography.
- Ensure responsive layouts (mobile, tablet and desktop).
- Follow accessibility best practices.
- Use semantic HTML.
- Provide loading, empty and error states.
- Avoid inline styles unless necessary.
- Avoid overly complex components.

## 9. Forms and Validation

- Validate user input on both client and server.
- Use Zod when appropriate.
- Display clear and useful validation messages.
- Handle submission errors.
- Prevent duplicate submissions.
- Keep form validation logic reusable.

Never trust client-side validation alone.

## 10. Security

- Never expose secrets or authentication tokens.
- Never trust client-provided user IDs or roles.
- Validate and sanitize external input.
- Check authorization on every protected server operation.
- Protect Server Actions and Route Handlers.
- Avoid unsafe HTML rendering.
- Do not log sensitive information.
- Use server-only modules for sensitive server logic.

## 11. Testing

Every significant feature must have appropriate tests.

- Unit tests for utilities and business logic.
- Component tests for important UI behavior.
- Integration tests for API interactions.
- E2E tests for critical user journeys.

When fixing a bug:
1. Understand the root cause.
2. Add or update a regression test.
3. Implement the fix.
4. Run relevant tests.

Do not remove tests simply to make the build pass.

## 12. Performance

- Avoid unnecessary client-side JavaScript.
- Prefer Server Components when possible.
- Use dynamic imports for heavy components when appropriate.
- Avoid unnecessary re-renders.
- Optimize images and fonts.
- Avoid sequential API calls when they can run in parallel.
- Use caching and revalidation intentionally.
- Avoid premature optimization.

## 13. Error Handling

- Never silently ignore errors.
- Use consistent error handling.
- Display user-friendly messages.
- Keep technical details out of user-facing error messages.
- Log errors appropriately on the server.
- Do not expose stack traces or internal details.

## 14. Development Workflow

Before implementing a feature:

1. Inspect the existing project structure.
2. Understand the current implementation.
3. Identify reusable components and utilities.
4. Define the simplest appropriate solution.
5. Implement incrementally.
6. Add or update tests.
7. Run lint, type checking and tests.

Before finishing:

- Verify TypeScript compilation.
- Run ESLint.
- Run relevant tests.
- Check for unused imports and dead code.
- Review security implications.
- Ensure existing features are not broken.

## 15. Important Rules

- Do not assume requirements that were not specified.
- Ask questions when important business requirements are unclear.
- Do not modify unrelated files.
- Do not install packages without justification.
- Do not create abstractions for one-time operations without a clear benefit.
- Do not sacrifice maintainability for speed.
- Explain important architectural decisions.
- Prefer production-ready implementations over quick hacks.

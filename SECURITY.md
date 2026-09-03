# Security Policy

## Report a vulnerability

Do not post credentials, personal data, or exploit details in a public issue. Use a private GitHub security advisory when available, or contact the repository owner through an established private channel.

## Credential handling

- Never commit API keys, tokens, passwords, private certificates, or customer data.
- Treat all Vite and browser-bundled variables as public.
- Keep third-party model credentials and privileged calls in server-side functions.
- Rotate any credential immediately if it is committed, even if the file is later deleted. Git history and forks may retain it.
- Review external agent skills, plugins, actions, and dependencies before installation.

## Supported version

Security fixes target the current `main` branch while this project remains active.

# enerKI
[See it in action](https://enerki-2ddc65.pages.ti.bfh.ch).

Use Chrome for WebUSB support if you want to use ANT+ sensors.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Changelog
### 2025-09-30 V0.4.1
- add Favicon

### 2025-09-30 V0.4.0
- Introduced example prompts
- Introduces quiz cards
- Code cleanup

### 2025-09-22 V0.3.0
- Bugfixes
- Improved toasts
- Removed system prompt (since it was not working correctly and can be set up directly in the model)
- Feature to reset user

### 2025-09-22 V0.2.2
- Use BFH colors
- Use special model for enabling system prompt

### 2025-09-19 V0.2.1
- Fix a bug where the response was not obfuscated before reaching necessary power level

### 2025-09-16 V0.2.0
- Improve feedback via toasts.
- Added prompt enhancement in env for better fitting outputs of LLM.

### 2025-09-08 V0.1.1
- Fixed a bug where the WebApp did not launch on browsers not supporting WebUSB.

### 2025-09-05 V0.1.0
- First functional version published, with demo mode for usage without sensor attached.
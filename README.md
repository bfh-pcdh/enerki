# enerKI
[See it in action](https://bfh-pcdh.github.io/enerki/).

Use Chrome for WebUSB support if you want to use ANT+ sensors.

For instructions how to prepare the existing setup for use, see [SETUP.md](./SETUP.md) (in german).
For instructions how to reproduce the enerki setting with your own hardware, see [HARDWARE.md](./HARDWARE.md).

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
### 2026-01-22 V0.7.1
- Moved repo to Github
- Fixed dependency vulnerabilities

### 2025-11-12 V0.7.0
- Added french translation

### 2025-10-20 V0.6.1
- Show drawn card again if pressing enter (instead of drawing new card)

### 2025-10-15 V0.6.0
- Fixes from first event
    - bigger font in example prompts
    - replace ß in responses
    - enter key draws a new card if input field is empty

### 2025-10-14 V0.5.1
- Added [instructions](/SETUP.md) to set up the enerKI hardware

### 2025-10-14 V0.5.0
- Added funktion to display how many calories where burned when finishing

### 2025-10-13 V0.4.3
- Added additional quiz cards

### 2025-10-01 V0.4.2
- Fixed bug: continued to show toasts after resetting user

### 2025-09-30 V0.4.1
- Added favicon

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
- Fixed a bug where the response was not obfuscated before reaching necessary power level

### 2025-09-16 V0.2.0
- Improve feedback via toasts.
- Added prompt enhancement in env for better fitting outputs of LLM.

### 2025-09-08 V0.1.1
- Fixed a bug where the WebApp did not launch on browsers not supporting WebUSB.

### 2025-09-05 V0.1.0
- First functional version published, with demo mode for usage without sensor attached.
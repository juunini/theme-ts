## Usage

caching to localStorage

```typescript
import * as theme from './theme';

// init theme
theme.init();

if (theme.current === 'dark')
  // do dark theme action
else
  // do light theme action
  
// set dark theme (body tag insert to 'dark' class)
theme.setDarkTheme();

// set light theme (body tag remove to 'dark' class)
theme.setLightTheme();
```

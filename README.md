---

- !! this.setState => compiles after all sync code is finished

---

INSTALLATIONS:

BASE

- git clone repo
- cd cloned repo
- npx create-react-app .
- ( optional ) npm install react-scripts@latest
- npm install --save-dev prop-types
- npm install --save-dev prettier
- create file in project root .prettierrc.json => { "printWidth": 80,
  "tabWidth": 2, "useTabs": false, "semi": true, "singleQuote": true,
  "trailingComma": "all", "bracketSpacing": true, "jsxBracketSameLine": false,
  "arrowParens": "avoid", "proseWrap": "always" }
- npm install --save-dev modern-normalize (in index.js => import
  'modern-normalize/modern-normalize.css')
- folder public delete all except index.html => comment =>
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
- folder src => delete all except index.js and App.js and - clear extra imports
  and unused files in index.js and App.js
- import React from 'react' in App.js and each component file
- npm start

Topic's additional set up

- npm install --save-dev redux
- npm install --save-dev react-redux ( to contact our react component with redux
  library ). Has <Provider /> component, that wraps ALL our application and,
  throuth context, passes additional functionality ( <React.StrictMode>
  <Provider store={store}> <App /> </Provider> </React.StrictMode>)
- DEVTOOLS
- http://extension.remotedev.io/ => docs
- https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  => REDUX DEVTOOLS
- npm install --save-dev redux-devtools-extension
- in store.js => import { composeWithDevTools } from 'redux-devtools-extension';

- git add . / commit / push

---

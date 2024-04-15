# 1. 리액트 프로젝트 초기세팅

## 1.1 리액트 프로젝트 생성

- `npx create-react-app ./`
- `yarn create-react-app ./`

## 1.2 파일 정리

- src/test 파일들 삭제
- App.css 파일 삭제
- indext.js 파일 정리
- index.css 파일 수정

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
}
ul,
li {
  list-style: none;
}
a {
  color: #000000;
  text-decoration: none;
}
img {
  vertical-align: middle;
  border: 0;
}
html {
  font-size: 16px;
}
body {
  font-family: "Pretendard-Regular", sans-serif;
  font-size: 1rem;
  line-height: 1.25;
  letter-spacing: -0.23px;
  word-break: keep-all;
  color: #000000;
}
```

## 1.3 React 개발 편의 도구 설치

- React 크롬 개발 도구 [DevTools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)
- VSCode React Plugin (ES7+ React/Redux/React-Native snippets ) 설치

## 1.4 normalize.css 설정(css초기화)

- `yarn add normalize.css`
- src/index.js 에서 index.css 위에 import

## 1.5 scss, emotion.js 설치

- `yarn add sass`
- `yarn add @emotion/react`
- `yarn add @emotion/styled`

## 1.6 ESLint, prettier 설정

- .prettierrc.json

```json
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

- ESLint 설정

  - `yarn add eslint --dev`
  - `npx eslint --init`
  - `yarn eslint --init`
  - To check syntax and find problems 선택
  - JavaScript modules (import/export) 선택
  - React 선택
  - Does your project use TypeScript? No 선택
  - Where does your code run? Browser 선택
  - What format do you want your config file to be in? JavaScript 선택
  - Would you like to install them now? Yes 선택
  - Which package manager do you want to use? npm 선택

  - ESLint와 Prettier를 연결하여 ESLint 설정

    - `yarn add eslint-config-prettier --save-dev`
    - .eslintrc.js

  - 바벨에 의한 경고 제외
    - `yarn add @babel/plugin-proposal-private-property-in-object --dev`
    - `npm i @babel/plugin-proposal-private-property-in-object --dev`

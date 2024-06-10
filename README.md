# 💰 Monthly-Expenditure

## 🖥️프로젝트 소개

- 월별 지출 내역을 파악할 수 있는 개인 지출 관리 애플리케이션입니다.
- 필수 요구사항인 styled-components을 통한 조건부 스타일링 / react-router-dom 을 이용한 페이지 전환 / useState, useEffect, useRef 사용을 통해 상태관리에 대해 익힐 수 있습니다.

<br>

## 🕰️개발 기간

- 24.05.23 ~ 05.29

<br>

## 📌기능

- 지출 CRUD 구현 (작성, 조회, 수정, 삭제)
  - 지출내역 작성 / 삭제시 유효성 검사를 통해 사용자의 입력 오류를 사전에 방지할 수 있습니다
- 월별 지출 조회 기능 구현 (Home - Read)
  - 차트를 통해 지출내역을 입체적으로 파악할 수 있습니다.
- 월별 지출 항목 등록 구현 (Home - Create)
  - 특정 월을 선택하여 해당 월의 지출내역을 확인할 수 있습니다.
- 지출 상세 화면 구현 (Detail - Read)
- 상세화면에서 지출 항목 수정 구현 (Detail - Update)
- 상세화면에서 지출 항목 삭제 구현 (Detail - Delete)

<br>

## 🌵브랜치 구조

- props-drilling: useState 만으로 상태 관리를 위해 props를 하위 컴포넌트로 전달하는 방식을 사용했습니다.
- context: props-drilling으로 작업한 코드에서 react context API를 사용하여 전역상태를 이용한 코드로 리팩터링 했습니다.
- redux: Redux Toolkit을 사용하여 context api로 전역상태를 관리한 코드를 모두 redux 라이브러리를 이용한 코드로 리팩터링 했습니다.

<br>

## 🗂️ 폴더구조

- ### 📂Redux

```
📦
├─ .eslintrc.cjs
├─ .gitignore
├─ README.md
├─ index.html
├─ package.json
├─ public
│  └─ vite.svg
├─📂 src
│  ├─ App.jsx
│  ├─📂 assets
│  │  ├─📜 icon.png
│  │  └─ react.svg
│  ├─📂 components
│  │  ├─📜 GlobalStyles.jsx
│  │  ├─📜 Header.jsx
│  │  ├─📜 InputForm.jsx
│  │  ├─📜 List.jsx
│  │  ├─📜 MonthButton.jsx
│  │  └─📜 PieChart.jsx
│  ├─ dummyData.json
│  ├─📜 main.jsx
│  ├─📂 pages
│  │  ├─📜 Detail.jsx
│  │  └─📜 Home.jsx
│  ├─📂 redux
│  │  ├─📂 config
│  │  │  └─📜 configStore.js
│  │  └─📂 slices
│  │     └─📜 DataSlice.js
│  └─📂 shared
│     └─📜 Router.jsx
├─ vite.config.js
└─ yarn.lock
```

- ### 📂Context

```
📦
├─ .eslintrc.cjs
├─ .gitignore
├─ README.md
├─ index.html
├─ package.json
├─ public
│  └─ vite.svg
├─📂 src
│  ├─📜 App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─📂 components
│  │  ├─📜 GlobalStyles.jsx
│  │  ├─📜 InputForm.jsx
│  │  ├─📜 List.jsx
│  │  └─📜 MonthButton.jsx
│  ├─📂 context
│  │  └─📜 DataContext.jsx
│  ├─ main.jsx
│  ├─📂 pages
│  │  ├─📜 Detail.jsx
│  │  └─📜 Home.jsx
│  └─📂 shared
│     └─📜 Router.jsx
├─ vite.config.js
└─ yarn.lock
```

- ### 📂Props-drilling

```
📦
├─ .eslintrc.cjs
├─ .gitignore
├─ README.md
├─ index.html
├─ package.json
├─ public
│  └─ vite.svg
├─📂 src
│  ├─📜 App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─📂 components
│  │  ├─📜 GlobalStyles.jsx
│  │  ├─📜 InputForm.jsx
│  │  ├─📜 List.jsx
│  │  └─📜 MonthButton.jsx
│  ├─📜 main.jsx
│  ├─📂 pages
│  │  ├─📜 Detail.jsx
│  │  └─📜 Home.jsx
│  └─📂 shared
│     └─📜 Router.jsx
├─ vite.config.js
└─ yarn.lock
```

<br>

## 🗄️파일설명

## Redux 브랜치를 기준으로 작성하였습니다.

- GlobalStyles.jsx : Styled Components 라이브러리를 사용하여 전역 스타일링을 구현하는 컴포넌트입니다.
- Header.jsx : 프로젝트의 타이틀과 메인 아이콘을 담은 헤더 컴포넌트입니다. 각 페이지의 타이틀을 보여줍니다.
- InputForm.jsx : 날짜, 카테고리, 금액, 내용에 대해 입력해서 지출내역을 생성하는 컴포넌트입니다.
- List.jsx : 작성된 지출내역을 리스트 형태로 보여주는 컴포넌트입니다.
- MonthButton.jsx : 월별 버튼 컴포넌트를 구현한 것입니다. 사용자가 버튼을 클릭하면 Redux 상태의 activeIndex 값이 변경되어 선택된 월을 표시합니다.
- PieChart.jsx : 지출내역에 대해 시각적인 효과를 줄 수 있도록 사용한 pie chart 입니다.
- Router.jsx : id 값을 기준으로 home -> detail 페이지로 이동할 수 있도록 클라이언트 사이드 라우팅을 구현했습니다.
- Home.jsx : 헤더, 입력 폼, 월별 버튼, 파이 차트, 목록 등의 전체적인 UI 요소를 포함하고 있습니다.
- Detail.jsx : 수정/삭제 기능을 구현한 지출 상세 페이지입니다.
- configstore.js : Redux Toolkit을 사용하여 Redux 스토어를 구성하는 파일로, DataSlice 리듀서를 스토어에 등록하고 있습니다.
- DataSlice.js : 전역적으로 사용하고 있는 데이터 관리를 위한 setActiveIndex, setData, modifyData, deleteData 리듀서를 구성하고있습니다.
- dummyData.json : 초기값 설정을 위한 fakedata 입니다.
- App.jsx : Redux 스토어와 글로벌 스타일을 제공하고 React Router를 사용하여 라우팅을 구현합니다.

# next.js를 이용한 포트폴리오 사이트 만들기

## Next.js란?

[Next.js](https://nextjs.org/)는 React 기반의 웹 프레임워크로, 빠른 페이지 로딩과 검색 엔진 최적화를 강조합니다. 서버 사이드 렌더링을 지원하여 초기 로딩 성능을 향상시키며, 정적 파일 생성 기능으로 캐싱을 최적화합니다. Hot Module Replacement을 통해 개발 과정을 더욱 효율적으로 만들며, API 라우팅과 같은 기능을 내장하여 전체적인 웹 애플리케이션의 구축을 쉽게 할 수 있습니다. 코드 분할과 자동 최적화 기능은 개발자에게 효과적인 성능 관리 도구를 제공합니다.

## SSR과 CSR의 특징 및 차이

### SSR (Server-Side Rendering):

1. 서버에서 초기 HTML을 생성하여 클라이언트에게 전송합니다.
2. 초기 로딩 시에 화면이 바로 보이며, 검색 엔진 최적화(SEO)에 유리합니다.
3. 서버에서 페이지를 렌더링하므로 초기 로딩 속도는 빠릅니다.
4. 단점으로는 페이지 이동 시에 새로운 HTML을 서버에서 받아와야 하기 때문에 네트워크 비용이 증가할 수 있습니다.

### CSR (Client-Side Rendering):

1. 초기에 빈 HTML을 받고, 이후 JavaScript를 사용하여 클라이언트에서 동적으로 컨텐츠를 렌더링합니다.
2. 초기 로딩 시에는 빈 페이지가 보이며, 페이지가 로드된 후에 동적으로 데이터를 받아와 렌더링합니다.
3. 사용자 경험이 향상되고, 페이지 간 전환이 부드럽습니다.
4. 검색 엔진 최적화가 어려울 수 있으며, 초기 로딩 속도가 SSR에 비해 느릴 수 있습니다.

### 차이점

1. SSR은 서버에서 초기 렌더링을 하고 HTML을 전송하는 방식으로 초기 로딩이 빠르고 SEO에 강점이 있습니다.
2. CSR은 초기에 빈 페이지를 받고 클라이언트에서 JavaScript를 사용하여 동적으로 렌더링하며, 사용자 경험이 향상되지만 SEO에는 취약합니다.

## 기본 셋팅

🥨 터미널에서 next.js 다운로드 `npx create-next-app@latest`

🥨 셋팅  
√ What is your project named? ... `.` //점을 사용해 네임 생략
√ Would you like to use TypeScript? ... `No` / Yes  
√ Would you like to use ESLint? ... No / `Yes`  
√ Would you like to use Tailwind CSS? ... `No` / Yes  
√ Would you like to use `src/` directory? ... No / `Yes`  
√ Would you like to use App Router? (recommended) ... No / `Yes`  
√ Would you like to customize the default import alias (@/_)? ... No / `Yes`  
√ What import alias would you like configured? ... `@`/_

🥨 실행 `npm run dev`

## 추가 설치

### 1. GSAP

gsap 설치 : `npm install gsap`

GSAP (GreenSock Animation Platform)은 JavaScript로 웹 애니메이션을 개발하기 위한 강력한 라이브러리로, 웹 요소의 위치, 크기, 스타일 및 다른 속성을 부드럽게 조절하고, 시간에 따라 다양한 애니메이션 효과를 쉽게 구현할 수 있습니다. GSAP는 애니메이션의 시작, 일시 정지, 재생, 역방향 재생과 같은 시간 제어를 제공하며, 이질적인 타이밍과 속도 조절이 가능합니다. 또한 다양한 속성 유형을 다루며 플러그인을 지원하여 더 다양한 애니메이션 효과를 추가할 수 있습니다. GSAP는 웹 개발자들 사이에서 인기가 높으며 웹 애니메이션을 효과적으로 구현하고 관리하는데 도움을 줍니다.

### 2. sass

sass 설치 : `npm install sass`

Sass는 Syntactically Awesome Stylesheets의 약자로, CSS의 확장 언어로 사용됩니다. 이 스타일 시트 언어는 CSS보다 강력하며 유지 보수가 쉽도록 도와줍니다. Sass는 변수, 중첩 규칙, 믹스인 및 함수와 같은 고급 스타일링 기능을 제공하여 코드 재사용성을 높이고 가독성을 향상시킵니다. 또한, Sass 파일은 .sass 또는 .scss 확장자로 저장되며, 컴파일러를 사용하여 일반 CSS로 변환할 수 있습니다. 이러한 기능은 웹 개발자에게 더 효율적이고 유연한 스타일링 옵션을 제공합니다.

### 3. lenis

lenis 설치 `npm i @studio-freight/lenis`

lenis.js란 javascript로 작성 된 오픈소스 웹 프레임 워크입니다.
웹페이지에서 부드러운 스크롤을 가능하게하는 라이브러리입니다. 경량(~3KB), 빠른 스크롤을 지원하며 다른 애니메이션 라이브러리들과도 잘 연동되는 장점이 있어 많은 주목을 받고있는 라이브러리입니다.

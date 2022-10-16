# TESTING

얼마 전 AB180의 과제테스트를 치뤘다.
테스트를 치면서 부족한 점들이 있었는데, 그 중에 하나가 **테스트**였다.
테스트를 잘 알지 못해 구현부터 했는데, 구현완료 후 테스트 코드를 짜려고 하니 거의 진행되지 않았다.
테스트 코드에 대한 수요가 늘어나고 채용 요건에도 하나둘씩 보이기 때문에 이번 기회에 공부해보겠다.

## 학습 목표

- 24시간 내에 개념 숙지 및 실습

## 학습 방법

- **드림코딩** 테스트 강의 시청 위주
- [JEST](https://jestjs.io/) 공식문서 개념 및 API 사용법 확인

---

### 개념

- **테스트란?**

  - 테스트 코드를 통해 **원하는(expect)대로** 동작하는 지 확인하는 것

- **When?**

  - 개발과 **동시에** 테스트가 이뤄짐

- **Strong Point**

  - 유지보수 및 리팩토링 쉬움
  - **코드 간 의존성 낮춤**
  - 문서화

- **Test Pyramid**

  - **Unit Test** : 함수, 모듈, 클래스 등 딱 **하나**의 단위 테스트
  - **Integration Test** : 단위들을 모아놨을 때 **상호작용** 잘하는 지 테스트
  - **E2E Test** : 사용자 테스트, 사용자의 애플리케이션 사용 플로우에 따라 테스트

- **TDD**
  - **개발 전 테스트 코드를 먼저 작성**
  - **TDD(테스트 범위에 맞게 코드를 쓰고 실패, 성공 확인하는 것을 반복하면 하나의 기능을 만든다) -> Refactoring(코드를 조금씩 수정)**
  - **사용자 배포 또는 코드 리뷰 전에 테스트 코드를 꼭 작성** 그리고 이를 통해 좋은 **문서화**에 도움이 된다.

---

### [JEST](https://jestjs.io/)

- **Install**

  ```
  npm i jest --global

  # Add dev dependency
  npm i --save-dev jest

  # types of jest API
  npm i @types/jest
  ```

- **Init**

  ```
  jest --init
  ```

- **Setting**

  #### 자동 테스트

  `package.json - scripts`에서 `jest --watchAll`로 수정하고,
  터미널에 `npm run test` 입력하면 파일 저장될 때 마다 **전체 테스트 코드 실행**

  #### 최근 커밋 이력 기점으로 이후 수정된 코드만 자동테스트

  `jest --watch`만 하면 된다.

- **Error Test**
  - 에러가 날 경우까지 고려하여 테스트 코드를 짜야 커버리지가 완전해진다. 
  ```
  it('method...', () => {
    expect(()=>{
      ... ...
    }).toThrow(error message);
  })
  ```
  
  - **Asynchronous Test**
  -

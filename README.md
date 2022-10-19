# TESTING

얼마 전 AB180의 과제테스트를 치뤘다.
테스트를 치면서 부족한 점들이 있었는데, 그 중에 하나가 **테스트**였다.
테스트를 잘 알지 못해 구현부터 했는데, 구현완료 후 테스트 코드를 짜려고 하니 거의 진행되지 않았다.
테스트 코드에 대한 수요가 늘어나고 채용 요건에도 하나둘씩 보이기 때문에 이번 기회에 공부해보겠다.

## 학습 목표

- 24시간 내에 개념 숙지 및 실습

## 학습 방법

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
  - [비동기 테스트 코드](https://github.com/sehnara/test-javascript/blob/master/src/test/async.test.js) 참고

- **Mock vs Stub**

- **Principle Of The Good Testing**
  - 한 번 작성한 테스트 코드는 영원히 **유지보수**해야한다. 
  - 내부 구현 사항은 테스트 X, **인터페이스**를 통해 테스트 O
  - **재사용성** 높이기 => 테스트용 클래스 등을 새로 만들 수도 있다.
  - **배포용** 코드와 분리
  - 문서화

- **Testing Structure**
  1. **Before**
      - beforeEach, beforeAll
  2. **Test**
      - Arrange, Given : 준비 단계, 재사용성 고려
      - Act, When : 의도적으로 틀려라!
      - Assert, Then 
  3. **After**
      - afterEach, afterAll

- **Testing Principle**
> Test Priciple 1 : FIRST

  - **F : Fast**
      : 테스트를 느리게 만드는 의존성 낮추기(네트워크, 파일, DB)
  - **I : Isolated**
      : 독립적으로 테스트 관리
  - **R : Repeatable**
      : 반복해도 결과값이 같도록
  - **S : Self-Validating**
      : 테스트 하나에 평가까지
  - **T : Timely**
      : 배포나 코드 리뷰 전에 테스트 코드 짜기

> Test Principle 2 : Right-BICEP(테스트 범위)

    : **무엇을 테스트 해야하는가**에 대한 원칙

  - **B : Boundary Conditions**
      : 모든 케이스를 염두해야한다.**(틀린 인풋, null, 특수문자, 틀린 이메일, 작은 숫자, 큰 숫자, 중복, 틀린 순서)**
      
  - **I : Inverse Relationship**
      : 역관계를 적용하여 결과값이 **일관적**인지 확인(덧셈 -> 뺄셈, 추가 -> 제거)

  - **C : Cross Check**
      : 여러 수단(다른 알고리즘, 라이브러리) 등을 이용해 체크

  - **E : Error Conditions**
      : 불행한 경로**(네트워크 에러, 메모리 부족, 데이터베이스 중지)**에 대해 우아하게 체크하는가?

  - **P : Performance Characteristic**
      : 성능 확인 테스트를 통해 정확한 수치로 확인


> Test Principle 3 : CORRECT(테스트 조건)
  
  - **C : Conformance**
      : 특정 포맷 준수**(전화번호, 이메일, 아이디, 파일 확장자...)**
      
  - **O : Ordering**
      : 순서 조건 확인(순서가 중요한 경우)

  - **R : Range**
      : 범위가 벗어났을 때 테스트 코드 작성

  - **R : Reference**
      : 외부 의존성 유무, 특정한 조건의 유무
      (A함수 발동 후, B함수 발동을 해야한다면, 그렇게 되지 않았을 때와 그렇게 됐을 때 모두 테스트를 짜야한다)

  - **E : Existence**
      : 값이 존재하는 지(null, undefined, '', 0)
  
  - **C : Cardinality**
      : **0-1-N** 법칙에 따라 검증
      (하나도 없을 때, 하나만 있을 때, 여러 개 있을 때)

  - **T : Time**
      : 상대, 절대, 동시의 일들에 대해
      (순서가 맞지 않을 때, 지나간 시간, 지역 시간...)
  
---
### React Component Test

- **Library** 
  - [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
    : 내부구현 사항을 감추고 사용자 입장(인터페이스처럼)에서 테스팅하도록 하겠다는 철학을 가짐
    : **CRA**로 설치했으면 자동 설치, CRA로 안했으면 공식 문서 들어가서 설치

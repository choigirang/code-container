## <h2 align="center">꺼내쓰는 코드 </h2>

<h5 align="center">개발기간: 2023.09 ~ 2023.10</h5>


- **프로젝트 명 :** `Code-Container`
- **프로젝트 소개 :** 개발 중 자주 사용되는 코드들을 모아놓기 위해 만들어보았습니다.
<!-- - **배포 링크 :** <a href='https://sidequest.co.kr' target='_blank'>Why-Community</a> -->

<br>

## Code-Container

- `Toast Editor`로 코드 하이라이터를 작성하고, 작성된 카테고리에 따라 분류하여, 코드를 쉽게 재사용할 수 있도록 만들어보았습니다.

<br>

## 기술 목록

## FrontEnd

|                                                                                    TypeScript                                                                                     |                                                                               React<br>context                                                                                |                                                                                    React-Query                                                                                    |                                                                                   styled<br>components                                                                                   |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/react/#61DAFB" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/reactquery/FF4154" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/styledcomponents/#61DAFB" alt="icon" width="75" height="75" /></div> |

<br />

## BackEnd

|                                                                                    TypeScript                                                                                     |                                                                                     Express                                                                                     |                                                                                     MongoDB                                                                                     |                                                                                        EC2                                                                                        |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/express/#E0234E" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/mongodb/#000000" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/amazonec2/#FF9900" alt="icon" width="75" height="75" /></div> |

<br />
## npm
```js
// frontend
cd front
npm install
npm run start

// backend
cd back
npm install
nodemon src/app.ts
```

## 페이지

### 메인페이지

- 게시글 카테고리 분류
- 코드 하이라이터 개당 복사 기능
- 내용 및 타이틀 검색

![20231204_210025](https://github.com/choigirang/code-container/assets/118104644/f6692d12-7a91-4eae-8e04-2beeee20c1db)
![20231205_235307](https://github.com/choigirang/code-container/assets/118104644/44c65d9b-a751-48a6-bc71-04683f0074b0)

<br>

### 게시글 작성

- 비밀번호 입력을 통한 게시글 작성
- 코드 하이라이터를 사용한 작성 페이지

![20231204_215115](https://github.com/choigirang/code-container/assets/118104644/d240a6d6-a775-4c2f-a552-404170256de5)

<br>

### 게시글 수정

![20231205_234932](https://github.com/choigirang/code-container/assets/118104644/1946a94b-a702-4a16-8886-831b4bf6e2f6)

## Git Commit & PR Message

| 태그이름 | 설명                                                  |
| -------- | ----------------------------------------------------- |
| feat     | 새로운 기능 추가                                      |
| chore    | 자잘한 변경                                           |
| update   | 수정 추가                                             |
| fix      | git과 관련된 버그 수정                                |
| design   | CSS 등 UI 수정                                        |
| style    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| refactor | 코드 리팩토링                                         |
| docs     | 문서 수정 (MD 파일)                                   |
| test     | 테스트 코드를 생성하거나 수정 하는 경우               |

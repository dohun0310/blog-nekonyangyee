---
teaser: /Cookie-and-Seesion/cookie-Thumbnail.png
category: 💻 개발 일기
title: 쿠키와 세션 개념과 차이
date: 2023-09-09T00:00:00+00:00
time: 11:07
description: 쿠키와 세션 개념과 차이에 대한 내용입니다.
---

# 먼저 들어가기전에!

## HTTP의 특징과 쿠키와 세션을 사용하는 이유?

---

### ConnectionLess

- `클라이언트`가 요청을 한 후 응답을 받으면 그 연결을 끊어 버리는 특징이 있습니다.

  - `클라이언트`란?: 쉽게 말해 네트워크가 연결되어있는 서버로부터 제공받는 컴퓨터입니다.

- HTTP는 먼저 클라이언트가 Request를 서버에 보내면, 서버는 클라이언트에게 요청에 맞는 Response를 보내고 접속을 끊는 특성이 있습니다.

### Stateless

- 통신이 끝나면 상태를 유지하지 않는 특징이 있습니다.

- 연결을 끊는 순간 클라이언트와 서버의 통신이 끝나며 상태 정보는 유지하지 않는 특성이 있습니다.

## 🫓쿠키 (Cookie)

---

- 클라이언트 로컬에 저장되는 키와 값이 들어있는 작은 데이터 파일입니다.

- 사용자 인증이 유효한 시간을 명시 가능, 유효시간이 정해지면 브라우저가 종료되도 인증이 유지됩니다.

- 클라이언트에 최대 300개 쿠키저장 가능, 하나의 도메인당 20개의 값만 가질 수 있고, 하나의 쿠키값은 4KB까지 저장이 가능합니다.

- 쿠키는 사용자가 따로 요청하지 않아도 브라우저가 Request실에 Request Header를 넣어서 자동으로 서버에 전송합니다.

### 쿠키 구성요소

- **이름**: 각각의 쿠키를 구별하는데 사용되는 이름입니다.

- **값**: 쿠키의 이름과 관련된 값입니다.

- **유효시간**: 쿠키의 유지시간입니다.

- **도메인**: 쿠키를 전송할 도메인입니다.

### 쿠키의 동작 방식

1. 클라이언트가 페이지를 요청합니다.

2. 서버에서 쿠키를 생성합니다.

3. HTTP 헤더에 쿠키를 포함 시켜 응답합니다.

4. 브라우저가 종료되어도 쿠키 만료 기간이 있다면 클라이언트 측에서 보관하고 있습니다.

5. 같은 요청을 할 경우 HTTP 헤더에 쿠키를 함께 보냅니다.

6. 서버에서 쿠키를 읽어 이전 상태 정보를 변경 할 필요가 있을 때 쿠키를 업데이트 하여 변경된 쿠키를 HTTP 헤더에 포함시켜 응답합니다.

> **🧷 여기서 팁!** : 이부분이 잘 이해가 안가시면 아래와 같이 단어들을 바꿔서 특정부분만 읽보면 더 이해하기 쉬울거에요!!

---

- **클라이언트**: 주문한 고객님

- **서버**: 음식점

- **쿠키**: 음식

- **HTTP 헤더**: 배달 오토바이

---

## 🔓세션 (Session)

---

- 쿠키를 기반으로 하지만, 사용자 정보 파일을 브라우저에 저장하는 쿠키와 달리 세션은 **_서버측에서 관리합니다._**

- 서버에서는 클라이언트를 구분하기 위해 세션ID를 부여하며 웹 브라우저가 서버에 접속해서 브라우저를 종료할때까지 인증상태를 유지합니다.

- 접속 시간에 제한을 두어 일정 시간 응답이 없으면 정보가 유지되지 않게 설정 가능합니다.

- 사용자 정보를 서버에 담는 방식이기 때문에 쿠키보다 보안은 좋지만, 사용자가 많아질 경우 서버 메모리를 많이 차치하게 됩니다.

## 🫓쿠키와 🔓세션 차이

---

- 사용자 정보를 어디에 저장 하느냐 차이 ⇒ 쿠키는 서버 자원을 사용안하고, 세션은 서버자원을 사용한다.

- 보안면에서 세션이 더 우수하고, 쿠키는 요청속도가 빠르다.

- 쿠키는 만료시간이 있지만 파일로 저장되는 형식이기에 브라우저를 종료해도 계속 정보가 남아있다.

- 반면 세션도 만료 시간은 정할 수 있지만 브라우저가 종료되면 만료 시간 상관없이 삭제된다.

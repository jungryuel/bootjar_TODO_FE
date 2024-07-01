# devops 프로젝트

# U and ME Todo chapter

### 프로젝트 진행 기간

2024-06-07 ~ 2024-06-30 ****총 23일간 진행

### 기획 의도

이번 프로젝트는 Todo Mate라는 어플리케이션의 개인화된 일정 관리와 지인과의 일정 공유에 감명을 받아 오마주 해서 진행 했습니다.

### **협업 관리**

저희는 이번에 여러 시트를 한 파일로 관리하기에 용이하고 생각해 Google Style Sheet를 통해 진행 했습니다 

<img=src "![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4b7e0894-1b5c-4ece-b84c-1f981d8b0958/83986184-fa74-49e2-a0d1-930144656335/Untitled.png)">

**WBS**: https://docs.google.com/spreadsheets/d/1CCqvga7DqJ_iyfcbldKJ72Xd_osNgHZfpzMe6PtB6O4/edit?usp=sharing

### 디자인

[https://www.figma.com/design/KCd6x4OcEOx8VukktGiD2G/TODO?node-id=0-1&t=zabqcOsSOrY4XWXX-1](https://www.figma.com/design/KCd6x4OcEOx8VukktGiD2G/TODO?node-id=0-1&t=zabqcOsSOrY4XWXX-1)

![Untitled](devops%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%2073db94d6fa87409da1321ce143043f32/Untitled%201.png)

### ERD

![Untitled](devops%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%2073db94d6fa87409da1321ce143043f32/Untitled%202.png)

이번 프로젝트는 MSA를 도입하게 되었고 그에 따라 위와 같이 테이블 분리를 통해 관리에 용이한 데이터 구조를 설계하게 되었습니다.

### 아키텍처 설계

![Untitled](devops%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%2073db94d6fa87409da1321ce143043f32/Untitled%203.png)

### 사용 기술

**BE**

Java 17

Spring boot 3.3.0

Spring Security

Spring Boot Actuator

Spring Boot  Mockito

Junit

Gradle 8 .8

MySQL 8.0

redis stack server 7.2.0

Nest.js 10.3.2

TypeScript: 5.4.3

Spring RestTemplate

**FE**

axios  1.7.2

react  18.2.0

JavaScript 20.11.1

**Cloud**

Google Cloud  Platform(computing Engine ,Storage)

Debian

Docker 26.1.4

k8s 1.30.1

Nginx 1.27.0

Jenkins 2.462

### 트러블 슈팅

**김정렬 트러블 슈팅** : [https://eastern-orchid-c48.notion.site/7165189d195640d296b3cc27e4cef3f6?pvs=4](https://www.notion.so/7165189d195640d296b3cc27e4cef3f6?pvs=21)

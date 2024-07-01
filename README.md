# U and ME TodoList

### 프로젝트 진행 기간

2024-06-07 ~ 2024-06-30 총 23일간 진행

### 기획 의도

이번 프로젝트는 Todo Mate라는 어플리케이션의 개인화된 일정 관리와 지인과의 일정 공유에 감명을 받아 오마주 해서 진행 했습니다.

### **협업 관리**

저희는 이번에 여러 시트를 한 파일로 관리하기에 용이하고 생각해 Google Style Sheet를 통해 진행 했습니다 

![Untitled (11)](https://github.com/encore-full-stack-5/bootjar_TODO_FE/assets/90687921/08ebcff6-1b1d-43ab-9194-db2f5aeb0705)

**WBS**: https://docs.google.com/spreadsheets/d/1CCqvga7DqJ_iyfcbldKJ72Xd_osNgHZfpzMe6PtB6O4/edit?usp=sharing

### 디자인

[https://www.figma.com/design/KCd6x4OcEOx8VukktGiD2G/TODO?node-id=0-1&t=zabqcOsSOrY4XWXX-1](https://www.figma.com/design/KCd6x4OcEOx8VukktGiD2G/TODO?node-id=0-1&t=zabqcOsSOrY4XWXX-1)

![Untitled (12)](https://github.com/encore-full-stack-5/bootjar_TODO_FE/assets/90687921/de776345-61b0-408b-94e3-15dd3d2acf59)
### ERD

![Untitled (15)](https://github.com/encore-full-stack-5/bootjar_TODO_FE/assets/90687921/70f3575f-ddd5-48ae-bc56-4c8cbf601b7a)

이번 프로젝트는 MSA를 도입하게 되었고 그에 따라 위와 같이 테이블 분리를 통해 관리에 용이한 데이터 구조를 설계하게 되었습니다.

### 아키텍처 설계

![Untitled (14)](https://github.com/encore-full-stack-5/bootjar_TODO_FE/assets/90687921/9784fee0-9f0f-4277-a6a9-8f44f447a1d5)
### 사용 기술

**백엔드 (BE)**
1. 프로그래밍 언어 및 프레임워크

Java 17

Spring boot 3.3.0

Spring Security

Spring Boot Actuator

Spring RestTemplate

Spring Webflux

Spring data R2DBC

Nest.js 10.3.2

TypeScript: 5.4.3

2.테스트

Spring Boot  Mockito

Junit

3. 빌드 및 의존성 관리
Gradle 8 .8

4. 데이터베이스/ 캐싱

MySQL 8.0

redis stack server 7.2.0

**프론트 엔드 (FE)**
1. 프로그래밍 언어 및 프레임워크

react  18.2.0

JavaScript 20.11.1

2. 라이브러리
   
axios  1.7.2

**클라우드**
1. 서비스
Google Cloud  Platform(computing Engine ,Storage)

2.운영체제(OS)
Debian

3. 컨테이너 및 오케스트레이션
Docker 26.1.4

k8s 1.30.1

4. 웹 서버

Nginx 1.27.0

5.CI/CD

Jenkins 2.462

### 트러블 슈팅

**김정렬 트러블 슈팅** : [https://eastern-orchid-c48.notion.site/7165189d195640d296b3cc27e4cef3f6?pvs=4](https://www.notion.so/7165189d195640d296b3cc27e4cef3f6?pvs=21)

**정희석 트러블 슈팅** : https://whispering-foxtail-e30.notion.site/BootJar-654cea701c564d68a712f662bac6eac8?pvs=4

**김부자 트러블 슈팅** : https://marshy-mall-9f3.notion.site/98142a17f9cf42ab9543b8afe5af0426?pvs=4


### 느낀 점
김정렬: 이번 프로젝트를 통해서 서버 배포에 대한 크고 작은 트러블들을 거치며 서버 측에서 나오는 에러를 잡는 여러가지 방법들을 습득하게 되었고 이번에 서비스들끼리 API 통신을 RestTemplate을 사용했는데 서비스 연결은 잘 됐으나 API 통신이 원인인지는 몰라도 Controller에서 제대로 받지 못한다면 예상했던 결과에 맞지 않는 다른 에러를 배출했다 또한 코드의 양도 약 1.5배 ~ 2배정도 증가했기 때문에 다음 프로젝트에서는 Kafka를 적용해서 이벤트가 발생했을 때 데이터를 보내는 방법을 사용해 이번 프로젝트에서 느꼈던 단점을 해소했으면 좋겠다

박미람: Auth에서 security(jwt)를 하면서  security에 대해 잘 이해할 수 있게 되었고, 비밀번호 찾기 기능에서 했던 MailSender와 QR Code를 하면서 프론트와 백 사이 로직 흐름에 대해 생각할 수 있었다.
Comment에서는 webFlux와 r2dbc, cqrs를 처음 써봐서 많이 미숙하지만  사용하면서 조금은 이해를 할 수 있었다. jpa를 하다가 r2dbc를 하니 DB 테이블을 만들어 줘야 할 때 불편함을 느꼈다.
이번 프로젝트의 중심이었던 배포, CI/CD를 하면서 많은 공부를 했다. helm의 upgrade와 kubectl의 rollout restart를 어떤 상황에 써야 하는지 잘 몰랐지만 이번 프로젝트를 알게 되었다. jenkins에서도 ssh 키를 어떤 상황에 써야 하는지, pipeline을 어떤 흐름으로 작성해야 하는 지에 대해 알 수 있었던 프로젝트였다.

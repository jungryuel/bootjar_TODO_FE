# U and I TodoList

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

![bootjar](https://github.com/encore-full-stack-5/bootjar_TODO_FE/assets/90687921/f84e0bc2-2814-4c37-9c1c-4465a59b1e84)

### 사용 기술

**백엔드 (BE)**
1. 프로그래밍 언어 및 프레임워크

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
<br/>
* Nest.js 10.3.2<br/>
* TypeScript: 5.4.3<br/>
* Java 17<br/>
* Spring boot 3.3.0<br/>
* Spring Security<br/>
* Spring Boot Actuator<br/>
* Spring RestTemplate<br/>
* Spring Webflux<br/>
* Spring data R2DBC<br/>

<br/>

2. 테스트

* Spring Boot Mockito<br/>
* Junit

<br/>

3. 빌드 및 의존성 관리

![Gradle](https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white)
<br/>

**데이터베이스/ 캐싱**
<br/>
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)

<br/>

**프론트 엔드 (FE)**
1. 프로그래밍 언어 및 프레임워크

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

<br/>

2. 라이브러리
<br/>axios  1.7.2


<br/>

**디자인**

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)


<br/>

**클라우드**

![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)

Google Cloud Storage

<br/>

**운영체제(OS)**

![Debian](https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white)

<br/>

**컨테이너 및 오케스트레이션**

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)

<br/>

**웹 서버**

![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

<br/>

**CI/CD**

![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white)

<br/>

### 트러블 슈팅

**김정렬 트러블 슈팅** : [https://eastern-orchid-c48.notion.site/7165189d195640d296b3cc27e4cef3f6?pvs=4](https://www.notion.so/7165189d195640d296b3cc27e4cef3f6?pvs=21)

**정희석 트러블 슈팅** : https://whispering-foxtail-e30.notion.site/BootJar-654cea701c564d68a712f662bac6eac8?pvs=4

**김부자 트러블 슈팅** : https://marshy-mall-9f3.notion.site/98142a17f9cf42ab9543b8afe5af0426?pvs=4

**박미람 트러블 슈팅** : https://marshy-mall-9f3.notion.site/b3ec8e69529a477ebeeab4ae66ebd52c?pvs=4


### 느낀 점
**김정렬**

이번 프로젝트를 통해서 서버 배포에 대한 크고 작은 트러블들을 거치며 서버 측에서 나오는 에러를 잡는 여러가지 방법들을 습득하게 되었고 이번에 서비스들끼리 API 통신을 RestTemplate을 사용했는데 서비스 연결은 잘 됐으나 API 통신이 원인인지는 몰라도 Controller에서 제대로 받지 못한다면 예상했던 결과에 맞지 않는 다른 에러를 배출했다 또한 코드의 양도 약 1.5배 ~ 2배정도 증가했기 때문에 다음 프로젝트에서는 Kafka를 적용해서 이벤트가 발생했을 때 데이터를 보내는 방법을 사용해 이번 프로젝트에서 느꼈던 단점을 해소했으면 좋겠다

**박미람**

Auth에서 security(jwt)를 하면서  security에 대해 잘 이해할 수 있게 되었고, 비밀번호 찾기 기능에서 했던 MailSender와 QR Code를 하면서 프론트와 백 사이 로직 흐름에 대해 생각할 수 있었다.
Comment에서는 webFlux와 r2dbc, cqrs를 처음 써봐서 많이 미숙하지만  사용하면서 조금은 이해를 할 수 있었다. jpa를 하다가 r2dbc를 하니 DB 테이블을 만들어 줘야 할 때 불편함을 느꼈다. 또 RestTemplate을 통해 msa된 서비스 사이에서 DB 데이터를 동기화 하는 흐름에 대해 공부할 수 있었다.
이번 프로젝트의 중심이었던 배포, CI/CD를 하면서 많은 공부를 했다. helm의 upgrade와 kubectl의 rollout restart를 어떤 상황에 써야 하는지 잘 몰랐지만 이번 프로젝트를 알게 되었다. jenkins에서도 ssh 키를 어떤 상황에 써야 하는지, pipeline을 어떤 흐름으로 작성해야 하는 지에 대해 알 수 있었던 프로젝트였다. 

**김부자**

이번 프로젝트를 하면서 처음 배운 웹플럭스를 사용해 프로젝트에 참여하게 되어 의미있었다. 웹플럭스와 R2DBC를 사용하며  MSA에 유리한 반응형(비동기식) 프로그래밍을 이해하고 JDBC와 R2DBC의 트랜잭션 관리법의 차이를 알 수 있었다. 특히 R2DBC아쉬운 점이 있다면, 다른 팀원은 CQRS, REDIS, QR생성 등 특별한 기능을 사용한 반면 친구 서비스는 별 다른 기능을 사용하지 않았다. 그 덕분에 코드, 예외처리나 테스트를 조금 더 꼼꼼히 정리할 수 있어 좋았지만 아쉬움이 남는다. 배포부터 CI/CD까지 전부 적용해서 프로젝트를 완성시켜서 너무 뿌듯하다. 개인적으로 배포는 이제 적응했지만 CI/CD 부분이 어려워서 다른 팀원들에게 도움을 많이 받았는데 최종 프로젝트는 이번 경험을 살려 스스로 pipeline도 작성해 볼 수 있음 좋겠다.

**정희석**

프로젝트 기획중에 가장 고민했던 부분을 서버간의 DB 동기화를 어떻게 진행할지였는데 db 동기화를 제외한 작업들을 진행하고 남은 시간을 보고 어떤 방식을 선택할지를 정하기로 하였는데 다들 익숙하지 않은 언어로 프로젝트를 진행하다보니 에러에 시간을 많이 소요하였고 생각보다 진행기간이 길어져서 남은 시간적인 여유가 별로 없다보니 익숙한 RestTemplate로 동기화를 진행하였는데 결과를 보니 인스턴스에 문제가 생기거나해서 서버가 수신을 못하는 경우에는 동기화 작업중에 누락이 발생하고 서버가 복구되어도 누락된 동기화 작업이 실행이 안되는 문제가 발생했는데 Kafka의 필요성에 대해 크게 체감하게된 프로젝트였던 것 같다. 
좋았던 점은 Jenkins, Kubernetes, Docker를 잘 사용해서 배포와 CI/CD를 성공적으로 구축한 것 같아서 만족스럽고 구체적으로는 단순히 독스의 코드를 따라 치는 것이 아닌 어떤 코드인지 알고 치면서 시스템 아키텍쳐에 대한 이해도가 많이 올라갔다고 생각한다.

# RUSH 01 - 인디언 포커

| 조건명                | 조건              |
| :------------------ | ---------------- |
| 제출할 파일 이름 :      | 필요한 모든 파일들    |
| 사용 가능한 외부 모듈 :  | 필요한 모든 모듈들    |
| 참고사항 :            | 없음               |

인디언 포커는 트럼프 카드를 사용한 심리전 게임입니다. 이 게임을 온라인으로 플레이할 수 있는 서비스를 구현해야 됩니다.

---

## 인디언 포커 룰

아래 명시된 룰을 기준으로 구현해야합니다.

### 게임 준비
이 게임은 트럼프 카드를 사용합니다. 트럼프 카드에서 잭, 퀸, 킹, 조커를 제외한 숫자 카드 40장만 플레이에 사용합니다.

딜러 한 명과 플레이어 두 명이 카드와 칩으로 플레이합니다. 이 서브젝트에서는 서버가 딜러의 역할을 하게 되겠죠?

### 게임 시작
플레이어는 뒤집어진 카드를 한 장씩 받습니다. 

상대 플레이어가 카드를 볼 수 있게 받은 카드를 이마에 붙입니다. 자신의 카드 내용을 봐서는 절대 안 됩니다.

플레이어마다 기본으로 1개의 칩을 베팅하면서 시작합니다.

### 라운드
이제 본격적으로 게임 시작입니다. 

매 턴마다 베팅할 칩의 개수를 선택 할 수 있습니다. 각 베팅별로 이어지는 상황은 다음과 같습니다.

- **상대와 같은 개수 걸기**: 라운드가 종료되고 카드를 오픈합니다. 카드의 숫자가 높은 사람이 승리합니다. 
- **베팅하지 않고 포기하기**: 포기하게되면 무조건 상대 플레이어가 승리합니다.
- **상대보다 많은 개수 걸기**: 라운드를 계속 진행합니다.

칩은 최소 1개부터 베팅할 수 있습니다.

승리한 플레이어가 베팅된 칩을 모두 가져갑니다.

카드를 오픈 했을 때 같은 숫자가 나온다면 베팅된 칩을 유지한 채 다음 라운드를 진행합니다. (만약, 카드가 더이상 없다면 베팅된 칩은 서로 나눠갖게 됩니다.)

게임이 끝날 때까지 사용한 카드를 카드팩에 돌려놓거나 추가하지 않습니다.

### 게임 종료

라운드가 종료되었을 때 한 플레이어가 더 이상 칩을 가지고 있지 않거나 더 이상 나눠가질 카드가 없다면 게임은 끝이 납니다. 칩을 많이 가지고 있는 플레이어가 최종 승자가 됩니다.

> 💍 이 게임을 더 알아보고 싶다면 [여기](https://en.wikipedia.org/wiki/Blind_man's_bluff_(poker))를 참고하세요.

---

## 구현해야할 필수 기능

### 공통
- 사용자가 이동 가능한 모든 범위 내에서 오류를 핸들링 해야 한다.
  - 오류를 핸들링 한다는 것은 개발자가 오류가 나는 상황을 예측해 이를 사용자에게 알려주는 것도 포함된다.

### 유저
- OAuth 기능이 있는 외부 로그인 / 회원가입 절차를 지원한다.
  - 종류는 한 가지 이상이 있어야 하고, 기본 로그인 (이메일 / 비밀번호를 입력해 로그인 / 회원가입 하는 절차)는 필수로 구현하지 않아도 된다.
- 각각의 유저는 프로필 사진과 닉네임이 있어야 한다.
  - 로그인시 메인 페이지에서 위의 두 가지 정보를 표시해야 한다.
- OAuth를 통해 최초로 서비스에 로그인할 시 유저의 정보를 받는 화면이 있어야 한다.
  - 닉네임은 n글자 이상이어야 하며, 중복이 있어서는 안된다.
  - 유저가 회원가입시 프로필 사진을 지정하지 않으면 default-image로 프로필 사진이 지정되게 해야한다.

### 게임

#### 게임 시작
게임을 시작할 때 새로운 방을 만들거나 이미 있는 방을 참가할 수 있습니다.

##### 방 생성
- 새로운 방을 만드는 유저는 호스트가 되어 방을 생성할 때 게임 조건을 설정할 수 있습니다.
  - 호스트가 생성할 때 설정할 수 있는 게임 조건은 다음과 같습니다.
    - 턴 시간 (권장: 10초 ~ 30초 사이)
    - 한 플레이어의 칩 갯수 (권장: 30개 ~ 50개 사이)
- 호스트는 방이 생성된 이후 랜덤하게 주어진 네 개의 숫자로 지정된 방의 코드를 확인할 수 있습니다.

##### 방 참가
이미 있는 방에 참가한다면 코드를 입력한 뒤 참가합니다.

#### 게임 진행
- 게임의 정보는 모두 소켓 통신으로 처리해야 합니다.
- 게임이 시작되면 카드가 보여지는 섹션과 딜링 테이블 세션이 보여야 합니다.
- 게임 도중에 한명이 나가면 게임을 강제종료합니다.

> 💡 https://socket.io

##### 카드
- 카드가 보여지는 섹션에는 본인의 카드와 상대방의 카드가 보여야 합니다.
  - 이 때 본인의 카드는 뒷면으로 보여져야 하며, 상대방의 카드는 앞면으로 값이 보여져야 합니다.
  - 라운드 종료시 본인의 카드를 보여줘야 합니다.
  
##### 베팅
- 딜링 테이블 세션에는 플레이어가 칩을 베팅하는 모습을 보여줘야 합니다.
  - 현재 걸려있는 칩을 보여줘야 합니다.
  - 베팅을 할땐 얼만큼 베팅을 하고 있는지 보여줘야 합니다.
    - 칩 베팅할 때 1개씩 증가 / 감소해야 하며 이에 대해 바로 상대방이 화면을 통해 볼 수 있도록 전달해줘야 합니다.
  - 베팅 가능한 턴 시간을 같이 표시해 주어야 합니다.

---

## 보너스

> 🔥 필수 기능이 완벽한 경우에만 평가받을 수 있는 항목입니다.
- 모든 것은 `docker-compose up –build` 한 명령어로 실행 될 수 있다.
- 두 사람간 채팅을 할 수 있어야 합니다.
  - 채팅 외에도 시스템 메세지 / 게임 메세지가 채팅 목록에 같이 띄워져야 합니다.
    - 시스템 메세지 : 입장, 퇴장(강제종료)
    - 게임 메세지 : 라운드 시작, 베팅, 라운드 결과, 게임 결과
    - 채팅 / 시스템 메세지 / 게임 메세지는 서로 다른 색으로 표시해야 합니다.
- 3명 이상의 사람이 한 게임에 참여할 수 있어야 합니다.
  - 호스트가 방을 생성할 때에 최대 인원수를 설정할 수 있도록 기능을 구현해야 합니다.
- WebRTC API를 사용하여 플레이어 자신과 상대 플레이어의 웹캠으로 비디오를 띄워주어야 합니다.
- 로컬 뿐만 아니라 외부 환경에서도 접속할 수 있도록 서비스를 배포하여야 합니다.

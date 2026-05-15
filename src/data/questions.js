export const questions = [
  {
    id: 1,
    scene: '이상하게 눈에 들어온 날',
    text: '며칠 전부터\n달리는 사람들이 자꾸 눈에 들어왔다.',
    choices: [
      { id: 'a', text: '언제부터 눈에 들어왔는지 생각해봤다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '내일 아침 날씨를 먼저 확인했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'c', text: '현관에 있는 운동화가 떠올랐다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'd', text: '그냥 피곤해서 그런가 보다 했다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] }
    ]
  },
  {
    id: 2,
    scene: '운동화를 샀다',
    text: '생각보다 오래 고르고,\n생각보다 돈도 조금 더 썼다.',
    choices: [
      { id: 'a', text: '박스를 뜯지 않고 현관에 그대로 뒀다', scores: [{ axis: 'closure', value: 'open', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '신어보고 집 안을 괜히 걸어봤다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'c', text: '영수증을 한 번 더 확인했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'd', text: '내일 아침 신고 나가는 장면이 떠올랐다', scores: [{ axis: 'style', value: 'cut', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] }
    ]
  },
  {
    id: 3,
    scene: '첫날 아침',
    text: '알람은 울렸고,\n방 안은 아직 어두웠다.',
    choices: [
      { id: 'a', text: '창밖 밝기가 먼저 눈에 들어왔다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '어젯밤에 챙겨둔 운동화가 생각났다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'c', text: '알람 소리가 평소보다 크게 들렸다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'd', text: '오늘 날씨가 궁금했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  },
  {
    id: 4,
    scene: '처음 뛰어본 날',
    text: '몇 분 뛰지 않았는데\n생각보다 빨리 숨이 찼다.',
    choices: [
      { id: 'a', text: '발소리가 이상하게 크게 들렸다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'b', text: '지나가는 사람 속도가 괜히 신경 쓰였다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'c', text: '숨이 어디서 막히는지 느껴봤다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'd', text: '얼마나 왔는지 확인하고 싶어졌다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] }
    ]
  },
  {
    id: 5,
    scene: '3일째',
    text: '어제보다는 덜 힘들었다.\n근데 재미는 아직 없었다.',
    choices: [
      { id: 'a', text: '오늘 하늘이 괜찮다고 생각했다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'b', text: '같은 길인데 낯선 부분이 보였다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'c', text: '몸이 어제랑 달라졌는지 슬쩍 비교했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'd', text: '이 시간에 다른 걸 했으면 어땠을까 싶었다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  },
  {
    id: 6,
    scene: '하루 쉬었다',
    text: '그날은 그냥 쉬었다.\n큰 이유가 있었던 건 아니다.',
    choices: [
      { id: 'a', text: '쉬는 동안 몸이 어떤지 가만히 느껴봤다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '별 생각이 없었다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'c', text: '내일은 나갈 수 있을지 날씨를 확인했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'd', text: '다른 걸 하다 보니 나갈 시간이 지나 있었다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  },
  {
    id: 7,
    scene: '일주일쯤 됐다',
    text: '생각보다 몇 번 나갔다.\n근데 이게 뭔가 싶기도 했다.',
    choices: [
      { id: 'a', text: '일주일 전의 나와 지금의 나를 비교해봤다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'b', text: '애매한 게 뭔지 한참 생각했다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'c', text: '내일도 나가면 되겠다고 생각했다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'd', text: '누군가에게 말하고 싶은 건지 아닌지 헷갈렸다', scores: [{ axis: 'closure', value: 'open', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] }
    ]
  },
  {
    id: 8,
    scene: '비가 왔다',
    text: '나가려고 했는데\n밖에는 비가 내리고 있었다.',
    choices: [
      { id: 'a', text: '빗소리를 한참 들었다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '창문 틈으로 들어오는 비 냄새가 먼저 느껴졌다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'c', text: '창밖을 보다가 시간이 좀 지나 있었다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'd', text: '폰을 집어 들고 날씨 앱을 다시 봤다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] }
    ]
  },
  {
    id: 9,
    scene: '무릎이 신경 쓰였다',
    text: '달리다 보니\n무릎 쪽이 조금 신경 쓰였다.',
    choices: [
      { id: 'a', text: '어디가 불편한지 천천히 짚어봤다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '나도 모르게 속도를 줄였다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'c', text: '잠깐 멈추고 하늘을 봤다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'd', text: '오늘은 여기까지만 해도 되겠다고 생각했다', scores: [{ axis: 'style', value: 'cut', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] }
    ]
  },
  {
    id: 10,
    scene: '한 달이 됐다',
    text: '한 달을 채웠다.\n아직 주변에 말하진 않았다.',
    choices: [
      { id: 'a', text: '처음 결심했던 날 밤이 떠올랐다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'b', text: '몸이 달라졌는지 거울 앞에서 확인했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'c', text: '다음 달도 이렇게 갈 수 있을 것 같았다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'd', text: '한 달이나 됐다는 게 이상하게 실감 나지 않았다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  },
  {
    id: 11,
    scene: '나가기 싫은 날들',
    text: '나가기 싫은 날이\n며칠째 이어졌다.',
    choices: [
      { id: 'a', text: '뭐가 그렇게 싫은 건지 잘 모르겠었다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'b', text: '몸인지 마음인지 구분이 안 됐다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'c', text: '날씨 때문인지 내 마음 때문인지 생각했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'd', text: '이 느낌이 언제부터였는지 떠올려봤다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] }
    ]
  },
  {
    id: 12,
    scene: '누군가 물어봤다',
    text: '요즘 달린다고 말했더니\n생각보다 반응이 돌아왔다.',
    choices: [
      { id: 'a', text: '말하고 나서 내 목소리가 낯설게 들렸다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '상대 표정이 먼저 눈에 들어왔다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'c', text: '뭐라고 대답했는지 나중에 다시 생각났다', scores: [{ axis: 'closure', value: 'open', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'd', text: '대화가 끝난 뒤 기분이 조금 달라져 있었다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  },
  {
    id: 13,
    scene: '그만둘까 생각한 날',
    text: '오늘은 정말 하기 싫었다.\n이유는 딱히 없었다.',
    choices: [
      { id: 'a', text: '하기 싫다는 마음이 어디서 오는지 느껴봤다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '현관에 놓인 운동화를 한 번 봤다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'c', text: '그냥 다른 일을 하기 시작했다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'd', text: '이 생각이 처음인지 아닌지 떠올려봤다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  },
  {
    id: 14,
    scene: '현관의 운동화',
    text: '며칠째 신지 않은 운동화가\n현관 한쪽에 그대로 있었다.',
    choices: [
      { id: 'a', text: '자꾸 눈에 밟히는 이유를 생각했다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '먼지가 앉았는지 먼저 봤다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'c', text: '못 본 척하고 다른 쪽을 봤다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'd', text: '언제부터 저기 있었는지 기억을 더듬었다', scores: [{ axis: 'closure', value: 'open', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] }
    ]
  },
  {
    id: 15,
    scene: '앱 알림이 왔다',
    text: '오랫동안 기록이 없다는\n알림이 화면에 떴다.',
    choices: [
      { id: 'a', text: '알림 문구를 한 번 더 읽었다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '화면을 잠깐 보다가 꺼버렸다', scores: [{ axis: 'style', value: 'cut', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'c', text: '폰을 내려놓고 다른 일을 했다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'd', text: '마지막 기록이 언제인지 확인했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  },
  {
    id: 16,
    scene: '지금 나는',
    text: '그때 시작했던 런닝이\n지금 어떻게 됐는지 떠올려봤다.',
    choices: [
      { id: 'a', text: '끝난 건지 아닌지 아직 잘 모르겠다', scores: [{ axis: 'closure', value: 'open', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '그때의 나와 지금의 나를 비교해봤다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'c', text: '생각보다 담담했다', scores: [{ axis: 'style', value: 'cut', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'd', text: '일기장에 뭔가 적고 싶어졌다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  }
];

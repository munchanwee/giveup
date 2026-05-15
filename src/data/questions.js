export const questions = [
  {
    id: 1,
    scene: '결심한 날 밤',
    text: '며칠 전부터 자꾸 런닝하는 사람들이 눈에 들어왔다.',
    choices: [
      { id: 'a', text: '언제부터 그랬는지 생각해봤다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '내일 아침 날씨를 먼저 확인했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'c', text: '현관에 있는 운동화가 떠올랐다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'd', text: '그냥 자야겠다 싶었다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] }
    ]
  },
  {
    id: 2,
    scene: '운동화를 샀다',
    text: '고르다 보니 생각보다 돈을 썼다.',
    choices: [
      { id: 'a', text: '박스를 뜯지 않고 현관에 뒀다', scores: [{ axis: 'closure', value: 'open', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '신어보고 집 안을 한 바퀴 걸었다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'c', text: '영수증을 한 번 더 봤다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'd', text: '내일 아침이 머릿속에 떠올랐다', scores: [{ axis: 'style', value: 'cut', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] }
    ]
  },
  {
    id: 3,
    scene: '첫날 아침',
    text: '알람은 울렸다. 몸이 생각보다 무거웠다.',
    choices: [
      { id: 'a', text: '창밖 밝기가 먼저 눈에 들어왔다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '어젯밤에 챙겨둔 운동화가 생각났다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'c', text: '알람 소리가 평소보다 크게 들렸다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'd', text: '오늘 날씨가 궁금했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  },
  {
    id: 4,
    scene: '첫 런닝',
    text: '생각보다 빨리 숨이 찼다.',
    choices: [
      { id: 'a', text: '발소리가 귀에 들어왔다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'b', text: '지나가는 사람 속도가 눈에 밟혔다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'c', text: '숨이 어디서 막히는지 느껴봤다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'd', text: '얼마나 왔는지 궁금했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] }
    ]
  },
  {
    id: 5,
    scene: '3일째',
    text: '어제보다 몸이 덜 힘들었다. 재미는 없었다.',
    choices: [
      { id: 'a', text: '오늘 하늘이 좋다는 생각이 들었다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'b', text: '같은 길인데 다르게 보이는 게 있었다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'c', text: '몸이 어제랑 달라졌는지 슬쩍 비교했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'd', text: '이 시간에 다른 걸 했으면 어땠을까 싶었다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  },
  {
    id: 6,
    scene: '빠진 날',
    text: '그냥 하루 쉬었다. 이유는 딱히 없었다.',
    choices: [
      { id: 'a', text: '쉬는 동안 몸이 어떤지 느껴봤다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '별 생각이 없었다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'c', text: '내일 날씨를 미리 확인했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'd', text: '다른 걸 하다 보니 시간이 지나 있었다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  },
  {
    id: 7,
    scene: '일주일이 지났다',
    text: '생각보다 꾸준히 나갔다. 뭔가 애매했다.',
    choices: [
      { id: 'a', text: '일주일 전 나랑 지금 나를 슬쩍 비교했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'b', text: '애매한 게 뭔지 한참 생각했다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'c', text: '내일도 나가면 되겠다 싶었다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'd', text: '누군가한테 말하고 싶은 건지 아닌지 몰랐다', scores: [{ axis: 'closure', value: 'open', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] }
    ]
  },
  {
    id: 8,
    scene: '비가 왔다',
    text: '나가려고 했는데 비가 내리고 있었다.',
    choices: [
      { id: 'a', text: '빗소리를 한참 들었다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '비 냄새가 났다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'c', text: '창문 밖을 오래 봤다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'd', text: '핸드폰을 집어 들었다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] }
    ]
  },
  {
    id: 9,
    scene: '무릎이 좀 아팠다',
    text: '달리다 보니 무릎 쪽이 신경 쓰였다.',
    choices: [
      { id: 'a', text: '통증이 어느 쪽인지 짚어봤다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '페이스가 먼저 바뀌었다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'c', text: '잠깐 멈추고 하늘을 봤다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'd', text: '오늘 여기까지인가 싶었다', scores: [{ axis: 'style', value: 'cut', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] }
    ]
  },
  {
    id: 10,
    scene: '한 달이 됐다',
    text: '한 달을 채웠다. 주변에 말하진 않았다.',
    choices: [
      { id: 'a', text: '처음 결심했던 날 밤이 떠올랐다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'b', text: '몸 어딘가가 달라졌는지 확인했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'c', text: '다음 달이 자연스럽게 생각됐다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'd', text: '한 달이라는 게 실감이 안 났다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  },
  {
    id: 11,
    scene: '슬럼프',
    text: '나가기 싫은 날이 며칠째 이어졌다.',
    choices: [
      { id: 'a', text: '싫은 게 뭔지 잘 몰랐다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'b', text: '몸인지 마음인지 구분이 안 됐다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'c', text: '날씨 탓인지 아닌지 생각했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'd', text: '이 느낌이 언제부터였는지 떠올려봤다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] }
    ]
  },
  {
    id: 12,
    scene: '누군가 물어봤다',
    text: '요즘 런닝 한다고 했더니 반응이 왔다.',
    choices: [
      { id: 'a', text: '말하고 나서 내 목소리가 이상하게 들렸다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '상대 표정이 먼저 눈에 들어왔다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'c', text: '뭐라고 대답했는지 나중에 다시 생각났다', scores: [{ axis: 'closure', value: 'open', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'd', text: '대화가 끝난 뒤 기분이 달랐다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  },
  {
    id: 13,
    scene: '그만둘까 생각한 날',
    text: '오늘은 진짜 하기 싫었다. 이유도 딱히 없었다.',
    choices: [
      { id: 'a', text: '하기 싫다는 게 어디서 오는지 느껴봤다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '운동화를 봤다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] },
      { id: 'c', text: '그냥 다른 걸 했다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'd', text: '이 생각이 처음인지 아닌지 떠올렸다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  },
  {
    id: 14,
    scene: '운동화가 현관에 있다',
    text: '며칠째 신지 않았다. 눈에 자꾸 밟혔다.',
    choices: [
      { id: 'a', text: '밟힌다는 게 어떤 느낌인지 생각했다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '먼지가 앉았는지 봤다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'c', text: '다른 데로 시선이 갔다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'd', text: '언제부터 저기 있었는지 기억을 더듬었다', scores: [{ axis: 'closure', value: 'open', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] }
    ]
  },
  {
    id: 15,
    scene: '런닝 앱 알림이 왔다',
    text: '오랫동안 기록이 없다는 알림이 떴다.',
    choices: [
      { id: 'a', text: '알림 문구를 한 번 더 읽었다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '화면을 잠깐 보다가 껐다', scores: [{ axis: 'style', value: 'cut', weight: 1 }, { axis: 'speed', value: 'quick', weight: 0.5 }] },
      { id: 'c', text: '폰을 내려놓았다', scores: [{ axis: 'style', value: 'drift', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'd', text: '마지막 기록이 언제인지 확인했다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  },
  {
    id: 16,
    scene: '지금 나는',
    text: '그 런닝이 어떻게 됐는지 생각해봤다.',
    choices: [
      { id: 'a', text: '끝난 건지 아닌지 아직 모르겠다', scores: [{ axis: 'closure', value: 'open', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'b', text: '그때 나랑 지금 나를 비교해봤다', scores: [{ axis: 'criterion', value: 'context', weight: 1 }, { axis: 'speed', value: 'slow', weight: 0.5 }] },
      { id: 'c', text: '생각보다 담담했다', scores: [{ axis: 'style', value: 'cut', weight: 1 }, { axis: 'closure', value: 'close', weight: 0.5 }] },
      { id: 'd', text: '일기장에 무언가를 기록한다', scores: [{ axis: 'criterion', value: 'sense', weight: 1 }, { axis: 'closure', value: 'open', weight: 0.5 }] }
    ]
  }
];

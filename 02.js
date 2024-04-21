const prizes = [
  { name: '1 獎', count: 1, probability: 0.1 },
  { name: '2 獎', count: 1, probability: 2.3 },
  { name: '3 獎', count: 2, probability: 13 },
  { name: '4 獎', count: 5, probability: 18 },
  { name: '5 獎', count: 11, probability: 25 }
];

function drawPrize() {
  let remainingPrizes = prizes.filter(prize => prize.count > 0);

  while (remainingPrizes.length > 0) {
    // 計算總機率
    let totalProbability = remainingPrizes.reduce((acc, prize) => acc + prize.probability, 0);

    // 生成隨機值
    let randomValue = Math.random() * totalProbability;
    let cumulativeProbability = 0;

    for (let i = 0; i < remainingPrizes.length; i++) {
      cumulativeProbability += remainingPrizes[i].probability;

      if (randomValue < cumulativeProbability) {
        let selectedPrize = remainingPrizes[i];

        // 減少該獎項的數量
        selectedPrize.count--;

        // 更新剩餘獎項列表
        remainingPrizes = prizes.filter(prize => prize.count > 0);

        // 輸出抽獎結果
        console.log(`抽到 ${selectedPrize.name} 目前尚未抽取的獎勵為 [ ${remainingPrizes.map(p => p.name)} ]`);

        break;
      }
    }
  }
}
drawPrize()
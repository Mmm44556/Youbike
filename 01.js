    function calculation(N) {
      
      if (!Number.isInteger(N) || N <= 0) {
        throw new TypeError('N 必須是正整數！');
      }
      //初始值
      let sum = 0;
      let init = 1;

      for (let i = 1; i <= N; i++) {
        sum += init * i; //與正負切換結果進行相乘
        if (i !== 1) {
          init = -init;//每次計算切換正負符號
        }

        // 每次計算後檢查是否超過 2 秒
        if (Date.now() - startTime > 2000) {

          throw new Error(`計算時間超過 2 秒，中斷計算。中斷結果:${sum}`);
        }
      }

      return sum;
    }

    //N為正整數
    let N = 10000000;
    //計算開始時間
    let startTime = Date.now();

    try {
      // 呼叫計算函式，計算序列總和
      let result = calculation(N);

      let endTime = Date.now(); // 計算結束時間
      let processTime = endTime - startTime; // 計算執行時間

      // 輸出計算結果和執行時間，確保不超過 2 秒且不會造成當機
      console.log(`運算結果:${result }`);
      console.log(`花費時間:${processTime}`);
    } catch (error) {
      console.error(error.message); // 捕獲錯誤並輸出錯誤信息
    }
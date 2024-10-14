
# 

## 元件圖

![Image](/diagram-export-2024-10-14-上午8_38_43.png)

- App Component (最上層)
負責整體聊天室的布局和管理。


- Header Component
聊天室的頂部標題欄，可能包括聊天室名稱、功能按鈕等。


- Sidebar Component
聊天室的側邊欄，顯示聊天室成員列表、群組等相關信息。


- Camera Component
拍照元件，進行拍照、錄影上傳。


- MessageList Component
聊天訊息列表，顯示聊天歷史記錄。


- Avatar Component
使用者頭像的元件，顯示聊天室成員或發送者的頭像。


- Message Component
單條聊天訊息的元件，包括發送者的頭像、內容、時間等。


- Footer Component
底部元件，包括聊天輸入元件、上傳元件。


- Upload Component
輸入框的上傳元件，上傳圖、影音...等檔案。


- InputBox Component
聊天訊息輸入框，用戶可以在此輸入文字消息並發送。




## 部署

部屬網址: https://youbikestation.vercel.app

使用技術: Next.js、Zustand、React-Window (優化)

## 實作功能:

1. 可透過文字篩選縣市清單 ✔
2. 具備一鍵清除 ✔
3. 縣市清單及 checkbox 渲染,需針對縣市搜尋 input 操作即時反饋 ✔
4. 預設為全選
勾選 / 取消勾選 後其餘checkbox狀態需跟著變動 ✔

## 額外實作:
1. 表格區效能優化 ✔
優化方式: 針對當前Table看到的資料作渲染，剩餘資料根據滑動顯示。
2. 點擊表頭可進行排序 ✔
3. 站點搜尋Input ✔
4. 表格資料渲染需針對input操作即時反饋 ✔
5. 只需針對站點名稱篩選搜尋 ✔

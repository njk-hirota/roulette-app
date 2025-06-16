// 抽選対象のデータ（名前と画像ファイル名）
// 各参加者の名前の画像ファイル名を `nameImage` プロパティに「画像X.jpg」の形式で記述します。
const allParticipants = [
    { name: "内山 直揮", image: "1.jpg", nameImage: "画像1.jpg" },
    { name: "中津川 浩平", image: "2.jpg", nameImage: "画像2.jpg" },
    { name: "有地 悠人", image: "3.jpg", nameImage: "画像3.jpg" },
    { name: "西谷 頼征", image: "4.jpg", nameImage: "画像4.jpg" },
    { name: "中尾 恵太", image: "5.jpg", nameImage: "画像5.jpg" },
    { name: "草別 秀", image: "6.jpg", nameImage: "画像6.jpg" },
    { name: "高橋 克巳", image: "7.jpg", nameImage: "画像7.jpg" },
    { name: "小笠原 一彦", image: "8.jpg", nameImage: "画像8.jpg" },
    { name: "尾﨑 誠", image: "9.jpg", nameImage: "画像9.jpg" },
    { name: "渡邊 龍和", image: "10.jpg", nameImage: "画像10.jpg" },
    { name: "小田 翔矢", image: "11.jpg", nameImage: "画像11.jpg" },
    { name: "高橋 章徳", image: "12.jpg", nameImage: "画像12.jpg" },
    { name: "石田 貴徳", image: "13.jpg", nameImage: "画像13.jpg" },
    { name: "谷藤 良祐", image: "14.jpg", nameImage: "画像14.jpg" },
    { name: "相澤 勇也", image: "15.jpg", nameImage: "画像15.jpg" },
    { name: "小原 健心", image: "16.jpg", nameImage: "画像16.jpg" },
    { name: "渡邉 綾乃", image: "17.jpg", nameImage: "画像17.jpg" },
    { name: "小野寺 広敏", image: "18.jpg", "nameImage": "画像18.jpg" },
    { name: "清水 陽平", image: "19.jpg", "nameImage": "画像19.jpg" },
    { name: "渡部 司", image: "20.jpg", "nameImage": "画像20.jpg" },
    { name: "青柳 月弥", image: "21.jpg", "nameImage": "画像21.jpg" },
    { name: "橋詰 仁美", image: "22.jpg", "nameImage": "画像22.jpg" },
    { name: "井出 陸奥雄", image: "23.jpg", "nameImage": "画像23.jpg" },
    { name: "中村 武剛", image: "24.jpg", "nameImage": "画像24.jpg" },
    { name: "岡崎 侑波", image: "25.jpg", "nameImage": "画像25.jpg" },
    { name: "和田 紗耶香", image: "26.jpg", "nameImage": "画像26.jpg" },
    { name: "佐々木 進", image: "27.jpg", "nameImage": "画像27.jpg" },
    { name: "志村 佑真", image: "28.jpg", "nameImage": "画像28.jpg" },
    { name: "松永 初輝", image: "29.jpg", "nameImage": "画像29.jpg" },
    { name: "金子 竜久", image: "30.jpg", "nameImage": "画像30.jpg" },
    { name: "石川 朋華", image: "31.jpg", "nameImage": "画像31.jpg" },
    { name: "林 家俊", image: "32.jpg", "nameImage": "画像32.jpg" },
    { name: "亀山 剛彦", image: "33.jpg", "nameImage": "画像33.jpg" },
    { name: "上口 昌史", image: "34.jpg", "nameImage": "画像34.jpg" },
    { name: "髙橋 護", image: "35.jpg", "nameImage": "画像35.jpg" },
    { name: "高橋 涼", image: "36.jpg", "nameImage": "画像36.jpg" },
    { name: "工藤 嶺", image: "37.jpg", "nameImage": "画像37.jpg" },
    { name: "佐藤 玲偉", image: "38.jpg", "nameImage": "画像38.jpg" },
    { name: "苅谷 暁代", image: "39.jpg", "nameImage": "画像39.jpg" },
    { name: "外山 泰生", image: "40.jpg", "nameImage": "画像40.jpg" },
    { name: "中村 享永", image: "41.jpg", "nameImage": "画像41.jpg" },
    { name: "渡邉 政伸", image: "42.jpg", "nameImage": "画像42.jpg" },
    { name: "八木 彩菜", image: "43.jpg", "nameImage": "画像43.jpg" },
    { name: "八子 泰周", image: "44.jpg", "nameImage": "画像44.jpg" },
    { name: "松浦 正志", image: "45.jpg", "nameImage": "画像45.jpg" },
    { name: "佐藤 明弘", image: "46.jpg", "nameImage": "画像46.jpg" },
    { name: "大黒 将史", image: "47.jpg", "nameImage": "画像47.jpg" },
    { name: "西 赳", image: "48.jpg", "nameImage": "画像48.jpg" },
    { name: "岡﨑 拓也", image: "49.jpg", "nameImage": "画像49.jpg" },
    { name: "上田 恵里花", image: "50.jpg", "nameImage": "画像50.jpg" },
    { name: "菊地 一勝", image: "51.jpg", "nameImage": "画像51.jpg" },
    { name: "内藤 圭一", image: "52.jpg", "nameImage": "画像52.jpg" },
    { name: "木村 晃士", image: "53.jpg", "nameImage": "画像53.jpg" },
    { name: "菅原 敏之", image: "54.jpg", "nameImage": "画像54.jpg" },
    { name: "吉川 賢哉", image: "55.jpg", "nameImage": "画像55.jpg" },
    { name: "佐伯 柚樹", image: "56.jpg", "nameImage": "画像56.jpg" },
    { name: "今岡 美乃里", image: "57.jpg", "nameImage": "画像57.jpg" },
    { name: "小林 賢二", image: "58.jpg", "nameImage": "画像58.jpg" },
    { name: "西山 大亮", image: "59.jpg", "nameImage": "画像59.jpg" },
    { name: "菅谷 楓", image: "60.jpg", "nameImage": "画像60.jpg" },
    { name: "佐藤 登", image: "61.jpg", "nameImage": "画像61.jpg" },
    { name: "和田 圭司", image: "62.jpg", "nameImage": "画像62.jpg" },
    { name: "黒羽子 大輔", image: "63.jpg", "nameImage": "画像63.jpg" },
    { name: "井上 幸治", image: "64.jpg", "nameImage": "画像64.jpg" },
    { name: "竹島 岳也", image: "65.jpg", "nameImage": "画像65.jpg" },
    { name: "平川 桜子", image: "66.jpg", "nameImage": "画像66.jpg" },
    { name: "吉村 優七", image: "67.jpg", "nameImage": "画像67.jpg" },
    { name: "山本 寧々", image: "68.jpg", "nameImage": "画像68.jpg" },
    { name: "上田 将太", image: "69.jpg", "nameImage": "画像69.jpg" },
    { name: "浅野 領太", image: "70.jpg", "nameImage": "画像70.jpg" },
    { name: "芥川 隆太", image: "71.jpg", "nameImage": "画像71.jpg" },
    { name: "鈴木 亮広", image: "72.jpg", "nameImage": "画像72.jpg" },
    { name: "佐賀 雄樹", image: "73.jpg", "nameImage": "画像73.jpg" },
    { name: "菊池 明日香", image: "74.jpg", "nameImage": "画像74.jpg" },
    { name: "吉田 矩萌", image: "75.jpg", "nameImage": "画像75.jpg" },
    { name: "古川 雄太", image: "76.jpg", "nameImage": "画像76.jpg" },
    { name: "飛田 悠里", image: "77.jpg", "nameImage": "画像77.jpg" },
    { name: "森 結衣子", image: "78.jpg", "nameImage": "画像78.jpg" },
    { name: "佐々木 歩", image: "79.jpg", "nameImage": "画像79.jpg" },
    { name: "谷内山 勝俊", image: "80.jpg", "nameImage": "画像80.jpg" },
    { name: "一法師 達也", image: "81.jpg", "nameImage": "画像81.jpg" },
    { name: "葛岡 拓真", image: "82.jpg", "nameImage": "画像82.jpg" },
    { name: "厚木 菜良", image: "83.jpg", "nameImage": "画像83.jpg" },
    { name: "下道 銀士", image: "84.jpg", "nameImage": "画像84.jpg" },
    { name: "小林 達夫", image: "85.jpg", "nameImage": "画像85.jpg" },
    { name: "林 容", image: "86.jpg", "nameImage": "画像86.jpg" },
    { name: "橋田 昌之", image: "87.jpg", "nameImage": "画像87.jpg" },
    { name: "田久 敦士", image: "88.jpg", "nameImage": "画像88.jpg" },
    { name: "小川 浩一", image: "89.jpg", "nameImage": "画像89.jpg" },
    { name: "福重 実", image: "90.jpg", "nameImage": "画像90.jpg" },
    { name: "内間 直人", image: "91.jpg", "nameImage": "画像91.jpg" },
    { name: "大野 卓実", image: "92.jpg", "nameImage": "画像92.jpg" },
    { name: "近藤 肇", image: "93.jpg", "nameImage": "画像93.jpg" },
    { name: "木村 剛大", image: "94.jpg", "nameImage": "画像94.jpg" },
    { name: "石黒 翔太", image: "95.jpg", "nameImage": "画像95.jpg" },
    { name: "小助川 祐", image: "96.jpg", "nameImage": "画像96.jpg" },
    { name: "酒井 茜", image: "97.jpg", "nameImage": "画像97.jpg" },
    { name: "佐々木 豪", image: "98.jpg", "nameImage": "画像98.jpg" },
    { name: "増田 晃次", image: "99.jpg", "nameImage": "画像99.jpg" },
    { name: "福原 光咲", image: "100.jpg", "nameImage": "画像100.jpg" },
    { name: "LUONG MY NGUYET", image: "101.jpg", "nameImage": "画像101.jpg" },
    { name: "伊谷 会那", image: "102.jpg", "nameImage": "画像102.jpg" },
    { name: "古川 麻耶", image: "103.jpg", "nameImage": "画像103.jpg" },
    { name: "小林 輝久", image: "104.jpg", "nameImage": "画像104.jpg" },
    { name: "昆 克実", image: "105.jpg", "nameImage": "画像105.jpg" },
    { name: "中野 智子", image: "106.jpg", "nameImage": "画像106.jpg" },
    { name: "髙井 悠", image: "107.jpg", "nameImage": "画像107.jpg" },
    { name: "鈴木 孝陸", image: "108.jpg", "nameImage": "画像108.jpg" },
    { name: "渡邉 佑夏", image: "109.jpg", "nameImage": "画像109.jpg" },
    { name: "村上 明穂", image: "110.jpg", "nameImage": "画像110.jpg" },
    { name: "田中 淳子", image: "111.jpg", "nameImage": "画像111.jpg" },
    { name: "栗原 しのぶ", image: "112.jpg", "nameImage": "画像112.jpg" },
    { name: "清水 瞳", image: "113.jpg", "nameImage": "画像113.jpg" },
    { name: "稲崎 江里", image: "114.jpg", "nameImage": "画像114.jpg" },
    { name: "安井 亜美", image: "115.jpg", "nameImage": "画像115.jpg" },
    { name: "大久保 明朗", image: "116.jpg", "nameImage": "画像116.jpg" },
    { name: "神 慶人", image: "117.jpg", "nameImage": "画像117.jpg" },
    { name: "松沢 弘太", image: "118.jpg", "nameImage": "画像118.jpg" },
    { name: "石井 創", image: "119.jpg", "nameImage": "画像119.jpg" },
    { name: "廣田 佳祐", image: "120.jpg", "nameImage": "画像120.jpg" },
    { name: "大西 裕治", image: "121.jpg", "nameImage": "画像121.jpg" },
    { name: "山口 浩平", image: "122.jpg", "nameImage": "画像122.jpg" },
    { name: "小山 真平", image: "123.jpg", "nameImage": "画像123.jpg" },
    { name: "笠井 瑛里香", image: "124.jpg", "nameImage": "画像124.jpg" },
    { name: "安田 優樹", image: "125.jpg", "nameImage": "画像125.jpg" },
    { name: "早坂 康佑", image: "126.jpg", "nameImage": "画像126.jpg" },
    { name: "隈川 雛奈子", image: "127.jpg", "nameImage": "画像127.jpg" },
];
let currentParticipants = [...allParticipants]; // シャッフル用
// const spinningDuration = 2000; // スピニングの時間（ミリ秒） - spinAnimation内のtotalSpinTimeで定義
// const initialSpinDuration = 2000; // 初回抽選のスピニング時間 - spinAnimation内のtotalSpinTimeで定義
const imageChangeInterval = 50; // 画像が変わる間隔（ミリ秒）
let spinInterval; // setIntervalのIDを保持
let animationInterval; // スピニングアニメーションのInterval ID
let totalSpinTime = 2000; // スピニングの合計時間（ミリ秒）をグローバルで定義

let lotteryCount = 0; // 抽選回数をカウントする変数
const MAX_DISPLAY_COUNT = 31; // 表示する抽選回数の上限（この回数までカウントダウン表示）

// DOM要素の取得 (一部はDOMContentLoaded内で初期化)
const container = document.querySelector('.container');
const introImage = document.getElementById('introImage');
const startButton = document.getElementById('startButton');
const remainingCountDisplay = document.getElementById('remainingCountDisplay');


// 動的に追加される要素を保持するための変数 (display-areaと関連要素)
let displayArea;
let congratulationsMessage;
let selectedImage;
let selectedName;
let resultActionsDiv; // result-actionsへの参照を保持
let leftImage; // 新しく追加
let rightImage; // 新しく追加
let imageRow; // 新しく追加


// すべての画像をプリロードする関数
function preloadAllImages() {
    allParticipants.forEach(p => {
        const img = new Image();
        img.src = `images/${p.image}`;
        const nameImg = new Image();
        nameImg.src = `images/${p.nameImage`;
    });
    // ボタンの背景画像
    const startNormal = new Image();
    startNormal.src = 'images/startbutton.png'; // 抽選開始ボタンの通常画像
    const rerunNormal = new Image();
    rerunNormal.src = 'images/nextbutton.png'; // もう一度抽選ボタンの通常画像
    
    // 背景画像もプリロード
    const bgImg = new Image();
    bgImg.src = 'images/background.jpg';

    // 新しく追加する左右の画像をプリロード
    const leftSideImg = new Image();
    leftSideImg.src = 'images/left_side_image.png'; // 左の画像のパス
    const rightSideImg = new Image();
    rightSideImg.src = 'images/right_side_image.png'; // 右の画像のパス
    
    console.log("All images preloaded.");
}

// display-areaを動的に作成する関数
function createDisplayArea() {
    displayArea = document.createElement('div');
    displayArea.id = 'display-area';
    displayArea.classList.add('display-area'); // style.cssで定義されたスタイルを適用

    congratulationsMessage = document.createElement('span');
    congratulationsMessage.id = 'congratulationsMessage';
    congratulationsMessage.classList.add('hidden'); // 初期は非表示
    congratulationsMessage.textContent = 'おめでとうございます！';

    imageRow = document.createElement('div'); // 新しいimage-rowコンテナを作成
    imageRow.classList.add('image-row'); // CSSでスタイルを適用するためのクラス

    leftImage = document.createElement('img'); // 左の画像要素を作成
    leftImage.id = 'leftImage';
    leftImage.alt = '左の画像';
    leftImage.src = 'images/left_side_image.png'; // 左の画像のパスを設定
    leftImage.classList.add('side-image'); // サイド画像の共通クラス
    leftImage.classList.add('hidden'); // 最初は非表示

    selectedImage = document.createElement('img');
    selectedImage.id = 'selectedImage';
    selectedImage.alt = '選ばれた画像';
    selectedImage.src = ''; // 初期値は空

    rightImage = document.createElement('img'); // 右の画像要素を作成
    rightImage.id = 'rightImage';
    rightImage.alt = '右の画像';
    rightImage.src = 'images/right_side_image.png'; // 右の画像のパスを設定
    rightImage.classList.add('side-image'); // サイド画像の共通クラス
    rightImage.classList.add('hidden'); // 最初は非表示

    imageRow.appendChild(leftImage); // image-rowに左の画像を追加
    imageRow.appendChild(selectedImage);
    imageRow.appendChild(rightImage); // image-rowに右の画像を追加

    resultActionsDiv = document.createElement('div'); // resultActionsDivを初期化
    resultActionsDiv.classList.add('result-actions'); // style.cssで定義されたスタイルを適用

    selectedName = document.createElement('img');
    selectedName.id = 'selectedName';
    selectedName.alt = '選ばれた名前';
    selectedName.src = ''; // 初期値は空

    resultActionsDiv.appendChild(selectedName);

    displayArea.appendChild(congratulationsMessage);
    displayArea.appendChild(imageRow); // displayAreaにimage-rowを追加
    displayArea.appendChild(resultActionsDiv);

    // .top-image-container の直後に追加
    const topImageContainer = document.querySelector('.top-image-container');
    if (topImageContainer) {
        topImageContainer.after(displayArea);
    } else {
        // topImageContainer が見つからない場合は、startButtonのparentNodeに挿入
        container.insertBefore(displayArea, startButton.parentNode);
    }
    console.log("Display area created and appended.");
}

// display-areaを削除する関数 (初期状態に戻すため)
function removeDisplayArea() {
    if (displayArea && displayArea.parentNode) {
        displayArea.parentNode.removeChild(displayArea);
        displayArea = null; // 参照をクリア
        // displayAreaが削除されたら、中の要素への参照もクリア
        congratulationsMessage = null;
        selectedImage = null;
        selectedName = null;
        resultActionsDiv = null; // この参照もクリア
        leftImage = null; // 参照をクリア
        rightImage = null; // 参照をクリア
        imageRow = null; // 参照をクリア
        console.log("Display area removed and references cleared.");
    }
}

// 抽選結果関連の要素を非表示にする関数
function hideAllResults() {
    // これらの要素はdisplayAreaが作成された後に参照が設定されるため、nullチェックが必要
    if (congratulationsMessage) congratulationsMessage.classList.add('hidden');
    if (selectedImage) {
        selectedImage.classList.add('hidden');
        selectedImage.style.transform = 'scale(0)'; // アニメーション用
        selectedImage.style.opacity = '0'; // アニメーション用
    }
    if (selectedName) selectedName.classList.add('hidden');
    if (resultActionsDiv) resultActionsDiv.classList.add('hidden'); // resultActionsDivを非表示
    // サイド画像はスピニング中も表示するため、これらの行はコメントアウトまたは削除
    // if (leftImage) leftImage.classList.add('hidden');
    // if (rightImage) rightImage.classList.add('hidden');
    // remainingCountDisplayはHTMLに常に存在するため、nullチェックは不要だが、表示/非表示の制御は引き続き行う
    if (remainingCountDisplay) remainingCountDisplay.classList.add('hidden'); // 非表示にする
    console.log("All result elements hidden. Side images will remain visible.");
}

// スピニングアニメーションの実行
function spinAnimation() {
    // 全ての要素を一度リセット (selectedImageとselectedNameを隠す)
    hideAllResults();

    // スピニング開始時にサイド画像を表示
    if (leftImage) leftImage.classList.remove('hidden');
    if (rightImage) rightImage.classList.remove('hidden');

    // selectedImageを非表示状態からアニメーション準備
    if (selectedImage) {
        selectedImage.classList.remove('hidden'); // hiddenクラスを削除して表示状態にする
        selectedImage.style.transition = 'none'; // アニメーションを一時的に無効
        selectedImage.style.transform = 'scale(1)'; // 表示中の画像を瞬時に正しいサイズにする
        selectedImage.style.opacity = '1';
        selectedImage.offsetHeight; // 強制リフロー (スタイル変更を反映させる)
    }

    // スピニング中の画像切り替えタイマーを開始
    animationInterval = setInterval(() => {
        spinImages(); // スピニング中の画像切り替え
    }, imageChangeInterval); // imageChangeInterval は50msに設定済み

    // スピニング終了後の処理を遅延実行
    setTimeout(() => {
        clearInterval(animationInterval); // スピニングを停止
        console.log("Spinning animation ended.");
        displayFinalResult(); // 最終結果を表示する関数を呼び出す
    }, totalSpinTime); // totalSpinTime は2000msに設定済み
}


// 抽選結果関連の要素を表示する関数
function showResultElements() {
    // これらの要素はdisplayAreaが作成された後に参照が設定されるため、nullチェックが必要
    if (congratulationsMessage) congratulationsMessage.classList.remove('hidden');
    if (selectedImage) selectedImage.classList.remove('hidden');
    if (selectedName) selectedName.classList.remove('hidden');
    if (resultActionsDiv) resultActionsDiv.classList.remove('hidden'); // resultActionsDivを表示
    if (resultActionsDiv) resultActionsDiv.style.opacity = '1'; // 透明度を1に設定
    // ここでサイド画像を再度表示する必要はない、なぜならスピニング開始時に既に表示しているため
    // if (leftImage) leftImage.classList.remove('hidden');
    // if (rightImage) rightImage.classList.remove('hidden');
    console.log("Result elements shown.");
}

// スピニング中の画像切り替え
function spinImages() {
    // allParticipants配列からランダムに画像を選んで表示
    const randomIndex = Math.floor(Math.random() * allParticipants.length);
    const participant = allParticipants[randomIndex];
    if (selectedImage) {
        selectedImage.src = `images/${participant.image}`;
    }
    // スピニング中も左右の画像を切り替える場合はここにロジックを追加
    // 例:
    // if (leftImage) {
    //     const randomSideIndex = Math.floor(Math.random() * allParticipants.length);
    //     leftImage.src = `images/${allParticipants[randomSideIndex].image}`;
    // }
    // if (rightImage) {
    //     const randomSideIndex = Math.floor(Math.random() * allParticipants.length);
    //     rightImage.src = `images/${allParticipants[randomSideIndex].image}`;
    // }
}

// 抽選開始ボタンのクリックハンドラ
function handleStartButtonClick() {
    console.log("Start button clicked.");

    // 全員抽選済みの場合のチェック（127回抽選した後）
    if (currentParticipants.length === 0) {
        alert("全員抽選済みです！これ以上抽選できません。");
        startButton.classList.add('hidden');
        startButton.style.pointerEvents = 'none';
        if (displayArea) { removeDisplayArea(); } // displayAreaも削除
        if (introImage) { introImage.classList.add('hidden'); }
        // remainingCountDisplayはHTMLに常に存在するため、hiddenクラスで非表示
        if (remainingCountDisplay) { remainingCountDisplay.classList.add('hidden'); }
        return;
    }

    // 導入画像と開始ボタンを隠す
    if (introImage) {
        introImage.classList.add('hidden');
        console.log("Intro image hidden.");
    }
    //startButton.classList.add('hidden');//
    startButton.classList.remove('rerun-button');

    // display-areaがまだ存在しない場合に作成
    if (!displayArea) {
        createDisplayArea();
        console.log("Display area was not present, created now.");
    } else {
        // displayAreaが既に存在する場合は、要素をリセットしつつサイド画像は表示を継続させる
        hideAllResults(); // selectedImageなどは非表示になるが、サイド画像は非表示にならない
        // ここでleftImageとrightImageにhiddenクラスがついていたら削除する（念のため）
        if (leftImage) leftImage.classList.remove('hidden');
        if (rightImage) rightImage.classList.remove('hidden');
        console.log("Existing display area reset, side images kept visible.");
    }

    displayArea.classList.remove('hidden');

    // スピニング開始時には、残り回数表示を一旦非表示にする (結果表示時に再表示)
    if (remainingCountDisplay) {
        remainingCountDisplay.classList.add('hidden');
    }

    // ここで新しいspinAnimation関数を呼び出す
    spinAnimation();
    console.log("Spinning animation initiated.");

    // NOTE: spinAnimation関数がsetTimeoutでdisplayFinalResultを呼び出すため、
    // このhandleStartButtonClick関数からは直接setTimeoutやsetIntervalのロジックを記述しません。
    // そのため、この場所に以前あったsetTimeoutやsetIntervalのロジックは削除されています。
}

// 最終結果を表示する関数
function displayFinalResult() {
    console.log("displayFinalResult called.");

    if (currentParticipants.length === 0) {
        alert("全員抽選済みです！これ以上抽選できません。");
        startButton.textContent = "全員抽選終了"; // 全員抽選済みのメッセージ
        startButton.classList.remove('hidden'); // ボタンは表示する
        startButton.style.pointerEvents = 'none'; // クリック不可にする
        startButton.classList.remove('rerun-button'); // スタイルも戻す
        if (displayArea) { removeDisplayArea(); }
        // remainingCountDisplayはHTMLに常に存在するため、hiddenクラスで非表示
        if (remainingCountDisplay) { remainingCountDisplay.classList.add('hidden'); }
        return;
    }

    const selected = getRandomParticipant();

    if (selected) {
        lotteryCount++;
        console.log(`Actual lottery count: ${lotteryCount}`);

        // displayArea.classList.remove('spinning'); // ここは不要、spinAnimation()が担当

        selectedImage.style.transition = 'none'; // アニメーションを一時的に無効
        selectedImage.style.transform = 'scale(0)';
        selectedImage.style.opacity = '0';
        selectedImage.src = `images/${selected.image}`;
        selectedName.src = `images/${selected.nameImage}`;
        console.log(`Final result: ${selected.name}, image: ${selected.image}`);

        selectedImage.offsetHeight; // 強制リフロー

        setTimeout(() => {
            selectedImage.style.transition = 'transform 1.0s ease-out, opacity 1.0s ease-in';
            selectedImage.style.transform = 'scale(1)';
            selectedImage.style.opacity = '1';
            console.log("Final image animation started.");
        }, 50); // 短い遅延を置いてアニメーション開始

        setTimeout(() => {
            showResultElements(); // おめでとうメッセージや名前画像などを表示

            // 残りの表示回数を計算し、31回目以降は非表示にするロジック
            const displayRemainingCount = MAX_DISPLAY_COUNT - lotteryCount;
            // remainingCountDisplayがnullでないことを確認
            if (remainingCountDisplay) {
                if (displayRemainingCount > 0) {
                    remainingCountDisplay.textContent = `Last... ${displayRemainingCount} `;
                    remainingCountDisplay.classList.remove('hidden'); // 表示
                    console.log(`Displayed remaining count: ${displayRemainingCount}`);
                } else {
                    // 表示すべき回数が0以下になった場合 (31回目以降)
                    remainingCountDisplay.classList.add('hidden'); // 非表示
                    console.log("Displayed remaining count is 0 or less. Hiding display.");
                }
            }


            // ボタンの状態は、全員抽選済みになった場合のみ変更
            if (currentParticipants.length === 0) {
                startButton.textContent = "全員抽選終了"; // 全員抽選済みのメッセージ
                startButton.classList.remove('hidden'); // ボタンは表示する
                startButton.style.pointerEvents = 'none'; // クリック不可にする
                startButton.classList.remove('rerun-button'); // スタイルも戻す
                alert("全員抽選済みです！"); // アラートで通知
                console.log("All participants drawn. Button disabled.");
            } else {
                startButton.textContent = "もう一度抽選"; // 次の抽選へ促すテキスト
                startButton.classList.remove('hidden'); // ボタンを表示
                startButton.style.pointerEvents = 'auto'; // クリック可能に
                startButton.classList.add('rerun-button'); // "もう一度抽選"ボタンのスタイルを適用
                console.log("Button text set to 'もう一度抽選' and rerun-button class added.");
            }

        }, 1200); // 最終画像の表示アニメーションが完了した後にボタンなどを表示
    }
}

// 参加者の中からランダムに一人選ぶ関数 (重複なし)
function getRandomParticipant() {
    if (currentParticipants.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * currentParticipants.length);
    const selected = currentParticipants[randomIndex];
    currentParticipants.splice(randomIndex, 1); // 選ばれた人を配列から削除（重複防止）
    return selected;
}

// ページロード時に導入画像を表示 (初期状態)
document.addEventListener('DOMContentLoaded', () => {
    preloadAllImages(); // 全画像をプリロード

    // 導入画像を初期表示
    if (introImage) {
        introImage.classList.remove('hidden');
        console.log("DOMContentLoaded: introImage displayed.");
    }
    // 初期状態ではstartButtonに.rerun-buttonクラスがないことを確認
    startButton.classList.remove('rerun-button');
    console.log("DOMContentLoaded: Initial state set. Rerun class ensured absent.");

    // remainingCountDisplayはHTMLに直接配置されるので、ここで初期状態をhiddenにする
    if (remainingCountDisplay) {
        remainingCountDisplay.classList.add('hidden');
        console.log("DOMContentLoaded: remainingCountDisplay initially hidden.");
    }

    // 開始ボタンにイベントリスナーを設定
    startButton.addEventListener('click', handleStartButtonClick);
});

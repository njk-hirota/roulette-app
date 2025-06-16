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
// スピニング時間とアニメーション関連の変数
let animationInterval; // setIntervalのIDを保持
let totalSpinTime = 2000; // スピニングの合計時間（ミリ秒）
const imageChangeInterval = 50; // 画像が変わる間隔（ミリ秒）

let lotteryCount = 0; // 抽選回数をカウントする変数
const MAX_DISPLAY_COUNT = 31; // 表示する抽選回数の上限（この回数までカウントダウン表示）

// DOM要素の取得 (DOMContentLoaded内で初期化する要素もあるため注意)
const container = document.querySelector('.container');
const introImage = document.getElementById('introImage');
// startButton と remainingCountDisplay は動的に生成されるため、ここでは取得しない

// 動的に追加される要素を保持するための変数 (display-areaと関連要素)
let displayArea;
let congratulationsMessage;
let selectedImage;
let selectedName;
let resultActionsDiv; // result-actionsへの参照を保持
let leftImage;
let rightImage;
let imageRow;
let startButton; // ★追加★ script内で生成するためletで宣言
let remainingCountDisplay; // ★追加★ script内で生成するためletで宣言


// すべての画像をプリロードする関数
function preloadAllImages() {
    allParticipants.forEach(p => {
        const img = new Image();
        img.src = `images/${p.image}`;
        const nameImg = new Image();
        nameImg.src = `images/${p.nameImage}`;
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
    displayArea.classList.add('display-area');

    congratulationsMessage = document.createElement('span');
    congratulationsMessage.id = 'congratulationsMessage';
    congratulationsMessage.classList.add('hidden');
    congratulationsMessage.textContent = 'おめでとうございます！';

    imageRow = document.createElement('div');
    imageRow.classList.add('image-row');

    leftImage = document.createElement('img');
    leftImage.id = 'leftImage';
    leftImage.alt = '左の画像';
    leftImage.src = 'images/left_side_image.png';
    leftImage.classList.add('side-image');
    leftImage.classList.add('hidden');

    selectedImage = document.createElement('img');
    selectedImage.id = 'selectedImage';
    selectedImage.alt = '選ばれた画像';
    selectedImage.src = '';

    rightImage = document.createElement('img');
    rightImage.id = 'rightImage';
    rightImage.alt = '右の画像';
    rightImage.src = 'images/right_side_image.png';
    rightImage.classList.add('side-image');
    rightImage.classList.add('hidden');

    imageRow.appendChild(leftImage);
    imageRow.appendChild(selectedImage);
    imageRow.appendChild(rightImage);

    resultActionsDiv = document.createElement('div');
    resultActionsDiv.classList.add('result-actions');

    selectedName = document.createElement('img');
    selectedName.id = 'selectedName';
    selectedName.alt = '選ばれた名前';
    selectedName.src = '';

    // ★追加・修正ここから★
    // startButtonとremainingCountDisplayを動的に生成
    startButton = document.createElement('button');
    startButton.id = 'startButton';
    startButton.classList.add('action-button');
    startButton.textContent = '抽選開始'; // 初期テキスト設定

    remainingCountDisplay = document.createElement('div');
    remainingCountDisplay.id = 'remainingCountDisplay';
    remainingCountDisplay.classList.add('hidden');

    resultActionsDiv.appendChild(selectedName);
    resultActionsDiv.appendChild(startButton); // ボタンを名前画像の下に追加
    // ★追加・修正ここまで★

    displayArea.appendChild(congratulationsMessage);
    displayArea.appendChild(imageRow);
    displayArea.appendChild(resultActionsDiv);
    // remainingCountDisplayはdisplayAreaの直下に配置
    displayArea.appendChild(remainingCountDisplay); // ★追加★

    const topImageContainer = document.querySelector('.top-image-container');
    if (topImageContainer) {
        topImageContainer.after(displayArea);
    } else {
        container.appendChild(displayArea); // Fallback: コンテナの最後に追加
    }
    console.log("Display area created and appended.");

    // ボタンにイベントリスナーを設定 (createDisplayArea内で作成されるようになったため、ここで設定)
    startButton.addEventListener('click', handleStartButtonClick);
}

// display-areaを削除する関数 (初期状態に戻すため)
function removeDisplayArea() {
    if (displayArea && displayArea.parentNode) {
        displayArea.parentNode.removeChild(displayArea);
        displayArea = null;
        congratulationsMessage = null;
        selectedImage = null;
        selectedName = null;
        resultActionsDiv = null;
        leftImage = null;
        rightImage = null;
        imageRow = null;
        startButton = null; // ★追加★ 参照をクリア
        remainingCountDisplay = null; // ★追加★ 参照をクリア
        console.log("Display area removed and references cleared.");
    }
}

// 抽選結果関連の要素を非表示にする関数
function hideAllResults() {
    if (congratulationsMessage) congratulationsMessage.classList.add('hidden');
    if (selectedImage) {
        selectedImage.classList.add('hidden');
        selectedImage.style.transform = 'scale(0)';
        selectedImage.style.opacity = '0';
    }
    if (selectedName) selectedName.classList.add('hidden');
    if (resultActionsDiv) resultActionsDiv.classList.add('hidden');
    if (remainingCountDisplay) remainingCountDisplay.classList.add('hidden');
    console.log("All result elements hidden. Side images will remain visible.");
}

// スピニングアニメーションの実行
function spinAnimation() {
    hideAllResults();

    if (leftImage) leftImage.classList.remove('hidden');
    if (rightImage) rightImage.classList.remove('hidden');

    if (selectedImage) {
        selectedImage.classList.remove('hidden');
        selectedImage.style.transition = 'none';
        selectedImage.style.transform = 'scale(1)';
        selectedImage.style.opacity = '1';
        selectedImage.offsetHeight;
    }

    animationInterval = setInterval(() => {
        spinImages();
    }, imageChangeInterval);

    setTimeout(() => {
        clearInterval(animationInterval);
        console.log("Spinning animation ended.");
        displayFinalResult();
    }, totalSpinTime);
}


// 抽選結果関連の要素を表示する関数
function showResultElements() {
    if (congratulationsMessage) congratulationsMessage.classList.remove('hidden');
    if (selectedImage) selectedImage.classList.remove('hidden');
    if (selectedName) selectedName.classList.remove('hidden');
    if (resultActionsDiv) resultActionsDiv.classList.remove('hidden');
    if (resultActionsDiv) resultActionsDiv.style.opacity = '1';
    console.log("Result elements shown.");
}

// スピニング中の画像切り替え
function spinImages() {
    const randomIndex = Math.floor(Math.random() * allParticipants.length);
    const participant = allParticipants[randomIndex];
    if (selectedImage) {
        selectedImage.src = `images/${participant.image}`;
    }
}

// 抽選開始ボタンのクリックハンドラ
function handleStartButtonClick() {
    console.log("Start button clicked.");

    if (currentParticipants.length === 0) {
        alert("全員抽選済みです！これ以上抽選できません。");
        if (startButton) { // startButtonがnullでないことを確認
            startButton.classList.add('hidden');
            startButton.style.pointerEvents = 'none';
        }
        if (displayArea) { removeDisplayArea(); }
        if (introImage) { introImage.classList.add('hidden'); }
        // remainingCountDisplayは動的に生成されるようになったので、ここでの処理は不要
        // if (remainingCountDisplay) { remainingCountDisplay.classList.add('hidden'); }
        return;
    }

    if (introImage) {
        introImage.classList.add('hidden');
        console.log("Intro image hidden.");
    }
    
    // display-areaがまだ存在しない場合に作成
    if (!displayArea) {
        createDisplayArea();
        console.log("Display area was not present, created now.");
    } else {
        hideAllResults();
        if (leftImage) leftImage.classList.remove('hidden');
        if (rightImage) rightImage.classList.remove('hidden');
        console.log("Existing display area reset, side images kept visible.");
    }

    displayArea.classList.remove('hidden');

    // ★修正ここから★
    // startButtonがnullでないことを確認してから操作
    if (startButton) {
        startButton.classList.add('hidden'); // スピニング中はボタンを非表示に
        startButton.style.pointerEvents = 'none'; // クリックできないようにする
        startButton.classList.remove('rerun-button'); // 念のためrerun-buttonクラスを削除しておく
    }
    // remainingCountDisplayもdisplayArea内で動的に生成されるので、ここで非表示
    if (remainingCountDisplay) {
        remainingCountDisplay.classList.add('hidden');
    }
    // ★修正ここまで★

    spinAnimation();
    console.log("Spinning animation initiated.");
}

// 最終結果を表示する関数
function displayFinalResult() {
    console.log("displayFinalResult called.");

    if (currentParticipants.length === 0) {
        alert("全員抽選済みです！これ以上抽選できません。");
        if (startButton) {
            startButton.textContent = "全員抽選終了";
            startButton.classList.remove('hidden');
            startButton.style.pointerEvents = 'none';
            startButton.classList.remove('rerun-button');
        }
        if (displayArea) { removeDisplayArea(); }
        if (remainingCountDisplay) { remainingCountDisplay.classList.add('hidden'); }
        return;
    }

    const selected = getRandomParticipant();

    if (selected) {
        lotteryCount++;
        console.log(`Actual lottery count: ${lotteryCount}`);

        selectedImage.style.transition = 'none';
        selectedImage.style.transform = 'scale(0)';
        selectedImage.style.opacity = '0';
        selectedImage.src = `images/${selected.image}`;
        selectedName.src = `images/${selected.nameImage}`;
        console.log(`Final result: ${selected.name}, image: ${selected.image}`);

        selectedImage.offsetHeight;

        setTimeout(() => {
            selectedImage.style.transition = 'transform 1.0s ease-out, opacity 1.0s ease-in';
            selectedImage.style.transform = 'scale(1)';
            selectedImage.style.opacity = '1';
            console.log("Final image animation started.");
        }, 50);

        setTimeout(() => {
            showResultElements();

            const displayRemainingCount = MAX_DISPLAY_COUNT - lotteryCount;
            if (remainingCountDisplay) {
                if (displayRemainingCount > 0) {
                    remainingCountDisplay.textContent = `Last... ${displayRemainingCount} `;
                    remainingCountDisplay.classList.remove('hidden');
                    console.log(`Displayed remaining count: ${displayRemainingCount}`);
                } else {
                    remainingCountDisplay.classList.add('hidden');
                    console.log("Displayed remaining count is 0 or less. Hiding display.");
                }
            }

            // ★修正ここから★
            if (startButton) {
                startButton.textContent = "もう一度抽選";
                startButton.classList.remove('hidden');
                startButton.style.pointerEvents = 'auto';
                startButton.classList.add('rerun-button');
                console.log("Button text set to 'もう一度抽選' and rerun-button class added.");
            }
            // ★修正ここまで★

        }, 1200);
    }
}

// 参加者の中からランダムに一人選ぶ関数 (重複なし)
function getRandomParticipant() {
    if (currentParticipants.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * currentParticipants.length);
    const selected = currentParticipants[randomIndex];
    currentParticipants.splice(randomIndex, 1);
    return selected;
}

// ページロード時に導入画像を表示 (初期状態)
document.addEventListener('DOMContentLoaded', () => {
    preloadAllImages();

    if (introImage) {
        introImage.classList.remove('hidden');
        console.log("DOMContentLoaded: introImage displayed.");
    }
    
    // 初回ロード時にdisplayAreaを作成し、その中でstartButtonを生成
    // HTMLからボタンを削除したので、ここで動的に生成する
    createDisplayArea(); 
    
    // 初回表示時にはstartButtonとremainingCountDisplayは隠しておく
    if (startButton) {
        startButton.classList.add('hidden');
    }
    if (remainingCountDisplay) {
        remainingCountDisplay.classList.add('hidden');
    }
    // introImageのみを表示する状態にする
    displayArea.classList.add('hidden');

    console.log("DOMContentLoaded: Initial state set. Rerun class ensured absent.");
    console.log("DOMContentLoaded: Initial button state set to '抽選開始'.");

    // 初期状態では、introImageのみ表示し、抽選開始ボタンはintroImageの上、またはintroImageの下に重ねて表示する。
    // そのため、introImageにクリックイベントリスナーを追加するか、
    // 別の「スタート」ボタンをintroImageの上に配置する。
    // 今回はintroImageをクリックしたら抽選開始するように変更します。
    // もしくは、ボタンは常に画面下部に表示しておき、introImageとdisplayAreaを切り替える方式にする。
    // ここではシンプルに、introImageがクリックされたら抽選を開始し、ボタンを出現させるようにします。

    // introImageがクリックされたら抽選開始
    if (introImage) {
        introImage.addEventListener('click', handleStartButtonClick);
    }

    // 初回ロード時にstartButtonを表示する必要がある場合、以下のコメントアウトを外す
    // if (startButton) {
    //     startButton.classList.remove('hidden');
    //     startButton.style.pointerEvents = 'auto';
    //     startButton.textContent = "抽選開始";
    // }
});

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


let currentParticipants = [...allParticipants]; // シャローコピーを作成
let spinningInterval; // スピニング中の画像を切り替えるためのインターバルID

const startButton = document.getElementById('startButton');
const displayArea = document.querySelector('.display-area');
const selectedImage = document.getElementById('selectedImage');
const selectedName = document.getElementById('selectedName');
const congratulationsMessage = document.getElementById('congratulationsMessage');
const container = document.querySelector('.container');
const resultActions = document.querySelector('.result-actions');
const introImage = document.getElementById('introImage'); // 導入画像の要素を取得

// すべての画像をプリロードするための配列
const preloadedImages = {}; // 画像オブジェクトを保持する連想配列

// 画像をプリロードする関数
function preloadAllImages() {
    allParticipants.forEach(participant => {
        // 通常の画像
        const img = new Image();
        img.src = `images/${participant.image}`;
        img.onload = () => console.log(`Preloaded: ${participant.image}`);
        img.onerror = () => console.error(`Error preloading: ${participant.image}`);
        preloadedImages[participant.image] = img; // 後で参照できるように格納

        // 名前画像
        const nameImg = new Image();
        nameImg.src = `images/${participant.nameImage}`;
        nameImg.onload = () => console.log(`Preloaded: ${participant.nameImage}`);
        nameImg.onerror = () => console.error(`Error preloading: ${participant.nameImage}`);
        preloadedImages[participant.nameImage] = nameImg; // 後で参照できるように格納
    });
    // 導入画像もプリロード対象に含める
    if (introImage) {
        const introImg = new Image();
        introImg.src = introImage.src; // introImageの現在のsrcを使用
        introImg.onload = () => console.log(`Preloaded: introImage (${introImage.src})`);
        introImg.onerror = () => console.error(`Error preloading: introImage (${introImage.src})`);
        preloadedImages['introImage'] = introImg;
    }
    console.log("All images preloading initiated.");
}

// 初期表示を隠す関数 (introImageは含めない)
function hideAllResults() {
    selectedImage.style.transform = 'scale(0)';
    selectedImage.style.opacity = '0';
    selectedImage.classList.add('hidden'); // hiddenクラスを付けて表示を完全に消す

    selectedName.style.opacity = '0';
    selectedName.classList.add('hidden'); // hiddenクラスを付けて表示を完全に消す

    congratulationsMessage.style.opacity = '0';
    congratulationsMessage.classList.add('hidden'); // hiddenクラスを付けて表示を完全に消す

    if (resultActions) {
        resultActions.style.opacity = '0';
        resultActions.classList.add('hidden'); // hiddenクラスを付けて表示を完全に消す
    }
    console.log("hideAllResults: All result elements are now hidden.");
}

// 結果表示関連の要素を表示するヘルパー関数
function showResultElements() {
    // 導入画像を隠す
    if (introImage) {
        introImage.classList.add('hidden');
        console.log("showResultElements: introImage hidden.");
    }

    // これらの要素をアニメーションを始めるために、初期状態から最終状態へ移行させる
    // hiddenクラスを削除してdisplay:block/flexにする
    if (congratulationsMessage) {
        congratulationsMessage.classList.remove('hidden');
        congratulationsMessage.style.transition = 'opacity 1.0s ease-in-out';
        congratulationsMessage.style.opacity = '1';
    }

    if (resultActions) {
        resultActions.classList.remove('hidden');
        resultActions.style.transition = 'opacity 1.0s ease-in-out';
        resultActions.style.opacity = '1';
    }
    if (selectedName) {
        selectedName.classList.remove('hidden');
        selectedName.style.transition = 'opacity 1.0s ease-in-out';
        selectedName.style.opacity = '1';
    }
    
    console.log("showResultElements: All result elements are now visible.");

    // 残り人数によってボタンの表示を切り替える
    if (currentParticipants.length === 0) {
        startButton.classList.add('hidden');
        startButton.style.pointerEvents = 'none'; // クリック無効化
        console.log("showResultElements: No more participants, button hidden.");
    } else {
        // まだ参加者が残っている場合、ボタンを再表示し、クリックを有効にする
        startButton.classList.remove('hidden');
        startButton.style.pointerEvents = 'auto'; // クリック有効化
        console.log("showResultElements: Participants remain, button visible.");
        
        // 次の抽選に備えて、introImageを再表示する（最初の画面状態に戻る）
        if (introImage) {
            introImage.classList.remove('hidden');
            console.log("showResultElements: introImage re-displayed for next draw.");
        }
    }
}


// 抽選開始ボタンのクリックハンドラ
function handleStartButtonClick() {
    // 導入画像を隠す
    if (introImage) {
        introImage.classList.add('hidden');
        console.log("handleStartButtonClick: introImage hidden.");
    }

    // ボタンがクリックされたら、まずボタンを隠して無効化
    startButton.classList.add('hidden');
    startButton.style.pointerEvents = 'none'; // クリック無効化
    console.log("handleStartButtonClick: button hidden and disabled.");


    if (currentParticipants.length === 0) {
        alert("全員が抽選されました！ページをリロードして再開してください。");
        // 全員抽選済みの場合はボタンを表示せず、無効のままにする
        startButton.classList.add('hidden');
        startButton.style.pointerEvents = 'none';
        console.log("handleStartButtonClick: No participants left, preventing draw.");
        return;
    }

    // 古い結果を隠す
    hideAllResults();
    console.log("handleStartButtonClick: Old results hidden.");

    // スピニングクラスを付与
    container.classList.add('spinning');
    console.log("handleStartButtonClick: Spinning class added to container.");

    // selectedImageをすぐに表示状態にする（アニメーション開始のため）
    selectedImage.classList.remove('hidden'); // hiddenクラスを削除
    selectedImage.style.transform = 'scale(1)'; // スピニング中の状態を維持
    selectedImage.style.opacity = '1'; // スピニング中の状態を維持

    // 抽選中の画像をランダムに表示するための準備
    // スピニング中はtransitionを無効にする
    selectedImage.style.transition = 'none';

    let spinningCounter = 0;
    const finalSpinDuration = 2000; // シャッフル時間を2秒に固定 (ミリ秒)
    const imageChangeInterval = 80; // 画像を切り替える間隔（ミリ秒）

    spinningInterval = setInterval(() => {
        // 全参加者の中からランダムな画像を表示（抽選済みは除く）
        const randomParticipant = allParticipants[Math.floor(Math.random() * allParticipants.length)];
        selectedImage.src = `images/${randomParticipant.image}`;
        
        spinningCounter += imageChangeInterval;
        if (spinningCounter >= finalSpinDuration) { // 最終的な抽選時間で停止
            clearInterval(spinningInterval); // ランダム表示を停止
            displayFinalResult(); // 最終結果を表示する関数を呼び出す
        }
    }, imageChangeInterval);
    console.log("handleStartButtonClick: Spinning started.");
}


// 最終結果を表示する関数
function displayFinalResult() {
    const selected = getRandomParticipant(); // 最終的な抽選結果を取得

    // まずはスピニングクラスを削除（スピニング中の状態が解除される）
    container.classList.remove('spinning');
    console.log("displayFinalResult: Spinning class removed from container.");

    if (selected) {
        // 最終結果の画像と名前画像を設定
        selectedImage.src = `images/${selected.image}`;
        selectedName.src = `images/${selected.nameImage}`;

        // transitionを一時的に無効にして、アニメーションの初期状態（scale(0), opacity(0)）を瞬時に設定
        selectedImage.style.transition = 'none';
        selectedImage.style.transform = 'scale(0)';
        selectedImage.style.opacity = '0';

        // 強制リフロー: これにより、上記 'none' と scale(0)/opacity(0) の状態がブラウザに適用される
        selectedImage.offsetHeight; // この行が重要！

        // わずかな遅延の後、アニメーションを開始するための最終状態を設定
        // ここでtransitionを再有効化し、目的の状態（scale(1), opacity(1)）へ移行させる
        setTimeout(() => {
            selectedImage.style.transition = 'transform 1.0s ease-out, opacity 1.0s ease-in'; // transitionを有効に戻す
            selectedImage.style.transform = 'scale(1)';
            selectedImage.style.opacity = '1';
            console.log("displayFinalResult: selectedImage animation started.");
        }, 50); // 短い遅延 (この遅延は、上記のスタイル設定がブラウザに適用される時間を与えるためのもの)

        // selectedImageのアニメーションと同時に、他の要素も表示開始
        // selectedImageのsetTimeoutと同じタイミングで呼び出すことで同期
        setTimeout(() => {
            showResultElements(); // 結果のメッセージと名前画像を表示
        }, 50); // selectedImageのsetTimeoutと同じ短い遅延

    } else {
        console.log("No more participants to draw for final result.");
        // 全員抽選済みの場合はボタンを非表示に
        startButton.classList.add('hidden');
        startButton.style.pointerEvents = 'none';
        // 全員抽選済みの場合、introImageは表示しない
        if (introImage) {
            introImage.classList.add('hidden');
            console.log("displayFinalResult: No participants left, introImage hidden.");
        }
    }
}


startButton.addEventListener('click', handleStartButtonClick);

// ページロード時に導入画像を表示 (初期状態)
document.addEventListener('DOMContentLoaded', () => {
    // プリロードを開始
    preloadAllImages();

    // 導入画像を初期表示
    if (introImage) {
        introImage.classList.remove('hidden');
        console.log("DOMContentLoaded: introImage displayed.");
    }
    // 初期状態で抽選結果関連の要素は隠しておく
    hideAllResults();
    // ボタンは常に表示されている状態から始める
    startButton.classList.remove('hidden');
    startButton.style.pointerEvents = 'auto';
    console.log("DOMContentLoaded: Initial setup complete.");
});

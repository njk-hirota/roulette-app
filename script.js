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
const honorific = document.getElementById('honorific');
const congratulationsMessage = document.getElementById('congratulationsMessage');
const container = document.querySelector('.container');
const resultActions = document.querySelector('.result-actions');

// すべての画像をプリロードするための配列
const preloadedImages = {}; // 画像オブジェクトを保持する連想配列

// 画像をプリロードする関数
function preloadAllImages() {
    allParticipants.forEach(participant => {
        // 通常の画像
        const img = new Image();
        img.src = `images/${participant.image}`;
        preloadedImages[participant.image] = img; // 後で参照できるように格納

        // 名前画像
        const nameImg = new Image();
        nameImg.src = `images/${participant.nameImage}`;
        preloadedImages[participant.nameImage] = nameImg; // 後で参照できるように格納
    });
    console.log("All images preloaded.");
}

// ページロード時に画像をプリロード
preloadAllImages();


// 初期表示を隠す関数
function hideAllResults() {
    selectedImage.classList.add('hidden');
    selectedImage.style.transform = 'scale(0)';
    selectedImage.style.opacity = '0';
    selectedName.classList.add('hidden');
    selectedName.style.opacity = '0';
    honorific.classList.add('hidden');
    honorific.style.opacity = '0';
    congratulationsMessage.classList.add('hidden');
    congratulationsMessage.style.opacity = '0';
    if (resultActions) {
        resultActions.classList.add('hidden');
        resultActions.style.opacity = '0';
    }
}

// ページロード時に全て隠す
hideAllResults();

// 抽選処理
function getRandomParticipant() {
    if (currentParticipants.length === 0) {
        alert("全員が抽選されました！");
        return null;
    }
    const randomIndex = Math.floor(Math.random() * currentParticipants.length);
    const selected = currentParticipants[randomIndex];
    currentParticipants.splice(randomIndex, 1); // 抽選された人をリストから削除
    return selected;
}

// 結果表示関連の要素を表示するヘルパー関数
function showResultElements() {
    if (congratulationsMessage) {
        congratulationsMessage.style.transition = 'opacity 1.5s ease-in-out';
        congratulationsMessage.classList.remove('hidden');
        congratulationsMessage.style.opacity = '1';
    }

    if (resultActions) {
        resultActions.style.transition = 'opacity 1.5s ease-in-out';
        resultActions.classList.remove('hidden');
        resultActions.style.opacity = '1';
    }
    if (selectedName) {
        selectedName.style.transition = 'opacity 1.5s ease-in-out';
        selectedName.classList.remove('hidden');
        selectedName.style.opacity = '1';
    }
    if (honorific) {
        honorific.style.transition = 'opacity 1.5s ease-in-out';
        honorific.classList.remove('hidden');
        honorific.style.opacity = '1';
    }
    console.log("handleStartButtonClick: Final result displayed with zoom-in.");

    // 残り人数によってボタンの表示を切り替える
    if (currentParticipants.length === 0) {
        startButton.classList.add('hidden');
        startButton.style.pointerEvents = 'none';
    } else {
        startButton.classList.remove('hidden');
        startButton.style.pointerEvents = 'auto';
    }
}


// 抽選開始ボタンのクリックハンドラ
function handleStartButtonClick() {
    if (currentParticipants.length === 0) {
        alert("全員が抽選されました！ページをリロードして再開してください。");
        return;
    }

    // 古い結果を隠す
    hideAllResults();

    // スピニングクラスを付与
    container.classList.add('spinning');
    startButton.classList.add('hidden'); // ボタンを隠す

    // selectedImageをすぐに表示状態にする（アニメーション開始のため）
    selectedImage.classList.remove('hidden');
    selectedImage.style.transform = 'scale(1)'; // スケールを1に戻す
    selectedImage.style.opacity = '1'; // 透明度を1に戻す

    // 抽選中の画像をランダムに表示するための準備
    // スピニング中はtransitionを無効にする
    selectedImage.style.transition = 'none'; // ランダム表示中はトランジションを無効化

    let spinningCounter = 0;
    const minSpinDuration = 2000; // 抽選アニメーションの最短時間（ミリ秒）
    const maxSpinDuration = 4000; // 抽選アニメーションの最長時間（ミリ秒）
    const finalSpinDuration = Math.random() * (maxSpinDuration - minSpinDuration) + minSpinDuration; // ランダムな抽選時間
    const imageChangeInterval = 80; // 画像を切り替える間隔（ミリ秒）

    spinningInterval = setInterval(() => {
        // 全参加者の中からランダムな画像を表示
        const randomParticipant = allParticipants[Math.floor(Math.random() * allParticipants.length)];
        selectedImage.src = `images/${randomParticipant.image}`;
        
        spinningCounter += imageChangeInterval;
        if (spinningCounter >= finalSpinDuration) {
            clearInterval(spinningInterval); // ランダム表示を停止
            displayFinalResult(); // 最終結果を表示する関数を呼び出す
        }
    }, imageChangeInterval);
}


// 最終結果を表示する関数
function displayFinalResult() {
    const selected = getRandomParticipant(); // 最終的な抽選結果を取得

    // まずはスピニングクラスを削除（スピニング中の状態が解除される）
    container.classList.remove('spinning');

    if (selected) {
        // フェードイン効果のために一度透明度を0にする
        selectedImage.style.opacity = '0'; // ★追加: 一度透明度を0に

        // transitionを有効に戻す
        selectedImage.style.transition = 'transform 1.0s ease-out, opacity 1.0s ease-in'; // ★修正

        // 最終結果の画像を設定
        selectedImage.src = `images/${selected.image}`;
        selectedName.src = `images/${selected.nameImage}`;
        
        // 短い遅延を入れてから透明度を1に戻し、フェードインアニメーションをトリガー
        setTimeout(() => {
            selectedImage.style.opacity = '1'; // ★修正: ここでopacityを1に戻す
        }, 50); // 短い遅延（ブラウザがopacity:0を認識するのに必要）

        // selectedImageのアニメーションが完了するのを待つ（またはフォールバック）
        // opacityのtransitionもここで完了を待つ
        let animationFinished = false;

        selectedImage.addEventListener('transitionend', function handler(event) {
            // opacityのtransitionendイベントのみを対象にする
            if (event.propertyName === 'opacity' && !animationFinished) { // ★修正：propertyNameをチェック
                animationFinished = true;
                selectedImage.removeEventListener('transitionend', handler);
                showResultElements(); // 結果のメッセージと名前画像を表示
            }
        }, { once: true });

        // フォールバック: transitionendが発火しない場合に備え、少し遅れて強制的に表示
        setTimeout(() => {
            if (!animationFinished) {
                animationFinished = true;
                showResultElements();
            }
        }, 1200); // selectedImageのtransitionが1.0sなので、それより少し長めに設定
        
    } else {
        console.log("No more participants to draw for final result.");
        // 全員抽選済みの場合はボタンを非表示に
        startButton.classList.add('hidden');
        startButton.style.pointerEvents = 'none';
    }
}


startButton.addEventListener('click', handleStartButtonClick);

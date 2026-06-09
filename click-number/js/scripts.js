let startTime;
let timerInterval;

document.getElementById("startBtn").addEventListener("click", function() {
    document.getElementById("startScreen").style.display = "none";
    startGame();
});

document.getElementById("retryBtn").addEventListener("click", function() {
    document.getElementById("resultScreen").style.display = "none";
    startGame();
});

function startGame() {
    document.getElementById("main").innerHTML = ""; // 前回のボタン削除

    let next = 1;
    let originalBg = document.body.style.backgroundColor;

    // ★ タイマー開始
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 10);

    document.remove = function(id) {
        if (id === next) {
            const btn = document.getElementById(id);
            const color = btn.style.backgroundColor;

            // 背景を一瞬その色に
            document.body.style.backgroundColor = color;
            setTimeout(() => {
                document.body.style.backgroundColor = originalBg;
            }, 150);

            document.getElementById("main").removeChild(btn);
            next++;

            // ★ 最後の1を押したらゲーム終了
            if (next === 10) {
                endGame();
            }
        }
    };

    // ★ ボタン生成
    for (let num = 9; num > 0; num--) {
        let elm = document.createElement("button");
        elm.innerHTML = num;
        elm.id = num;
        elm.className = "circle";
        elm.setAttribute("onclick", "remove(" + num + ")");

        // ランダム色
        elm.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

        // ランダム位置
        let left_pos = 10 + Math.floor(Math.random() * 400);
        let top_pos = 100 + Math.floor(Math.random() * 600);
        elm.style.left = left_pos + "px";
        elm.style.top = top_pos + "px";

        document.getElementById("main").appendChild(elm);
    }
}

// ★ タイマー更新
function updateTimer() {
    let now = Date.now();
    let elapsed = now - startTime;
    let sec = (elapsed / 1000).toFixed(2);

    // 画面に表示したいならここに書く
    // console.log(sec);
}

// ★ ゲーム終了処理
function endGame() {
    clearInterval(timerInterval);

    let elapsed = (Date.now() - startTime) / 1000;
    document.getElementById("timeResult").textContent =
        "クリアタイム: " + elapsed.toFixed(2) + " 秒";

    document.getElementById("resultScreen").style.display = "flex";
}

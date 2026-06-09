document.getElementById("startBtn").addEventListener("click", function() {
    // スタート画面を消す
    document.getElementById("startScreen").style.display = "none";

    // ゲーム開始
    startGame();
});

function startGame() {
    var next = 1;
    var originalBg = document.body.style.backgroundColor;

    document.remove = function(id) {
        if (id === next) {
            const btn = document.getElementById(id);
            const color = btn.style.backgroundColor;

            // 背景を一瞬その色に
            document.body.style.backgroundColor = color;
            setTimeout(() => {
                document.body.style.backgroundColor = originalBg;
            }, 200);

            document.getElementById("main").removeChild(btn);
            next++;
        }
    };

    // 9〜1 のボタン生成
    for (var num = 9; num > 0; num--) {
        var elm = document.createElement("button");
        elm.innerHTML = num;
        elm.id = num;
        elm.className = "circle";
        elm.setAttribute("onclick", "remove(" + num + ")");

        // ランダム色
        elm.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

        // ランダム位置
        var left_pos = 10 + Math.floor(Math.random() * 400);
        var top_pos = 100 + Math.floor(Math.random() * 600);
        elm.style.left = left_pos + "px";
        elm.style.top = top_pos + "px";

        document.getElementById("main").appendChild(elm);
    }
}

document.getElementById('draw').addEventListener('click', function(){
    const omikujiResults = ['大大大吉','大大吉','大吉', '中吉', '小吉', '末吉', '凶', '大凶',  '大大凶'];
    const result = omikujiResults[Math.floor(Math.random()*omikujiResults.length)];
    const resultElement = document.getElementById('result');

    resultElement.textContent = `あなたの運勢は... ${result}!`;

    // 背景アニメーションを一度リセット
    document.body.classList.remove("rainbow-bg", "ominous-bg");

    let color = 'black';

    if (result === '大大大吉') {
        color = 'red';
        // ★ 虹色背景
        document.body.classList.add("rainbow-bg");

    } else if (result === '大大吉' || result === '大吉') {
        color = 'red';

    } else if (result === '中吉' || result === '小吉' || result === '末吉') {
        color = 'green';

    } else if (result === '大凶' || result === '凶') {
        color = 'blue';

    } else if (result === '大大凶') {
        color = 'purple';
        // ★ 不吉背景
        document.body.classList.add("ominous-bg");
    }

    resultElement.style.color = color;
});

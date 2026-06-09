document.getElementById('draw').addEventListener('click', function(){
    const omikujiResults = ['大大大吉','大大吉','大吉', '中吉', '小吉', '末吉', '凶', '大凶',  '大大凶'];
    const result = omikujiResults[Math.floor(Math.random()*omikujiResults.length)];
    document.getElementById('result').textContent = `あなたの運勢は... ${result}!`;
    let color = 'black';

    if (result === '大大大吉' || result === '大大吉' || result === '大吉') {
        color = 'red';
    } else if (result === '中吉' || result === '小吉' || result === '末吉') {
        color = 'green';
    } else if (result === '凶') {
        color = 'blue';
    } else if (result === '大凶' || result === '大大凶') {
        color = 'purple';
    }
    result.style.color = color;

});

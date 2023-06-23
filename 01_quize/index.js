const question = 'キティちゃんの体重は？';
const answers = [
    'りんご3個分',
    'りんご5個分',
    'バナナ1個分',
    '火星1個分'
];
const correct = 'りんご3個分';

document.getElementById('js-question').textContent = question;

const button = document.getElementsByTagName('button');

//定数の文字列をHTMLに反映させる
button[0].textContent = answers[0];
button[1].textContent = answers[1];
button[2].textContent = answers[2];
button[3].textContent = answers[3];

//ボタンをクリックしたら正誤判定
button[0].addEventListener('click', ()=>{
    if(correct === document.getElementsByTagName('button')[0].textContent){
        window.alert('正解！');
    }else {
        window.alert('不正解！');
    }
});
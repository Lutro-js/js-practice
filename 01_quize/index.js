const quiz = [
    {
        question: 'キティちゃんの体重は？',
        answers: [
            'りんご3個分',
            'りんご5個分',
            'バナナ1個分',
            '火星1個分'
    ],
    correct: 'りんご3個分'
    },{
        question: 'キキとララの身長は何センチ？',
        answers: [
            '月の半分',
            '月',
            '地球',
            '太陽'
    ],
    correct: '月'

    },{
        question: 'シナモンの誕生日は？',
        answers: [
            '4月4日',
            '7月10日',
            '3月6日',
            '12月25日'
    ],
    correct: '3月6日'

    },{
        question: 'マイメロの好きな食べ物は？',
        answers: [
            'フォンダンショコラ',
            'カタラーナ',
            'アーモンドパウンドケーキ',
            'アーモンドフィナンシェ'
    ],
    correct: 'アーモンドパウンドケーキ'
    }
];


const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex= 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    }else {
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e)=>{
        clickHandler(e);
    });
    handlerIndex++;
}
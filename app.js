const quiz = [{
                question: 'ゲーム市場、最も売れたゲーム機は次の内どれ？',
                answers: [
                    'スーパーファミコン', 
                    'プレーステーション2', 
                    'ニンテンドースイッチ',
                    'ニンテンドーDS'
                ],
                correct: 'ニンテンドーDS'
            }, {
                question: '糸井重里が企画に関わった、任天堂の看板ゲームと言えば？',
                answers: [
                    'MOTHER2', 
                    'スーパーマリオブラザーズ3', 
                    'スーパードンキーコング',
                    '星野カービィ'
                ],
                correct: 'MOTHER2'
            },{
                question: 'ファイナルファンタジーIVの主人公の名前は？',
                answers: [
                    'フリオニール', 
                    'クラウド', 
                    'ディーダ',
                    'セシル'
                ],
                correct: 'セシル' 
            }];


const $button = document.getElementsByTagName('button');
const button_length = $button.length;
const quiz_length = quiz.length;
let quiz_index = 0;
let score = 0;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quiz_index].question;
    let button_index = 0;
    while (button_index < button_length){
        $button[button_index].textContent = quiz[quiz_index].answers[button_index];
        button_index++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quiz_index].correct === e.target.textContent){
        window.alert('正解');
        score++;
    }else{
        window.alert('不正解');
    }
    quiz_index++;
    if(quiz_index < quiz_length){
        setupQuiz();
    }else{
        window.alert('終了!あなたの正解数は' + score + '/' + quiz_length + 'です!');

    }
};

//HTMLのオブジェクトを変数or定数に入れる場合は、名前の前に$を付ける


let handler_index = 0;
while (handler_index < button_length){
    $button[handler_index].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handler_index++;
}



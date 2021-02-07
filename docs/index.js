// ctrl + / でコメントアウトアンコメント

//変数 let ~ 動的型割り付け barでもOKでも古い
let unko = 'Hello World';

//print'Hello World2!!';
console.log(unko);
//定数 書き換え不可
const bigUnko = 'he..Hell...Hello World';

//配列は[]
let inoki = ['いーち', 'にー', 'さーん', 'だ――！'];

//ループ
// let index = 0;
// while(index < inoki.length){
//     console.log(inoki[index]);
//     index++;
// }



//関数定義 ()=> の部分はfunction()でも可でも古い　ちなみにletでも宣言できるでも基本やらない
const test = (arg) => {
    if(inoki.length > arg){
        console.log('ボンバイエ!');
    }
    else{
        console.log('ボン場')
    }
}

//オブジェクト 構造体
const unko2 = {
    color: 'pink',
    size: 'large', 
    purfume: 'mint',
    goToilet: () => {
        console.log('GHG');
    }
};

console.log(unko2.size);
console.log(unko2.goToilet());
//windowオブジェクトは元からある。ウィンドウ全体のオブジェクト
window.alert('Hi');
//documentオブジェクトは元からある。ページの中の部品のオブジェクト
console.log(document.getElementsByTagName('button')[0]);

//eventオブジェクトは元からある。イベントを扱うオブジェクト
document.getElementsByTagName('button')[0].addEventListener('click', () => {
    //ボタンがクリックされた時のイベントを記述
    window.alert('おっぱい');
});
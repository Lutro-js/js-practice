//アコーディオンUI

(()=>{
    const $elm = document.querySelector('#js-accordion');
    const $trigger = $elm.getElementsByTagName('a');

    const triggerLen = $trigger.length;
    let index = 0;
    while (index < triggerLen){
        $trigger[index].addEventListener('click',(e) => clickHandler(e));
        index++;
    }

    //クリックしたら実行される処理
    const clickHandler = (e) => {
        e.preventDefault();

        const $target = e.currentTarget;//クリックしたものを取ってくる
        const $content = $target.nextElementSibling;//次の要素を取ってくる

        if($content.style.display === 'block'){
            $content.style.display = 'none';
        }else{
            $content.style.display = 'block';
        }
    };
})();
const input = document.querySelector('.inputText');
const send = document.querySelector('.btn_add');
const list = document.querySelector('.list')

// console.log(input, send, list);
let data = [];
send.addEventListener('click', function(e){
    if (!input.value){
        alert('請輸入代辦事項');
    }
    else{
        let obj = {};
        obj.content = input.value;
        // console.log(obj);
        data.push(obj);
        console.log(data);
    }
})
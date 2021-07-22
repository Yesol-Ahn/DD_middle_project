const items = document.querySelector('.comments-list'); //container
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__btn');

// 사용자가 add버튼을 눌렀을 때 이벤트를 처리하는 함수는 on을 붙인다. (ex. onClick, onAdd, onDelete)
function onAdd() {
    //1. 사용자가 입력한 텍스트를 받아오기
    const text = input.value;
    if (text === '') {
        input.focus();
        return;}
    //2. 받아온 텍스트를 이용해서 새로운 아이템 만들기(텍스트 +, 삭제버튼)
    const item = createItem(text);
    //3. items 컨테이너 안에 새로 만든 아이템을 추가한다 (API) 3-1. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'})
    items.appendChild(item);
    //4. 인풋을 초기화하고 커서를 입력창에 표시한다.
    input.value = '';
    input.focus();
}

//리액트를 쓰면 일일이 작성할일이 없음


let id = 0; //UUID
function createItem(text) {
    const itemRow = document.createElement("li");
    itemRow.setAttribute('class', 'item__row')
    itemRow.setAttribute('data-id', id)
    itemRow.innerHTML = `
                    <div class="comments-list reply-list" data-id=${id}>
                    
                    	<div class="comment-avatar"><img src="https://images.unsplash.com/photo-1526297003708-f5a1c2c9c6e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" alt=""></div>
						
						<div class="comment-box">
							<div class="comment-head">
								<h6 class="comment-name"><a href="http://creaticode.com/blog">Me</a></h6>
								<span>now</span>
                                <button class="item__delete" >
                                <i class="fas fa-trash-alt" data-id=${id}></i>
                            </button>
								<i class="fa fa-reply"></i>
								<i class="fa fa-heart"></i>
							</div>
							<div class="comment-content">
								${text}</div>
						
           
                        </div>
  
                    `;
                    id++;
    return itemRow;
}

//버튼을 클릭했을때 이벤트가 발생한다.
addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        onAdd();
    }
})

items.addEventListener('click', event =>{
const id = event.target.dataset.id;
    if(id){
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`)
    toBeDeleted.remove();
    }
})
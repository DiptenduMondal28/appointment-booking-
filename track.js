function myfunc(event){
    event.preventDefault();
    let detail={
        name:document.getElementById('name').value,
        exp:document.getElementById('expence').value,
        item:document.getElementById('item').value,
        category:document.getElementById('category').value
    }
    let myDetail=JSON.stringify(detail);
    localStorage.setItem(detail.name,myDetail);
    document.getElementById('name').value=null;
    document.getElementById('expence').value=null;
    document.getElementById('item').value=null;
    document.getElementById('category').value=null;
    ShowDeleteEdit(detail);
}

function ShowDeleteEdit(detail){
    let users=document.getElementById('users');

    let ExpenceList=document.createElement('li');
    ExpenceList.textContent="Name:"+detail.name+"expence "+detail.exp+"item:"+detail.item+"category"+detail.category;

    let deleteKey=document.createElement('input')
    deleteKey.type='button';
    deleteKey.value='DELETE';
    deleteKey.onclick=()=>{
        localStorage.removeItem(detail.name);
        users.removeChild(ExpenceList);
    }

let editKey=document.createElement('input');
editKey.type='button';
editKey.value='edit';
editKey.onclick=()=>{
    document.getElementById('name').value=detail.name;
    document.getElementById('expence').value=detail.exp;
    document.getElementById('item').value=detail.item;
    document.getElementById('category').value=detail.category;
    localStorage.removeItem(detail.name);
    users.removeChild(ExpenceList);
}


    ExpenceList.appendChild(deleteKey);
    ExpenceList.appendChild(editKey);
    users.appendChild(ExpenceList);
}

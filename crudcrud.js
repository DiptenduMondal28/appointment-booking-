function myFunc(event){
    event.preventDefault();
    let details={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value,
        date:document.getElementById('date').value
    };
    let myDetails=JSON.stringify(details);
    localStorage.setItem(details.name,myDetails);   
    document.getElementById('name').value=null;
    document.getElementById('email').value=null;
    document.getElementById('phone').value=null;
    document.getElementById('date').value=null;
    showDeleteEdit(details);
    axios.post("https://crudcrud.com/api/841a22e3a66344a980f6e3d1fe2073ca/appointmentdata",details)
        .then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })

}
let user=document.getElementById('users');
    //creating user list
    let userList=document.createElement('li');
    // userList.textContent="Name:"+details.name+" Email:"+details.email+"  phone_Number:"+details.phone+"   date"+details.date;
    const keys = Object.keys(localStorage)
    for (let key of keys) {
        userList.textContent="Name:"+key.name+" Email:"+key.email+"  phone_Number:"+key.phone+"   date"+key.date;
        console.log(`${key}: ${localStorage.getItem(key)}`)
    }

function showDeleteEdit(details){
    // let user=document.getElementById('users');
    // //creating user list
    // let userList=document.createElement('li');
    // // userList.textContent="Name:"+details.name+" Email:"+details.email+"  phone_Number:"+details.phone+"   date"+details.date;
    // const keys = Object.keys(localStorage)
    // for (let key of keys) {
    //     userList.textContent="Name:"+key.name+" Email:"+key.email+"  phone_Number:"+key.phone+"   date"+key.date;
    //     console.log(`${key}: ${localStorage.getItem(key)}`)
    // }
    //add delete button
    let deleteButton=document.createElement('input');
    deleteButton.type='button';
    deleteButton.value='delete';
    deleteButton.onclick=()=>{
        localStorage.removeItem(details.name);
        user.removeChild(userList);
    }

    let editButton=document.createElement('input');
    editButton.type='button';
    editButton.value='Edit';
    editButton.onclick=()=>{
        document.getElementById('name').value=details.name;
        document.getElementById('email').value=details.email;
        document.getElementById('phone').value=details.phone;
        document.getElementById('date').value=details.date;
        localStorage.removeItem(details.name);
        user.removeChild(userList);
    }


    userList.appendChild(deleteButton);
    userList.appendChild(editButton);
    user.appendChild(userList);
}
//let user=document.getElementById('users');
//     //creating user list
// let userList=document.createElement('li');
    // userList.textContent="Name:"+details.name+" Email:"+details.email+"  phone_Number:"+details.phone+"   date"+details.date;
// const keys = Object.keys(localStorage)
// for (let key of keys) {
//     console.log(`${key}: ${localStorage.getItem(key)}`)
//     userList.textContent="Name:"+details.name+" Email:"+details.email+"  phone_Number:"+details.phone+"   date"+details.date;
//}
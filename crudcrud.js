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
    axios.post("https://crudcrud.com/api/841a22e3a66344a980f6e3d1fe2073ca/appointmentdata",details)
        .then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
        document.getElementById('name').value=null;
        document.getElementById('email').value=null;
        document.getElementById('phone').value=null;
        document.getElementById('date').value=null;

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/841a22e3a66344a980f6e3d1fe2073ca/appointmentdata",).then((response)=>{
        console.log(response);
        for(var i=0;i<response.data.length;i++){
            showDeleteEdit(response.data[i])
        }
    }).catch((err)=>{
        console.log(err)
    })

    const localStorageObj=localStorage;
    const localStorageKeys=Object.keys(localStorageObj);

    for(var i=0;i<localStorageKeys.length;i++){
        const key=localStorageKeys[i];
        const userDetailsString=localStorageObj[key];
        const userDetailsObj=JSON.parse(userDetailsString);

    }
})

function showDeleteEdit(details){
    let user=document.getElementById('users');
    //creating user list
    let userList=document.createElement('li');
    userList.textContent="Name:"+details.name+" Email:"+details.email+"  phone_Number:"+details.phone+"   date"+details.date+" id:"+details._id;

    //add delete button
    let deleteButton=document.createElement('input');
    deleteButton.type='button';
    deleteButton.value='delete';
    deleteButton.onclick=()=>{
        let element="https://crudcrud.com/api/841a22e3a66344a980f6e3d1fe2073ca/appointmentdata/"+details._id
        axios.delete(element)
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
        let element="https://crudcrud.com/api/841a22e3a66344a980f6e3d1fe2073ca/appointmentdata/"+details._id
        axios.put(element,details)
        localStorage.removeItem(details.name);
        user.removeChild(userList);
    }


    userList.appendChild(deleteButton);
    userList.appendChild(editButton);
    user.appendChild(userList);
}
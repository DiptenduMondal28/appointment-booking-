function myFunc(event){
    event.preventDefault();
    let productInput={
        productName:document.getElementById('product_name').value,
        price:document.getElementById('price').value,
        item:document.getElementById('product_item').value
    }
    let product=JSON.stringify(productInput);
    localStorage.setItem(productInput.productName,product);
    axios.post("https://crudcrud.com/api/90e87bab9a8846d399f0240b9e8eaf52/products",productInput)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
        document.getElementById('product_name').value=null;
        document.getElementById('price').value=null;
        document.getElementById('product_item').value=null;
        axios.get('https://crudcrud.com/api/90e87bab9a8846d399f0240b9e8eaf52/products').then((res)=>{
        console.log(res);
        for(var i=0;i<res.data.length;i++){
            showDelete(res.data[i])
        }
    }).catch((err)=>{
        console.log(err)
    })
}

// window.addEventListener(('DOMContentLoaded'),()=>{
//     axios.get('https://crudcrud.com/api/d5d9a9cbdc5b44119837f4f70d82f032/products').then((res)=>{
//         console.log(res);
//         for(var i=0;i<res.data.length;i++){
//             showDelete(res.data[i])
//         }
//     }).catch((err)=>{
//         console.log(err)
//     })
// })
function showDelete(details){
    let allProduct=document.getElementById('allDetail');

    let eachProduct=document.createElement('li');

    eachProduct.textContent=`name of the product:  ${details.productName},  price:  ${details.price},  item type:  ${details.item}`

    let deleteButton=document.createElement('input');
    deleteButton.type='button';
    deleteButton.value='DELETE';


    deleteButton.onclick=()=>{
        let deleteElement="https://crudcrud.com/api/90e87bab9a8846d399f0240b9e8eaf52/products/"+details._id;
        axios.delete(deleteElement).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err)
        })
        //user.removeChild(eachProduct);
    }



    eachProduct.appendChild(deleteButton);
    allProduct.appendChild(eachProduct);
}
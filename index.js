
const listItem = document.getElementById('users');


let form = document.getElementById('my-form');

form.addEventListener('submit',storeInfo);
listItem.addEventListener('click',removeItem);

function storeInfo(e){
    e.preventDefault();
    
    const userName=document.querySelector('#name').value;
    const userEmail = document.querySelector('#email').value;
    let obj={
        name:userName,
        email:userEmail
    }
    let key = userName+" "+userEmail;
    let myObj=JSON.stringify(obj);
    localStorage.setItem(key,myObj);

    let newItem = document.createElement('li');
    newItem.className='item';
    newItem.appendChild(document.createTextNode(key));

    let newBtn1= document.createElement('button');
    newBtn1.className='delete';
    newBtn1.appendChild(document.createTextNode('delete'));

    newItem.appendChild(newBtn1);

    let newBtn2= document.createElement('button');
    newBtn2.className='edit';
    newBtn2.appendChild(document.createTextNode('edit'));

    newBtn2.onclick=(e) =>{
        let li = e.target.parentElement;
        localStorage.removeItem(li.firstChild.textContent);
        listItem.removeChild(li);
        document.getElementById('name').value=obj.name;
        document.getElementById('email').value=obj.email;
    }

    newItem.appendChild(newBtn2);

    listItem.appendChild(newItem);

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement;
        localStorage.removeItem(li.firstChild.textContent);
        listItem.removeChild(li);
        
    }
}


const listItem = document.getElementById('users');


let form = document.getElementById('my-form');

form.addEventListener('submit', storeInfo);


function storeInfo(e) {
    e.preventDefault();

    const userName = document.querySelector('#name').value;
    const userEmail = document.querySelector('#email').value;
    let obj = {
        name: userName,
        email: userEmail
    }
    let key = userName + " " + userEmail;
    axios.post('https://crudcrud.com/api/91444e7c3330458b82961530a3cf0df9/appoinment', obj)
        .then((res) => {
            newUser(obj);
            console.log(res.data)
        })

        .catch((err) => console.log(err));
    // let myObj=JSON.stringify(obj);
    // localStorage.setItem(key,myObj);

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/91444e7c3330458b82961530a3cf0df9/appoinment')
        .then((res)=>{
            for(var i=0;i<res.data.length;i++){
                
                newUser(res.data[i]);
            }
        })
})

function newUser(obj) {
    let newItem = document.createElement('li');
    newItem.className = 'item';
    newItem.appendChild(document.createTextNode(obj.name+" "+obj.email));

    let newBtn1 = document.createElement('button');
    newBtn1.className = 'delete';
    newBtn1.appendChild(document.createTextNode('delete'));

    newItem.appendChild(newBtn1);

    newBtn1.onclick=(e)=>{
        let li = e.target.parentElement;
        //localStorage.removeItem(li.firstChild.textContent);
        var id = obj._id;
        console.log(id);
        axios.delete('https://crudcrud.com/api/91444e7c3330458b82961530a3cf0df9/appoinment/'+id)
            .then((res)=>{})
            .catch((err)=>console.log(err));
        listItem.removeChild(li);
    }

    let newBtn2 = document.createElement('button');
    newBtn2.className = 'edit';
    newBtn2.appendChild(document.createTextNode('edit'));
    newItem.appendChild(newBtn2);

    newBtn2.onclick = (e) => {
        let li = e.target.parentElement;
        //localStorage.removeItem(li.firstChild.textContent);
        listItem.removeChild(li);
        document.getElementById('name').value = obj.name;
        document.getElementById('email').value = obj.email;
        var id = obj._id;
        console.log(id);
        axios.delete('https://crudcrud.com/api/91444e7c3330458b82961530a3cf0df9/appoinment/'+id)
            .then((res)=>{})
            .catch((err)=>console.log(err));
    }

    listItem.appendChild(newItem);
}



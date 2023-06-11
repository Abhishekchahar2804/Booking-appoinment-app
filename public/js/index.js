
const listItem = document.getElementById('users');


//let form = document.getElementById('my-form');
let addUser = document.querySelector('.addUser');
addUser.addEventListener('click', storeInfo);


async function storeInfo(e) {
    e.preventDefault();

    const userName = document.querySelector('#name').value;
    const userEmail = document.querySelector('#email').value;
    let obj = {
        name: userName,
        email: userEmail
    }
    console.log(obj);
    try{
        const res =await axios.post('http://localhost:3000/add-user', obj)
        console.log(res);
        newUser(res.data.userDetails);
    }
    catch(err){
        console.log(err);
    }

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('http://localhost:3000/all-user')
        .then((res)=>{
            for(var i=0;i<res.data.allUser.length;i++){
                
                newUser(res.data.allUser[i]);
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
        var id = obj.id;
        console.log(id);
        axios.delete('http://localhost:3000/delete-user/'+id)
            .then((res)=>{})
            .catch((err)=>console.log(err));
        listItem.removeChild(li);
    }

    // let newBtn2 = document.createElement('button');
    // newBtn2.className = 'edit';
    // newBtn2.appendChild(document.createTextNode('edit'));
    // newItem.appendChild(newBtn2);

    // newBtn2.onclick = (e) => {
    //     let li = e.target.parentElement;
    //     listItem.removeChild(li);
    //     document.getElementById('name').value = obj.name;
    //     document.getElementById('email').value = obj.email;
    //     // var id = obj.id;
    //     // console.log(id);
    //     // axios.delete('http://localhost:3000/update-user/'+id)
    //     //     .then((res)=>{})
    //     //     .catch((err)=>console.log(err));
    // }

    listItem.appendChild(newItem);
}



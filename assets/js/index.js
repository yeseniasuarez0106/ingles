const username = document.getElementById("username");
const taComments = document.getElementById("ta-comments");
let myMessages = [];
// const rankings = document.getElementById("rankings");

const sendMsg = document.getElementById("btn-send");

const itemsComments = document.getElementById("items-comments");

const getMessage = () => {
    const li = document.createElement('li');
    const user = document.createElement('h2');
    user.textContent = username.value;
    const msg = document.createElement('span');   
    msg.textContent = taComments.value;
    const hr = document.createElement('hr');

    li.appendChild(user);
    li.appendChild(hr);
    li.appendChild(msg);

    itemsComments.appendChild(li);

    const commit = {
      user: username.value,
      body: msg.value
    }

    myMessages.push(commit);

    console.log(myMessages);

    
}

sendMsg.addEventListener('click', getMessage);

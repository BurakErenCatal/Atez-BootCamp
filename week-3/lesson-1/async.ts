// Callback Hell (araştırma konusu)

// event handling and client side example

const xhr = new XMLHttpRequest()

xhr.open('GET','herhangibiURL.com/users')

// PROMISE DEEP DIVE

const fetchOurUsers = fetch('herhangibiURL.com/users');

console.log('WHAT IS PROMISE',fetchOurUsers);

fetchOurUsers.then((res : Response)=>{
    const returnData = res.json();
    returnData.then((Response)=> console.log(Response));
    
});



fetchOurUsers.then((res) => console.log(res));

fetchOurUsers.catch((err) => console.log(err));


// ASYNC AWAIT

async function getUserNames() {
    const response = await fetch('herhangibiURL.com/users')

    return{
        // return logic or Object
    }
    
}

// ASYNC AWAIT DEEP DIVE 



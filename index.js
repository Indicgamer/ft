const form = document.querySelector('form');
const submitter = document.querySelector('input[type="submit"]');

// fetch("http://localhost:3000/joke").then((res)=>{
//     console.log(res);
    
// })

// fetch("http://localhost:3000/add",{
//     method: "POST"
// }).then((res)=>{
//     console.log(res);
    
// });


// fetch("http://localhost:3000/update",{
//     method: "PUT",
//     body: JSON.stringify({id: 1}),
// }).then((res)=>{
//     console.log(res);
// });

form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form,submitter);
    const [username, password] = formData.values();
    console.log(username, password);
    fetch('https://backend-tau-kohl.vercel.app/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'include',
    }).then((res) =>{
        res.headers.forEach((val, key) => {
            console.log(key, val);
          });
        res.json().then((data) => {
            console.log(data);
            document.getElementById("cookies").innerHTML = document.cookie;
        });
    } )
}



const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    fetch('https://backend-tau-kohl.vercel.app/api/prod/all', {
        method: 'GET',
        credentials: 'include',
    }).then((res) =>{
        res.json().then((data) => {
            console.log(data);
            document.getElementById("prods").innerHTML = data.data.map((prod) => {
                return `<li>${prod}</li>`;
            });
        });
    } )

    
});

const cookiebtn = document.getElementById("cookiebtn");
cookiebtn.addEventListener("click",()=>{
    let key = 'score';
    let value = encodeURIComponent(
      (Math.floor(Math.random() * 123456) + 123456).toString()
    );
    let thirty = 60 * 60 * 24 * 30;
    document.cookie = `${key}=${value};path=/;max-age=${thirty};`; // one cookie at a time
    document.getElementById('cookies').textContent = document.cookie;
});
document.getElementById("cookies").innerHTML = document.cookie;
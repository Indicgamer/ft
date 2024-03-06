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
    }).then((res) =>{
        res.json().then((data) => {
            console.log(data);
        });
    } )
}



const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    fetch('https://backend-tau-kohl.vercel.app/api/prod/all', {
        method: 'GET',
        credentials: 'include'
    }).then((res) =>{
        res.json().then((data) => {
            console.log(data);
            document.getElementById("prods").innerHTML = data.data.map((prod) => {
                return `<li>${prod.name}</li>`;
            });
        });
    } )

    
});

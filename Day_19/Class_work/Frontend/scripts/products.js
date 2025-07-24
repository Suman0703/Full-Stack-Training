const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const image = document.getElementById("image").value;
    const price = document.getElementById("price").value;
    const brand = document.getElementById("brand").value;
    const rating = document.getElementById("rating").value;
    const category = document.getElementById("category").value;
    const desc = document.getElementById("desc").value;

    const data = {
        title, image, price, brand, category, desc, rating
    };

    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8080/api/user/create-product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":token
        },
        body: JSON.stringify(data)


    })
    const res = await response.json();
    console.log(res);
});

const getData = async()=>{
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8080/api/user/get-product",{
        method:"GET",
        headers:{
       "Content-Type": "application/json",
        "Authorization":token
        },
});
    const res = await response.json();
    console.log(res);
}

getData();

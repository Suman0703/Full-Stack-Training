const myPromise = async () => {
    const response = await fetch("https://fakestoreapi.in/api/products");

    const res = await response.json()
    console.log(res.products);
    const data = res.products
    showData(data)

}
myPromise()

async function showData(data) {
    // console.log(data);
    data.forEach((ele, index) => {
        // console.log(ele)
        const parent = document.getElementById("parent");
        const h2 = document.createElement("h2");
        h2.innerText = ele.brand;
        h2.style.color = "red";
        const img = document.createElement("img")
        img.src = ele.image;
        img.style.width = "200px";
        img.style.height = "200px";
        img.style.marginLeft = "50px";
        const p1 = document.createElement("p")
        p1.innerText = ele.title
        const p2 = document.createElement("p")
        p2.innerText = ele.price
        const p3 = document.createElement("p")
        p3.innerText = ele.category
        const p4 = document.createElement("p")
        p4.innerText = ele.discount
        const productDiv = document.createElement("div")
        // productDiv.classList.add(child);
        productDiv.style.border = "1px solid black"
        productDiv.style.textAlign = "center";
        productDiv.append(h2, img, p1, p2, p3, p4)
        parent.append(productDiv)

    })
}
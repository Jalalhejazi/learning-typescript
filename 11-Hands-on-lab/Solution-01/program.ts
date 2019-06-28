interface Product {
    title: string
    description: string
    image: string
    price: string,
    colors: Array<string>
    stars: Number
}


fetch('https://couchdb.itacademy.dk/kursus/2019')
    .then( res => res.json() )
    .then( data => {
        let products:Array<Product> = data.products
       
        products.forEach(p => {
            let body = `<p> <h3> ${p.title} </h3> </p>
             <p> <img src="${p.image}" width="200"></img> </p>
             <p> ${p.description} <span class="badge badge-default"> (${p.price}) </span> </p>
             <p> <span class="badge badge-info"> ${p.stars} </span>  ${p.colors} </p>
             <hr>`

            document.getElementById("data").innerHTML += body 
        })
    })

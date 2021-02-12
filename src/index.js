/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/




const baseUrl = "https://platzi-avo.vercel.app"
const appNode = document.querySelector("#container")
const formatPrice = price => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price)
    return newPrice
}
// window.fetch(`${baseUrl}/api/avo`)
//     .then(response => response.json())
//     .then(responseJson => {
//         console.log(responseJson)
//         responseJson.data.forEach(item => {
//             console.log(item.name)
//         })
//     })

const consulta = async ()=>{
    try{
        const response = await fetch(`${baseUrl}/api/avo`)
        const responseJson = await response.json()
        const todosLosItems = []
        responseJson.data.forEach(item => {
            //Crear imagen
            const image = document.createElement('img')
            image.src = `${baseUrl}${item.image}`
            image.className = 'img'
            //Crear título
            const title = document.createElement('h2')
            title.textContent = item.name;
            // title.style = 'font-size: 2rem'
            // title.style.fontSize = '3rem'
            title.className = 'title'

            //Crear precio
            const price = document.createElement('p')
            price.textContent = formatPrice(item.price)
            price.className = 'price'
            const infoContainer = document.createElement('div')
            infoContainer.className = 'info'
            infoContainer.append(title, price)            
            const container = document.createElement('article')            
            container.className = 'wrapper'
            container.append(image, infoContainer)            
            todosLosItems.push(container)
        })        
        appNode.append(...todosLosItems)            
    }
    catch(err){
        console.error(err)
    }
}

consulta()
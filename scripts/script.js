document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
    const choice = document.querySelector('input').value
    console.log(choice)
    const url = `https://api.nasa.gov/planetary/apod?api_key=ZatIAp5Obv9sZXm4YXVMAbSzMsgnc1gH4Gpu9Mhw&date=${choice}`


fetch (url)
.then(res => res.json())
.then(data =>{
    console.log(data)
    document.querySelector('img').src = data.hdurl
})
.catch(err =>{
    console.log(`error ${err}`)
})
}
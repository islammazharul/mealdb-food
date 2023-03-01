const loadData = () =>{
    const url = 'http://127.0.0.1:5501/api-1-data.js';
    const myUrl = JSON.stringify(url)
    fetch(myUrl).then(res => res.json()).then(data => console.log(data))
}

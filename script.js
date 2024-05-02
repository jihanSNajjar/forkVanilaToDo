const getTasks=()=>{
    fetch("https://dummyjson.com/todos").then(res=>res.json()).then(data=>console.log(data))

}
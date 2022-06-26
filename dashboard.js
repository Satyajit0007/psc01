function append(){
    let data = JSON.parse(localStorage.getItem("student")) || [];
    data.forEach(function(ele,index) {
        let img=document.createElement("img")
        img.src=ele.image;
        var tr=document.createElement("tr")
            let td1=document.createElement("td")
            td1.append(img)
            let td2=document.createElement("td")
            td2.innerText=ele.name;
            let td3=document.createElement("td")
            td3.innerText=ele.batch;
            let td4=document.createElement("td")
            td4.innerText=ele.unit;
            let td5=document.createElement("td")
            td5.innerText=ele.course;
            var td6=document.createElement("button")
            td6.innerText="DELETE";
            td6.addEventListener("click",myFunc);
            function myFunc(){
                td6.parentNode.remove()
                remove_item(index);
            }
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr) 
    });
}
append()
function remove_item(index){
    let data = JSON.parse(localStorage.getItem("student")) || [];

    let newData = data.filter(function(elem, i){
        if(i === index){
            let trash = JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(elem);
            localStorage.setItem("trash",JSON.stringify(trash));
        }
        else{
            return i !== index;
        }
    })
    localStorage.setItem("student",JSON.stringify(newData))
    append()
}
function calculate(){
    let data = JSON.parse(localStorage.getItem("student")) || [];
    let obj = {};
    for(let i = 0; i < data.length; i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch] = 1
        }else{
            obj[data[i].batch]++
        }
    } 
   let count = document.querySelector("#count > div > p");
   count.innerText=" ";
   count.style.backgroundColor="green";
   count.style.color="white"
for (let key in obj){
    
    count.innerText += ` || ${key}  : ${obj[key]} || `;


}

}
calculate()
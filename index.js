function Submit(e) {
    e.preventDefault()
let form = document.querySelector("#student_data");
let name = form.name.value;
let course = form.course.value;
let unit = form.unit.value;
let image = form.image.value;
let batch = form.batch.value;

let student_info = new  Student_info(name, course, unit, image, batch)
let data = JSON.parse(localStorage.getItem("student")) || [];
data.push(student_info);
localStorage.setItem("student",JSON.stringify(data));
calculate()
}

function Student_info(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `FT-WEB-${b}`
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
count.innerText += `|| ${key}  : ${obj[key]} || `;

}

}
calculate()
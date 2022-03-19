counter = document.getElementById('count')
count = 0;
function update(){
    counter.innerText=count
}
function increase() {
    count+=1;
    update()
}
function decrease(){
    count-=1;
    update()
}
function reset() {
    count = 0;
    update()
}
function save() {
    console.log(count)
}
user = prompt('hi user, please enter your name :')

nameholder = document.getElementById("user")
counter = document.getElementById('count')
saves = document.getElementById('saves')
nameholder.textContent='Hi '+user+', wolcome back !'
count = 0;
function update(){
    counter.textContent=count
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
    saves.textContent = 'Previous saves :'
    update()
}
function save() {
    let countStr = count + ' - '
    saves.textContent +=countStr
    count = 0;
    update()
}
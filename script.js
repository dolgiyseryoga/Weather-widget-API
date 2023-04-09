function Sity_add(){

if (document.querySelector('.Sity_input').value == '' || document.querySelector('.Sity_input').value == undefined ) {
    document.querySelector('.package-name').innerHTML = 'Please enter sity';
} 
else {
    let siti_in = document.getElementById('sity_input').value;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${siti_in}&appid=d121d83738891ce6dbaec677ae737f53`)
.then(function (resp) {return resp.json()})
.then(function (data) {
    document.querySelector('.package-name').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(+data.main.temp-273) + '&deg;';
    document.querySelector('.desclaimer').innerHTML = data.weather[0].description;
    document.querySelector('.features').innerHTML = '<img src="https://openweathermap.org/img/wn/'+data.weather[0]['icon']+'.png">';
    document.querySelector('.wind').innerHTML = 'wind '+data.wind.speed + ' m/sec';
})
let now = new Date().toLocaleDateString();
let now_row = new Date().toLocaleTimeString();
document.querySelector('.date').innerHTML = now;
document.querySelector('.date_row').innerHTML = now_row;
}
}
function hide() {
    let el = document.getElementById ('head');
    el.style.display="none";
    let el2 = document.getElementById ('head2');
    el2.style.display="none";
};

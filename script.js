function initialize(){
document.getElementById('main').addEventListener('click', function (event) {
window.location = "index.html";
});
document.getElementById('about').addEventListener('click', function (event) {
    window.location = "about.html";
});
document.getElementById('contact').addEventListener('click', function (event) {
    window.location = "contact.html";
});    
document.getElementById('faq').addEventListener('click', function (event) {
    window.location = "faq.html";
});
document.getElementById('amount').addEventListener('change', function (event) {
    var amount =  document.getElementById('amount').value;
    console.log(amount);
});
document.getElementById('time').addEventListener('change', function (event) {
    var time = document.getElementById('time').value;
    console.log(time);
});
}
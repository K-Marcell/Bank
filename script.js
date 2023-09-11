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
}
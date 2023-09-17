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
    document.getElementById('honap').innerText = `${document.getElementById('time').value} hónap`;
    var amount = Math.round(parseInt(document.getElementById('amount').value) / parseInt(document.getElementById('time').value));
    document.getElementById('output').innerText = `${amount}Ft/hó`;
    var thm = document.getElementById('thm').innerText.trim('%THM');
    thm = parseInt(thm);
    document.getElementById('total').innerText = `${Math.round(parseInt(document.getElementById('amount').value) * (1 + thm/100))}Ft`;
});
document.getElementById('time').addEventListener('change', function (event) {
    document.getElementById('honap').innerText = `${document.getElementById('time').value} hónap`;
    var amount = Math.round(parseInt(document.getElementById('amount').value) / parseInt(document.getElementById('time').value));
    document.getElementById('output').innerText = `${amount}Ft/hó`;
    var thm = document.getElementById('thm').innerText.trim('%THM');
    thm = parseInt(thm);
    document.getElementById('total').innerText = `${Math.round(parseInt(document.getElementById('amount').value) * (1 + thm/100))}Ft`;
});
}
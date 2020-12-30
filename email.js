document.querySelectorAll('.submitty').forEach(item => {
    item.addEventListener("click", function() {
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let postcode = document.querySelector("#postcode").value;
        let info = document.querySelector("#Info").value;
        let message = `Name:%20${name},%20Email:%20${email},%20Postcode:%20${postcode},%20Message:%20${info}`;
        window.location.href = `mailto:ryan@ryanswoodworks.co.uk?subject=Quotation%20request&body=${message}`;
    })
})


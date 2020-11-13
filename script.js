

const btn = document.querySelector('#button');
const distance = document.querySelector("#distance");
        btn.onclick = (event) => {
            let result = (Math.round(distance.value  * 30) / 100).toFixed(2);
            event.preventDefault();
            // show the selected index
            document.querySelector('#cost').innerHTML = `£${result}`;
        };
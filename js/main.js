
//Select All Links

const allLinks = document.querySelectorAll(".links > a");

allLinks.forEach(link => {

  link.addEventListener("click",(e) => {

    e.preventDefault();

    document.querySelector(e.target.dataset.section).scrollIntoView({

        behavior:'smooth'
    })

  })


})


// Copy URL

function myFunction() {
  let dummy = document.createElement("input"), text = window.location.href;
	document.body.appendChild(dummy);
	dummy.value = text;
	dummy.select();
	document.execCommand("copy");
	document.body.removeChild(dummy);
}

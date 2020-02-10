const heading = document.querySelector('h1')
heading.style.fontSize = '200px';
heading.style.border = 'thick dotted green'
heading.style.textShadow = '0 6px 4px #85c226,-3px -5px 4px #fe2192,3px -5px 4px #f7c200;'
heading.style.backgroundImage = "url('https://assets.change.org/photos/1/te/pm/CJTepmtOAFHnwwc-1600x900-noPad.jpg?1486500295')"

const paragraph1 = document.querySelector('p');
var textWrapper = document.querySelector('p');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: 'p',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: 'p',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



// const image = document.querySelector('img')
// image.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg';
// image.style.height = '300px'
// image.style.width = '300px'


// const newImage = document.createElement('img');
// newImage.src = 'https://10ztalk.com/wp-content/uploads/2020/02/Trump-Insists-Real-Photo-Revealing-His-Fake-Tan-Is-Fake.jpg'
// newImage.style.height = '300px'
// newImage.style.width = '300px'
// const img2 = document.querySelector('div');
// img2.appendChild(newImage);

// const newLi = document.createElement('li');
// newLi.className = 'item' 
// newLi.id = 'item-16'
// newLi.innerText= 'Won/t get fooled again'
// const list = document.querySelector('ul');
// list.appendChild(newLi);

(run = () => {
  "use strict";
  console.log("js loading");

  let array1 = [
    {
      src: "./images/apple-pink-lady.png",
      width: 200,
      height: 200,
      alt: "Javascript Image",
      type: "Apple",
    },
    {
      src: "./images/citrus-orange.png",
      width: 200,
      height: 200,
      alt: "Javascript Image",
      type: "Orange",
    },
    {
      src: "./images/cherries.png",
      width: 200,
      height: 200,
      alt: "Javascript Image",
      type: "Cherries",
    },
  ];
  console.log(array1);

  const display_image = (info) => {
    let a = document.createElement("img");
    a.src = info.src;
    a.width = info.width;
    a.height = info.height;
    a.alt = info.alt;
    document.getElementById("welcome").append(a);
  };

  let randomIndex = Math.floor(Math.random() * array1.length);
  let newArray = array1[randomIndex];

  display_image(newArray);
  let tag = document.createElement("p");
  let text = document.createTextNode(`Your random picture: ${newArray.type}`);
  tag.appendChild(text);
  let element = document.getElementById("anchor");
  element.appendChild(tag);
  document.getElementById("button").onclick = function changeContent() {
    document.querySelector("img").remove();
    document.querySelector("p").remove();
    run();
  };
})();

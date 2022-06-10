persons = [
  {
    name: "Lilly Leash",
    img: "person1.jpg",
    occu: "Digital Marketing",
    age: "Age: 28",
    Cnt: "Country: USA",
  },
  {
    name: "Ben Thomson",
    occu: "Graphic Designer",
    img: "person2.jpg",
    age: "Age: 28",
    Cnt: "Country: Canada",
  },
  {
    name: "Jack Jackson",
    img: "person3.jpg",
    occu: "Chartered Accountant",
    age: "Age: 28",
    Cnt: "Country: UK",
  },
  ];

persons.forEach((person) => {
  var div = document.querySelector("div");
  div.innerHTML = div.innerHTML + `<div class="box">
<div class="imgBox"><img src="${person.img}" alt=""></div>
<div class="content">

    <h2>${person.name}<Br>
    <span>${person.occu}</span><Br>
    <span>${person.age}</span><Br>
    <span>${person.Cnt}</span></h2>
</div>
</div> `
});

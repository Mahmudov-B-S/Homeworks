let users = [
    { id: 1, name: "Jasurbek Otelbauev" },
    { id: 2, name: "Samariddin O'rinov" },
    { id: 3, name: "Sardor Ibodov" },
    { id: 4, name: "Samandar Ismoiljonov" },
    { id: 5, name: "Ziyovuddinov Azizbek" }
]

// Read --> filter, sort,

const filter = (res) => {
    let r = users.filter((vl) => vl.name.includes(res));
    console.log(r);
};
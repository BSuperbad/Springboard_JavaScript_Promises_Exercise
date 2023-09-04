// Part 1


// 1.
let number = 23;
let url = 'http://numbersapi.com'
$.getJSON(`${url}/${number}?json`).then(data => {
    console.log(data);
})

// 2.
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(
        $.getJSON(`${url}/${i}?json`).then(data => {
            console.log(data)
        })
    );
}

// 3.
let textArr = []
for (let i = 1; i < 5; i++) {
    textArr.push(
        $.getJSON(`${url}/${number}?json`).then(data => {
            $("body").append(`<p>${data.text}</p>`)
        })
    )
}
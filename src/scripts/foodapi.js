console.log("hello");

fetch("http://localhost:8088/foods")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)
    })

    console.log("goodbye")
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

let keys = Object.keys(statistics);
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (key.startsWith('r') || statistics[key] % 2 === 1) {
        console.log(statistics[key]);
    }
}

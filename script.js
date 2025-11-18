let CatHpData = 100;
let CatFoodData = 100;
let MoneyData = 1000;

let CatHpLabel = document.getElementById("hp");
let CatFoodLabel = document.getElementById("food");
let Money = document.getElementById("money");

let CatHpSzoveg = "Életerő: ";
let CatFoodSzoveg = "Kaja: ";

CatHpLabel.textContent = CatHpSzoveg + CatHpData + "%";
CatFoodLabel.textContent = CatFoodSzoveg + CatFoodData + "%";
Money.textContent = MoneyData + "$";
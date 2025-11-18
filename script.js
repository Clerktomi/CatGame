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

function CatPat(){
    MoneyData += 10;
    Money.textContent = MoneyData + "$";
}

if (MoneyData > 30){
    function CoffeBuy(){
        MoneyData -= 30;
        Money.textContent = MoneyData + "$";
        }
}

if (MoneyData > 100){
    function BeefBuy(){
        MoneyData -= 100;
        Money.textContent = MoneyData + "$";
        }
}

if (MoneyData > 50){
    function ToiltBuy(){
        MoneyData -= 50;
        Money.textContent = MoneyData + "$";
        }
}
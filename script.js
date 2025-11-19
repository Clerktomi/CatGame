let CatHpData = 100;
let CatFoodData = 100;
let MoneyData = 1000;
let ToiletDate = 0;

let CatHpLabel = document.getElementById("hp");
let CatFoodLabel = document.getElementById("food");
let Money = document.getElementById("money");
let ToiletLabel = document.getElementById("Toilet");

let CatHpSzoveg = "Életerő: ";
let CatFoodSzoveg = "Kaja: ";
let Toilet = "Wc: ";

CatHpLabel.textContent = CatHpSzoveg + CatHpData + "%";
CatFoodLabel.textContent = CatFoodSzoveg + CatFoodData + "%";
Money.textContent = MoneyData + "$";
ToiletLabel.textContent = Toilet + " " + ToiletDate + "%";

function CatPat() {
    MoneyData += 10;
    Money.textContent = MoneyData + "$";
}

function CoffeBuy() {
    if (MoneyData >= 30) {
        MoneyData -= 30;
        Money.textContent = MoneyData + "$";
    } else {
        alert("Nincs elég pénzed kávéra!");
    }
}

function BeefBuy() {
    if (MoneyData >= 100) {
        MoneyData -= 100;
        Money.textContent = MoneyData + "$";
    } else {
        alert("Nincs elég pénzed marhahúsra!");
    }
}

function ToiltBuy() {
    if (MoneyData >= 50) {
        MoneyData -= 50;
        Money.textContent = MoneyData + "$";
    } else {
        alert("Nincs elég pénzed wc-re!");
    }
}

function wcNovekves() {
    const interval = setInterval(() => {
        if (ToiletDate < 100) {
            ToiletDate += 2;
            ToiletLabel.textContent = Toilet + " " + ToiletDate + "%";
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

if (ToiletDate < 100) {
    wcNovekves();
}

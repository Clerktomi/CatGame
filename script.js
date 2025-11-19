let CatHpData = 100;
let CatFoodData = 100;
let MoneyData = 1000;
let ToiletDate = 0;
let PusleData = 80;

let cat = document.getElementById("cat");
let CatHpLabel = document.getElementById("hp");
let CatFoodLabel = document.getElementById("food");
let Money = document.getElementById("money");
let ToiletLabel = document.getElementById("Toilet");
let pulseLabel = document.getElementById("Pulse");
let AlertArea = document.getElementById("AlertArea");

let CatHpSzoveg = "Életerő: ";
let PulseSzoveg = "Pulzus: ";
let CatFoodSzoveg = "Kaja: ";
let Toilet = "Wc: ";

CatHpLabel.textContent = CatHpSzoveg + CatHpData + "%";
CatFoodLabel.textContent = CatFoodSzoveg + CatFoodData + "%";
Money.textContent = MoneyData + "$";
ToiletLabel.textContent = Toilet + " " + ToiletDate + "%";
pulseLabel.textContent = PulseSzoveg + " " + PusleData;

function CatPat() {
    MoneyData += 10;
    Money.textContent = MoneyData + "$";
}

//Van baj wefzewfu9ffuw
function PulseRise(){
    PusleData += 4;
    pulseLabel.textContent = PulseSzoveg + " " + PusleData;
}

function CoffeBuy() {
    if (MoneyData >= 30) {
        MoneyData -= 30;
        Money.textContent = MoneyData + "$";
        PulseRise();
    } else {
        AlertArea.textContent = "Nincs elég pénzed kávéra!";
        setTimeout(() => {
            AlertArea.textContent = "";
        }, 3000);
    }
}

function BeefBuy() {
    if (MoneyData >= 100) {
        MoneyData -= 100;
        Money.textContent = MoneyData + "$";
    } else {
        AlertArea.textContent = "Nincs elég pénzed marhahúsra!";
        setTimeout(() => {
            AlertArea.textContent = "";
        }, 3000);
    }
}

function ToiltBuy() {
    if (MoneyData >= 50) {
        MoneyData -= 50;
        Money.textContent = MoneyData + "$";
        function ToiletNo(){
    if (ToiletDate <= 10){
        ToiletDate = 0;
    } else{
        ToiletDate -= 10;
    }
    
   ToiletLabel.textContent = "Wc: " + ToiletDate + "%";
}

if (ToiletDate > 0){
    ToiletNo();
}
    } else {
        AlertArea.textContent = "Nincs elég pénzed wcre!";
        setTimeout(() => {
            AlertArea.textContent = "";
        }, 3000);
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
    }, 3000);
}

if (ToiletDate < 100) {
    wcNovekves();
}

function KajaCsokken() {
    const interval2 = setInterval(() => {
        if (CatFoodData > 0) {
            CatFoodData -= 2;
            CatFoodLabel.textContent = CatFoodSzoveg + " " + CatFoodData + "%";
        } else {
            clearInterval(interval2);
        }
    }, 2000);
}

if (CatFoodData > 0){
    KajaCsokken();
}


function CatPatMove() {
    cat.classList.remove('pulse');
    void cat.offsetWidth; 
    cat.classList.add('pulse');
}
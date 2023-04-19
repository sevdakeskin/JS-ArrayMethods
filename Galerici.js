/*
Galerici Feyyaz, büyük bir oto galerisine sahiptir ve online bir sistem üzerinden arabalarini satisa sunmaktadir.
Online sistemin ise arama ve filtreleme özellikleri daha olusturulmadigi icin Feyyaz online sistemi müsterilerine acamamaktadir.
Sizden istegimiz online sistemin ihtiyaci olan asagidaki fonksiyonlari acilen yazmanizdir.

let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", "tesla", "volvo", "skoda", "nissan", "ferrari", "volkswagen", "alfa romeo", "mitsubishi"];

1) Icinde "o" harfi gecen arabalari ve bu arabalarin sayisini bulun.
2) Icinde iki defa "o" harfi gecen arabalarin sayisini bulun.
3) Araba isim uzunlugu 5'den kücük olan arabalari listeleyin.
4) Ilk harfi "f" olan arabalarin son harfini x olarak degistirin.
5) Uzunlugu 3 ile 6 arasinda olan arabalardan isminin icinde "a" harfi olanlari, isimlerinin önüne "my favorite " gelecek sekilde degistirin ve html icerisinde listeleyin.
6) Ismi icinde "o" ve "a" gecen arabalari bulunuz.
7) Ismi icinde "o" veya "i" gecen arabalari bulunuz.

 */

let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", "tesla", "volvo", "skoda", "nissan", "ferrari", "volkswagen", "alfa romeo", "mitsubishi"];
//1) Icinde "o" harfi gecen arabalari ve bu arabalarin sayisini bulun.

let oCars = cars.filter(car => car.includes("o"));
console.log(oCars);

//2) Icinde iki defa "o" harfi gecen arabalarin sayisini bulun.
let ooCars = cars.filter(car => {
    let count = 0;
    for (let i = 0; i < car.length; i++) {
      if (car[i] === "o") {
        count++;
      }
    }
    return count === 2;
  });

  console.log("İki defa 'o' harfi geçen arabalarin sayisi:", ooCars.length);

 

  //3) Araba isim uzunlugu 5'den kücük olan arabalari listeleyin.


  let cars1=  ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", "tesla", "volvo", "skoda", "nissan", "ferrari", "volkswagen", "alfa romeo", "mitsubishi"];
  let filteredCars = cars1.filter(car => car.length <5);
  console.log(filteredCars);


  //4)Ilk harfi "f" olan arabalarin son harfini x olarak degistirin.

  let cars2=  ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", "tesla", "volvo", "skoda", "nissan", "ferrari", "volkswagen", "alfa romeo", "mitsubishi"];
  let result = cars.filter(car => car.startsWith("f")).map(car =>car.slice(0,-1) +"x");
  console.log(result);
  
  //5) Uzunlugu 3 ile 6 arasinda olan arabalardan isminin icinde "a" harfi olanlari,
  // isimlerinin önüne "my favorite " gelecek sekilde degistirin ve html icerisinde listeleyin.
  

  let filteredCars1 = cars1.filter(car => car.length >3 && car.length<6 && car.includes("a"));
  let favoriteCars = filteredCars1.map(car => "My Favorite Car is " +car);
  console.log(favoriteCars);
  
  //6) Ismi icinde "o" ve "a" gecen arabalari bulunuz.

  let filteredCars2 = cars1.filter(car => car.includes("o") && car.includes("a"));
  console.log(filteredCars2);

  //7) Ismi icinde "o" veya "i" gecen arabalari bulunuz.

  let filteredCars3 = cars1.filter(car => car.includes("o") && car.includes("i"));
  console.log(filteredCars3)

  console.log("HADİ  ALLAH'A  EMANET !!!")

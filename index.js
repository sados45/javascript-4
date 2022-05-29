//___________________FUNCTIONS_____________________

//bircok islemi yaptirdigimiz kodlama özelligir.

function myFirstFunction(){
    console.log("Hello World!")
}

myFirstFunction() // bu sekilde yukaridaki parantez icinde tanimladiktan sonra disarida yazarasak artik git bunu calistir demektir.su an Hello World consolda yazildi artik. buna functionu cagirmak ingilizce olarak ifadesi ise invoke, call yada execute denilebiliyor.

//örnek olarak;

function juiceExtractor (fruit1, fruit2){
    //console.log("Calisti.")
    const juice = `This is ${fruit1} and ${fruit2} juice.`
    return juice //bunu kaldirdigimizda undefined oluyor. 
        console.log(juice)
}

console.log(juiceExtractor("apple", "orange"))  // burada elma ve portakal elme suyu ve ve portakal suyu olarak cikti aliniyor. 

const myJuice= juiceExtractor("apple", "orange")
console.log(myJuice)

// function yukarida yazilabilir tanimlamasi yapilabilir. ama bir cikti almamiz yani onu görmemiz bir geri dönüt alabilmemiz icin (return ) etmemiz gerekiyor. eger return edilmezse undefined oluyor. return = cikti demek diyebiliriz.


// FUNCTION lari tanimlamak icin 3 yöntemimiz var.
// 1 - Function Decleration : mesela yas hesaplama functionumuzu yapalim.

function calcAge(birthYear){
  //  const age= 2021 - birthYear
  //  return age
return 2021-birthYear
}

console.log(calcAge(1997))
// yukaridaki yasi bulmak icin return edlierek sonucu bulmak. bir satirda da bu bulunabilir.
//return 2021-birthYear yalniz bu kod blok icinde olmali.

//  2- Function Expression:

const addition = function (a, b){
return a+ b
}// bu sekilde de kullanilabiliyor.

const total= addition(1985, 23456)
    console.log(total) // bu iki islemin toplamini yaptirdik.

    // function decleration yada function expression istenilen kullanilabilir. ayrim yok. kolayina hangisi gelirse.

    // su sekilde de bir kullanim var function decleration icin;

    console.log(calcAge(1992))
    function caclAge (birthYear){
        return 2021 - birthYear
    } // sonucumuzu alabiliyoruz. halbuki console yukarida. sonuc 29.


    // 3- Arrow Functiom:

   const calcAge2 = birthYear => 2021 - birthYear
   console.log(calcAge2(1976)) // bu islemle de tek satirda sonuca gidilebiliyor. 

   const canDrive = birthYear =>{
       const age = 2021 - birthYear
       const allowed = 18- age
       return `You can drive ${allowed} year later.` 
   }

   const result = canDrive(2006)
   console.log(result) // 3 yil sonra arac kullanabilirsin yazdirdik.


   function hipotenus (a, b){
       const firstValue = exponentValues(a)
       const secondValue= exponentValues(b)
       const result = (firstValue + secondValue) ** (0.5) //burada kökünü aliyor.
       return result
   }


   function exponentValues(value){

    return value ** 2 // burada karesi aliniyor. buradan küpünü al da diyebiliriz.
   }

   const hipoResult = hipotenus (7, 24)

   console.log(hipoResult)

   //buradaki 7 ve 24 rakamlari en yukaridaki yazdigimiz a ve b harflerine giriyor sonra en altta karesini aliyor.





   //cozdügümüz proje sorusunu ögrendigimiz function ile yapiyoruz.

   function average (a, b, c){

    return (a + b+ c ) /3
   }
const avgDolphin = average(96,108,89)
console.log(avgDolphin)
const avgKoala= average (88,91,110)
console.log(avgKoala)

function findWinner(team1, team2){

    if(team1>team2){
        return `The winner is Dolphin`
    }else{
        return `The winner is Koala`
    }
}

console.log (findWinner(avgDolphin, avgKoala))
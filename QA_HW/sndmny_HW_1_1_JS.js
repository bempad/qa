// let age_1 = 10
// // 27. Создать переменную “age_2” и присвоить ей значение 18
// let age_2 = 18
// // 28. Создать переменную “age_3” и присвоить ей значение 60
// let age_3 = 60
// 29. Создать if в котором будите проверять значение переменной age_1
// 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// 33. Иначе выводите “Technical work”.

    // if(age_1 < age_2){
    //     console.log("You don’t have access cause your age is " + age_1 + " It’s less then")
    //     }else if((age_1 >=  age_2) && (age_1 <  age_3)){
    //         console.log("Welcome  !")
    //         }else if(age_1  > age_3){
    //         console.log("Keep calm and look Culture channel")
    //         }else{
    //         console.log("Technical work")
    //         }


//1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61


let age_2 = 18
let age_3 = 60
const checkAge = function(age_1) {
    if(age_1 < age_2){
        console.log("You don’t have access cause your age is " + age_1 + " It’s less then")
        }else if((age_1 >=  age_2) && (age_1 <  age_3)){
            console.log("Welcome  !")
            }else if(age_1  > age_3){
            console.log("Keep calm and look Culture channel")
            }else{
            console.log("Technical work")
            }
        }



checkAge(17)
checkAge(18)
checkAge(60)
checkAge(61)





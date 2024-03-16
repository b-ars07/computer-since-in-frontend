function fizzbuzz() {
    var i = 1n;
    return {
        next: function () {
            var value = i;
            i++;
            var fizz = value % 3n === 0n;
            var buzz = value % 5n === 0n;
            if (fizz && buzz) {
                return { done: false, value: 'FizzBuzz' };
            }
            if (fizz) {
                return { done: false, value: 'Fizz' };
            }
            if (buzz) {
                return { done: false, value: 'Buzz' };
            }
            return { done: false, value: value };
        }
    };
}
var myFizzBuzz = fizzbuzz();
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());

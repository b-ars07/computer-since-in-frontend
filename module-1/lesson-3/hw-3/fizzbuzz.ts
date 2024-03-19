function fizzbuzz() {
    let i: bigint = 1n

    return {
        next() {
            const value: bigint = i
            i++

            const fizz: boolean = value % 3n === 0n
            const buzz: boolean = value % 5n === 0n

            if (fizz && buzz) {
                return {done: false, value: 'FizzBuzz'}
            }

            if (fizz) {
                return { done: false, value: 'Fizz'}
            }

            if (buzz) {
                return { done: false, value: 'Buzz'}
            }

            return { done: false, value}
        }
    }
}

const myFizzBuzz = fizzbuzz()

console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())
console.log(myFizzBuzz.next())

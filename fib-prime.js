const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false

  return num > 1
}

const fibonacci = num => {
  let phi = (1 + Math.sqrt(5)) / 2
  return Math.round(Math.pow(phi, num) / Math.sqrt(5))
}

const nextPrimeFibonacci = input => {
  let iterable = 1

  while (true) {
    let result = fibonacci(iterable)
    console.log('input value:', input, 'current result:', result)

    if (result > input) {
      if (isPrime(result)) {
        return result
      } else {
        iterable++
        console.warn('bumping to:', result)
      }
    } else {
      iterable++
      console.warn('bumping to:', result)
    }
  }
}

console.info('Next prime Fibonacci: ', nextPrimeFibonacci(20))


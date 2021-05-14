const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false

  return num > 1
}

const fibonacci = num => {
  if (num <= 1) return 1
  return fibonacci(num - 1) + fibonacci(num - 2)
}

function nextPrimeFibonacci(input) {
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


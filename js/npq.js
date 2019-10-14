
// When factorizing an integer (n) to its prime factors, after finding the first prime factor,
// the problem in hand is reduced to finding prime factorization of quotient (q).
// Suppose n is divisible to prime p1 then we have n = p1 * q1 so after finding p1 the problem is reduced
// to factorizing q1 (quotient). If the function name is primeFactorizer then we can call it recursively and solution for n would be:

// n = p1 * primeFactorizer(q1)

// n = p1 * p2 * primeFactorizer(q2)

// ...

// Until qn is prime itself.

// Also I'm going to use a helper generator function which generates primes for us:

function * primes () {
    let n = 2
    while (true) {
      let isPrime = true
      for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
          isPrime = false
          break
        }
      }
      if (isPrime) {
        yield n
      }
      n++
    }
  }

//   And function to factorize n would be:

function primeFactorizer (n, result = []) {
    for (const p of primes()) {
      if (n === p) {
        result.push(p)
        return result
      }
      if (n % p === 0) {
        result.push(p)
        return primeFactorizer(n / p, result)
      }
    }
  }

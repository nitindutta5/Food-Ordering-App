# NR - NOTES

## Difference between Monolith and Microservice acrhitecture?
A: https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith

## why useEffect() callback cannot be async
A: You cannot directly make the callback function supplied to the useEffect hook async because: async functions implicitly return a promise, and; useEffect expects its callback to either return nothing or a clean-up function.
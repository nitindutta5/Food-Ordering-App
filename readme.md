# Food Ordering App - React js & Redux Toolkit

Note: Using swiggy's public api's so for your local env use some cors extension.

## Difference between Monolith and Microservice acrhitecture?
A: https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith

## why useEffect() callback cannot be async
A: You cannot directly make the callback function supplied to the useEffect hook async because: async functions implicitly return a promise, and; useEffect expects its callback to either return nothing or a clean-up function.
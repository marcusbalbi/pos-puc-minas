# Circuit Breker Pattern Example in Node

## Supplier

### Server that supplies a resource

## CircuitBreaker

### The Circuit Breaker server receives the port to run and the SUpplier baseURL with OpenCircuitCount parameter that defines the number of success requests to supplier for open the Circuit, and a CloseCircuitCount to verify when it should close again the circuit

## Consumer

### The consumer funcion will try to call circuitbreaker endpoint by interval in ms passed by parameter

## run

### this file runs all the three functions and start a logic to close the supplier server ramdomly

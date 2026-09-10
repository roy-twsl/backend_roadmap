# JavaScript Backend Roadmap

Based on [javascript.info](https://javascript.info)

---

## Overview - Main Path

```mermaid
graph TD;
    A[Start]-->B[JS Fundamentals];
    B-->C[Data Types];
    C-->D[Advanced Functions];
    D-->E[Objects Prototypes];
    E-->F[Classes];
    F-->G[Error Handling];
    G-->H[Promises Async];
    H-->I[Generators Modules];
    I-->J[Browser DOM];
    J-->K[Events];
    K-->L[Forms Network];
    L-->M[Browser Storage];
    M-->N[Async Deep Dive];
    N-->O[Node.js Basics];
    O-->P[Node.js Core Modules];
    P-->Q[Express.js];
    Q-->R[Databases];
    R-->S[Authentication];
    S-->T[Testing];
    T-->U[DevOps];
    U-->V[Advanced Topics];
    V-->W[Backend Developer];
```

---

## 1. JavaScript Fundamentals

```mermaid
graph TD;
    A[Introduction]-->B[Hello World];
    B-->C[Code Structure];
    C-->D[Variables];
    D-->E[Data Types];
    E-->F[Interaction];
    F-->G[Type Conversions];
    G-->H[Operators];
    H-->I[Comparisons];
    I-->J[Conditional Branching];
    J-->K[Logical Operators];
    K-->L[Nullish Coalescing];
    L-->M[Loops];
    M-->N[Switch];
    N-->O[Functions];
    O-->P[Function Expressions];
    P-->Q[Arrow Functions];
    Q-->R[Objects];
    R-->S[Object Methods this];
    S-->T[Constructors new];
    T-->U[Optional Chaining];
    U-->V[Symbol Type];
    V-->W[Object to Primitive];
```

---

## 2. Data Types Deep Dive

```mermaid
graph TD;
    A[Numbers]-->B[Strings];
    B-->C[Arrays];
    C-->D[Array Methods];
    D-->E[Iterables];
    E-->F[Map and Set];
    F-->G[WeakMap WeakSet];
    G-->H[Object keys values entries];
    H-->I[Destructuring];
    I-->J[Date and Time];
    J-->K[JSON Methods];
```

---

## 3. Advanced Functions

```mermaid
graph TD;
    A[Recursion]-->B[Rest Parameters];
    B-->C[Spread Syntax];
    C-->D[Closures];
    D-->E[var let const];
    E-->F[Global Object];
    F-->G[Function Object];
    G-->H[setTimeout setInterval];
    H-->I[Call apply bind];
    I-->J[Decorators Forwarding];
```

---

## 4. Objects and Prototypes

```mermaid
graph TD;
    A[Property Flags]-->B[Getters Setters];
    B-->C[Prototypes];
    C-->D[Prototypal Inheritance];
    D-->E[F.prototype];
    E-->F[Native Prototypes];
    F-->G[Prototype Methods];
```

---

## 5. Classes

```mermaid
graph TD;
    A[Class Basic Syntax]-->B[Class Inheritance];
    B-->C[Static Properties];
    C-->D[Private Protected];
    D-->E[Extending Built-ins];
    E-->F[instanceof];
    F-->G[Mixins];
```

---

## 6. Error Handling

```mermaid
graph TD;
    A[try catch]-->B[Custom Errors];
    B-->C[Error Object];
    C-->D[finally];
```

---

## 7. Promises and Async

```mermaid
graph TD;
    A[Callbacks]-->B[Promise Basics];
    B-->C[Promise Chaining];
    C-->D[Error Handling];
    D-->E[Promise API];
    E-->F[Promisification];
    F-->G[Microtasks];
    G-->H[async await];
```

---

## 8. Generators and Modules

```mermaid
graph TD;
    A[Generators]-->B[Async Iterators];
    B-->C[Async Generators];
    C-->D[Export Import];
    D-->E[Dynamic Imports];
```

---

## 9. Browser and DOM

```mermaid
graph TD;
    A[DOM Tree]-->B[DOM Navigation];
    B-->C[Searching Elements];
    C-->D[Node Properties];
    D-->E[Attributes Properties];
    E-->F[Modifying Document];
    F-->G[Styles and Classes];
    G-->H[Element Size Scrolling];
    H-->I[Window Size];
    I-->J[Coordinates];
```

---

## 10. Events

```mermaid
graph TD;
    A[Introduction to Events]-->B[Bubbling Capturing];
    B-->C[Event Delegation];
    C-->D[Browser Default Actions];
    D-->E[Custom Events];
    E-->F[Mouse Events];
    F-->G[Keyboard Events];
    G-->H[Form Elements];
    H-->I[Focus Blur];
    I-->J[Load Error Events];
```

---

## 11. Forms and Network

```mermaid
graph TD;
    A[Form Properties]-->B[Form Validation];
    B-->C[Fetch API];
    C-->D[FormData];
    D-->E[URL Objects];
```

---

## 12. Browser Storage

```mermaid
graph TD;
    A[Cookies]-->B[LocalStorage];
    B-->C[SessionStorage];
    C-->D[IndexedDB];
```

---

## 13. Web Components

```mermaid
graph TD;
    A[Custom Elements]-->B[Shadow DOM];
    B-->C[Templates];
```

---

## 14. Regular Expressions

```mermaid
graph TD;
    A[Patterns Flags]-->B[Character Classes];
    B-->C[Anchors];
    C-->D[Quantifiers];
```

---

## 15. Async Deep Dive

```mermaid
graph TD;
    A[Event Loop]-->B[Web Workers];
```

---

## 16. Node.js Basics

```mermaid
graph TD;
    A[What is Node.js]-->B[Installation];
    B-->C[First Program];
    C-->D[Modules in Node.js];
    D-->E[npm and Packages];
```

---

## 17. Node.js Core Modules

```mermaid
graph TD;
    A[fs File System]-->B[path];
    B-->C[http];
    C-->D[events];
    D-->E[stream];
    E-->F[os and process];
```

---

## 18. Express.js

```mermaid
graph TD;
    A[Installation]-->B[Routing];
    B-->C[Middleware];
    C-->D[Request Response];
    D-->E[Templates Views];
    E-->F[Error Handling];
```

---

## 19. Databases

```mermaid
graph TD;
    A[MongoDB]-->B[Mongoose ODM];
    B-->C[CRUD Operations];
    C-->D[PostgreSQL];
    D-->E[SQL Basics];
    E-->F[Database Design];
```

---

## 20. Authentication

```mermaid
graph TD;
    A[JWT]-->B[Bcrypt];
    B-->C[OAuth 2.0];
    C-->D[Sessions];
```

---

## 21. Testing

```mermaid
graph TD;
    A[Jest]-->B[Mocha];
    B-->C[Supertest];
    C-->D[Unit Testing];
    D-->E[Integration Testing];
    E-->F[E2E Testing];
```

---

## 22. DevOps

```mermaid
graph TD;
    A[Docker]-->B[CI CD];
    B-->C[Deployment];
    C-->D[Environment Variables];
    D-->E[Logging];
    E-->F[Monitoring];
```

---

## 23. Advanced Topics

```mermaid
graph TD;
    A[WebSockets]-->B[Socket.io];
    B-->C[Message Queues];
    C-->D[Redis Caching];
    D-->E[Microservices];
    E-->F[System Design];
    F-->G[Security Best Practices];
```

---


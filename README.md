```mermaid
graph TD;
    A[Start]-->B[Section 1 - JavaScript Fundamentals];

    subgraph S1 [Section 1 - JavaScript Fundamentals]
        B-->C[Introduction];
        C-->D[Hello World];
        D-->E[Code Structure];
        E-->F[Variables];
        F-->G[Data Types];
        G-->H[Interaction];
        H-->I[Type Conversions];
        I-->J[Operators];
        J-->K[Comparisons];
        K-->L[Conditional Branching];
        L-->M[Logical Operators];
        M-->N[Nullish Coalescing];
        N-->O[Loops];
        O-->P[Switch];
        P-->Q[Functions];
        Q-->R[Function Expressions];
        R-->S[Arrow Functions];
        S-->T[Objects];
        T-->U[Object Methods this];
        U-->V[Constructors new];
        V-->W[Optional Chaining];
        W-->X[Symbol Type];
        X-->Y[Object to Primitive];
    end

    Y-->Z[Section 2 - Data Types Deep Dive];

    subgraph S2 [Section 2 - Data Types Deep Dive]
        Z-->AA[Numbers];
        AA-->AB[Strings];
        AB-->AC[Arrays];
        AC-->AD[Array Methods];
        AD-->AE[Iterables];
        AE-->AF[Map and Set];
        AF-->AG[WeakMap WeakSet];
        AG-->AH[Object keys values entries];
        AH-->AI[Destructuring];
        AI-->AJ[Date and Time];
        AJ-->AK[JSON Methods];
    end

    AK-->AL[Section 3 - Advanced Functions];

    subgraph S3 [Section 3 - Advanced Functions]
        AL-->AM[Recursion];
        AM-->AN[Rest Parameters];
        AN-->AO[Spread Syntax];
        AO-->AP[Closures];
        AP-->AQ[var let const];
        AQ-->AR[Global Object];
        AR-->AS[Function Object];
        AS-->AT[setTimeout setInterval];
        AT-->AU[Call apply bind];
        AU-->AV[Decorators Forwarding];
    end

    AV-->AW[Section 4 - Objects and Prototypes];

    subgraph S4 [Section 4 - Objects and Prototypes]
        AW-->AX[Property Flags];
        AX-->AY[Getters Setters];
        AY-->AZ[Prototypes];
        AZ-->BA[Prototypal Inheritance];
        BA-->BB[F.prototype];
        BB-->BC[Native Prototypes];
        BC-->BD[Prototype Methods];
    end

    BD-->BE[Section 5 - Classes];

    subgraph S5 [Section 5 - Classes]
        BE-->BF[Class Basic Syntax];
        BF-->BG[Class Inheritance];
        BG-->BH[Static Properties];
        BH-->BI[Private Protected];
        BI-->BJ[Extending Built-ins];
        BJ-->BK[instanceof];
        BK-->BL[Mixins];
    end

    BL-->BM[Section 6 - Error Handling];

    subgraph S6 [Section 6 - Error Handling]
        BM-->BN[try catch];
        BN-->BO[Custom Errors];
        BO-->BP[Error Object];
        BP-->BQ[finally];
    end

    BQ-->BR[Section 7 - Promises and Async];

    subgraph S7 [Section 7 - Promises and Async]
        BR-->BS[Callbacks];
        BS-->BT[Promise Basics];
        BT-->BU[Promise Chaining];
        BU-->BV[Error Handling];
        BV-->BW[Promise API];
        BW-->BX[Promisification];
        BX-->BY[Microtasks];
        BY-->BZ[async await];
    end

    BZ-->CA[Section 8 - Generators and Modules];

    subgraph S8 [Section 8 - Generators and Modules]
        CA-->CB[Generators];
        CB-->CC[Async Iterators];
        CC-->CD[Async Generators];
        CD-->CE[Export Import];
        CE-->CF[Dynamic Imports];
    end

    CF-->CG[Section 9 - Browser and DOM];

    subgraph S9 [Section 9 - Browser and DOM]
        CG-->CH[DOM Tree];
        CH-->CI[DOM Navigation];
        CI-->CJ[Searching Elements];
        CJ-->CK[Node Properties];
        CK-->CL[Attributes Properties];
        CL-->CM[Modifying Document];
        CM-->CN[Styles and Classes];
        CN-->CO[Element Size Scrolling];
        CO-->CP[Window Size];
        CP-->CQ[Coordinates];
    end

    CQ-->CR[Section 10 - Events];

    subgraph S10 [Section 10 - Events]
        CR-->CS[Introduction to Events];
        CS-->CT[Bubbling Capturing];
        CT-->CU[Event Delegation];
        CU-->CV[Browser Default Actions];
        CV-->CW[Custom Events];
        CW-->CX[Mouse Events];
        CX-->CY[Keyboard Events];
        CY-->CZ[Form Elements];
        CZ-->DA[Focus Blur];
        DA-->DB[Load Error Events];
    end

    DB-->DC[Section 11 - Forms and Network];

    subgraph S11 [Section 11 - Forms and Network]
        DC-->DD[Form Properties];
        DD-->DE[Form Validation];
        DE-->DF[Fetch API];
        DF-->DG[FormData];
        DG-->DH[URL Objects];
    end

    DH-->DI[Section 12 - Browser Storage];

    subgraph S12 [Section 12 - Browser Storage]
        DI-->DJ[Cookies];
        DJ-->DK[LocalStorage];
        DK-->DL[SessionStorage];
        DL-->DM[IndexedDB];
    end

    DM-->DN[Section 13 - Web Components];

    subgraph S13 [Section 13 - Web Components]
        DN-->DO[Custom Elements];
        DO-->DP[Shadow DOM];
        DP-->DQ[Templates];
    end

    DQ-->DR[Section 14 - Regular Expressions];

    subgraph S14 [Section 14 - Regular Expressions]
        DR-->DS[Patterns Flags];
        DS-->DT[Character Classes];
        DT-->DU[Anchors];
        DU-->DV[Quantifiers];
    end

    DV-->DW[Section 15 - Async Deep Dive];

    subgraph S15 [Section 15 - Async Deep Dive]
        DW-->DX[Event Loop];
        DX-->DY[Web Workers];
    end

    DY-->DZ[Section 16 - Node.js Basics];

    subgraph S16 [Section 16 - Node.js Basics]
        DZ-->EA[What is Node.js];
        EA-->EB[Installation];
        EB-->EC[First Program];
        EC-->ED[Modules in Node.js];
        ED-->EE[npm and Packages];
    end

    EE-->EF[Section 17 - Node.js Core Modules];

    subgraph S17 [Section 17 - Node.js Core Modules]
        EF-->EG[fs File System];
        EG-->EH[path];
        EH-->EI[http];
        EI-->EJ[events];
        EJ-->EK[stream];
        EK-->EL[os and process];
    end

    EL-->EM[Section 18 - Express.js];

    subgraph S18 [Section 18 - Express.js]
        EM-->EN[Installation];
        EN-->EO[Routing];
        EO-->EP[Middleware];
        EP-->EQ[Request Response];
        EQ-->ER[Templates Views];
        ER-->ES[Error Handling];
    end

    ES-->ET[Section 19 - Databases];

    subgraph S19 [Section 19 - Databases]
        ET-->EU[MongoDB];
        EU-->EV[Mongoose ODM];
        EV-->EW[CRUD Operations];
        EW-->EX[PostgreSQL];
        EX-->EY[SQL Basics];
        EY-->EZ[Database Design];
    end

    EZ-->FA[Section 20 - Authentication];

    subgraph S20 [Section 20 - Authentication]
        FA-->FB[JWT];
        FB-->FC[Bcrypt];
        FC-->FD[OAuth 2.0];
        FD-->FE[Sessions];
    end

    FE-->FF[Section 21 - Testing];

    subgraph S21 [Section 21 - Testing]
        FF-->FG[Jest];
        FG-->FH[Mocha];
        FH-->FI[Supertest];
        FI-->FJ[Unit Testing];
        FJ-->FK[Integration Testing];
        FK-->FL[E2E Testing];
    end

    FL-->FM[Section 22 - DevOps];

    subgraph S22 [Section 22 - DevOps]
        FM-->FN[Docker];
        FN-->FO[CI CD];
        FO-->FP[Deployment];
        FP-->FQ[Environment Variables];
        FQ-->FR[Logging];
        FR-->FS[Monitoring];
    end

    FS-->FT[Section 23 - Advanced Topics];

    subgraph S23 [Section 23 - Advanced Topics]
        FT-->FU[WebSockets];
        FU-->FV[Socket.io];
        FV-->FW[Message Queues];
        FW-->FX[Redis Caching];
        FX-->FY[Microservices];
        FY-->FZ[System Design];
        FZ-->GA[Security Best Practices];
    end

    GA-->GB[Backend Developer];
```فص
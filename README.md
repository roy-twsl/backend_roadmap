graph TD
    Start([شروع: Backend Developer]) --> Internet
    
    %% اینترنت و مبانی وب
    Internet[آشنایی با اینترنت و وب] --> HowInternet[اینترنت چطور کار می‌کند؟]
    Internet --> HTTP[HTTP / HTTPS]
    Internet --> DNS[DNS و Domain]
    Internet --> Hosting[هاستینگ و سرور]
    
    %% مبانی برنامه نویسی
    HowInternet --> ProgrammingLang{انتخاب زبان برنامه‌نویسی}
    HTTP --> ProgrammingLang
    DNS --> ProgrammingLang
    Hosting --> ProgrammingLang
    
    ProgrammingLang -->|Python| Python[Python]
    ProgrammingLang -->|JavaScript| NodeJS[Node.js]
    ProgrammingLang -->|Java| Java[Java]
    ProgrammingLang -->|Go| Go[Go]
    ProgrammingLang -->|C#| CSharp[C#]
    
    %% مبانی مشترک
    Python --> Git[Git & GitHub]
    NodeJS --> Git
    Java --> Git
    Go --> Git
    CSharp --> Git
    
    Git --> BasicCS[مبانی علوم کامپیوتر]
    BasicCS --> DSA[Data Structures & Algorithms]
    BasicCS --> OOP[OOP]
    BasicCS --> DesignPatterns[Design Patterns]
    BasicCS --> SOLID[SOLID Principles]
    
    %% دیتابیس
    DSA --> Database{دیتابیس}
    OOP --> Database
    DesignPatterns --> Database
    
    Database --> SQL[SQL Databases]
    Database --> NoSQL[NoSQL Databases]
    SQL --> PostgreSQL[PostgreSQL]
    SQL --> MySQL[MySQL]
    NoSQL --> MongoDB[MongoDB]
    NoSQL --> Redis[Redis]
    
    %% فریمورک ها
    PostgreSQL --> Framework{انتخاب فریم‌ورک}
    MongoDB --> Framework
    
    Framework -->|Python| Django[Django / FastAPI / Flask]
    Framework -->|JS| Express[Express / NestJS]
    Framework -->|Java| Spring[Spring Boot]
    Framework -->|Go| Gin[Gin / Fiber]
    Framework -->|C#| DotNet[ASP.NET Core]
    
    %% API ها
    Django --> APIs[طراحی API]
    Express --> APIs
    Spring --> APIs
    Gin --> APIs
    DotNet --> APIs
    
    APIs --> REST[REST API]
    APIs --> GraphQL[GraphQL]
    APIs --> gRPC[gRPC]
    APIs --> WebSocket[WebSocket]
    
    %% احراز هویت
    REST --> Auth[Authentication & Authorization]
    GraphQL --> Auth
    WebSocket --> Auth
    
    Auth --> JWT[JWT]
    Auth --> OAuth[OAuth 2.0]
    Auth --> Session[Session / Cookie]
    
    %% DevOps و ابزارها
    JWT --> DevOps[DevOps & Deployment]
    OAuth --> DevOps
    Session --> DevOps
    
    DevOps --> Docker[Docker]
    DevOps --> K8s[Kubernetes]
    DevOps --> CI[CI/CD]
    DevOps --> Cloud[Cloud - AWS/GCP/Azure]
    DevOps --> Nginx[Nginx]
    
    %% تست
    Docker --> Testing[Testing]
    K8s --> Testing
    CI --> Testing
    
    Testing --> UnitTest[Unit Testing]
    Testing --> IntegrationTest[Integration Testing]
    Testing --> E2E[E2E Testing]
    
    %% مباحث پیشرفته
    UnitTest --> Advanced[مباحث پیشرفته]
    IntegrationTest --> Advanced
    E2E --> Advanced
    
    Advanced --> Caching[Caching Strategies]
    Advanced --> MessageQueue[Message Queues - Kafka/RabbitMQ]
    Advanced --> Microservices[Microservices]
    Advanced --> SystemDesign[System Design]
    Advanced --> Security[Security Best Practices]
    Advanced --> Monitoring[Monitoring - Prometheus/Grafana]
    Advanced --> Logging[Logging - ELK Stack]
    
    %% پایان
    Caching --> End([Backend Developer حرفه‌ای])
    MessageQueue --> End
    Microservices --> End
    SystemDesign --> End
    Security --> End
    Monitoring --> End
    Logging --> End
    
    %% استایل ها
    classDef startEnd fill:#4CAF50,stroke:#2E7D32,color:#fff,stroke-width:2px
    classDef section fill:#2196F3,stroke:#1565C0,color:#fff,stroke-width:2px
    classDef lang fill:#FF9800,stroke:#E65100,color:#fff
    classDef choice fill:#9C27B0,stroke:#6A1B9A,color:#fff
    
    class Start,End startEnd
    class Internet,Git,BasicCS,Database,APIs,Auth,DevOps,Testing,Advanced section
    class Python,NodeJS,Java,Go,CSharp,Django,Express,Spring,Gin,DotNet lang
    class ProgrammingLang,Framework,Database choice
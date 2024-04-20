import React from "react";

const Spring = () => {
  return (
    <div>
      <h3 className="subHead">SPRING</h3>
      <p>
        Spring framework with simplified examples. It was developed by Rod
        Johnson in 2003. The Spring framework makes it easy to develop JavaEE
        applications.
        <br />
        <b>Spring framework</b>
        <br />
        The spring is a light frame. It can be considered a framework of
        frameworks because it provides support for various frameworks such as
        Struts, Hibernate, Tapestry, EJB, JSF, etc. A framework in a broader
        sense can be defined as a structure where we find a solution to various
        technical problems. The spring framework contains several modules such
        as IOC, AOP, DAO, Context, ORM, WEB MVC, etc. We will learn these
        modules on the next page. First let's understand IOC and dependency
        injection.
        <br />
        Why to use spring?
        <br />
        The Spring framework is an open-source Java platform. It was created by
        Rod Johnson and first released under the Apache 2.0 license in June
        2003. Spring is a featherweight in terms of size and transparency. The
        base version of Spring Framework is approximately 2 MB in size. The core
        features of the Spring Framework can be used to build any Java program,
        but modifications have been made to build web applications on top of the
        Java EE platform. By providing a POJO-based programming model, the
        Spring framework aims to facilitate the use of J2EE development and
        promote good programming practices. Inversion of control (IOC) and
        dependency injection These are design patterns used to remove
        dependencies from programming code. They facilitate code testing and
        maintenance. Let's understand this with the following code.
        <br />
        class Employee{"{"} <br />
        Address address;
        <br />
        Employee()
        {"{"}
        <br />
        address=new Address();
        <br />
        {"}"}
        <br />
        {"}"}
        <br />
        In this case, there is a dependency (tight coupling) between the
        employee and the address. In a reverse control scenario, we make it
        something like this. class Employee
        <br />
        {"{"}
        <br />
        Address address;
        <br />
        Employee(Address address)
        <br />
        {"{"}
        <br />
        this.address=address;
        <br />
        {"}"}
        <br />
        {"}"}
        <br />
        So the IOC binds the code loosely. In this case, there is no need to
        change the code when our logic is moved to a new environment. In the
        Spring framework, the IOC container is responsible for adding the
        dependency. We deliver metadata to the IOC repository either as an XML
        file or as an annotation. Advantage of dependency injection: makes code
        loosely coupled so easy to maintain makes code easy to test.
      </p>
      <h3 className="subHead">Advantages of spring framework</h3>
      <p>
        Spring Framework has many advantages. They are as follows:
        <br />
        1) Predefined templates
        <br />
        Spring framework provides templates for JDBC, Hibernate, JPA, etc.
        technologies. So there is no need to write too much code. It hides the
        core steps of these technologies. Take Jdbc Template for example. There
        is no need to write code to handle exceptions, create a connection,
        create an expression, bind an event, close a connection, etc. You only
        need to write code to run the query. So it saves a lot of JDBC code.
        <br />
        2) Loose coupling
        <br />
        Spring applications are loosely coupled due to dependency injection.
        <br />
        3) Easy to test
        <br />
        Dependency injection makes it easy to test an application. An EJB or
        Struts application needs a server to run the application, but the Spring
        framework does not.
        <br />
        4) Lightweight
        <br />
        The lightweight framework is lightweight due to its POJO implementation.
        Spring Framework does not force the developer to inherit any class or
        implement any interface. That's why it's called non-invasive.
        <br />
        5) Fast development
        <br />
        Spring Framework's dependency injection and multi-framework support make
        it easy to develop JavaEE applications.
        <br />
        6) Powerful abstraction
        <br />
        It provides powerful abstraction for JavaEE. specifications like JMS,
        JDBC, JPA and JTA.
        <br />
        7) Declarative support
        <br />
        It provides declarative support for caching, validation, events and
        formatting.
        <br />
      </p>
      <h3 className="subHead">Applications of spring</h3>
      <p>
        POJO-based
        <br />
        Spring allows developers to create POJO applications to build
        enterprise-level applications. The advantage of using only POJOs is that
        you don't need an EJB container as an application server. instead, you
        can use a powerful server container like Tomcat or a commercial product.
        <br />
        Modular
        <br />
        Spring is installed modularly. Even with many packages and classes, you
        only need to care about what you need and ignore the others.
        <br />
        Integrate with existing frameworks
        <br />
        Spring doesn't reinvent the wheel; rather, it makes extensive use of
        existing technologies, such as many ORM frameworks, logging frameworks,
        JEE, Quartz and JDK timers, and other visualization technologies.
        <br />
        Testability
        <br />
        Because environment-dependent code is placed in this framework, testing
        the application written in Spring is negligible. Additionally, using
        JavaBeanstyle POJOs makes it easy to use dependency injection to inject
        test data.
        <bbr />
        Web MVC
        <br />
        The Spring Web Framework is a well-designed web-based MVC framework that
        is a great alternative to web frameworks like Struts and other
        over-engineered ones. or less popular web frameworks.
        <br />
        Central Exception Handling
        <br />
        Spring provides a convenient API to convert technology-specific
        exceptions (such as those thrown by JDBC, Hibernate, or JDO) into
        consistent unchecked exceptions.
        <br />
        Lightweight
        <br />
        IoC containers tend to be lightweight, especially compared to EJB
        containers. for example. It is useful for creating and distributing
        programs on systems with limited memory and CPU resources.
        <br />
      </p>
      <h3 className="subHead">SPRING BOOT</h3>
      <p>
        Spring Boot Tutorial provides basic and advanced concepts of Spring
        Framework. Our Spring Boot tutorial is intended for both beginners and
        professionals. Spring Boot is a Spring module that provides RAD (Rapid
        Application Development) features to the Spring framework. Our Spring
        Boot tutorial covers all Spring Boot topics such as for example ,
        functions, project, maven project, startup project wizard, Spring
        Initializr, CLI, applications, annotations, dependency management,
        properties, initializers, executor, JPA, JDBC, etc.
        <br />
        <b>What is spring boot</b>
        <br />
        Spring Boot is a project that is built on the top of the Spring
        Framework. It provides an easier and faster way to set up, configure,
        and run both simple and web-based applications. It is a Spring module
        that provides the RAD (Rapid Application Development) feature to the
        Spring Framework. It is used to create a stand-alone Spring-based
        application that you can just run because it needs minimal Spring
        configuration. What is Spring BootIn short, Spring Boot is the
        combination of Spring Framework and Embedded Servers. In Spring Boot,
        there is no requirement for XML configuration (deployment descriptor).
        It uses convention over configuration software design paradigm that
        means it decreases the effort of the developer. We can use Spring STS
        IDE or Spring Initializer to develop Spring Boot Java applications. Why
        should we use Spring Boot Framework? We should use Spring Boot Framework
        because: The dependency injection approach is used in Spring Boot. It
        contains powerful database transaction management capabilities. It
        simplifies integration with other Java frameworks like JPA/Hibernate
        ORM, Struts, etc. It reduces the cost and development time of the
        application. Along with the Spring Boot Framework, many other Spring
        sister projects help to build applications addressing modern business
        needs. There are the following Spring sister projects are as follows:
        <br />
        Spring Data: It simplifies data access from the relational and NoSQL
        databases.
        <br />
        Spring Batch: It provides powerful batch processing.
        <br />
        Spring Security: It is a security framework that provides robust
        security to applications.
        <br />
        Spring Social: It supports integration with social networking like
        LinkedIn.
        <br />
        Spring Integration: It is an implementation of Enterprise Integration
        Patterns. It facilitates integration with other business applications
        using lightweight messaging and notification adapters.
      </p>
      <h3 className="subHead">Advantages of spring boot</h3>
      <p>
        It creates standalone Spring applications that can be run using a Java
        jar.
        <br />
        It easily tests web applications using various embedded HTTP servers
        such as Tomcat, Jetty, etc. We don't need to deploy WAR files.
        <br />
        It provides imaginary "initial POMs" to simplify Maven configuration.
        <br />
        It provides production-ready features such as metrics, health checks,
        and external configuration.
        <br />
        No XML configuration is required.
        <br />
        It provides CLI- tool that allows you to develop and test your Spring
        Boot application.
        <br />
        It offers several extensions.
        <br />
        It also minimizes writing large amounts of generic code (code that needs
        to be added in many places with little or no change), XML definitions,
        and annotations.
        <br />
        It increases productivity. and reduce development time.
        <br />
      </p>
      <h3 className="subHead">Limitations of Spring Boot</h3>
      <p>
        Spring Boot can use dependencies that are not intended for use in the
        application. These dependencies increase the size of the application.
        Goals of Spring Boot The primary goal of Spring Boot is to reduce the
        time spent on development, unit testing, and integration testing.
        Provides an opinionated development approach. Avoid specification. more
        annotation specification Avoid writing many import statements Avoid XML
        settings. By providing or avoiding the points above, the Spring Boot
        Framework reduces development effort, developer effort and increases
        productivity.
      </p>
      <h3 className="subHead">Spring Boot Prerequisite</h3>
      <p>
        Create Spring Boot- application as follows: have prerequisites. In this
        tutorial we will use Spring Tool Suite (STS) IDE.
        <br />
        Java 1.8Maven 3.0+Spring Framework 5.0.0.BUILD-SNAPSHOTIDE (Spring Tool
        Suite) is recommended.
        <br />
        Spring Boot features.
        <br />
        Web Development
        <br />
        SpringApplication
        <br />
        Application Events and Listeners
        <br />
        Management Features
        <br />
        Exported Settings
        <br />
        Exported Files
        <br />
        YAML Support
        <br />
        Type-Safe Configuration
        <br />
        Writing
        <br />
        Security
        <br />
        Web Development
        <br />
        This is a very suitable spring module for web application development .
        We can easily create a standalone HTTP application that uses embedded
        servers such as Tomcat, Jetty or Undertow. We can use the web module
        spring-boot-starter-web.to start the application quickly.
        <br />
        Spring Application
        <br />
        Spring Application is a class that provides a convenient way to invoke
        Spring Application. It can be started from the base method. We can call
        the application only with the static run() method.
        <br />
        public static void main(String[] args)
        {"{"}
        <br />
        SpringApplication.run(ClassName.class, args);
        <br />
        {"}"}
        <br />
        Application Events and Listeners
        <br />
        Spring Boot uses events to perform various operations. This allows us to
        create a factory file that will be used to add listeners. We can refer
        to it with the ApplicationListener key. Always create a factory file in
        the META-INF directory (eg META-INF/spring.factories).
        <br />
        Admin support
        <br />
        Spring Boot allows you to enable an administrator. -related features.
        for the application. It is used for remote access and application
        management. We can enable this in Spring Boot using the
        spring.application.admin.enabled property.
        <br />
        External Configuration
        <br />
        Spring Boot allows us to exclude configuration to run the same
        application in different environments. The application uses YAML files
        to exclude configuration.
        <br />
        Application Files
        <br />
        Spring Boot provides a number of application functions. So we can use it
        in our project properties file. The properties file is used to define
        properties like server-port =8082 and many others. It helps organize
        application functions.
        <br />
        YAML support
        <br />
        It provides a convenient way to define hierarchical configuration. This
        is a JSON superset. The Spring-Application class automatically supports
        YAML. This is an alternative to a properties file.
        <br />
        Type-safe configuration
        <br />
        Strongly type-safe configuration is designed to manage and validate an
        application. Configuring an application is always an important task that
        should be secure. We can also use the annotations provided by this
        library.
        <br />
        Logging
        <br />
        Spring Boot uses a common protocol for all internal protocols. Registry
        dependencies are managed by default. Unless customization is required,
        we are not allowed to change protocol dependencies.
        <br />
        Security
        <br />
        Spring Boot applications are Spring's core web applications. So it is
        secure by default with basic authentication for all HTTP endpoints. A
        rich set of endpoints is available for developing a secure Spring Boot
        application.
        <br />
        Prerequisite
        <br />
        You must have a basic understanding of the Spring Framework before
        learning Spring Boot.
        <br />
        Audience
        <br />
        Our Spring Boot tutorials are designed to help beginners and
        professionals.
        <br />
        Problem
        <br />
        We assure you that you will not find any problems in Spring Boot
        Tutorial. However, if there are any errors, please report the problem
        using the contact form.
        <br />
      </p>
      <h3 className="subHead">Spring MVC</h3>
      <p>
        Spring Model-View-Controller
        <br />
        Model - The model contains the application information. A dataset can be
        a single object or a collection of objects.
        <br />
        Controller - A controller contains the business logic of the
        application. The @Controller annotation is used here to identify a class
        as a controller.
        <br />
        View - A view is a representation of the provided data in a specific
        format. In most cases, JSP+JSTL is used to create the view page.
        However, Spring supports additional view technologies such as Apache
        Velocity, Thymeleaf and FreeMarker.
        <br />
        Front Controller - The DispatcherServlet class acts as the front
        controller for Spring Web MVC. It is responsible for managing the flow
        of a Spring MVC application.
        <br />
      </p>
      <h3 className="subHead">Advantages of Spring MVC Framework</h3>
      <p>
        Let's look at some advantages of Spring MVC Framework:-Separate Roles -
        Spring MVC separates each role where Model Object, Controller, Command
        Object, View Resolver, DispatcherServlet, Validator etc. by special
        object.
        <br />
        Lightweight - It uses a lightweight servlet to develop and deploy your
        application.
        <br />
        Strong configuration - Provides strong configuration for both framework
        and application classes, including easy reference to different contexts,
        such as web controls for business objects and validators. .Fast
        development - Spring MVC allows fast and parallel development.
        <br />
        Reusable business code - Allows you to use existing business objects
        instead of creating new objects.
        <br />
        Easy to test - In Spring, we usually create JavaBeans classes that allow
        you to enter a test. data with assignment methods.
        <br />
        Flexible mapping - It provides special annotations that easily recheck
        the page.
        <br />
      </p>
      <h3 className="subHead">Hibernate</h3>
      <p>
        Hibernate is the most widely used object/relational persistence and
        query service and is open source under the GNU Lesser General Public
        License (LGPL). Hibernate not only sees the mapping between Java classes
        and database tables, but also provides data retrieval and retrieval
        capabilities. Hibernate is free to download. This hibernate tutorial for
        both beginners and experienced professionals will help you build
        database-driven web applications using hibernate in simple and easy
        steps and learn basic and advanced concepts of hibernate including
        configuring hibernate, mapping of Java classes through database tables,
        performing basic and advanced database operations, Hibernate Query
        Language (HQL) and more.
        <br />
        <b>What is hibernate framework ?</b>
        <br />
        Hibernate is a Java framework licensed under the open source GNU Lesser
        General Public License (LGPL) and free to download. Developed by Gavin
        King in 2001, Hibernate was introduced as a pioneering alternative to
        the EJB2-style entity bean. Connecting Java objects to database tables
        simplifies data persistence and retrieval without complex SQL queries.
        Hibernate simplifies and optimizes database interactions with features
        such as automatic event handling and caching, making it an essential
        framework for efficient data management in Java applications.
        <br />
      </p>
      <h3 className="subHead">Advantages of hibernate</h3>
      <p>
        The advantages of Hibernate framework are:
        <br />
        1) Open source and lightweight.
        <br />
        Hibernate framework is open source with LGPL license and lightweight.
        <br />
        2) Fast performance
        <br />
        The performance of Hibernate framework is fast because cache is used
        internally in hibernation. There are two types of caches in Hibernate
        framework first level cache and second level cache. Level 1 caching is
        enabled by default.
        <br />
        3) Database Independent Query
        <br />
        HQL (Hibernate Query Language) is an object-oriented version of SQL. It
        creates database-independent queries. So you don't need to write
        database queries. Before hibernation, when the database is changed for a
        project, we also have to change the SQL query, which leads to
        maintenance problems.
        <br />
        4) Automatic creation of tables
        <br />
        The Hibernate framework provides the ability to automatically create
        database tables. This way you don't have to manually create tables in
        the database.
        <br />
        5) Simplifies complex joins
        <br />
        Retrieving data from multiple tables is easy at rest.
        <br />
        6) Provides query statistics and database state
        <br />
        Hibernate supports query caching. and provides query and database state
        statistics.
        <br />
      </p>
    </div>
  );
};

export default Spring;

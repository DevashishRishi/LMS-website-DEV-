import React from "react";

const OOPS = () => {
  return (
    <div>
      <h3 className="subHead">OOPS</h3>
      <p>
        As the name suggests, Object-Oriented Programming or OOPs refers to
        languages that use objects for programming and they use objects as the
        main source for implementing what happens in the code. The viewer or
        user sees objects that perform tasks assigned to them. Object-oriented
        programming aims to implement real units in programming such as
        inheritance, hiding, polymorphism, etc. The main goal of OOP is to tie
        data and the functions that operate on them together so that neither of
        them happens. other parts of the code can access this data besides the
        function in question.
        <br />
        Object-oriented programming has several advantages over procedural
        programming:
        <br />
        OOP is faster and easier to run
        <br />
        OOP provides a clear structure for programs
        <br />
        OOP helps keep Java code DRY "Don't repeat yourself" and makes code
        easier to maintain, modify, and debug
        <br />
        OOP allows completion by creating reusable applications with less code
        and shorter development time
        <br />
        Tip: The "Don't Repeat Yourself" (DRY) principle means reducing code
        repetition. You should separate the code common to the application put
        it in one place and reuse it instead of repeating it.
        <br />
      </p>
      <h3 className="subHead">Advantages and disadvantages of oops in Java</h3>
      <h3 className="subHead">Advantages:</h3>
      <p>
        If you know what object-oriented programming is in Java, you should
        learn about its many advantages:
        <br />
        Reusability
        <br />
        Reusable code is something that is written once but used many times.
        Using a class ensures that a given piece of code can be used an
        unlimited number of times.
        <br />
        Data Redundancy
        <br />
        One of the biggest advantages of Java OOP concepts is data redundancy.
        It can be created in a data warehouse by storing the same data in two
        different places. If you want to use similar functions in multiple
        classes, you can write common class definitions by inheriting from them.
        <br />
        Code Maintenance
        <br />
        The concept of Java OOPs makes existing code easier to maintain because
        new objects can be created with slight differences from existing ones.
        It allows users to rewrite and modify existing code repeatedly by adding
        new changes.
        <br />
        Security
        <br />
        Java OOP concepts such as abstraction and data hiding enable limited
        discovery filtering. Therefore, OOP functions display only the necessary
        information for security.
        <br />
        Design Advantages
        <br />
        Java OOPs allow designers a broader design phase. This leads to better
        models. The program reaches critical limits after a certain period of
        time. At this point, it is easy to program all non-operations
        separately.
        <br />
        Easy Debugging
        <br />
        The concept of Java OOPs allows the use of self-contained encapsulation
        objects. Therefore, developers can easily solve ongoing problems. The
        OOP features also prevent the output of duplicate code.
        <br />
      </p>
      <h3 className="subHead">Disadvantage: </h3>
      <p>
        Performance
        <br />
        Java must be interpreted at runtime, which allows it to run on all
        operating systems but also makes it slower than languages like C and
        C++. On the other hand, a C++ program must be compiled directly into
        binary format on each operating system and therefore runs faster.
        <br />
        Memory consumption <br />
        A Java program consumes more memory because it runs on a Java virtual
        machine.
        <br />
        Price
        <br />
        The Java programming language is somewhat expensive due to its higher
        processing and memory requirements. We need better hardware to run Java
        program.
        <br />
        Less machine interaction
        <br />
        Java lacks direct interaction with machines, making it less useful for
        software that needs to run quickly and interact directly with the
        machine, as Java also lacks explicit pointers.
        <br />
        Garbage Collection
        <br />
        Java provides automatic garbage collection that cannot be controlled by
        the developer. It does not provide methods like delete() and free() to
        free memory.
        <br />
      </p>
      <h3 className="subHead">Best Practices in Java OOP Concepts</h3>
      <p>
        The Java OOP concept aims to save time without compromising usability
        and security. Some object-oriented programming best practices to achieve
        this goal are: SEKA or Don't Repeat Yourself is a core concept in Java.
        Therefore, you should never use two identical blocks of code in two
        different places. You should use a single method in different
        applications. If you want your Java code to change in the future, you
        should encapsulate it first by making all methods and variables private.
        If necessary, you can increase access to "protected" over time. But
        don't make it too public.
        <br />
        Single responsibility is one of the best practices of OOP concepts in
        Java. This involves making sure the class has a single function. This
        ensures that the class can be used independently or extended as new
        applications emerge. This helps to remove the link between multiple
        functions.
        <br />
        Open-closed design is one of the best practices of the Java OOP concept.
        You must close all classes and methods for editing, but keep them open
        for extensions. This ensures that the tested code of Java OOP’s concepts
        remains static. But they can be easily modified to perform new tasks as
        needed.
        <br />
        Let's look at the prerequisites, explaining the concepts of method
        declaration and message passing. Starting from the method definition, it
        consists of six parts:
        <br />
        Access Modifier: Defines the access type of the method, ie. where it can
        be used in your application. There are four types of access definitions
        in Java: \public: Available to all classes in your application.
        <br />
        Protected: Available to the package in which it is defined and its
        subclasses (including subclasses declared outside the package).
        \current: Available only in the class in which it is defined.
        <br />
        Default (declared/defined without a modifier): Available in the same
        class and package in which its class is defined.
        <br />
        Return type: The return value of the method, or void if it returns no
        value.
        <br />
        Method name: The rules for field names also apply to method names, but
        the convention is slightly different.
        <br />
        Parameter list: a comma-separated list of input parameters defined in
        parentheses before their data type. If there are no parameters, you must
        use empty parentheses ().List of exceptions: Exceptions expected by the
        method. You can set these exceptions.
        <br />
        Method body: This is the block of code enclosed in parentheses that you
        must execute to perform the intended action.
        <br />
        Message passing: Objects communicate with each other by sending and
        receiving information to each other. The object's message is a request
        to perform an action and therefore invokes an action on the receiving
        object that produces the desired results. Sending a message contains the
        name of the object, the name of the function and the definition of the
        information to be sent.
        <br />
        Now that we have covered the basics, let's move on to the four pillars
        of OOP, which are as follows. However, let's start by learning about the
        various features of an object-oriented programming language.
        <br />
        The concepts of OOPS are: <br /> 1) Class <br /> 2) Object <br /> 3)
        Method and method passing <br /> 4) Abstraction <br />
        5) Encapsulation <br />
        6) Inheritance <br /> 7) Polymorphism
      </p>
      <h3 className="subHead">Class </h3>
      <p>
        A collection of objects is called a class. It is a logical entity. A
        class can also be defined as a blueprint from which a single object can
        be created. The class does not take up space. In general, class
        declarations can contain the following components in order: Modifiers:
        The class can be public or have default permissions (see here for
        details).Class name: The name of the class must start with an initial
        letter and be capitalized accordingly the convention .Superclass (if
        any): The superclass of the class name, if present, preceded by a
        keyword, is expanded. A class can extend (subclass) only one superclass.
        Elements (if any): a comma-separated list of interfaces implemented by
        the class, if any, preceded by the implements keyword. A class can
        implement more than one user interface. Body: The body of a class is
        enclosed in braces, {}.
      </p>
      <h3 className="subHead">Object</h3>
      <p>
        Any entity that has state and behaviour is called an object. For
        example, a chair, a pen, a table, a keyboard, a bicycle, etc. It can be
        physical or logical. An object can be defined as an instance of a class.
        An object contains an address and occupies space in memory. Objects can
        communicate without knowing the details of each other's data or code.
        All that is needed is the type of message received and the type of
        response returned by the objects. Example: A dog is an object because it
        has states such as color, name, breed, etc., and behaviour such as hand
        waving. tail, barking, eating, etc. Lets have a Java program in which we
        try both class and object.
        <br />
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                public class GFG {"{"} <br />
                static String Employee_name; <br />
                static float Employee_salary; <br />
                static void set(String n, float p) {"{"} <br />
                Employee_name = n; <br />
                Employee_salary = p; <br />
                {"}"} <br />
                static void get() {"{"} <br />
                System.out.println("Employee name is: " +Employee_name ); <br />
                System.out.println("Employee CTC is: " + Employee_salary);{" "}
                <br />
                {"}"} <br />
                public static void main(String args[]) {"{"} <br />
                GFG.set("Ravi Shastri", 55000.0f); <br />
                GFG.get(); <br />
                {"}"} <br />
                {"}"}
                <br />
                Output
                <br />
                Employee name is: Ravi Shahstri
                <br />
                Employee CTC is: 55000.0
              </code>
            </pre>
          </div>
        </div>
        <br />
        Now we will discuss the most important pillars of OOPS concept
      </p>
      <h3>Abstraction</h3>
      <p>
        Data abstraction is a feature that shows only relevant information to
        the user. Trivial or insignificant units are not displayed to the user.
        Eg: A car is considered a car, not its individual components. Data
        abstraction can also be defined as the process of identifying only the
        required characteristics of an object, ignoring irrelevant details. The
        properties and behavior of an object distinguish it from other objects
        of the same type and also help classify/group the object. See a real
        example of driving a car. The man only knows that pressing the gas pedal
        increases the speed of the car or braking stops the car, but he does not
        know how pressing the gas pedal actually increases the speed. He does
        not know the internal mechanism of the car or the implementation of gas
        pedals, brakes etc. in the car. It is an abstraction. In Java,
        abstraction is achieved through user interfaces and abstract classes.
        With the help of interfaces, we can achieve 100% abstraction. An
        abstract method contains only the method definition, but not the
        implementation. Introduction to an abstract class. abstract class GFG
        {"{"}
        {"//"}abstract methods declaration abstract void add(); abstract void
        mul(); abstract void div();
        {"}"}
      </p>
      <h3 className="subHead">Encapsulation </h3>
      <p>
        It is defined as packing data into a single unit. It is the mechanism
        that connects the code and the data that it processes. Another way to
        think about encapsulation is that it is a protective shield that
        prevents code from accessing data outside of that protection.
        Technically, with encapsulation, the variables or data of a class are
        hidden from all other classes and accessible only by any member function
        of the class in which they are declared.In encapsulation, the data of a
        class is hidden from other classes, similar to data hiding. Thus, the
        terms "encapsulation" and "data hiding" are used interchangeably.
        Encapsulation can be achieved by declaring all variables in a class as
        private and writing public methods for the class to set and retrieve
        variable values. Introduction Encapsulation. //Encapsulation using
        private modifier //Employee class contains private data called employee
        id and employee name class Employee {"{"}
        private int empid; private String ename;
        {"}"}
      </p>
      <h3 className="subHead">Inheritance</h3>
      <p>
        Inheritance is an important pillar of OOP (Object Oriented Programming).
        It is a Java mechanism that allows one class to inherit the properties
        (fields and methods) of another class. We achieve inheritance using the
        extends keyword. Inheritance is also known as an "is-a" relationship.
        <br />
        Let's discuss some important terms that are commonly used:
        <br />
        Superclass: A class whose properties are inherited is known as a
        superclass (also known as a base or superclass. ). <br />
        Subclass: A class that inherits from another class is called a subclass
        (also known as a derived or extended or subclass). A subclass can add
        its own fields and methods in addition to the fields and methods of the
        superclass.
        <br />
        Reusability: Inheritance supports the concept of "reusability", ie. when
        we want to create a new class and an existing class already exists.
        which contains some of the code we want, we can derive our new class
        from an existing class. By doing this, we reuse the fields and methods
        of an existing class.
        <br />
        Introduction to inheritance.
        <br />
        {"//"}base class or parent class or super class
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                class A {"{"} <br />
                &nbsp;&nbsp;{"//"} parent class methods <br />
                &nbsp;&nbsp;void method1(){"{}"} <br />
                &nbsp;&nbsp;void method2(){"{}"} <br />
                {"}"} <br />
                <br />
                class B extends A {"{"} {"//"} Inherits parent class methods{" "}
                <br />
                &nbsp;&nbsp;{"//"} child class methods <br />
                &nbsp;&nbsp;void method3(){"{}"} <br />
                &nbsp;&nbsp;void method4(){"{}"} <br />
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Polymorphism</h3>
      <p>
        When the same task is performed in different ways, it is called
        polymorphism. For example: convince the client to do something else,
        draw something like a shape, triangle, rectangle, etc. In Java, we use
        method overloading and method overriding to achieve polymorphism.
        Another example can be speech. . something; for example, a cat says
        meow, a dog barks wow, etc.
        <br />
        Let us understand polymorphism by a Java program <br />
        {"//"} Java program to Demonstrate Polymorphism <br />
        {"//"} This class will contain <br />
        {"//"} 3 methods with same name, <br />
        {"//"} yet the program will <br />
        {"//"} compile & run successfully
        <br />
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                {"//"} Java program to Demonstrate Polymorphism <br />
                {"//"} This class will contain <br />
                {"//"} 3 methods with same name, <br />
                {"//"} yet the program will <br />
                {"//"} compile & run successfully <br />
                public class Sum {"{"} <br />
                {"    "}
                {"//"} Overloaded sum(). <br />
                {"    "}
                {"//"} This sum takes two int parameters <br />
                {"    "}public int sum(int x, int y) {"{"} <br />
                {"        "}return (x + y); <br />
                {"    "}
                {"}"} <br />
                {"    "}
                {"//"} Overloaded sum(). <br />
                {"    "}
                {"//"} This sum takes three int parameters <br />
                {"    "}public int sum(int x, int y, int z) {"{"} <br />
                {"        "}return (x + y + z); <br />
                {"    "}
                {"}"} <br />
                {"    "}
                {"//"} Overloaded sum(). <br />
                {"    "}
                {"//"} This sum takes two double parameters <br />
                {"    "}public double sum(double x, double y) {"{"} <br />
                {"        "}return (x + y); <br />
                {"    "}
                {"}"} <br />
                <br />
                {"    "}
                {"//"} Driver code <br />
                {"    "}public static void main(String args[]) {"{"} <br />
                {"        "}Sum s = new Sum(); <br />
                {"        "}System.out.println(s.sum(10, 20)); <br />
                {"        "}System.out.println(s.sum(10, 20, 30)); <br />
                {"        "}System.out.println(s.sum(10.5, 20.5)); <br />
                {"    "}
                {"}"} <br />
                {"}"} <br />
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Coupling</h3>
      <p>
        Relation refers to another class or dependency of information or
        knowledge. This happens when classes are aware of each other. If a class
        has details of another class, there is a strong relationship. In Java,
        we use private, protected, and public modifiers to indicate the level of
        visibility of a class, method, and field. For looser coupling, you can
        use interfaces because there is no specific implementation.
      </p>
      <h3>Cohesion</h3>
      <p>
        Cohesion refers to the level of a component that performs one
        well-defined task. A single, well-defined task is accomplished by a very
        uniform method. The weakly coupled method divides the task into separate
        parts. The java.io package is a very unified package because it has I/O
        classes and an interface. However, the java.util package is loosely
        coupled because it contains unrelated classes and interfaces.
      </p>
      <h3 className="subHead">Association</h3>
      <p>
        A relationship represents a relationship between objects. Here, one
        object can be connected to one or more objects. There can be four types
        of relationships between objects:
        <br />
        One-to-one
        <br />
        One-to-many
        <br />
        Many-to-one and
        <br />
        Many-to-many
        <br />
        Let us understand the relationship with live examples. For example, a
        country can have one prime minister (one-to-one) and the prime minister
        can have several ministers (one-to-many). Additionally, many MPs can
        have one Prime Minister (many-to-one) and many ministers can have
        several departments (many-to-many). The relationship can be one-way or
        two-way.
      </p>
      <h3 className="subHead">Merging</h3>
      <p>
        Merging is a way of combining. Aggregation represents a relationship
        where one object contains other objects as part of its state. It
        represents a weak connection between objects. In Java, this is also
        called the has relationship. Like, inheritance represents an is
        relationship. This is another way to reuse objects.
      </p>
      <h3 className="subHead">Composition</h3>
      <p>
        Arrangement is also a way to combine. Composition represents a
        relationship where one object contains other objects as part of its
        state. There is a strong relationship between the contained object and
        the dependent object. It is a state in which the containing objects have
        no independent existence. When you delete a parent object, all child
        objects are automatically deleted.
      </p>
      <h3>Why java is not purely object-oriented programming?</h3>
      <p>
        Pure Object-Oriented Language or Complete Object-Oriented Language are
        completely object-oriented languages that support or include functions
        that treat everything in a program as an object. It does not support
        primitive data type (eg int, char, float, bool, etc.).
        <br />
        They are:
        <br />
        Data Encapsulation/HidingInheritance
        <br />
        Polymorphism
        <br />
        Abstraction
        <br />
        All predefined types are objects
        <br />
        All user-defined types are objects
        <br />
        All operations on objects must be performed only by methods visible on
        objects.
        <br />
        Example: Smalltalk \ n Java supports functions 1, 2, 3, 4 and 6, but
        does not support functions 5 and 7 above. Java is not a pure
        object-oriented language because it contains the following functions:
        <br />
        Primitive data type, e.g. int, long, bool, float, char, etc. as objects:
        Unlike Java and C++, Smalltalk is a "pure" object-oriented programming
        language because there is no difference. between object values and
        values of primitive types. In Smalltalk, objects are also primitive
        values such as integers, booleans, and characters. In Java we have
        predefined types such as non-objects (primitive types).
        <br />
        Int a= 5;
        <br />
        System.out.print(A);
        <br />
        Static keyword: When we declare a class as static, it can be used
        without using a Java object. When we use a static function or static
        variable, we cannot call that function or variable with a dot (.) or
        with a class object that overrides the object-oriented property.Wrapper
        class: A wrapper class provides a mechanism to convert a primitive to.
        object and object to object. primitive In Java, you can use int, float,
        etc. instead of Integer, Float, etc. We can interact with objects
        without calling their methods. e.g. using arithmetic operators.
        <br />
        String s1 = “ABC” + “A”;
        <br />
        Even using Wrapper classes does not make Java a pure OOP language
        because it uses features like Unboxing and Autoboxing internally. So if
        you create an integer instead of an int and do math operations with it,
        Java just uses the primitive int type.
        <br />
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                public class BoxingExample {"{"} <br />
                {"    "}public static void main(String[] args) {"{"} <br />
                {"        "}Integer i = new Integer(10); <br />
                {"        "}Integer j = new Integer(20); <br />
                {"        "}Integer k = new Integer(i.intValue() +
                j.intValue()); <br />
                {"        "}System.out.println("Output: "+ k); <br />
                {"    "}
                {"}"} <br />
                {"}"} <br />
              </code>
            </pre>
          </div>
        </div>
      </p>
    </div>
  );
};

export default OOPS;

import React from "react";

const OOPS = () => {
  return (
    <div>
      <h3 className="subHead">Object oriented programming in C++</h3>
      <p>
        The main goal of C++ programming is to introduce the concept of object
        orientation in the C programming language. Object-oriented programming
        is a paradigm that offers many concepts such as inheritance, data
        binding, polymorphism, etc. A programming paradigm where everything is
        represented as an object is really known as an object-oriented
        programming language. Smalltalk is considered the first truly
        object-oriented programming language. Object-oriented programming aims
        to implement real units in programming such as inheritance, hiding,
        polymorphism, etc. The main goal of OOP is to tie data and the functions
        that operate on them together so that neither of them happens. other
        parts of the code can access that data besides the function in question.
        object means a real set of words, such as pen, chair, table, etc.
        Object-oriented programming is a methodology or paradigm for designing a
        program using classes and objects. It simplifies software development
        and maintenance by providing a few concepts: -
        <br />
        • Class
        <br />• Objects
        <br />• Encapsulation
        <br />• Abstraction
        <br />• Polymorphism
        <br />• Inheritance
        <br />• Dynamic Binding
        <br />• Message Passing
        <br />
      </p>
      <h3 className="subHead">Advantage of OOPS concept over procedural-oriented programming </h3>
      <p>
        OOPs make development and maintenance easier, while in a procedurally
        oriented programming language, it is not easy to manage when the code
        grows as the project size increases. OOPs provide a data cache, while in
        a procedural programming language global data can be accessed from
        anywhere. OOPs offer the ability to simulate real events much more
        efficiently. We can give a solution to a real text problem if we use an
        object-oriented programming language.
      </p>
      <h3 className="subHead">Why do we need OOPS in C++?</h3>
      <p>
        Early programming methods had several drawbacks and poor performance.
        That approach could not effectively solve real-world problems because,
        like procedural programming, code could not be reused within a program,
        there were difficulties with global data, etc. By using classes and
        objects, object-oriented programming makes code easier. Because
        inheritance allows code to be reused, the program is simpler by not
        having to write the same code multiple times. Information hiding is also
        provided by ideas such as encapsulation and abstraction. Let us
        understand OOPS concepts in detail: -
      </p>
      <h3 className="subHead">Class </h3>
      <p>
        The building block of C++ that leads to object-oriented programming is
        the class. It is a user-defined data type that contains its own data
        members and member functions that can be accessed and accessed by
        creating an instance of this class. A class is like a blueprint for an
        object. Example: Consider the car class. There may be many cars with
        different names and brands, but they all have some common features like
        4 wheels, speed limit, mileage, etc. So, this is the class of the car
        and the wheels, speed limits and mileage are their properties. A class
        is a user-defined data type with data members and member functions. Data
        members are data variables and member functions are operations used to
        manipulate these variables together. These data members and member
        functions define the properties and behaviour of the objects of the
        class. In the above example, the data member of the Car class is speed
        limit, mileage, etc., and the member functions can break, increase
        speed, etc. A class in C++ can be said to be a plan representing a
        group. of objects that share some common properties and behaviours.
      </p>
      <h3 className="subHead">Object</h3>
      <p>
        An object is a recognizable entity with certain characteristics and
        behaviour. An object is an instance of a class. When a class is defined,
        memory is not allocated, but when it is instantiated (ie, an object is
        created), memory is allocated. Objects occupy space in memory and have
        an address associated with them, such as a record in pascal or a
        structure or union. During the execution of a program, objects
        communicate by sending messages to each other. Each object contains data
        and code to manipulate the data. Objects can communicate without having
        to know the details of each other's data or code, simply by knowing the
        type of message received and the type of response returned by the
        objects.
        <br />
        For ex
        <br />
        Syntax/working of Objects:-
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
                #include &lt;iostream&gt;
                <br />
                using namespace std;
                <br />
                class person &#123;
                <br />
                &nbsp;&nbsp;char name[20];
                <br />
                &nbsp;&nbsp;int id;
                <br />
                public:
                <br />
                &nbsp;&nbsp;void getdetails() &#123;&#125;
                <br />
                &#125;;
                <br />
                int main() &#123;
                <br />
                &nbsp;&nbsp;person p1; // p1 is a object
                <br />
                &nbsp;&nbsp;return 0;
                <br />
                &#125;
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Encapsulation</h3>
      <p>
        Encapsulation is defined as packing data and information into a single
        unit. In object-oriented programming, encapsulation is defined as the
        binding of data and the functions that process them together. Let's
        consider a real-world encapsulation example where a company has
        different departments such as accounting department, finance department,
        sales department, etc. The finance department processes all financial
        transactions and controls all financial information. Similarly, the
        sales department handles all sales functions and maintains records of
        all sales. Now, a situation may arise where an officer in the financial
        department for some reason needs all the information about the sales of
        a certain month. In this case, he does not have the right to directly
        access the information of the sales department. He must first contact
        another sales department employee and then ask him to provide this
        information. This is encapsulation. Here, the information of the store
        and the employees who process it are wrapped up under the single name
        "sales department". Encapsulation also leads to data abstraction or data
        hiding. Using encapsulation also hides data. In the above example,
        information from any section (such as Sales, Finance or Accounts) is
        hidden from all other sections.
      </p>
      <h3 className="subHead">Abstraction </h3>
      <p>
        Encapsulation also leads to data abstraction or data hiding. Using
        encapsulation also hides data. In the above example, the data of any
        department such as sales, financial or accounts is hidden from all other
        departments. Data abstraction is one of the most important and important
        features of object-oriented programming in C++. Abstraction means
        showing only important information and hiding details. Abstracting data
        means conveying only important information of data to the outside world,
        hiding background information or implementation. Consider a real-life
        example of a man driving a car. A man only knows that pressing the gas
        pedal increases the speed of the car or braking the car stops the car,
        but he does not know how pressing the gas pedal actually increases the
        speed, he does not know the internal mechanism of the car. or
        introducing the gas pedal, brakes, etc. into the car.   This is what
        abstraction is: Abstraction using classes: We can implement abstraction
        in C++ using classes. A class helps us group data members and member
        functions using available accessor attributes. A class can decide which
        data member is visible to the outside world and which is not.
        Abstraction in header files: Another type of abstraction in C++ can be
        header files. For example, consider the pow() method in the (math.h)
        header file. When we need to calculate the power of a number, we simply
        call the pow() function in the (math.h) header file and pass the numbers
        as arguments without knowing the underlying algorithm by which the
        function calculates the power of the numbers.
      </p>
      <h3 className="subHead">Polymorphism</h3>
      <p>
        The word polymorphism means many forms. Simply put, we can define
        polymorphism as the ability of a message to appear in more than one
        form. A person can have different characteristics at the same time. A
        man is a father, a husband, and an employee at the same time. So, the
        same person behaves differently in different situations. This is called
        polymorphism. A function may behave differently in different cases. The
        behavior depends on the data types used in the operation. C++ supports
        operator overloading and function overloading. Operator overloading:
        Making an operator behave differently in different cases is called
        operator overloading. Function Overloading: Function overloading uses a
        single function name to perform different types of operations.
        Polymorphism is widely used to implement inheritance. Example: Suppose
        we have to write a function to add some integers, sometimes there are 2
        integers and sometimes there are 3 integers. We can write add a method
        with the same name with different parameters, this method is named
        according to the parameters.
      </p>
      {/* Image just after Polymorphism */}
      {/* Image just after Polymorphism */}
      {/* Image just after Polymorphism */}
      {/* Image just after Polymorphism */}
      {/* Image just after Polymorphism */}
      <h3 className="subHead">Inheritance</h3>
      <p>
        The ability of a class to derive properties and attributes from another
        class is called inheritance. Inheritance is one of the most important
        features of object-oriented programming. Subclass: A class that inherits
        properties from another class is called a subclass or derived class.
        Superclass: A class whose properties are inherited from a subclass is
        called a base class or a superclass. Reusability: Inheritance supports
        the concept of "reusability", meaning that if we want to create a new
        class and there is already a class that contains some of the code we
        want, we can derive our new class from the existing class. By doing
        this, we reuse the fields and methods of an existing class.
        <br />
        Example: Dog, cat, cow can be derived from the main animal category.
        <br />
        {/* Image just after Inheritance */}
        {/* Image just after Inheritance */}
        {/* Image just after Inheritance */}
        {/* Image just after Inheritance */}
      </p>
      <h3 className="subHead">Dynamic binding</h3>
      <p>
        In dynamic binding, the code to be executed in response to a function
        call is decided at runtime. C++ has virtual functions to support this.
        Because dynamic binding is flexible, it avoids the disadvantages of
        static binding, which combines function call and definition during
        construction.
        <br />
        Let’s try an example demonstrate the Concept of Dynamic binding with the
        help of virtual function.
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
                #include &lt;iostream&gt;
                <br />
                using namespace std;
                <br />
                class sms &#123;
                <br />
                public:
                <br />
                &nbsp;&nbsp;void call_Function() // function that call print
                <br />
                &nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;print();
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;void print() // the display function
                <br />
                &nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Printing the Base class
                Content" &lt;&lt; endl;
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                &#125;;
                <br />
                class sms2 : public sms // sms2 inherit a publicly &#123;
                <br />
                public:
                <br />
                &nbsp;&nbsp;void print() // sms2's display
                <br />
                &nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Printing the Derived
                class Content"
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt; endl;
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                &#125;;
                <br />
                int main() &#123;
                <br />
                &nbsp;&nbsp;sms obj1; // Creating GFG's object
                <br />
                &nbsp;&nbsp;obj1.call_Function(); // Calling call_Function
                <br />
                &nbsp;&nbsp;sms2 obj2; // creating sms2 object
                <br />
                &nbsp;&nbsp;obj2.call_Function(); // calling call_Function
                <br />
                &nbsp;&nbsp;// for sms2 object
                <br />
                &nbsp;&nbsp;return 0;
                <br />
                &#125;
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              Printing the Base class Content
              <br />
              Printing the Base class Content
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Message passing</h3>
      <p>
        Objects communicate with each other by sending and receiving
        information. The object's message is a request to perform an action and
        therefore invokes an action on the receiving object that produces the
        desired results. Sending a message contains the name of the object, the
        name of the function, and the definition of the information to be sent.
      </p>
      <h3 className="subHead">Why is C++ a partial loop? </h3>
      <p>
        The object-oriented features of the C language were the main motivation
        behind the construction of the C++ language. The C++ programming
        language is classified as a partial object-oriented programming
        language, despite supporting OOP concepts including classes, objects,
        inheritance, encapsulation, abstraction, and polymorphism.
        <br />
        1) A main function must always be outside a C++ class and is mandatory.
        This means we can do without classes and objects and have one main
        function in the application. It is expressed as an object in this case,
        which is the first time that Pure OOP has been violated.
        <br />
        2) Global variables are a feature of the C++ programming language that
        can be used by any other object within the program and defined outside
        of it. Encapsulation is broken here. Although C++ encourages
        encapsulation of classes and objects, it ignores it for global
        variables.
        <br />
         Let's see an example of C++ class where we are initializing and
        displaying object through method.
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
                #include &lt;iostream&gt;
                <br />
                using namespace std;
                <br />
                class Student &#123;
                <br />
                &nbsp;&nbsp;public:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;int id;//data member (also instance
                variable)
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;string name;//data member(also instance
                variable)
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;void insert(int i, string n)
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id = i;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name = n;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;void display()
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;id&lt;&lt;"
                "&lt;&lt;name&lt;&lt;endl;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                &#125;;
                <br />
                int main(void) &#123;
                <br />
                &nbsp;&nbsp;Student s1; //creating an object of Student
                <br />
                &nbsp;&nbsp;Student s2; //creating an object of Student
                <br />
                &nbsp;&nbsp;s1.insert(201, "ankit");
                <br />
                &nbsp;&nbsp;s2.insert(202, "rinki");
                <br />
                &nbsp;&nbsp;s1.display();
                <br />
                &nbsp;&nbsp;s2.display();
                <br />
                &nbsp;&nbsp;return 0;
                <br />
                &#125;
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              201 ankit
              <br />
              202 rinki
            </pre>
          </div>
        </div>
        <br />
        Let's see an example of C++ class where we are storing and displaying
        employee information using method.
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
                #include &lt;iostream&gt;
                <br />
                using namespace std;
                <br />
                class Employee &#123;
                <br />
                &nbsp;&nbsp;public:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;int id;//data member (also instance
                variable)
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;string name;//data member(also instance
                variable)
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;float salary;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;void insert(int i, string n, float s)
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id = i;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name = n;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;salary = s;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;void display()
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;id&lt;&lt;"
                "&lt;&lt;name&lt;&lt;" "&lt;&lt;salary&lt;&lt;endl;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                &#125;;
                <br />
                int main(void) &#123;
                <br />
                &nbsp;&nbsp;Employee e1; //creating an object of Employee
                <br />
                &nbsp;&nbsp;Employee e2; //creating an object of Employee
                <br />
                &nbsp;&nbsp;e1.insert(201, "rinki", 990000);
                <br />
                &nbsp;&nbsp;e2.insert(202, "rakesh", 29000);
                <br />
                &nbsp;&nbsp;e1.display();
                <br />
                &nbsp;&nbsp;e2.display();
                <br />
                &nbsp;&nbsp;return 0;
                <br />
                &#125;
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              201 rinki 990000
              <br />
              202 rakesh 29000
            </pre>
          </div>
        </div>
      </p>
    </div>
  );
};

export default OOPS;

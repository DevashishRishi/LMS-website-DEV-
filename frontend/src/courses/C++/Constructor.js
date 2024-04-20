import React from "react";
import "./CPP.css";
const Constructor = () => {
  return (
    <div>
      <h3 className="subHead"> Constructor</h3>
      <p>
        In C++, a constructor is a special method that is automatically called
        when an object is created. This is typically used to initialize the data
        members of a new object. A C++ constructor has the same name as a class
        or struct. In short, when an object is created in C++, a specific
        process called a constructor is automatically called. It is usually used
        to create data members for new things. In C++, the Name of a class or
        structure also functions as a construct name. When the object is ready,
        the constructor is called. Because it creates values or provides data to
        an object, it is called a constructor. Its prototype or you can say
        syntax looks like: - class name (list of parameters) Syntax of
        constructor is used to define a constructor outside of the class <br />
        class name :: class name (list of parameters) {"{"} // constructor
        definition){"}"}
        <br />
        It is of two types
        <br /> 1) Default constructor <br />
        2) Parameterized constructor
        <br />
      </p>
      <h3 className="subHead">Default constructor </h3>
      <p>
        A constructor with no arguments is called a default constructor. It is
        called when the object is created.
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
                class Employee
                <br />
                &#123;
                <br />
                &nbsp;&nbsp;public:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Employee()
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Default
                Constructor Invoked" &lt;&lt; endl;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                &#125;;
                <br />
                int main(void)
                <br />
                &#123;
                <br />
                &nbsp;&nbsp;Employee e1; //creating an object of Employee
                <br />
                &nbsp;&nbsp;Employee e2;
                <br />
                &nbsp;&nbsp;return 0;
                <br />
                &#125;
                <br />
                Output
                <br />
                Default Constructor Invoked
                <br />
                Default Constructor Invoked
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Parametrized constructor </h3>
      <p>
        A constructor that takes parameters is called a parameter constructor.
        It is used to assign different values to separate objects.
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
                class Employee {"{"}
                <br />
                &nbsp;&nbsp;public:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;int id; // data member (also instance
                variable)
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;string name; // data member (also
                instance variable)
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;float salary;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Employee(int i, string n, float s)
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id = i;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name = n;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;salary = s;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;void display()
                <br />
                &nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; id &lt;&lt; " " &lt;&lt;
                name &lt;&lt; " " &lt;&lt; salary &lt;&lt; endl;
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                {"}"};
                <br />
                int main(void) {"{"}
                <br />
                &nbsp;&nbsp;Employee e1 = Employee(101, "Sonoo", 890000); //
                creating an object of Employee
                <br />
                &nbsp;&nbsp;Employee e2 = Employee(102, "Nakul", 59000);
                <br />
                &nbsp;&nbsp;e1.display();
                <br />
                &nbsp;&nbsp;e2.display();
                <br />
                &nbsp;&nbsp;return 0;
                <br />
                {"}"}
                <br />
                Output:
                <br />
                101 Sonoo 890000
                <br />
                102 Nakul 59000
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Characteristics of a constructor</h3>
      <p>
        • A constructor has the same name as the class it belongs to.
        <br />
        • While this is possible, constructors are usually declared in the class
        and public sections. However, this is not necessary.
        <br />
        • Because constructors do not return values, they have no return type.
        <br />
        • When we create a class object, the constructor is called immediately.
        <br />
        • Overloaded constructors are possible.
        <br />
        • Declaring a constructor virtual is not allowed.
        <br />
        • Constructor cannot be inherited.
        <br />
        • Builder addresses are not referable.
        <br />
        • When allocating memory, the constructor calls implicit new and delete
        operators.
        <br />
      </p>
      <h3 className="subHead">What is a copy constructor?</h3>
      <p>
        A class function known as a copy constructor initializes an object using
        another object of the same class - comprehensive discussion of Copy
        Constructors. Whenever we define one or more non-default constructors
        (with parameters) for a class, we must also include a default
        constructor (without parameters), since the compiler does not provide
        one in this situation. It is a best practice to always declare a default
        constructor, even if it is not required. The copy constructor requires a
        reference to an object of the same class. Sample (Sample &t)
        {"{"}
        id=t.id;
        {"}"}
      </p>
    </div>
  );
};

export default Constructor;

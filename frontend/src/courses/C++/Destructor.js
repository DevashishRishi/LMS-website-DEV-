import React from "react";

const Destructor = () => {
  return (
    <div>
      <h3 className="subHead">Destructor </h3>
      <p>
        The special member function corresponding to a constructor is a
        destructor. A constructor creates class objects that are destroyed by a
        destructor. The word "destroyer,andquot; followed by a tilde () symbol
        is the same as the class name. You can only assign one destroyer at a
        time. One way to destroy an object created by a constructor is to use a
        destructor. Therefore, fighters cannot be overloaded. Destructors do not
        accept arguments and do not give or return anything. As soon as the item
        wears out, it is immediately called. Destructors free memory used by
        objects created by the constructor. A destructor reverses the process of
        creating things by destroying them. It is defined as ~ {"<"}class-name
        {">"}()
        {"{"}
        {"}"}
        <br />
        Let us try with an example:-
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
                {"{"}
                <br />
                &nbsp;&nbsp;public:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Employee()
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;"Constructor
                Invoked"&lt;&lt;endl;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;~Employee()
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;"Destructor
                Invoked"&lt;&lt;endl;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                {"}"};
                <br />
                int main(void)
                {"{"}
                <br />
                &nbsp;&nbsp;Employee e1; //creating an object of Employee
                <br />
                &nbsp;&nbsp;Employee e2; //creating an object of Employee
                <br />
                &nbsp;&nbsp;return 0;
                <br />
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Destructor;

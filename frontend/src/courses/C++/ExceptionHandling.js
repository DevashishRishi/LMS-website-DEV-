import React from "react";

const ExceptionHandling = () => {
  return (
    <div>
      <h3 className="subHead">Exception handling </h3>
      <p>
        Exception handling in C++ is the process of handling runtime errors. We
        implement exception handling to maintain the normal flow of the
        application even after runtime errors. In C++, an exception is an event
        or object thrown at runtime. All exceptions derive from the
        std::exception class. This is a runtime error that can be handled. If we
        don't handle the exception, it prints the exception message and stops
        the program.
        <br />
        <b>Advantage: -</b>
        This maintains the normal flow of the application. In this case, the
        rest of the code is also executed after the exception.
        <br />
        C++ exception classes:-
        <br />
        In the C++ standard, exceptions are defined as {"<"}exception{">"} in a
        class that we can use in our programs. The parent-child class hierarchy
        arrangement is shown below:
        {/* Image for exception classees */}
        {/* Image for exception classees */}
        {/* Image for exception classees */}
        {/* Image for exception classees */}
        <table>
          <thead>
            <tr>
              <th>Exception</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>std::exception</td>
              <td>
                It is an exception and parent class of all standard C++
                exceptions.
              </td>
            </tr>
            <tr>
              <td>std::logic_failure</td>
              <td>
                It is an exception that can be detected by reading a code.
              </td>
            </tr>
            <tr>
              <td>std::runtime_error</td>
              <td>
                It is an exception that cannot be detected by reading a code.
              </td>
            </tr>
            <tr>
              <td>std::bad_exception</td>
              <td>
                It is used to handle unexpected exceptions in a C++ program.
              </td>
            </tr>
            <tr>
              <td>std::bad_cast</td>
              <td>This exception is generally thrown by dynamic_cast.</td>
            </tr>
            <tr>
              <td>std::bad_typeid</td>
              <td>This exception is generally thrown by typeid.</td>
            </tr>
            <tr>
              <td>std::bad_alloc</td>
              <td>This exception is generally thrown by new.</td>
            </tr>
          </tbody>
        </table>
        <br />
        There is three types of exception-handling keywords:
        <br />- 1) Try
        <br /> 2) Catch
        <br /> 3) Throw
        <b>Try/catch </b>
        <br />
        In C++ programming, exception handling is done using a try/catch
        statement. The C++ try block is used to place code that might throw an
        exception. A Catch block is used to handle the exception. Let us
        understand this by a simple C++ program First we try it without
        try/catch.
        <br />
        <div
          className={"code-background"}
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className={"code-container"}
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                #include &lt;iostream&gt;
                <br />
                using namespace std;
                <br />
                float division(int x, int y) {"{"}
                return (x {">>"} y);
                {"}"}
                int main () {"{"}
                int i = 50; int j = 0; float k = 0; k = division(i, j); cout{" "}
                {"{" << "}"} k {"{" << "}"} endl; return 0;
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>Floating point exception (core dumped)</pre>
          </div>
        </div>
        <br />
        Now let us try it with try/catch.
        <br />
        <div
          className={"code-background"}
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className={"code-container"}
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                #include &lt;iostream&gt;
                <br />
                using namespace std;
                <br />
                float division(int x, int y) {"{"}
                if( y == 0 ) {"{"}
                throw "Attempted to divide by zero!";
                {"}"}
                return (x {">>"} y);
                {"}"}
                int main () {"{"}
                int i = 25; int j = 0; float k = 0; try {"{"}k = division(i, j);
                cout {"<<"} k {"<<"} endl;
                {"}"}catch (const char* e) {"{"}
                cerr {"<<"} e {"<<"} endl;
                {"}"}
                return 0;
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>Attempted to divide by zero!</pre>
          </div>
        </div>
      </p>
    </div>
  );
};

export default ExceptionHandling;

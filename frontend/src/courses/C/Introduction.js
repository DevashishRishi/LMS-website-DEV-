import React from "react";
import steps_in_learning_c from "../../assests/CourseImages/C/Introduction/steps-in-learning-c.png";

const Introduction = () => {
  return (
    <div>
      <br />

       <div>
       <h3 className="subHead">Introduction</h3>
        <p>
            First, it is a general-purpose structural and procedural programming
            language developed in 1972 by Dennis Ritchie at the Bell Labs.
        <br />
            It is called the fundamental of the Programming language or a base of
            all kinds of programming languages.
        <br />
            It is strongly associated with UNIX as it was developed for the UNIX
            Operating system along with other databases and applications.
        <br />
            If you are fluent in C language you will never have a problem
            understanding other programming languages such as C++, JAVA, C#, and
            Python.
        <br />
            C is very old but very fast and versatile as it can be used in
            application development like device drivers, protocol stacks, and games
            as well. It has various versions also like C89/C90, C99, C11, and C18.
            ANSI C and ISO C were the standardized version released around 1989, and
            1990.
      </p>
       </div>
      <br />

      <div>
      <h3 className="subHead">Difference between C and C++</h3>
      <ol style={{listStyleType:"disc"}}>
        <li>
          <p>
              After developing C, C++ is developed by Bjarne Stroustrup as an extended version of C.
          </p>
        </li>
        <li>
          <p>
              C is a procedural language but C++ is an object-oriented programming language that supports classes and objects while C does not.
          </p>
        </li>
        <li>
          <p>
              C is a top-down approach but C++ is a bottom-up approach.
          </p>
        </li>
        <li>
          <p>
              C contains 32 keywords but C++ can contain 63 keywords.
          </p>
        </li>
        <li>
          <p>
             C supports built-in data types but C++ contains both Built-in as well as user-defined data types.
          </p>
        </li>
        <li>
          <p>
              C does not have an access modifier but C++ has.
          </p>
        </li>
        <li>
          <p>
              C does not support reference variables but C++ does.
          </p>
        </li>
        <li>
          <p>
            C has code in separate blocks known as functions but C++ code is divided into objects and class.
          </p>
        </li>
        <li>
          <p>
              C is used in MySql, Windows Kerne, Oracle Database, Telegram Messenger, etc and C++ is used in Google Chrome, Microsoft Office, 3-D games, etc.
          </p>
        </li>
      </ol>
      </div>
      <br />

      <div>
        <h3 className="subHead">Advantages of C</h3>
        <ol class="numbered-list">
          <li>
            <p>
              <b>Efficiency :-</b>- C is a fast and efficient language that can be used to create high-performance applications.
            </p>
          </li>
          <li>
            <p>
            <b> Portability :-</b> C programs can be compiled and run on a wide range of platforms and operating systems.
            </p>
          </li>
          <li>
            <p>
              <b>Low-level access :-</b> C provides low-level access to system resources, making it ideal for systems programming and developing operating systems.
            </p>
          </li>
          <li>
          <p>
            <b>Large user community :-</b> C has a large and active user community, which means there are many resources and libraries available for developers.
          </p>
        </li>
        <li>
          <p>
            <b>Widely used :-</b> C is a widely used language, and many modern programming languages are built on top of it.
          </p>
        </li>
      </ol>
      </div>
      <br />
      
      <div>
      <h3 className="subHead">Disadvantages of C</h3>
      <ol class="numbered-list">
        <li>
          <p>
            <b>Steep learning curve :-</b> C can be difficult to learn, especially for
            beginners, due to its complex syntax and low-level access to system
            resources.
          </p>
        </li>
        <li>
          <p>
            <b>Lack of memory management :-</b> C does not provide automatic memory
            management, which can lead to memory leaks and other memory-related
            bugs if not handled properly.
          </p>
        </li>
        <li>
          <p>
            <b>No built-in support for object-oriented programming :-</b> C does not
            provide built-in support for object-oriented programming, making it
            more difficult to write object-oriented code compared to languages
            like Java or Python.
          </p>
        </li>
        <li>
          <p>
            <b>No built-in support for concurrency :-</b> C does not provide built-in
            support for concurrency, making it more difficult to write
            multithreaded applications compared to languages like Java or Go.
          </p>
        </li>
        <li>
          <p>
            <b>Security vulnerabilities :-</b> C programs are prone to security
            vulnerabilities, such as buffer overflows, if not written carefully.
          </p>
        </li>
      </ol>
      </div>
      <br />

      <div>
      <h3 className="subHead">Getting started with C</h3>
      <p>
        Communication with a machine involves speaking in a language the
        computer understands, which immediately rules out English as the default
        language of communication with the computer.
        <br />
        However, there is a close analogy between learning the English language,
        first, learning the alphabet used in the language, then learning to
        combine these alphabets to form words, which in turn, are combined to
        form sentences and then into the paragraphs and so on.
        <br />
        Similarly, in C language we first have to learn constants, variables,
        and keywords and finally, these all are combined as per the requirement
        to form an instruction.
        <br />A group of instruction would be combined later on to form a
        program which is displayed below
        <br />
        <br />
        <div className="image-container">
          <img src={steps_in_learning_c} alt="steps_in_learning_c" />
        </div>
        <br />
      </p>
      </div>
      <br />

      <div>
      <h3 className="subHead">Beginning of C programming</h3>
      <p>
        Let's understand the basic concepts of the language and its keywords by
        writing one small code
      </p>
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
              #include &lt;stdio.h&gt;
              {"\n"}int main () &#123;
              {"\n"} int a = 10;
              {"\n"} printf("%d", a);
              {"\n"} return 0;
              {"\n"}&#125;
            </code>
          </pre>
        </div>
      </div>
      <p>
        Now, output will be 10
        <br />
      </p>
      </div>
      <br />
      
      <div>
      <h5 className="subHead">Structure of the program</h5>
      <p>
        <code style={{ color: "grey" }}>
          #include &lt;stdio.h&gt; [Header]
          <br />
          int main (void) [Main]
          <br />
          &#123; <br />
          int a = 10; <br />
          printf("%d", a); [Statement]
          <br />
          return 0; [Return]
          <br />
          &#125; <br />
        </code>
      </p>
      </div>

      <div>
      <p>Let’s understand components and keywords in brief </p>
      <br />
      <div>
      <h5 className="subHead">Header file </h5>
      <p>
        The very first keyword or the line is #include&lt;stdio.h&gt; in a C
        program. (.h) is a header file having functions, declarations, and macro
        definitions to be shared between several source files in the program.{" "}
        <br /># are processed by the pre-processor which is invoked by the
        compiler. <br />
        Some more examples of header files used as: - <br />
        <table border="1">
          <tr>
            <th>Header File</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Stddef.h</td>
            <td>Useful for macros</td>
          </tr>
          <tr>
            <td>Stdint.h</td>
            <td>For exact width integer types</td>
          </tr>
          <tr>
            <td>Stdio.h</td>
            <td>For core input and output functions</td>
          </tr>
          <tr>
            <td>Stdlib.h</td>
            <td>
              For numeric conversion functions, Pseudo-random number Generator,
              and memory allocation
            </td>
          </tr>
          <tr>
            <td>String.h</td>
            <td>For string handling functions</td>
          </tr>
          <tr>
            <td>Math.h</td>
            <td>For common mathematical functions</td>
          </tr>
        </table>
        <br />
      </p>
      </div>

      <div>
      <h5 className="subHead">Body of the method (enclosed in{})</h5>
      <p>
        The main manipulation will hold in the body part. It can be like
        anything as manipulations, searching, sorting, printing etc. <br />
        The functions have to be in the braces. <br />
        <br />
        Print statement (line 4) <br />
        Printf(“ hellow world”); <br />
        This statement was given to the compiler and in C it is always
        terminated by ;(semicolon). <br />
        We use a function called printf() to display the typed text on the
        monitor as output. <br />
        <br />
      </p>
      </div>

      <div>
      <h5 className="subHead">Return statement</h5>
      <p>
        It is called the last section of the C program. It refers to the return
        values from a function. These values and the function depend upon the
        return type of the function like main(). <br />
        Maybe it is used by our OS to know the termination status of the program
        as 0 indicates the successful termination.
      </p>
      </div>

      </div>

      </div>
  );
};

export default Introduction;

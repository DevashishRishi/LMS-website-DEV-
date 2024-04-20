import React from "react";
import "./CPP.css";
const ConditionalStatement = () => {
  return (
    <div>
      <h2 className="subHead">Introduction to Conditional and Control Statements</h2>
      <p>
        The flow of the program is controlled by conditional statements in C++.
        If the condition is true within the if statement, the body of the
        statement is executed. If false, else is used to specify an alternative
        course of action. You can check multiple criteria in a row using the
        else-if statement and learn C++ from scratch. Use a switch for
        multidirectional branching based on the result of an expression.
        <br />
        There are a few types of conditional statements such as:-
        <br /> • If <br />• If else <br />• If else if <br />• Nested if <br />•
        Switch statements
      </p>

      <h3 className="subHead">1) If statements </h3>
      <br />
      <p>
        It is only being executed when the condition is true. For better
        understanding let’s give a try on program with syntax.
        <br />
        Syntax: <br />
        If(condition)
        {"{"}
        (code to be executed)
        {"}"}
        <br />
        Let us try a program:
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
                {"\n"}using namespace std;
                {"\n"}
                {"\n"}int main () &#123;
                {"\n   "}int num = 10;
                {"\n      "}if (num % 2 == 0)
                {"\n         "}cout &lt;&lt; "It is even number";
                {"\n   "}return 0;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output:
              <br />
              It is even number
            </p>
          </div>
        </div>
      </p>
      <h3 className="subHead">2) If-else statement</h3>
      <br />
      <p>
        The if-else statement also tests the condition. It is executed when the
        block if the condition is true otherwise the block is executed. For
        better understanding let’s give a try on program with syntax Syntax:
        <br />
        If(condition)
        <br />
        {"{"}
        <br />
        (code to be executed-true)
        <br /> {"}"}
        <br />
        Else
        <br />
        {"{"}
        <br />
        (code to be executed-false)
        <br /> {"}"}
        <br />
        Let us try one program for it :<br />
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
            #include &lt;iostream&gt;
            {"\n"}using namespace std;
            {"\n"}
            {"\n"}int main () &#123;
            {"\n   "}int num = 11;
            {"\n      "}if (num % 2 == 0)
            {"\n         "}cout &lt;&lt; "It is even number";
            {"\n      "}else
            {"\n         "}cout &lt;&lt; "It is odd number";
            {"\n   "}return 0;
            {"\n"}&#125;
            <br />
            <br />
            Output:
            {"\n"}It is odd number
          </pre>
        </div>
      </div>
      <br />
      <h3 className="subHead">3) If else if ladder </h3>

      <p>
        <p>
          This conditional statement executes one condition from multiple
          statements
        </p>
        <p>
          For better understanding, let’s give a try on a program with the
          following syntax:
        </p>
        <p>Syntax:</p>
        <pre>
          if(condition1) &#123;
          <br />
          // code to be executed if condition1 is true
          <br />
          &#125; else if(condition2) &#123;
          <br />
          // code to be executed if condition2 is true
          <br />
          &#125; else if(condition3) &#123;
          <br />
          // code to be executed if condition3 is true
          <br />
          &#125;
          <br />
          ...
          <br />
          else &#123;
          <br />
          // code to be executed if all the conditions are false
          <br />
          &#125;
        </pre>
      </p>
      <p>
        Program
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              #include &lt;iostream&gt;
              {"\n"}using namespace std;
              {"\n"}int main () &#123;
              {"\n   "}int num;
              {"\n   "}cout &lt;&lt; "Enter a number to check grade:";
              {"\n   "}cin &gt;&gt; num;
              {"\n      "}if (num &lt; 0 || num &gt; 100)
              {"\n         "}cout &lt;&lt; "wrong number";
              {"\n      "}else if (num &gt;= 0 &amp;&amp; num &lt; 50)
              {"\n         "}cout &lt;&lt; "Fail";
              {"\n      "}else if (num &gt;= 50 &amp;&amp; num &lt; 60)
              {"\n         "}cout &lt;&lt; "D Grade";
              {"\n      "}else if (num &gt;= 60 &amp;&amp; num &lt; 70)
              {"\n         "}cout &lt;&lt; "C Grade";
              {"\n      "}else if (num &gt;= 70 &amp;&amp; num &lt; 80)
              {"\n         "}cout &lt;&lt; "B Grade";
              {"\n      "}else if (num &gt;= 80 &amp;&amp; num &lt; 90)
              {"\n         "}cout &lt;&lt; "A Grade";
              {"\n      "}else if (num &gt;= 90 &amp;&amp; num &lt;= 100)
              {"\n         "}cout &lt;&lt; "A+ Grade";
              {"\n   "}return 0;
              {"\n"}&#125;
              <br />
              <br />
              Output:
              <br />
              Enter the number to check grade
              <br />
              66
              <br />
              Grade C
              <br />
              Enter the number to check grade
              <br />
              -2
              <br />
              Wrong number
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Switch Statement</h3>
      <p>
        A switch statement in C++ is a powerful control construct that allows
        you to execute multiple segments of code based on the result of an
        expression. It provides an advanced and powerful alternative to using
        sequential if-else statements when you need to decide between multiple
        options. The C++ switch executes one statement out of several
        conditions. It is like an if-else-if ladder statement in C++.
        <br />
        For better understanding let’s give a try on program with syntax
        <br />
        Syntax:
        <br />
        <pre>
          switch(expression) &#123;
          <br />
          {"  "}case value1:
          <br />
          {"    "} // code to be executed;
          <br />
          {"    "} break;
          <br />
          {"  "}case value2:
          <br />
          {"    "} // code to be executed;
          <br />
          {"    "} break;
          <br />
          {"  "}...
          <br />
          {"  "}default:
          <br />
          {"    "} // code to be executed if all cases are not matched;
          <br />
          {"    "} break;
          <br />
          &#125;
        </pre>
        <br />
        Program
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
              #include &lt;iostream&gt;
              {"\n"}using namespace std;
              {"\n"}int main () &#123;
              {"\n   "}int num;
              {"\n   "}cout &lt;&lt; "Enter the number:";
              {"\n   "}cin &gt;&gt; num;
              {"\n   "}switch (num)
              {"\n   "}&#123;
              {"\n      "}case 10: cout &lt;&lt; "It is 10"; break;
              {"\n      "}case 20: cout &lt;&lt; "It is 20"; break;
              {"\n      "}case 30: cout &lt;&lt; "It is 30"; break;
              {"\n      "}default: cout &lt;&lt; "Not 10, 20 or 30"; break;
              {"\n   "}&#125;
              {"\n"}&#125;
              <br />
              <br />
              Output:
              <br />
              Enter the number
              <br />
              10
              <br />
              It is 10
              <br />
              Enter the number
              <br />
              50
              <br />
              Not 10, 20 or 30
            </pre>
          </div>
        </div>
        <br />
        <h3 className="subHead">Features of the switch statement:</h3>
        <p>
          The Switch statement has several functions in C++. Some of the main
          features of the C switch statement are: The falling behavior of the
          C++ switch is one of its most important features. Control passes to
          the next case unless a break statement is used to terminate the case
          block. After that, subsequent cases are processed until an
          interruption is detected or the end of the switch block is reached.
          This feature can be intentionally used to share common code in
          multiple scenarios. The Switch statement and ability to simplify code
          readability and maintainability is one of its main advantages.
          Comparing a series of nested if-else statements with a switch can
          create clearer and more organized code in many situations. Each case
          entry gives the program a unique and unambiguous path to follow,
          improving the code base and overall readability. This is very useful
          when working with large and complex programs where maintaining logical
          flow is critical for readability. This is very useful when working
          with large and complex programs where maintaining logical flow is
          critical. Another significant benefit of a change clause is
          efficiency. If done correctly, a switch can often be more effective
          than an if-else-if sequence. That efficiency is due to the compiler's
          ability to optimize the switch to produce more efficient machine code,
          which can result in faster execution time. It is important to note
          that the actual speed improvement may vary depending on conditions and
          compilers.
        </p>
      </p>
      <h3 className="subHead">Limitations of the switch statement </h3>
      <p>
        The switch in C++ has several limitations. Some of the main limitations
        of the switch in C are: The switch has several limitations, so it is
        important to know them and the industry standards. For example, switch
        expression and expression must be of integral or enumeration. This
        limits its ability to work with other data types such as strings or
        floating-point integers. Additionally, variables or expressions cannot
        be used as case identifiers, because each case identifier must reflect a
        constant value known at compile time. Best practice is to add a default
        handler to the switch to fully cover cases. This case handles cases
        where none of the previous cases match the value of the expression. When
        none of the predefined situations apply, the included default case
        prevents unexpected behavior and provides a clear path to action.
      </p>
      <h3 className="subHead">Conclusion</h3>
      <p>
        The C++ switch is a flexible construct that makes it easy for programs
        to handle different scenarios. It's clear letter notation and concise
        syntax make the code easy to understand and maintain, especially with
        many possible outcomes. The switch improves the organization of program
        logic by providing an immediate mapping between cases and operations.
        The switch has performance advantages over if-else-if ladders because
        the compiler can optimize it for faster execution. Developers should be
        aware of its limitations, such as the need for integral or enumerated
        expression types and constant case values. It is recommended to include
        a default handler in the switch to handle inappropriate conditions and
        for efficient and elegant handling. By following best practices and
        understanding its complexity, developers can take advantage of the
        switch and its benefits to create more organized, efficient, and
        understandable C++ code.
      </p>
    </div>
  );
};

export default ConditionalStatement;

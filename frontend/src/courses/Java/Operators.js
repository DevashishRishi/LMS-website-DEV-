import React from "react";

const Operators = () => {
  return (
    <div>
      <h3 className="subHead">Operators in java</h3>
      <p>
        There are many types of operators in Java such as: -<br />
        o Unary Operator
        <br />
        o Arithmetic Operator
        <br />
        o Shift Operator
        <br />
        o Relational Operator
        <br />
        o Bitwise Operator
        <br />
        o Logical Operator
        <br />
        o Ternary Operator and
        <br />
        o Assignment Operator.
        <br />
        Java operator and its precedence:-
        <br />
        <table>
          <thead>
            <tr>
              <th>Operator Type</th>
              <th>Category</th>
              <th>Precedence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2">Unary</td>
              <td>postfix</td>
              <td>expr++ expr--</td>
            </tr>
            <tr>
              <td>prefix</td>
              <td>++expr --expr +expr -expr ~ !</td>
            </tr>
            <tr>
              <td rowspan="2">Arithmetic</td>
              <td>multiplicative</td>
              <td>* / %</td>
            </tr>
            <tr>
              <td>additive</td>
              <td>+ -</td>
            </tr>
            <tr>
              <td>Shift</td>
              <td>shift</td>
              <td>&lt;&lt; &gt;&gt; &gt;&gt;&gt;</td>
            </tr>
            <tr>
              <td rowspan="2">Relational</td>
              <td>comparison</td>
              <td>&lt; &gt; &lt;= &gt;= instanceof</td>
            </tr>
            <tr>
              <td>equality</td>
              <td>== !=</td>
            </tr>
            <tr>
              <td rowspan="3">Bitwise</td>
              <td>bitwise AND</td>
              <td>&amp;</td>
            </tr>
            <tr>
              <td>bitwise exclusive OR</td>
              <td>^</td>
            </tr>
            <tr>
              <td>bitwise inclusive OR</td>
              <td>|</td>
            </tr>
            <tr>
              <td rowspan="2">Logical</td>
              <td>logical AND</td>
              <td>&amp;&amp;</td>
            </tr>
            <tr>
              <td>logical OR</td>
              <td>||</td>
            </tr>
            <tr>
              <td>Ternary</td>
              <td>ternary</td>
              <td>? :</td>
            </tr>
            <tr>
              <td rowspan="2">Assignment</td>
              <td>assignment</td>
              <td>
                = += -= *= /= %= &= ^= |= {"<<="} {">=="} &gt;&gt;&gt;=
              </td>
            </tr>
          </tbody>
        </table>
      </p>
      <h3 className="subHead">Java unary operator</h3>
      <p>
        Unary operators in Java require only one operand. Unary operators are
        used to perform various operations.
        <br />
        o incrementing/decrementing a value by one
        <br />
        o negating an expression
        <br />
        o inverting the value of a boolean
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
                import java.util.Scanner;
                {"\n"}public class SumExample &#123;
                {"\n"} public static void main(String[] args) &#123;
                {"\n"} int a, b, result;
                {"\n"} Scanner input = new Scanner(System.in);
                {"\n"} System.out.println("\nGoing to calculate the sum of two
                numbers:");
                {"\n"} System.out.println("Enter two numbers:");
                {"\n"} a = input.nextInt();
                {"\n"} b = input.nextInt();
                {"\n"} result = sum(a, b);
                {"\n"} System.out.println("The sum is " + result);
                {"\n"} &#125;
                {"\n"} public static int sum(int a, int b) &#123;
                {"\n"} return a + b;
                {"\n"} &#125;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output
              <br />
              Going to calculate the sum of two numbers
              <br />
              Enter the two numbers
              <br />
              15 15
              <br />
              The sum is 30
            </p>
          </div>
        </div>
      </p>
      <h3 className="subHead">Java arithmetic operator</h3>
      <p>
        It consists of basic 4 calculations like add, subtract, multiply,
        divide: -<br />
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
                public class OperatorExample &#123;
                {"\n"} public static void main(String args[]) &#123;
                {"\n"} int a = 10;
                {"\n"} int b = 5;
                {"\n"} System.out.println(a + b); {"//"} 15
                {"\n"} System.out.println(a - b); {"//"} 5{"\n"}{" "}
                System.out.println(a * b); {"//"} 50
                {"\n"} System.out.println(a / b); {"//"} 2{"\n"}{" "}
                System.out.println(a % b); {"//"} 0{"\n"} &#125;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output
              <br />
              15
              <br />
              5
              <br />
              50
              <br />
              2
              <br />0
            </p>
          </div>
        </div>
      </p>
      <h3 className="subHead">Java left shift operator</h3>
      <p>
        Java left shift operator {"<<"} is used to shift all bits of the value
        to the left the specified number of times.
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
                public class OperatorExample &#123;
                {"\n"} public static void main(String args[]) &#123;
                {"\n"} System.out.println(10 &lt;&lt; 2); {"//"} 10*2^2=10*4=40
                {"\n"} System.out.println(10 &lt;&lt; 3); {"//"} 10*2^3=10*8=80
                {"\n"} System.out.println(20 &lt;&lt; 2); {"//"} 20*2^2=20*4=80
                {"\n"} System.out.println(15 &lt;&lt; 4); {"//"}{" "}
                15*2^4=15*16=240
                {"\n"} &#125;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output
              <br />
              40
              <br />
              80
              <br />
              80
              <br />
              240
            </p>
          </div>
        </div>
      </p>
      <h3 className="subHead">Right shift operator</h3>
      <p>
        Java left shift operator {">>"} is used to shift all bits of the value
        to the left the specified number of times.
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
                public class OperatorExample &#123;
                {"\n"} public static void main(String args[]) &#123;
                {"\n"} System.out.println(10 &gt;&gt; 2); {"//"} 10/2^2=10/4=2
                {"\n"} System.out.println(20 &gt;&gt; 2); {"//"} 20/2^2=20/4=5
                {"\n"} System.out.println(20 &gt;&gt; 3); {"//"} 20/2^3=20/8=2
                {"\n"} &#125;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output
              <br />
              2
              <br />
              5
              <br />2
            </p>
          </div>
        </div>
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
              public class OperatorExample &#123;
              {"\n"} public static void main(String args[]) &#123;
              {"\n"} {"//"} For positive number, {">>"} and {">>>"} works same
              {"\n"} System.out.println(20 &gt;&gt; 2);
              {"\n"} System.out.println(20 &gt;&gt;&gt; 2);
              {"\n"} {"//"} For negative number, {">>>"} changes parity bit
              (MSB) to 0{"\n"} System.out.println(-20 &gt;&gt; 2);
              {"\n"} System.out.println(-20 &gt;&gt;&gt; 2);
              {"\n"} &#125;
              {"\n"}&#125;
            </code>
          </pre>
          <p>
            Output
            <br />
            5
            <br />
            5
            <br />
            -5
            <br />
            1073741819
          </p>
        </div>
      </div>
      <h3 className="subHead">Logical AND & bitwise AND </h3>
      <p>
        The logical giver does not check the second condition if the first
        condition is false. It only checks the second condition if the first
        condition is true. Bitwise operator always checks both conditions to see
        if the first condition is true or false.
        <br />
        Let us try with an example: -
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
                public class OperatorExample &#123;
                {"\n"} public static void main(String args[]) &#123;
                {"\n"} int a=10;
                {"\n"} int b=5;
                {"\n"} int c=20;
                {"\n"} System.out.println(a&lt;b&amp;&amp;a&lt;c);//false
                &amp;&amp; true = false
                {"\n"} System.out.println(a&lt;b&amp;a&lt;c);//false &amp; true
                = false
                {"\n"} &#125;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output
              <br />
              false
              <br />
              false
            </p>
          </div>
        </div>
      </p>
      <h3 className="subHead">Logical (or) and bitwise (or)</h3>
      <p>
        The logical || operator does not check the second condition if the first
        condition is true. It only checks the second condition if the first one
        is false. Bitwise | operator always checks both conditions to see if the
        first condition is true or false.
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
                public class OperatorExample &#123;
                {"\n"} public static void main(String args[]) &#123;
                {"\n"} int a=10;
                {"\n"} int b=5;
                {"\n"} int c=20;
                {"\n"} System.out.println(a&gt;b||a&lt;c);//true || true = true
                {"\n"} System.out.println(a&gt;b|a&lt;c);//true | true = true
                {"\n"} {"//"} || vs |{"\n"}{" "}
                System.out.println(a&gt;b||a++&lt;c);//true || true = true
                {"\n"} System.out.println(a);{"//"}10 because second condition
                is not checked
                {"\n"} System.out.println(a&gt;b|a++&lt;c);//true | true = true
                {"\n"} System.out.println(a);{"//"}11 because second condition
                is checked
                {"\n"} &#125;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output
              <br />
              True
              <br />
              True
              <br />
              True
              <br />
              10
              <br />
              True
              <br />
              11
            </p>
          </div>
        </div>
      </p>
      <h3 className="subHead">Java ternary operator</h3>
      <p>
        The Java Ternary operator is used as a one-line replacement for the
        if-then-else statement and is widely used in Java programming. It is the
        only conditional operator that takes three operands.
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
                public class OperatorExample &#123;
                {"\n"} public static void main(String args[]) &#123;
                {"\n"} int a=2;
                {"\n"} int b=5;
                {"\n"} int min=(a&lt;b)?a:b;
                {"\n"} System.out.println(min);
                {"\n"} &#125;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output:
              <br />2
            </p>
          </div>
        </div>
        <div
          className="code-background"
          style={{
            backgroundColor: "#a4f4e4",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                public class OperatorExample &#123;
                {"\n"} public static void main(String args[]) &#123;
                {"\n"} int a=10;
                {"\n"} int b=5;
                {"\n"} int min=(a&lt;b)?a:b;
                {"\n"} System.out.println(min);
                {"\n"} &#125;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output:
              <br />5
            </p>
          </div>
        </div>
      </p>
      <h3 className="subHead">Java assignment operator</h3>
      <p>
        The Java installation operator is one of the most common operators. It
        is used to assign the right value to the left operand.
        <br /> Let us try with some examples:
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
                public class OperatorExample &#123;
                {"\n"} public static void main(String args[]) &#123;
                {"\n"} int a=10;
                {"\n"} int b=20;
                {"\n"} a+=4;//a=a+4 (a=10+4)
                {"\n"} b-=4;//b=b-4 (b=20-4)
                {"\n"} System.out.println(a);
                {"\n"} System.out.println(b);
                {"\n"} &#125;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output:
              <br />
              14
              <br />
              16
            </p>
          </div>
        </div>
        <div
          className="code-background"
          style={{
            backgroundColor: "#a4f4e4",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                public class OperatorExample &#123;
                {"\n"} public static void main(String[] args) &#123;
                {"\n"} int a=10;
                {"\n"} a+=3;//10+3
                {"\n"} System.out.println(a);
                {"\n"} a-=4;//13-4
                {"\n"} System.out.println(a);
                {"\n"} a*=2;//9*2
                {"\n"} System.out.println(a);
                {"\n"} a/=2;//18/2
                {"\n"} System.out.println(a);
                {"\n"} &#125;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output:
              <br />
              13
              <br />
              9
              <br />
              18
              <br />9
            </p>
          </div>
        </div>
        <div
          className="code-background"
          style={{
            backgroundColor: "#a4f4e4",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                public class OperatorExample &#123;
                {"\n"} public static void main(String args[]) &#123;
                {"\n"} short a=10;
                {"\n"} short b=10;
                {"\n"} {"//"}a+=b;{"//"}a=a+b internally so fine
                {"\n"} a=a+b;{"//"}Compile time error because 10+10=20 now int
                {"\n"} System.out.println(a);
                {"\n"} &#125;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output:
              <br />
              Compile time error
            </p>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Operators;

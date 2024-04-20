import React from "react";

const Operators = () => {
  return (
    <div>
      <h3 className="subHead">Introduction to operators</h3>
      <p>
        Symbols associated with C operators can be utilized to perform logical
        or mathematical operations. The operators integrated into the C
        programming language are numerous. Operators are used in programs that
        manipulate variables and data. They are a component of mathematical or
        logical statements. There are many different kinds of operators in C
        programming.
      </p>
      <br />
      <h3 className="subHead">Arithmetic Operator </h3>
      <p>This operator is used in mathematical operators on operands. </p>
      <p>Suppose variable A=10 and variable B= 20 then</p>
      <table border="1">
        <tr>
          <th>Operator</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
        <tr>
          <td>+</td>
          <td>Add two operands</td>
          <td>A + B = 30</td>
        </tr>
        <tr>
          <td>-</td>
          <td>Subtract the second from the first</td>
          <td>A - B = -10</td>
        </tr>
        <tr>
          <td>*</td>
          <td>Multiply</td>
          <td>A * B = 200</td>
        </tr>
        <tr>
          <td>/</td>
          <td>Divides numerator by denominator</td>
          <td>B / A = 2</td>
        </tr>
        <tr>
          <td>%</td>
          <td>Modulus operator and the remainder after an int division.</td>
          <td>B % A = 0</td>
        </tr>
        <tr>
          <td>++</td>
          <td>This increment operator increases the integer value by one</td>
          <td>A ++ = 11</td>
        </tr>
        <tr>
          <td>--</td>
          <td>The decrement operator decreases the integer value by one</td>
          <td>A -- = 9</td>
        </tr>
      </table>
      <br />
      <h3 className="subHead">Relational Operators</h3>
      <p>This operator is used to compare two quantities or values</p>
      <table border="1">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>==</td>
            <td>
              Suppose the values of two operands are the same or no longer. If
              the solution is sure, then the situation will become true.
            </td>
            <td>A == B is not true</td>
          </tr>
          <tr>
            <td>!=</td>
            <td>
              Suppose the values of two operands are identical or no longer. If
              the values are not identical, then the situation becomes true.
            </td>
            <td>A != B is true</td>
          </tr>
          <tr>
            <td>{">"}</td>
            <td>
              Checks suppose the value of the left operand is greater than the
              value of the right operand. If yes, then the condition becomes
              true.
            </td>
            <td>A {">"} B is not true</td>
          </tr>
          <tr>
            <td>{"<"}</td>
            <td>
              Checks suppose the value of the left operand is less than the
              value of the right operand. If yes, then the condition becomes
              true.
            </td>
            <td>A {"<"} B is true</td>
          </tr>
          <tr>
            <td>{">="}</td>
            <td>
              Checks suppose the value of the left operand is greater than or
              equal to the value of the right operand. If yes, then the
              condition becomes true.
            </td>
            <td>A {">="} B is not true</td>
          </tr>
          <tr>
            <td>{"<="}</td>
            <td>
              Checks suppose the value of the left operand is less than or equal
              to the value of the right operand. If yes, then the condition
              becomes true.
            </td>
            <td>A {"<="} B is true</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3 className="subHead">Bitwise Operator </h3>
      <p>This operator is used in C for bit operations between two variables</p>
      <p>For-ex: - A =60 and B= 13</p>
      <table border="1">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&</td>
            <td>Binary AND operator</td>
            <td>A & B = 12, i.e. 0000 1100</td>
          </tr>
          <tr>
            <td>|</td>
            <td>Binary OR operator</td>
            <td>A | B = 61, i.e. 0011 1101</td>
          </tr>
          <tr>
            <td>^</td>
            <td>Binary XOR operator</td>
            <td>A ^ B = 49, i.e. 0011 0001</td>
          </tr>
          <tr>
            <td>~</td>
            <td>Binary ones complement operator</td>
            <td>~A = 60, i.e. -0111101</td>
          </tr>
          <tr>
            <td>{"<<"}</td>
            <td>Binary left shift operator</td>
            <td>A {"<<"} 2 = 240, i.e. 1111 0000</td>
          </tr>
          <tr>
            <td>{">>"}</td>
            <td>Binary right shift operator</td>
            <td>A {">>"} 2 = 15, i.e. 0000 1111</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3 className="subHead">Logical Operator</h3>
      <p>
        The basic three logical operators used in C language to decide on one
        condition whether it is true or false.
      </p>

      <table border="1">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&&</td>
            <td>
              I called the Logical AND Operator. Suppose both the operands are
              non-zero, then the condition becomes true.
            </td>
            <td>(A && B) is false.</td>
          </tr>
          <tr>
            <td>||</td>
            <td>
              I called the Logical OR Operator. Suppose any of the two operands
              are non-zero, then the condition becomes true.
            </td>
            <td>(A || B) is true.</td>
          </tr>
          <tr>
            <td>!</td>
            <td>
              They called Logical NOT Operator. It's used to reverse the logical
              state of its operand. Suppose a condition is true, then Logical
              NOT the Operator will make it false.
            </td>
            <td>!(A && B) is true.</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3 className="subHead">Miscellaneous operator</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&&</td>
            <td>
              I called the Logical AND Operator. Suppose both the operands are
              non-zero, then the condition becomes true.
            </td>
            <td>(A && B) is false.</td>
          </tr>
          <tr>
            <td>||</td>
            <td>
              I called the Logical OR Operator. Suppose any of the two operands
              are non-zero, then the condition becomes true.
            </td>
            <td>(A || B) is true.</td>
          </tr>
          <tr>
            <td>!</td>
            <td>
              They called Logical NOT Operator. It's used to reverse the logical
              state of its operand. Suppose a condition is true, then Logical
              NOT the Operator will make it false.
            </td>
            <td>!(A && B) is true.</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3 className="subHead">Assignment Operators</h3>
      <p>
        Applying this operator to a variable allows you to assign the outcome of
        an expression to it. There are several shorthand assignment operators in
        C.
      </p>
      <table border="1">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>=</td>
            <td>
              Simple assignment operator. Assign values from right operands to
              left side operands
            </td>
            <td>C = A + B will assign a value of A + B to C</td>
          </tr>
          <tr>
            <td>+=</td>
            <td>Increments then assign</td>
            <td>C += A equal’s C = C + A</td>
          </tr>
          <tr>
            <td>-=</td>
            <td>Decrements then assign</td>
            <td>C -= A equal’s C = A - B</td>
          </tr>
          <tr>
            <td>*</td>
            <td>Multiplies then assign</td>
            <td>C *= A equal’s C = C * A</td>
          </tr>
          <tr>
            <td>/=</td>
            <td>Divides then assign</td>
            <td>C /= A equal’s C = C / A</td>
          </tr>
          <tr>
            <td>%=</td>
            <td>Modulus and assign</td>
            <td>C %= A equal’s C = C % A</td>
          </tr>
          <tr>
            <td>&lt;&lt;=</td>
            <td>Left shift and assign</td>
            <td>C &lt;&lt;= 2 is same as C = C &lt;&lt; 2</td>
          </tr>
          <tr>
            <td>&gt;=</td>
            <td>Right shift and assign</td>
            <td>C &gt;&gt;= 2 is same as C = C &gt;&gt; 2</td>
          </tr>
          <tr>
            <td>&amp;=</td>
            <td>Bitwise AND assign</td>
            <td>C &amp;= 2 is same as C = C &amp; 2</td>
          </tr>
          <tr>
            <td>^=</td>
            <td>Bitwise exclusive OR and assign</td>
            <td>C ^= 2 is same as C = C ^ 2</td>
          </tr>
          <tr>
            <td>|=</td>
            <td>Bitwise inclusive OR and assign</td>
            <td>C |= 2 is same as C = C | 2</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3 className="subHead">Operator Precedence and Associativity in C</h3>
      <p>
        The concept of operator precedence and associativity in C helps in
        determining which operators will be given priority when there are
        multiple operators in the expression. It is very common to have multiple
        operators in C language and the compiler first evaluates the operator
        with higher precedence. It helps to maintain the ambiguity of the
        expression and helps us avoid unnecessary use of parenthesis. In this
        article, we will discuss operator precedence, operator associativity,
        and precedence table according to which the priority of the operators in
        expression is decided in C language.
      </p>
      <h5 className="subHead">Operator Precedence in C</h5>
      <p>
        Operator precedence determines which operation is performed first in an
        expression with more than one operator with different precedence. An
        example of the importance of operator
        <p>Let's try to evaluate the following expression:</p>
        <p>10 + 20 * 30</p>
      </p>
      <p>
        The expression contains two operators + (plus) and * (multiplication).
        According to the given table, * has higher priority than +, so the first
        evaluation is
        <p>10 + (20 * 30)</p>
        <p>
          After evaluating the higher priority operator, the expression is10 +
          600 Now the + operator is estimated.
        </p>
        <p>610</p>
        <p> {"//"} C Prgram to illustrate operator precedence</p>
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
              {"\n"} {"//"} printing the value of same expression
              {"\n"} printf("10 + 20 * 30 = %d", 10 + 20 * 30);
              {"\n"} return 0;
              {"\n"}&#125;
              <p>
                Output <br />
                10 + 20 * 30 = 610
              </p>
            </code>
          </pre>
        </div>
      </div>
      <br />
      <h3 className="subHead">Operator Associativity</h3>
      <p>
        Operator associativity is used when there are two operators with the
        same order of importance in the expression. The relationship can be
        either left to right or right to left. Example of operator associativity
        We evaluate the following expression, 100 / 5% 2 Both / (division) and %
        (modulo) operators have the same precedence, so associativity determines
        the order of evaluation. According to the given table, multiplication
        operators are associativity from left to right. Thus, (100 / 5) % 2
        After evaluation, the expression is 20 % 2 Now the % operator is
        evaluated. 0.
      </p>
      <p> {"//"} C Program to illustrate operator Associativity</p>
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
              {"\n"} {"//"} Verifying the result of the same expression
              {"\n"} printf("100 / 5 % 2 = %d", 100 / 5 % 2);
              {"\n"} return 0;
              {"\n"}&#125;
              <p>
                Output <br />
                100 / 5 % 2 = 0
              </p>
            </code>
          </pre>
        </div>
      </div>
      <br />
      <h3 className="subHead">Operator Precedence and Associativity Table</h3>
      <p>
        The following tables list the C operator precedence from highest to
        lowest and the associativity for each of the operators:
      </p>
      <table border="1">
        <thead>
          <tr>
            <th>Precedence</th>
            <th>Operator</th>
            <th>Description</th>
            <th>Associativity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>()</td>
            <td>Parentheses (function call)</td>
            <td>Left-to-Right</td>
          </tr>
          <tr>
            <td></td>
            <td>[]</td>
            <td>Array Subscript (Square Brackets)</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>.</td>
            <td>Dot Operator</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>-&gt;</td>
            <td>Structure Pointer Operator</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>++, —</td>
            <td>Postfix increment, decrement</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>++ / —</td>
            <td>Prefix increment, decrement</td>
            <td>Right-to-Left</td>
          </tr>
          <tr>
            <td></td>
            <td>+ / –</td>
            <td>Unary plus, minus</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>!, ~</td>
            <td>Logical NOT, Bitwise complement</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>(type)</td>
            <td>Cast Operator</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>*</td>
            <td>Dereference Operator</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>&amp;</td>
            <td>Addressof Operator</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>sizeof</td>
            <td>Determine size in bytes</td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>*,/,%</td>
            <td>Multiplication, division, modulus</td>
            <td>Left-to-Right</td>
          </tr>
          <tr>
            <td>4</td>
            <td>+/−</td>
            <td>Addition, subtraction</td>
            <td>Left-to-Right</td>
          </tr>
          <tr>
            <td>5</td>
            <td>&lt;&lt; , &gt;&gt;</td>
            <td>Bitwise shift left, Bitwise shift right</td>
            <td>Left-to-Right</td>
          </tr>
          <tr>
            <td>6</td>
            <td>&lt; , &lt;=</td>
            <td>Relational less than, less than or equal to</td>
            <td>Left-to-Right</td>
          </tr>
          <tr>
            <td></td>
            <td>&gt; , &gt;=</td>
            <td>Relational greater than, greater than or equal to</td>
            <td></td>
          </tr>
          <tr>
            <td>7</td>
            <td>== , !=</td>
            <td>Relational is equal to, is not equal to</td>
            <td>Left-to-Right</td>
          </tr>
          <tr>
            <td>8</td>
            <td>&amp;</td>
            <td>Bitwise AND</td>
            <td>Left-to-Right</td>
          </tr>
          <tr>
            <td>9</td>
            <td>^</td>
            <td>Bitwise exclusive OR</td>
            <td>Left-to-Right</td>
          </tr>
          <tr>
            <td>10</td>
            <td>|</td>
            <td>Bitwise inclusive OR</td>
            <td>Left-to-Right</td>
          </tr>
          <tr>
            <td>11</td>
            <td>&amp;&amp;</td>
            <td>Logical AND</td>
            <td>Left-to-Right</td>
          </tr>
          <tr>
            <td>12</td>
            <td>||</td>
            <td>Logical OR</td>
            <td>Left-to-Right</td>
          </tr>
          <tr>
            <td>13</td>
            <td>?:</td>
            <td>Ternary conditional</td>
            <td>Right-to-Left</td>
          </tr>
          <tr>
            <td>14</td>
            <td>=</td>
            <td>Assignment</td>
            <td>Right-to-Left</td>
          </tr>
          <tr>
            <td></td>
            <td>+= , -=</td>
            <td>Addition, subtraction assignment</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>*= , /=</td>
            <td>Multiplication, division assignment</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>%= , &amp;=</td>
            <td>Modulus, bitwise AND assignment</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>^= , |=</td>
            <td>Bitwise exclusive, inclusive OR assignment</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>&lt;&lt;=, &gt;&gt;=</td>
            <td>Bitwise shift left, right assignment</td>
            <td></td>
          </tr>
          <tr>
            <td>15</td>
            <td>,</td>
            <td>comma (expression separator)</td>
            <td>Left-to-Right</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Operators;

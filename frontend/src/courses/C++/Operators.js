import React from "react";

const Operators = () => {
  return (
    <div>
      <h3 className="subHead">Operators</h3>
      <p>
        Operators are different types of functions that take one or more
        arguments and create a new value. For example: addition (+), subtraction
        (-), multiplication (*) etc are all operators. Operators are used to
        perform various operations on variables and constants.
      </p>
      <p>
        Types of operators <br />• Assignment operator <br /> • Mathematical
        operator <br /> • Relational operator <br />• Logical operator <br /> •
        Bitwise operator <br />• Shift operator
        <br /> • Unary operator
        <br /> • Ternary operator <br />• Comma operator
      </p>
      <p>
        <b>Assignment Operator(=)</b>
        <br />
        The function '=' is used as an assignment, it takes the right side
        (called rvalue) and copies it to the left side (called lvalue). The
        assignment operator is the only operator that can be overloaded but not
        inherited.
        <br />
        <b>Mathematical Operations</b>
        <br />
        There are operators used to perform basic mathematical operations.
        Addition (+), subtraction (-), deviation (/), multiplication (*) and
        modulus (%) are basic mathematical operators. The modulus operator
        cannot be used with floating point numbers.
        <br />
        <b> Relationship Operators</b>
        <br />
        These operators create a relationship between operators. The relational
        operators are: less than (andlt;) , latch than (andgt;) , less than or
        equal to (andlt;=), greater than equal to (andgt;=), equal to (==), and
        not equal to (! =). Note that the assignment operator is (=) and there
        is a relational operator for the corresponding (==). The two differ, the
        assignment operator assigns a value to some variable, while the equality
        operator is used to compare values, as in if-else conditions. Logical
        operators The logical operators are AND (and and) and OR (||). They are
        used to connect two different expressions. If two commands are combined
        with the AND operator, both commands are considered valid, but if they
        are combined with the OR operator, one of them must be valid. These
        operators are mostly used in loops (especially while loop) and decision
        making.
        <br />
        <b> Bitwise operators</b>
        <br />
        These are used to convert individual bits to numbers. They only work
        with integral data types such as char, int, and long, not floating-point
        numbers.
        <br />• bitwise AND operators
        <br />• bitwise OR operators
        <br />• bitwise operator XOR ^
        <br />• bitwise NOT operator ~<br />
        They can also be used as abbreviations = , |= , ^= , ~= , etc.
        <br /> <b>Shift operators</b>
        <br /> Shift operators are used to change bits of some variable. There
        are three types:
        <br />• Left shift operator {"<<"}"
        <br />• Right shift operator "{">>"}
        <br />• Unsigned right shift operator {">>>"}
        <br />
        <b>Unary operators</b>
        <br />
        These are operators that operate on only one operand. There are many
        unary operators, but the most commonly used ones are the increment ++
        and decrement. Other unary operations: address and, reference *, new and
        delete, bit-bit-not ~, logical not !, unary minus - and unary plus +.
        <br />
        <b>Ternary operator</b> <br />
        Ternary if-else ? : is an operator with three operands.
        <br />
        <b>The comma operator</b>
        <br />
        It is used to separate variable names and expressions. For expressions,
        the value of the last expression is produced and used.
      </p>
    </div>
  );
};

export default Operators;

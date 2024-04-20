import React from "react";

const DataTypes = () => {
  const keywordsAndIdentifiers = [
    "Auto",
    "Double",
    "Int",
    "Struct",
    "Break",
    "Else",
    "Long",
    "Switch",
    "Do",
    "If",
    "Static",
    "While",
    "Default",
    "Goto",
    "Size of",
    "Volatile",
    "Case",
    "Enum",
    "Register",
    "Typedef",
    "Char",
    "Extern",
    "Return",
    "Union",
    "Const",
    "Float",
    "Short",
    "Unsigned",
    "Continue",
    "For",
    "Signed",
    "void",
  ];
  const dataTypes = [
    ["Primary", "Derived", "User-defined"],
    ["Int", "Arrays", "Structure"],
    ["Char", "Pointers", "Union"],
    ["Float", "Functions", "Enumeration"],
    ["Double", "Reference", "Class"],
    ["Void", "typedef", ""],
  ];
  const chunks = [];
  while (keywordsAndIdentifiers.length) {
    chunks.push(keywordsAndIdentifiers.splice(0, 4));
  }
  return (
    <>
      <h3 className="subHead">Data Types</h3>
      <p>
        Data is the main need of any programming language. This data can be of
        various types, including integers, fractions, signs and symbols, or
        whole numbers. To handle these different types of data, C introduced the
        concept of data types. Data types in C refer to the characteristics of
        the data stored in a variable. Each data type has its own data type that
        cannot be used to store other types of data.
      </p>
      <table>
        <tbody>
          {dataTypes.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h3 className="subHead">Primitive data types in c: -</h3>
      <p>
        The C language preconditions or already defines primitive data types,
        which is why they are referred to as basic datatypes. All other data
        types (derived and user-defined data types) are derived from these data
        types. There are four main data types in C: int, char, float , and
        double. In this section, we discuss each of these data types in detail.
      </p>

      <p>
        The following table shows the memory or size consumed by each primary
        data type in C:
      </p>
      {/* Table of primitive data type */}
      {/* Table of primitive data type */}
      {/* Table of primitive data type */}
      {/* Table of primitive data type */}
      {/* Table of primitive data type */}

      <div>
        <h3 className="subHead">Type-casting in C</h3>
        <p>
          Typecasting is the process of converting one datatype into another. It
          is also referred to as data conversion or type conversion. One of the
          key concepts introduced in "C" programming is implicit typecasting,
          which is the conversion of datatypes without losing their original
          meaning. This type of typecasting is crucial when you want to change
          data types without altering the significance of the values stored
          inside the variable. Implicit typecasting occurs automatically when a
          value is copied to its compatible datatype. Strict guidelines for type
          conversion are provided. If the operands are of two different
          datatypes, then an operand with a lower datatype is automatically
          converted into a higher datatype.
        </p>
        <p>It has two types of type-casting :-</p>
        <ol style={{ listStyleType: "decimal" }}>
          <li>
            <p>Implicit type-casting</p>
          </li>
          <li>
            <p>Explicit type-casting</p>
          </li>
        </ol>
      </div>
      <br />

      <div>
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
                {"\n"} short a = 10; // initializing variable of short datatype
                {"\n"} int b; // declaring int variable
                {"\n"} printf("%d\n", a);
                {"\n"} printf("%d\n", b);
                {"\n"} return 0;
                {"\n"}&#125;
                <p>
                  Output <br />
                  10
                  <br />
                  10
                </p>
              </code>
            </pre>
          </div>
        </div>
      </div>

      <h3 className="subHead">Explicit type-casting </h3>
      <p>
        With implicit type conversion, the data type is changed automatically.
        In certain situations, we might need to impose type conversion. Let's
        say we have a variable division that holds the division of two declared
        non-integer data types. return, var1 = 10, var2 = 3; var1/var2 is the
        result. In this instance, the result was stored after the division on
        variables var1 and var2. The "result" variable will have an integer
        format. When this occurs, the value stored Because the variable "result"
        does not take the fraction part into account, it loses meaning. which is
        typically obtained by splitting two numbers. We use explicit typecasting
        to force the type conversion in such circumstances. An operator for
        typecasting is needed. The general typecasting operation syntax is as
        follows: (type-name) expression In this case, The type name refers to
        the common 'C' language datatype. A statement may consist of a constant,
        variable, or an actual expression.
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
              {"\n"} {"//"}float a = 1.2; {"//"} Compiler will throw an error
              for this
              {"\n"} int b = (int)a+1; // declaring int variable
              {"\n"} printf("Value of a is %f\n", a);
              {"\n"} printf("Value of b is %f\n", b);
              {"\n"} return 0;
              {"\n"}&#125;
              <p>
                Output <br />
                The value of a is 1.200000
                <br />
                Value of b Is 2
              </p>
            </code>
          </pre>
        </div>
      </div>
      <p>
        When working with various data types, keep in mind the following
        guidelines for programming practice to prevent data loss: • The float
        should be converted from integer types. • Float types ought to be
        changed to double. • Character types need to be transformed into
        integers.
      </p>
    </>
  );
};

export default DataTypes;

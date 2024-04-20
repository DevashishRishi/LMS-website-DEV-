import React from "react";

const CompilingACProgram = () => {
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
    <div>
      <br />
      
      <div>
        <h3 className="subHead">Compiling a C Program</h3>
        <p>
            As we know C is a mid-level language it needs a compiler to convert the
            code into executable code so it can be easy to run on machines.
        <br />
            In a simple language, we can easily understand it as In compilation, it
            converts the (.i) file into an assembled file (.s) containing
            assembly-level instructions. An assembler is used to convert the (.s)
            assemble level code to machine-readable code like binary/hexadecimal
            code known as object code. In Linking it integrates library files into
            the program. The linking process creates an executable file with an
            extension as (.exe) in DOS and (.OUT) in Unix Os.
        </p>
      </div>

      <div>
        <h3 className="subHead">Q.) What is an executable file ?</h3>
       <p>
            An executable file is a set of files full of instructions encoded with
            sequence instructions that the system can execute directly as the user
            clicks on it and executes their program. It has many types of extensions
            like .exe, .bat, .com, .cmd, .inf, .ipa, etc. All EXE files are
            executable but all executable files are not EXE.
       </p>
      </div>

      <div>
      <h3 className="subHead">Q.) Using a terminal to run a very first program ?</h3>
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
              {"\n"}void main () &#123;
              {"\n"} int num;
              {"\n"} printf("Enter a number");
              {"\n"} scanf("%d", &num);
              {"\n"} printf("now i am letting you on a secret..");
              {"\n"} printf("You have just entered the number %d",num);
              {"\n"} return 0;
              {"\n"}&#125;
            </code>
          </pre>
        </div>
      </div>
      </div>
      <br />

      <div>
        <h3 className="subHead"> Q.) what is a variable, and constant, and how to declare variables and naming conventions?</h3>
          <br />
          <p>
              The alphabets, numbers, and special symbols when properly combined from
              constants, variables, and keywords. Let us understand what is a constant
              and a variable.
              <br />
              Let us assume the variable is an empty container that contains
              any type of value that is being used in the program to solve
              mathematical calculations. The maximum allowable length of a variable
              name is 31 characters.
              <br />
              The constant is a static entity that may not change its actual position.
              We can also state this as a variable is a container that contains the
              static values to solve the mathematical calculations.
          </p>
      </div>
      <br />

      <div>
      <h3 className="subHead">Types of C constants </h3>
      <ol style={{listStyleType:"lower-alpha"}}>
        <li>
          <p>Primary constants</p>
          <ol style={{listStyleType:"disc"}}>
            <li><p>Integer constants</p></li>
            <li><p>Real constants</p></li>
            <li><p>Character constant</p></li>
          </ol>
        </li>
        <li>
          <p>Secondary constants</p>
          <ol style={{listStyleType:"disc"}}>
            <li><p>Array</p></li>
            <li><p>Pointer</p></li>
            <li><p>Structure</p></li>
            <li><p>Union</p></li>
            <li><p>Enum, etc.</p></li>
          </ol>
        </li>
      </ol>
      </div>
      <br />

      <div>  
      <h3 className="subHead">Keywords and identifiers </h3>
      <p>
        C Programming keywords are specified, reserved words with specific
        meanings that are assigned by the compiler. Keywords cannot be used as
        identifiers because they are an essential part of the syntax. As an
        illustration: Int city; In this case, the keyword int designates that
        the variable money is an integer of type int. Since the language C is
        case-sensitive, all keywords have to be written in lowercase. This is a
        list of all ANSI C-acceptable keywords.
      </p>
      <table>
        <tbody>
          {chunks.map((chunk, index) => (
            <tr key={index}>
              {chunk.map((item, i) => (
                <td key={i}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <br />

      <div>
        <h3 className="subHead">IDENTIFIERS</h3>
        <p>
            The basic units of a program in the C programming language are called
            identifiers. Functions, variables, structs, and other entities are given
            unique names called identifiers. They serve as the entity's special
            identification within the program. The string type value in the example
            below has an identifier assigned to it called "section."
        </p>
        <div>
          <h4 className="subHead">Rules for Naming Identifiers </h4>
          <p>
            While naming variables, a programmer must adhere to specific guidelines.
            The rules listed below must be adhered to for the identification to be
            valid.
          </p>
          <ol style={{listStyleType:"disc"}}>
            <li>
              <p>
                Both numerals (0–9) and letters (a–z or A–Z) can be used as identification.
              </p>
            </li>
            <li>
              <p>
                All that is permitted in identification is the underscore '_'. 
              </p>
            </li>
            <li>
              <p>
                You cannot use spaces while naming an identifier.
              </p>
            </li>
            <li>
              <p>
                Only letters or an underscore may start an identifier.
              </p>
            </li>
          </ol>
            <br />
            <p>
              Since identifiers are words that are reserved for a particular purpose,
              we cannot name them similarly to keywords. Printf, scanf, int, char,
              struct, etc. are a few examples. The compiler will generate an error if
              we use the name of a keyword as an identifier. Within its namespace, the
              identification needs to be unique. Because C is a case-sensitive
              language, "name" and "NAME".
          </p>
        </div>
      <br />
      </div>

      <div>
        <h3 className="subHead">Static variable and global variable</h3>
        <p>
          Variables defined outside of the function are referred to as global
          variables. Global variables have an end-of-file or program scope, which
          starts at the moment of formation. a result of their external linkage,
          the same name in other source files refers to the same memory location.
          Static global variables do not clash with other variables of the same
          name in other source files because they are specific to the source file
          in which they are defined. Both static and global variables have static
          initialization, which implies that in cases where you don't set a value
          for them, NULL (for pointers) or 0 (for common variables) will be
          provided.
        </p>
      </div>
    
      <div>
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
      </div>
    </div>
  );
};

export default CompilingACProgram;

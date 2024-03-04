import React from "react";

const CompilingACProgram = () => {
  return (
    <div>
      <br />
      <h3>Compiling a C Program</h3>
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
  );
};

export default CompilingACProgram;

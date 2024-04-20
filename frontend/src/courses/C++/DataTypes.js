import React from "react";
import "./CPP.css";
const DataTypes = () => {
  const keywords = [
    ["Int", "Arrays", "Structure"],
    ["Char", "Pointers", "Union"],
    ["Float", "Functions", "Enumeration"],
    ["Double", "Reference", "Class"],
    ["Void", "typedef", ""],
  ];
  return (
    <div>
      <h3 className="subHead">Datatypes</h3>
      <p>
        All variables use a data type when declared to limit the type of data
        that can be stored. Therefore, we can say that data types are used to
        tell variables what type of data they can store. When a variable is
        defined in C++, the compiler allocates memory for that variable
        according to the data type with which it is declared. Each data type
        requires a different amount of memory.
        <br /> C++ supports a wide variety of data types, and the programmer can
        choose the data type that suits the needs of the application. Data types
        determine the size and types of values to be stored. However, the
        storage representation and machine instructions for handling each data
        type differ from machine to machine, although the C++ instructions are
        the same on all machines.
        <br />
        <table>
          <thead>
            <tr>
              <th>Primary</th>
              <th>Derived</th>
              <th>User-defined</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((keyword, colIndex) => (
                  <td key={colIndex}>{keyword}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </p>
    </div>
  );
};

export default DataTypes;

import React from "react";

const DataTypes = () => {
  return (
    <div>
      <h3 className="subHead">Data types in Java</h3>
      <p>
        Data defines the different sizes and values that can be stored in a
        variable. There are two types of data types in Java: Primitive data
        types: Primitive data types include boolean, character, byte, short,
        int, long, float, and double. Non-primitive data types: Non-primitive
        data types include classes, interfaces, and arrays.
      </p>
      <h3 className="subHead">Primitive data types</h3>
      <p>
        In Java, the building blocks of data manipulation are primitive data
        types. These are the basic data types in Java.
        <br />
        There are 8 types of primitive data types in Java: -<br />
        o Boolean data type
        <br />
        o byte data type
        <br />
        o char data type
        <br />
        o short data type
        <br />
        o int data type
        <br />
        o long data type
        <br />
        o float data type
        <br />
        o double data type
        <br />
        <h3>Non-primitive data types</h3> <br />
        There are a greater number of primitive data types like : -<br />
        • String
        <br />• Array
        <br />
        <table>
          <thead>
            <tr>
              <th>Data Type</th>
              <th>Default Value</th>
              <th>Default Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Boolean</td>
              <td>false</td>
              <td>1 bit</td>
            </tr>
            <tr>
              <td>char</td>
              <td>'\u0000'</td>
              <td>2 byte</td>
            </tr>
            <tr>
              <td>byte</td>
              <td>0</td>
              <td>1 byte</td>
            </tr>
            <tr>
              <td>short</td>
              <td>0</td>
              <td>2 byte</td>
            </tr>
            <tr>
              <td>int</td>
              <td>0</td>
              <td>4 byte</td>
            </tr>
            <tr>
              <td>long</td>
              <td>0L</td>
              <td>8 byte</td>
            </tr>
            <tr>
              <td>float</td>
              <td>0.0f</td>
              <td>4 byte</td>
            </tr>
            <tr>
              <td>double</td>
              <td>0.0d</td>
              <td>8 byte</td>
            </tr>
          </tbody>
        </table>
      </p>
      <h3 className="subHead">Boolean data type</h3>
      <p>
        The Boolean data type is used to store only two possible values: true
        and false. This data type is used for simple flags that follow
        true/false conditions. The Boolean data type specifies one piece of
        information, but its "size” cannot be precisely defined.
        <br />
        Example: - Boolean one =false
      </p>
      <h3>Byte data type </h3>
      <p>
        The byte data type is an example of a primitive data type. It is an
        8-bit signed two's complement integer. Its value range is -128 to 127
        inclusive. It has a minimum value of -128 and a maximum value of 127. It
        defaults to 0. The Byte data type is used to save memory in large arrays
        where memory saving is most needed. This saves space because a byte is 4
        times smaller than an integer. It can also be used “int” data type.
        <br />
        Example: - byte a =10, byte b = -20
      </p>
      <h3>Short data type </h3>
      <p>
        The short data type is a 16-bit signed two's complement integer. Its
        value range is from -32,768 to 32,767 inclusive. It has a minimum value
        of -32768 and a maximum value of 32767. Its default value is 0. The
        short data type can also be used to save memory, like the byte data
        type. A short data type is 2 times smaller than an integer.
        <br />
        Example: - short s=10000, short r = -4000
      </p>
      <h3>Int data type </h3>
      <p>
        The int data type is a 32-bit signed two's complement integer. Its value
        ranges from -2,147,483,648 (-2^31) to 2,147,483,647 (2^31 -1) inclusive.
        Its minimum value is -2 147 483 648, and its maximum value is 2 147 483
        647. Its default value is 0. The int data type is usually used as the
        default data type for integral values unless there are memory problems.
        <br />
        Example: - int a =50, int b= -80
      </p>
      <h3>Long data type </h3>
      <p>
        The long data type is a 64-bit two's complement integer. Its value
        ranges from -9,223,372,036,854,775,808 (-2^63) to
        9,223,372,036,854,775,807 (2^63 -1) inclusive. Its minimum value is
        -9,223,372,036,854,775,808, and its maximum value is
        9,223,372,036,854,775,807. Its default value is 0. The long data type is
        used when you need a range of values that are not provided by int.
        <br /> Example: - long a =400L, long b=-200L
      </p>
      <h3>Float data type </h3>
      <p>
        The floating-point data type is a single-precision 32-bit IEEE 754
        floating-point number. Its value range is unlimited. It is recommended
        to use float (not double) if you want to save memory for large arrays of
        floats. The float type should never be used for exact values such as
        coins. Its default value is 0.0F.
        <br />
        Float a=490.3, float b=598.4
      </p>
      <h3>Double data type </h3>
      <p>
        The double data type is a double-precision 64-bit IEEE 754
        floating-point number. Its value range is unlimited. The double data
        type is usually used for decimal values such as float values. The double
        data type should also never be used for exact values such as coins. Its
        default value is 0.0d.
        <br />
        Example: - d =34.6
      </p>
      <h3>Char data type</h3>
      <p>
        The Char data type is a single 16-bit Unicode character. Its value range
        is '\u0000' (or 0) to '\uffff' (or 65,535 inclusive). The Char data type
        is used to store characters.
        <br />
        Example: - char letter a =’a’
      </p>
    </div>
  );
};

export default DataTypes;

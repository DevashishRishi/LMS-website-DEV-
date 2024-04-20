import React from "react";

const MultiDimensionalArray = () => {
  return (
    <div>
      <h3 className="subHead">Multi-dimensional array </h3>
      <p>
        Multidimensional arrays are arrays where each element of the array has a
        reference to other arrays. They are also called toothed arrays. A
        multidimensional array is created by adding one set of square brackets
        ([]) per dimension.
        <br />
        Java Multidimensional Array Syntax
        <br />
        There are two ways to declare Java multidimensional arrays as mentioned.
        <br />
        -- datatype [][] arrayrefvariable;
        <br />
        -- datatype arrayrefvariable[][];
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
                import java.io.*;
                {"\n"}
                {"//"} Driver class class GFG &#123;
                {"\n"}
                public static void main(String[] args) &#123;
                {"\n"}
                {"//"} Syntax int[][] arr = new int[3][3]; {"//"} 3 row and 3
                column
                {"\n"}
                {"//"} Number of Rows System.out.println("Number of Rows:"+
                arr.length);
                {"\n"}
                {"//"} Number of Columns System.out.println("Number of
                Columns:"+ arr[0].length);
                {"\n"}
                &#125;
                {"\n"}
                &#125;
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              <code>
                Number of Rows: 3
                <br />
                Number of Columns: 3
                <br />
              </code>
            </pre>
          </div>
        </div>
      </p>

      <h3 className="subHead">Multidimensional array declaration</h3>
      <p>
        Syntax:
        <br /> int[][] intArray = new int[10][20]; //a 2D array or matrix
        <br />
        int[][][] intArray = new int[10][20][10]; //a 3D array.
        <br /> let us better understand by a Java program.
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
                public class MultiDimensional &#123;
                {"\n"}
                {"//"} main function public static void main(String args[])
                &#123;
                {"\n"}
                {"//"} declaring and initializing 2D array int arr[][] = &#123;
                &#123; 2, 7, 9 &#125;, &#123; 3, 6, 1 &#125;, &#123; 7, 4, 2
                &#125; &#125;;
                {"\n"}
                {"//"} printing 2D array for (int i = 0; i &lt; 3; i++) &#123;
                {"\n"}
                for (int j = 0; j &lt; 3; j++) System.out.print(arr[i][j] + "
                ");
                {"\n"}
                System.out.println();
                {"\n"}
                &#125;
                {"\n"}
                &#125;
                {"\n"}
                &#125;
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              <code>
                2 7 9
                <br />
                3 6 1
                <br />7 4 2
              </code>
            </pre>
          </div>
        </div>
        <br />
      </p>
      <h3 className="subHead">Passing array to methods</h3>
      <p>
        Like variables, we can pass arrays to methods. For example, the program
        below passes the sum method on an array to calculate the sum of the
        values in the array.
        <br />
        Let us try a program for better understanding:
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
                public class Test &#123;
                {"\n"}
                {"//"} Driver method public static void main(String args[])
                &#123;
                {"\n"}
                int arr[] = &#123; 3, 1, 2, 5, 4 &#125;;
                {"\n"}
                {"//"} passing array to method m1 sum(arr);
                {"\n"}
                &#125;
                {"\n"}
                {"\n"}
                public static void sum(int[] arr) &#123;
                {"\n"}
                {"//"} getting sum of array values int sum = 0;
                {"\n"}
                for (int i = 0; i &lt; arr.length; i++)
                {"\n"}
                sum += arr[i];
                {"\n"}
                {"\n"}
                System.out.println("sum of array values: " + sum);
                {"\n"}
                &#125;
                {"\n"}
                &#125;
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              <code>sum of array values: 15</code>
            </pre>
          </div>
        </div>
        <br />
        Returning array from methods
        <br />
        As usual, a method can also return an array. For example, the program
        below returns an array of method m1.
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
                class Test &#123;
                {"\n"}
                {"//"} Driver method public static void main(String args[])
                &#123;
                {"\n"}
                int arr[] = m1();
                {"\n"}
                for (int i = 0; i &lt; arr.length; i++)
                {"\n"}
                System.out.print(arr[i] + " ");
                {"\n"}
                &#125;
                {"\n"}
                {"\n"}
                public static int[] m1() &#123;
                {"\n"}
                {"//"} returning array return new int[] &#123; 1, 2, 3 &#125;;
                {"\n"}
                &#125;
                {"\n"}
                &#125;
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              <code>1 2 3</code>
            </pre>
          </div>
        </div>
        <br />
        Class object for arrays.
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
                class Test {"{"}
                <br />
                {"    "}public static void main (String args []) {"{"}
                <br />
                {"        "}int intArray[] = new int[3];
                <br />
                {"        "}byte byteArray[] = new byte[3];
                <br />
                {"        "}short shortsArray[] = new short[3];
                <br />
                <br />
                {"        "}
                {"// array of Strings"}
                <br />
                {"        "}String[] strArray = new String[3];
                <br />
                <br />
                {"        "}System.out.println(intArray.getClass());
                <br />
                {"        "}System.out.println(
                <br />
                {"            "}intArray.getClass().getSuperclass());
                <br />
                {"        "}System.out.println(byteArray.getClass());
                <br />
                {"        "}System.out.println(shortsArray.getClass());
                <br />
                {"        "}System.out.println(strArray.getClass());
                <br />
                {"    "}
                {"}"}
                <br />
                {"}"}
                <br />
                <br />
                {"Output "}
                <br />
                class [I
                <br />
                class java.lang.Object
                <br />
                class [B
                <br />
                class [S
                <br />
                class [Ljava.lang.String;
              </code>
            </pre>
          </div>
        </div>
        <br />
        Explanation for the above program.
        <br />
        String "[I" is the runtime type signature of class object "array with
        component type int".
        <br />
        The only direct superclass of array type is java.lang.Object.
        <br />
        String "[B" is the runtime type signature of class object. "array with
        component type byte".
        <br />
        String "[S " is the runtime type signature of the class object "array
        with component type short".
        <br />
        String "[L" is the class component type of the class object "array with
        runtime". type signature". This is followed by the name of the class.
        <br />
      </p>
      <h3 className="subHead">Array types and their allowed data types in Java</h3>
      <table>
        <thead>
          <tr>
            <th>Array Types</th>
            <th>Allowed Element Types</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primitive Type Arrays</td>
            <td>Any type which can be implicitly promoted to declared type.</td>
          </tr>
          <tr>
            <td>Object Type Arrays</td>
            <td>Either declared type objects or its child class objects.</td>
          </tr>
          <tr>
            <td>Abstract Class Type Arrays</td>
            <td>Its child class objects are allowed.</td>
          </tr>
          <tr>
            <td>Interface Type Arrays</td>
            <td>Its implementation class objects are allowed.</td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>
        Cloning of single dimensional array into Java
        <br />
        When you clone a one-dimensional array, such as Object [], a "deep copy"
        is made to the new array, which contains copies of the original array
        instead of references.
        <br />
        Let us try with a program for better understand:
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
                class Test {"{"}
                <br />
                {"    "}public static void main(String args[]) {"{"}
                <br />
                {"        "}int intArray[] = {"{ "}1, 2, 3 {" };"};
                <br />
                <br />
                {"        "}int cloneArray[] = intArray.clone();
                <br />
                <br />
                {"        "}System.out.println(intArray == cloneArray);
                <br />
                <br />
                {"        "}for (int i = 0; i {" < "} cloneArray.length; i++){" "}
                {" {"}
                <br />
                {"            "}System.out.print(cloneArray[i] + " ");
                <br />
                {"        }"}
                <br />
                {"    }"}
                <br />
                {"}"}
                <br />
                <br />
                {"Output "}
                <br />
                False
                <br />1 2 3
              </code>
            </pre>
          </div>
        </div>
        <br />
        Cloning multidimensional array in Java
        <br />
        However, a clone of a multidimensional array such as object[][] is a
        "shallow copy", meaning that it creates only one new array, where each
        array of elements refers to the original array of elements, but the
        subsets are split.
        <br />
        Let us better understand with a program.
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
                class Test {"{"}
                <br />
                {"    "}public static void main(String args[]) {"{"}
                <br />
                {"        "}int intArray[][] = {" {"} {" { "}1, 2, 3 {" },"}{" "}
                {" { "}4, 5 {" }"} {" };"};
                <br />
                <br />
                {"        "}int cloneArray[][] = intArray.clone();
                <br />
                <br />
                {"        "}System.out.println(intArray == cloneArray);
                <br />
                <br />
                {"        "}System.out.println(intArray[0] == cloneArray[0]);
                <br />
                {"        "}System.out.println(intArray[1] == cloneArray[1]);
                <br />
                {"    }"}
                <br />
                {"}"}
                <br />
                <br />
                {"Output "}
                <br />
                False
                <br />
                True
                <br />
                True
              </code>
            </pre>
          </div>
        </div>
      </p>
    </div>
  );
};

export default MultiDimensionalArray;

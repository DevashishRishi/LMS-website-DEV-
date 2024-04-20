import React from "react";
import "./Java.css";
const Arrays = () => {
  return (
    <div>
      <h3 className="subHead">Arrays in java</h3>
      <p>
        Typically, an array is a collection of elements of the same type at a
        contiguous memory location. A Java array is an object that contains
        elements of the same type. In addition, the elements of the array are
        stored in a contiguous memory location. This is a data structure where
        we store similar elements. We can store only a certain number of
        elements in a Java array. A Java array is indexed, the first element of
        an array is stored at index 0, the 2nd element is stored at index 1,
        etc.
        <br />
        Unlike C/C++, we can get the length of an array using the length member.
        For C/C++, we have to use the (sizeof) operator. In Java, an array is a
        dynamically created class object. A Java array inherits from the Object
        class and implements the serializable and cloneable interfaces. We can
        store primitive values or objects in a Java array. Like C/C++, we can
        create one-dimensional or multi-dimensional arrays in Java. In addition,
        Java provides an anonymous array function that is not available in
        C/C++. Advantages and disadvantages of arrays in Java: -
        <br />
        Advantage:-
        <br />
        • Code optimization: optimizes the code, so we can search or sort data
        efficiently.
        <br />
        • Random access: we can get any data located at the index location.
        <br />
        Disadvantages:-
        <br />• Size limitation: we can only store fixed-size array elements.
        This size does not increase while driving. To solve this problem, Java
        uses a collection framework that grows automatically.
      </p>
      <h3 className="subHead">Types of arrays in java: -</h3>
      <p>
        1) Single dimensional array
        <br />
        2) Multi-dimensional array <br />
        Single dimensional array :-
        <br />
        An array definition consists of two parts: a type and a name. type
        indicates the type of array element. The element type determines the
        data type of each element that makes up the table. As well as an array
        of integers, we can create several other primitive data types such as
        char, float, double, etc, or user-defined data types (class objects).
        Thus, the element type of an array determines what type of data the
        array contains.
        <br />
        Syntax: 1. dataType[] arr; (or)
        <br />
        2. dataType []arr; (or)
        <br />
        3. dataType arr[];
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
                class Testarray <br />
                {"{"} <br />
                public static void main(String args[]) <br />
                {"{"} <br />
                int a[]=new int[5]; <br />
                {/*declaration and instantiation*/} <br />
                <br />
                a[0]=10;
                <br />
                {/*initialization*/}
                <br />
                a[1]=20;
                <br />
                a[2]=70;
                <br />
                a[3]=40;
                <br />
                a[4]=50;
                {/*traversing array*/}
                for(int i=0;i&lt;a.length;i++){" "}
                {/*length is the property of array*/} <br />
                System.out.println(a[i]);
                {"}"}
                {"}"}
                Output
                <br />
                10
                <br />
                20
                <br />
                70
                <br />
                40
                <br />
                50
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Instantiating an array in Java</h3>
      <p>
        When an array is declared, only an array reference is created. To create
        or allocate memory for an array, create the array as follows: The new
        general form for one-dimensional arrays is:
        <br />
        var name = new type[size];
        <br />
        Here, type defines the type, the size of the data to assign defines the
        number of elements in the array, and var-name is bound to the array
        variable name. If you want to use new to allocate an array, you must
        specify the type and number of elements to allocate.
        <br />
        Note. Array elements delimited by new are automatically initialized to
        null (for numeric types), false (for logical types), or null (for
        reference types). See Java's default array values.
        <br />
        Getting an array is a two-step process. First, you must declare a
        variable of the desired array type. Second, you need to allocate memory
        to hold the array with new and assign that array to a variable. So, all
        arrays in Java are dynamically allocated.
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
                class Testarray1 <br />
                {"{"} <br />
                public static void main(String args[]) <br />
                {"{"} <br />
                int a[]={(33, 3, 4, 5)};{"//"} declaration, instantiation and
                initialization <br />
                {/*printing array*/}
                for(int i=0;i&lt;a.length;i++){"//"} length is the property of
                array System.out.println(a[i]);
                {"}"} <br />
                {"}"} <br />
                Output <br />
                33 <br />
                3 <br />
                4 <br />5
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">For each loop for java array</h3>
      <p>
        We can also print a Java array using a for-each loop. Java's for-each
        loop prints the elements of an array one by one. This holds the array
        element in a variable and then executes the main part of the loop. The
        syntax for each loop is given below.
        <br />
        Syntax : for(data_type variable:array)
        <br />
        {
          <br />
          // body of the loop
        }{" "}
        <br />
        Let us try with a java program
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
                class Testarray1{"{"} <br />
                public static void main(String args[]){"{"} <br />
                int arr[]={(33, 3, 4, 5)}; <br />
                {/*printing array using for-each loop*/} <br />
                for(int i:arr){"{"} <br />
                System.out.println(i); <br />
                {"}"} <br />
                {"}"} <br />
                Output <br />
                33 <br />
                3 <br />
                4 <br />5
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Passing an array to a method in Java</h3>
      <p>
        We can pass a Java array to a method so that we can reuse the same logic
        in each array. <br />
        Let's see a simple example to get the minimum of an array using a
        method.
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
                class Testarray2
                {"{"}
                {"\n"}
                {"//"} Method to find the minimum value in an array static void
                min(int arr[])
                {"{"}
                {"\n"}
                int min=arr[0];
                {"\n"}
                for(int i=1;i&lt;arr.length;i++)
                {"{"}
                {"\n"}
                if(min&gt;arr[i])
                {"\n"}
                min=arr[i];
                {"\n"}
                {"\n"}
                System.out.println(min);
                {"\n"}
                {"}"}
                {"\n"}
                {"\n"}
                public static void main(String args[])
                {"{"}
                {"\n"}
                int a[]={(33, 3, 4, 5)};{"//"} declaring and initializing an
                array
                {"\n"}
                min(a);{"//"} passing array to method
                {"\n"}
                {"}"}
                {"\n"}
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              <code>3</code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Anonymous array in java</h3>
      <p>
        Java supports the anonymous array feature, so you don't need to declare
        an array when you pass an array to a method.
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
                public class TestAnonymousArray
                {"{"}
                {"\n"}
                {"//"} creating a method which receives an array as a parameter
                static void printArray(int arr[])
                {"{"}
                {"\n"}
                for(int i=0;i&lt;arr.length;i++)
                {"{"}
                {"\n"}
                System.out.println(arr[i]);
                {"\n"}
                {"}"}
                {"\n"}
                {"}"}
                {"\n"}
                {"\n"}
                public static void main(String args[])
                {"{"}
                {"\n"}
                printArray(new int[]{(10, 22, 44, 66)});{"//"} passing anonymous
                array to method
                {"\n"}
                {"}"}
                {"\n"}
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              <code>
                10
                <br />
                22
                <br />
                44
                <br />
                66
              </code>
            </pre>
          </div>
        </div>
        <br />
        <b>Returning Array from method in Java</b>
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
                class TestReturnArray
                {"{"}
                {"\n"}
                {"//"} creating method which returns an array static int[] get()
                {"{"}
                {"\n"}
                return new int[]&#123;10,30,50,90,60&#125;;
                {"\n"}
                {"}"}
                {"\n"}
                {"\n"}
                public static void main(String args[])
                {"{"}
                {"\n"}
                {"//"} calling method which returns an array int arr[]=get();
                {"//"} printing the values of an array for(int
                i=0;i&lt;arr.length;i++) System.out.println(arr[i]);
                {"\n"}
                {"}"}
                {"\n"}
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              <code>
                10
                <br />
                30
                <br />
                50
                <br />
                90
                <br />
                60
              </code>
            </pre>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Arrays;

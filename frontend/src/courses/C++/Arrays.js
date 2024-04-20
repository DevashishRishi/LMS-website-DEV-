import React from "react";
import "./CPP.css";
const Arrays = () => {
  return (
    <div>
      <h3 className="subHead">Arrays</h3>
      <p>
        Like other programming languages, an array in C++ is a group of elements
        of the same type that occupy adjacent memory locations. In C++,
        std::array is a container that encapsulates fixed-size arrays. In C++,
        the array index starts at zero. A C++ array can only store a fixed set
        of elements. A collection of related data items stored in contiguous
        memory locations is called an array in C/C++ or some other programming
        language. The elements of an array can be accessed arbitrarily using its
        indexes. They can be used to store collections of any primitive data
        type, including int, float, double, char, etc. A C/C++ array can also
        store derived data types such as structures, pointers, and other data
        types that are aggregates.
        <br />
        To understand of array and its memory allocation let’s try to understand
        as given below.
        <br />
        {/* Create a table of element and index value */}
        {/* Create a table of element and index value */}
        {/* Create a table of element and index value */}
        {/* Create a table of element and index value */}
        <br />
        Here we created an array of 5 and the value is showing up to 4 only
        because it starts allocating the memory from position 0 and ends as per
        allocated by the user.
      </p>
      <h3 className="subHead">Advantage</h3>
      <p>
        o Random Access
        <br /> o Easy to traverse data
        <br /> o Easy to manipulate data
        <br /> o Code optimization
        <br /> o Easy to sort data
        <br />
      </p>
      <h3>Disadvantages of array:-</h3>
      <p>
        There is no mere or much disadvantages of array but its only stops up to
        fixed size.
      </p>
      <h3 className="subHead">Properties of an array</h3>
      <p>
        • An array is a collection of data of the same type stored in contiguous
        memory locations.
        <br />• Table indexing starts from scratch. This means that the first
        element is stored at the 0th index, and the second at the 1st index.
        index and so on.
        <br /> • Array elements are accessed by their indexes.
        <br />• Once an array is declared, its size remains unchanged throughout
        the program.
        <br /> • A table can have multiple dimensions.
        <br /> • The number of elements in a matrix can be determined by the
        size of the operator.
        <br /> • We find the type of elements stored in an array by subtracting
        adjacent addresses.
        <br />
      </p>
      <h3 className="subHead">Array types </h3>
      <p>
        An array is basically two types:
        <br />
        1) Single dimensional array
        <br /> 2) Multi-dimensional array
      </p>
      <h3 className="subHead">Single dimensional array:</h3>
      <p>
        Let us understand this through a program to understand the
        initialization and traversal.
      </p>
      <p>
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              #include &lt;iostream&gt;
              {"\n"}using namespace std;
              {"\n"}int main ()
              {"\n"}&#123;
              {"\n   "}int arr [5] = &#123;10, 0, 20, 0, 30&#125;; //creating
              and initializing array
              {"\n   "} {"//"}traversing array
              {"\n   "}for (int i = 0; i &lt; 5; i++)
              {"\n   "}&#123;
              {"\n      "}cout&lt;&lt;arr[i]&lt;&lt;"\n";
              {"\n   "}&#125;
              {"\n"}&#125;
              <br />
              <br />
              Output:
              <br />
              10
              <br />
              0
              <br />
              20
              <br />
              0
              <br />
              30
            </pre>
          </div>
        </div>
      </p>
      <p>
        {" "}
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              #include &lt;iostream&gt;
              {"\n"}using namespace std;
              {"\n"}int main()
              {"\n"}&#123;
              {"\n   "}int arr[5] = &#123;10, 0, 20, 0, 30&#125;; //creating and
              initializing array
              {"\n   "} {"//"} traversing array
              {"\n   "}for (int i : arr)
              {"\n   "}&#123;
              {"\n      "}cout &lt;&lt; i &lt;&lt; "\n";
              {"\n   "}&#125;
              {"\n"}&#125;
              <br />
              <br />
              Output:
              <br />
              10
              <br />
              0
              <br />
              20
              <br />
              0
              <br />
              30
            </pre>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Arrays;

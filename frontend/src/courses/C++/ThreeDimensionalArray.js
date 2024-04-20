import React from "react";

const ThreeDimensionalArray = () => {
  return (
    <div>
      <h3 className="subHead">3-D Array</h3>
      <p>
        A 3D table uses three dimensions. A collection of different
        two-dimensional arrays stacked on top of each other can be used to
        represent this. Three indices are used to uniquely identify each element
        of a 3D array - row index, column index and depth index. Declaring a 3D
        array in C++To declare a 3D array in C++ we need to specify both its
        third dimension and its 2D dimensions.
        <br />
        Let us try a C++ program to illustrate the 3-D array.
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
              #include &lt;iostream&gt; {"\n"}
              using namespace std; {"\n"}
              int main() {"\n"}
              &#123; {"\n"}
              &nbsp;&nbsp;// declaring 3d array {"\n"}
              &nbsp;&nbsp;int arr[3][3][3]; {"\n"}
              &nbsp;&nbsp;// initializing the array {"\n"}
              &nbsp;&nbsp;for (int i = 0; i {"<"} 3; i++) {"\n"}
              &nbsp;&nbsp;&#123; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;for (int j = 0; j {"<"} 3; j++) {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&#123; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int k = 0; k{"<"} 3; k++){" "}
              {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[i][j][k] = i +
              j + k; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&#125; {"\n"}
              &nbsp;&nbsp;&#125; {"\n"}
              &nbsp;&nbsp;// printing the array {"\n"}
              &nbsp;&nbsp;for (int i = 0; i{"<"} 3; i++) {"\n"}
              &nbsp;&nbsp;&#123; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cout {"<<"} i {"<<"} "st layer:" {"<<"}{" "}
              endl; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;for (int j = 0; j {"<"} 3; j++) {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&#123; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int k = 0; k{"<"} 3; k++){" "}
              {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout {"<<"}{" "}
              arr[i][j][k] {"<<"} " "; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout {"<<"} endl; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&#125; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cout {"<<"} endl; {"\n"}
              &nbsp;&nbsp;&#125; {"\n"}
              &nbsp;&nbsp;return 0; {"\n"}
              &#125; {"\n"}
            </code>
          </pre>
          <p>
            Output
            <br /> 0st layer:
            <br /> 0 1 2
            <br /> 1 2 3 <br /> 2 3 4<br /> 1st layer:
            <br /> 1 2 3<br /> 2 3 4<br /> 3 4 5<br /> 2st layer:
            <br /> 2 3 4<br /> 3 4 5<br /> 4 5 6<br />
          </p>
        </div>
      </div>
      <br />
      <p>Let us try a C++ program to print minimum number from the array.</p>
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
              #include &lt;iostream&gt; {"\n"}
              using namespace std; {"\n"}
              void printMin(int arr[5]); {"\n"}
              int main() {"\n"}
              &#123; {"\n"}
              &nbsp;&nbsp;int arr1[5] = &#123; 30, 10, 20, 40, 50 &#125;; {"\n"}
              &nbsp;&nbsp;int arr2[5] = &#123; 5, 15, 25, 35, 45 &#125;; {"\n"}
              &nbsp;&nbsp;printMin(arr1); {"\n"}
              &nbsp;&nbsp;printMin(arr2); {"\n"}
              &nbsp;&nbsp;return 0; {"\n"}
              &#125; {"\n"}
              void printMin(int arr[5]) {"\n"}
              &#123; {"\n"}
              &nbsp;&nbsp;int min = arr[0]; {"\n"}
              &nbsp;&nbsp;for (int i = 0; i {"<"} 5; i++) {"\n"}
              &nbsp;&nbsp;&#123; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;if (min {">"} arr[i]) {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&#123; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min = arr[i]; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&#125; {"\n"}
              &nbsp;&nbsp;&#125; {"\n"}
              &nbsp;&nbsp;cout {"<<"} "Minimum element is: " {"<<"} min {"<<"}{" "}
              endl; {"\n"}
              &#125; {"\n"}
            </code>
          </pre>
          <p>
            <br />
            Output:
            <br /> Minimum element is: 10
            <br /> Minimum element is: 5<br />
          </p>
        </div>
      </div>
      <br />
      <p>Let us try a C++ program to print maximum number from the array.</p>
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
              #include &lt;iostream&gt; {"\n"}
              using namespace std; {"\n"}
              void printMax(int arr[5]); {"\n"}
              int main() {"\n"}
              &#123; {"\n"}
              &nbsp;&nbsp;int arr1[5] = &#123; 25, 10, 54, 15, 40 &#125;; {"\n"}
              &nbsp;&nbsp;int arr2[5] = &#123; 12, 23, 44, 67, 54 &#125;; {"\n"}
              &nbsp;&nbsp;printMax(arr1); {"\n"}
              &nbsp;&nbsp;printMax(arr2); {"\n"}
              &nbsp;&nbsp;return 0; {"\n"}
              &#125; {"\n"}
              void printMax(int arr[5]) {"\n"}
              &#123; {"\n"}
              &nbsp;&nbsp;int max = arr[0]; {"\n"}
              &nbsp;&nbsp;for (int i = 0; i {"<"} 5; i++) {"\n"}
              &nbsp;&nbsp;&#123; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;if (max {"<"} arr[i]) {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&#123; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max = arr[i]; {"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&#125; {"\n"}
              &nbsp;&nbsp;&#125; {"\n"}
              &nbsp;&nbsp;cout {"<<"} "Maximum element is: " {"<<"} max {"<<"}{" "}
              endl; {"\n"}
              &#125; {"\n"}
            </code>
          </pre>
          <p>
            <br />
            Output:
            <br />
            The maximum element is: 54
            <br />
            The maximum element is: 67
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeDimensionalArray;

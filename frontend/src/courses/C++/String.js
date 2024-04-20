import React from "react";

const String = () => {
  return (
    <div>
      <h3 className="subHead">std::string Class</h3>
      <p>
        These are new types of strings represented in C++ as a{" "}
        <code>std::string</code> class defined by the{" "}
        <code>&lt;string&gt;</code> header file. It offers many advantages over
        traditional C-style chords, such as dynamic size, limb functions, etc.
      </p>
      <h4 className="subHead">Syntax:</h4>
      <p>
        std::string str("Hello India");
        <br />
        for ex,
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
              #include &lt;iostream&gt;
              {"\n"}using namespace std;
              {"\n"}int main()
              {"\n"}&#123;
              {"\n"} string str("Hello India");
              {"\n"} cout &lt;&lt; str;
              {"\n"} return 0;
              {"\n"}&#125;
            </code>
          </pre>
          <h4 className="subHead">Output:</h4>
          <pre>Hello India</pre>
          <p>Ways to define strings in C++</p>
        </div>
      </div>
      <p>
        Strings can be defined in C++ in several ways. Strings can be accessed
        from the standard library using the <code>String</code> class. Arrays of
        characters can also be used to define strings. String provides many
        functions such as search and manipulation which are commonly used
        methods. Although this method is less advanced than the{" "}
        <code>String</code> class, it is still widely used because it is more
        efficient and easier to use. The following are ways to define a string
        in C++:
      </p>
      <h3 className="subHead">
        Using the <code>string</code> Keyword
      </h3>
      <p>
        It is easier to define a string with the <code>string</code> keyword
        instead of the array keyword because it is easier to write and
        understand.
      </p>
      <h5 className="subHead">Syntax:</h5>
      <pre>
        <code>
          string s = "Hello India";
          {"\n"}string s("Hello India");
        </code>
      </pre>
      <p>Let us try understanding this by a C++ program:</p>
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
              #include &lt;iostream&gt;
              {"\n"}using namespace std;
              {"\n"}int main()
              {"\n"}&#123;
              {"\n"} string s = "Hello India";
              {"\n"} string str("Hello India");
              {"\n"} cout &lt;&lt; "s = " &lt;&lt; s &lt;&lt; endl;
              {"\n"} cout &lt;&lt; "str = " &lt;&lt; str &lt;&lt; endl;
              {"\n"} return 0;
              {"\n"}&#125;
            </code>
          </pre>
          <h5>Output:</h5>
          <pre>
            s = Hello India
            {"\n"}str = Hello India
          </pre>
        </div>
      </div>
      <br />
      <h3>Using C-Style String</h3>
      <p>
        Using C-style string library functions such as <code>strcpy()</code>,{" "}
        <code>strcmp()</code>, and <code>strcat()</code> to define strings. This
        method is more complex and not as widely used as the other two, but it
        can be useful when dealing with legacy code or when you need
        performance.
      </p>
      <p>Let us try a C++ program to understand c-style string:</p>
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
              #include &lt;iostream&gt;
              {"\n"}using namespace std;
              {"\n"}int main()
              {"\n"}&#123;
              {"\n"} char s1[] = &#123; 'g', 'f', 'g', '\0' &#125;;
              {"\n"} char s2[4] = &#123; 'g', 'f', 'g', '\0' &#125;;
              {"\n"} char s3[4] = "gfg";
              {"\n"} char s4[] = "gfg";
              {"\n"} cout &lt;&lt; "s1 = " &lt;&lt; s1 &lt;&lt; endl;
              {"\n"} cout &lt;&lt; "s2 = " &lt;&lt; s2 &lt;&lt; endl;
              {"\n"} cout &lt;&lt; "s3 = " &lt;&lt; s3 &lt;&lt; endl;
              {"\n"} cout &lt;&lt; "s4 = " &lt;&lt; s4 &lt;&lt; endl;
              {"\n"} return 0;
              {"\n"}&#125;
            </code>
          </pre>
          <h5>Output:</h5>
          <pre>
            s1 = gfg
            {"\n"}s2 = gfg
            {"\n"}s3 = gfg
            {"\n"}s4 = gfg
          </pre>
        </div>
      </div>
      <h3>How to take string input in C++</h3>
      <p>
        Entering a string means getting a string from the user. in C++. We have
        different user inputs that depend on the string. The most common way is
        to type the <code>cin</code> keyword using the C++ extraction operator (
        <code>{">>"}</code>). Ways to take a string as input:
        <br />
        cin
        <br />
        Getline
        <br />
        stringstream
      </p>
      <h4 className="subHead">1) Using cin</h4>
      <p>
        <b>Syntax:</b>
        <br />
        cin&gt;&gt;s;
        <br /> Let us understand this by a C++ program:
        <br />
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
              #include &lt;iostream&gt;
              <br />
              using namespace std;
              <br />
              int main()
              <br />
              &#123;
              <br />
              &nbsp;&nbsp;string s;
              <br />
              &nbsp;&nbsp;cout&lt;&lt;"Enter String"&lt;&lt;endl;
              <br />
              &nbsp;&nbsp;cin&gt;&gt;s;
              <br />
              &nbsp;&nbsp;cout&lt;&lt;"String is: "&lt;&lt;s&lt;&lt;endl;
              <br />
              &nbsp;&nbsp;return 0;
              <br />
              &#125;
            </code>
          </pre>
          <p>Output:</p>
          <pre>Enter string: Hello India String is: Hello India</pre>
        </div>
      </div>
      <br />
      <h4 className="subHead">2) Using getline()</h4>
      <p>
        The C++ function <code>getline()</code> is used to read a string from
        the input stream. It is declared as &lt;string&gt;header file.
      </p>
      <p>
        <b>Syntax:</b>
        <br />
        getline(cin,s);
        <br />
        Let us understand this by a C++ program:
      </p>{" "}
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
              #include &lt;iostream&gt;
              <br />
              using namespace std;
              <br />
              int main()
              <br />
              &#123;
              <br />
              &nbsp;&nbsp;string s;
              <br />
              &nbsp;&nbsp;cout&lt;&lt;"Enter String"&lt;&lt;endl;
              <br />
              &nbsp;&nbsp;getline(cin, s);
              <br />
              &nbsp;&nbsp;cout&lt;&lt;"String is: "&lt;&lt;s&lt;&lt;endl;
              <br />
              &nbsp;&nbsp;return 0;
              <br />
              &#125;
            </code>
          </pre>
          <p>Output:</p>
          <pre>Enter the string: Hello India String is: Hello India</pre>
        </div>
      </div>
      <br />
      <h4 className="subHead">3) Using stringstream</h4>
      <p>
        <b>Syntax:</b>
        <br />
        stringstream stringstream_object(string_name);
        <br />
        Let us understand this by a C++ program:
        <br />
      </p>{" "}
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
              #include &lt;iostream&gt;
              <br />
              #include &lt;sstream&gt;
              <br />
              #include&lt;string&gt;
              <br />
              using namespace std;
              <br />
              int main()
              <br />
              &#123;
              <br />
              &nbsp;&nbsp;string s = " Hello Everyone ";
              <br />
              &nbsp;&nbsp;stringstream obj(s);
              <br />
              &nbsp;&nbsp;// string to store words individually
              <br />
              &nbsp;&nbsp;string temp;
              <br />
              &nbsp;&nbsp;//
              {">>"} operator will read from the stringstream object
              <br />
              &nbsp;&nbsp;while (obj &gt;&gt; temp)
              <br />
              &nbsp;&nbsp;&#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; temp &lt;&lt; endl;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &nbsp;&nbsp;return 0;
              <br />
              &#125;
            </code>
          </pre>
          <p>Output:</p>
          <pre>Hello Everyone</pre>
        </div>
      </div>
      <p>
        <b>To pass string to functions:</b>
        <br />
        Just as we pass an array to a function, C++ strings can be passed to
        functions as character arrays. Here is a sample program.
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
              #include &lt;iostream&gt;
              <br />
              using namespace std;
              <br />
              void print_string(string s)
              <br />
              &#123;
              <br />
              &nbsp;&nbsp;cout &lt;&lt; "Passed String is: " &lt;&lt; s &lt;&lt;
              endl;
              <br />
              &nbsp;&nbsp;return;
              <br />
              &#125;
              <br />
              int main()
              <br />
              &#123;
              <br />
              &nbsp;&nbsp;string s = "Hello India";
              <br />
              &nbsp;&nbsp;print_string(s);
              <br />
              &nbsp;&nbsp;return 0;
              <br />
              &#125;
            </code>
          </pre>
          <p>Output:</p>
          <pre>Passed string is: Hello India</pre>
        </div>
      </div>
      <br />
      <h3>String Function</h3>
      <br />
      <table>
        <thead>
          <tr>
            <th>Function</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>compare(const string&amp; str)</td>
            <td>It is used to compare two string objects.</td>
          </tr>
          <tr>
            <td>length()</td>
            <td>It is used to find the length of the string.</td>
          </tr>
          <tr>
            <td>swap(string&amp; str)</td>
            <td>It is used to swap the values of two string objects.</td>
          </tr>
          <tr>
            <td>substr(int pos, int n)</td>
            <td>It creates a new string object of n characters.</td>
          </tr>
          <tr>
            <td>size()</td>
            <td>It returns the length of the string in terms of bytes.</td>
          </tr>
          <tr>
            <td>resize(int n)</td>
            <td>
              It is used to resize the length of the string up to n characters.
            </td>
          </tr>
          <tr>
            <td>replace(int pos, int len, string&amp; str)</td>
            <td>
              It replaces a portion of the string beginning at character
              position pos and spanning len characters.
            </td>
          </tr>
          <tr>
            <td>append(const string&amp; str)</td>
            <td>It adds new characters at the end of another string object.</td>
          </tr>
          <tr>
            <td>at(int pos)</td>
            <td>
              It is used to access an individual character at the specified
              position pos.
            </td>
          </tr>
          <tr>
            <td>find(string&amp; str, int pos, int n)</td>
            <td>It is used to find the specified string in the parameter.</td>
          </tr>
          <tr>
            <td>find_first_of(string&amp; str, int pos, int n)</td>
            <td>
              It is used to find the first occurrence of the specified sequence.
            </td>
          </tr>
          <tr>
            <td>find_first_not_of(string&amp; str, int pos, int n)</td>
            <td>
              It is used to search the string for the first character that does
              not match with any of the characters specified in the string.
            </td>
          </tr>
          <tr>
            <td>find_last_of(string&amp; str, int pos, int n)</td>
            <td>
              It is used to search the string for the last character of the
              specified sequence.
            </td>
          </tr>
          <tr>
            <td>find_last_not_of(string&amp; str, int pos)</td>
            <td>
              It searches for the last character that does not match with the
              specified sequence.
            </td>
          </tr>
          <tr>
            <td>insert()</td>
            <td>
              It inserts a new character before the character indicated by the
              position pos.
            </td>
          </tr>
          <tr>
            <td>max_size()</td>
            <td>It finds the maximum length of the string.</td>
          </tr>
          <tr>
            <td>push_back(char ch)</td>
            <td>It adds a new character ch at the end of the string.</td>
          </tr>
          <tr>
            <td>pop_back()</td>
            <td>It removes the last character of the string.</td>
          </tr>
          <tr>
            <td>assign()</td>
            <td>It assigns a new value to the string.</td>
          </tr>
          <tr>
            <td>copy(string&amp; str)</td>
            <td>It copies the contents of the string into another.</td>
          </tr>
          <tr>
            <td>back()</td>
            <td>It returns a reference to the last character.</td>
          </tr>
          <tr>
            <td>begin()</td>
            <td>It returns a reference to the first character.</td>
          </tr>
          <tr>
            <td>capacity()</td>
            <td>It returns the allocated space for the string.</td>
          </tr>
          <tr>
            <td>clear()</td>
            <td>It removes all the elements from the string.</td>
          </tr>
          <tr>
            <td>data()</td>
            <td>It copies the characters of the string into an array.</td>
          </tr>
          <tr>
            <td>empty()</td>
            <td>It checks whether the string is empty or not.</td>
          </tr>
          <tr>
            <td>erase()</td>
            <td>It removes the characters as specified.</td>
          </tr>
          <tr>
            <td>front()</td>
            <td>It returns a reference to the first character.</td>
          </tr>
          <tr>
            <td>operator+=()</td>
            <td>It appends a new character at the end of the string.</td>
          </tr>
          <tr>
            <td>operator=()</td>
            <td>It assigns a new value to the string.</td>
          </tr>
          <tr>
            <td>operator[](pos)</td>
            <td>It retrieves a character at the specified position pos.</td>
          </tr>
          <tr>
            <td>rfind()</td>
            <td>It searches for the last occurrence of the string.</td>
          </tr>
          <tr>
            <td>end()</td>
            <td>It references the last character of the string.</td>
          </tr>
          <tr>
            <td>shrink_to_fit()</td>
            <td>
              It reduces the capacity and makes it equal to the size of the
              string.
            </td>
          </tr>
          <tr>
            <td>c_str()</td>
            <td>
              It returns a pointer to an array that contains a null-terminated
              sequence of characters.
            </td>
          </tr>
          <tr>
            <td>reverse_iterator</td>
            <td>It references the first character of the string.</td>
          </tr>
          <tr>
            <td>reserve(int len)</td>
            <td>It requests a change in capacity.</td>
          </tr>
          <tr>
            <td>get_allocator()</td>
            <td>It returns the allocated object associated with the string.</td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default String;

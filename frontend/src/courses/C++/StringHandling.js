import React from "react";

const StringHandling = () => {
  return (
    <div>
      <h3 className="subHead">Signal handling </h3>
      <p>
        Signals are interrupts sent to a process by the operating system that
        can terminate the program prematurely. To create breaks, press Ctrl+C on
        UNIX, LINUX, Mac OS X, or Windows. There are signals that the program
        cannot catch, but the following is a list of signals that you can catch
        in your program and perform the necessary actions based on the signal.
        These signals are defined in the C++ header file {"<"}csignal{">"}.
        <br />
        <table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Signal & Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                SIGABRT: Abnormal termination of the program, such as a call to
                abort.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                SIGFPE: An erroneous arithmetic operation, such as a divide by
                zero or an operation resulting in overflow.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>SIGILL: Detection of an illegal instruction.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>SIGINT: Receipt of an interactive attention signal.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>SIGSEGV: An invalid access to storage.</td>
            </tr>
            <tr>
              <td>6</td>
              <td>SIGTERM: A termination request sent to the program.</td>
            </tr>
          </tbody>
        </table>
        <br />
      </p>
      <h3 className="subHead">The signal functions</h3>
      <p>
        C++ signal-handling library provides function signal to trap unexpected
        events. Following is the syntax of the signal() function.
        <br />
        void (*signal (int sig, void (*func)(int)))(int);
        <br />
        For simplicity, this function accepts two arguments: the first argument
        is an integer representing the signal number, and the second argument is
        a pointer to the signal-handling function. Let's write a simple C++
        program where we catch a SIGINT signal with the signal() function.
        Whatever signal you want to receive in your program, you must register
        it with the signal function and connect it to the signal handler.
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
                #include &lt;iostream&gt;
                <br />
                #include &lt;csignal&gt;
                <br />
                using namespace std;
                <br />
                void signalHandler(int signum)
                {"{"}
                <br />
                &nbsp;&nbsp;cout {"<<"} "Interrupt signal (" {"<<"} signum{" "}
                {"<<"} ") received.\n";
                <br />
                <br />
                &nbsp;&nbsp;// cleanup and close up stuff here
                <br />
                &nbsp;&nbsp;// terminate program
                <br />
                <br />
                &nbsp;&nbsp;exit(signum);
                <br />
                {"}"}
                <br />
                <br />
                int main()
                {"{"}
                <br />
                &nbsp;&nbsp;// register signal SIGINT and signal handler
                <br />
                &nbsp;&nbsp;signal(SIGINT, signalHandler);
                <br />
                <br />
                &nbsp;&nbsp;while(1)
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;cout {"<<"} "Going to sleep...." {"<<"}
                endl;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;sleep(1);
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                <br />
                &nbsp;&nbsp;return 0;
                <br />
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>Going to sleep Going to sleep Going to sleep</pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">The raise() function</h3>
      <p>
        Signals can be created using the raise() function, which takes an
        integer signal number as an argument and has the following: -
        <br />
        Syntax: - int raise (signal sig);
        <br />
        Here is the sig signal number to send any signal: SIGINT, SIGABRT,
        SIGFPE, SIGILL, SIGSEGV, SIGTERM, SIGHUP. The following is an example
        where we raise the signal internally using the raise() function as
        follows: -
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
                #include &lt;iostream&gt;
                <br />
                #include &lt;csignal&gt;
                <br />
                using namespace std;
                <br />
                <br />
                void signalHandler(int signum)
                {"{"}
                <br />
                &nbsp;&nbsp;cout {"<<"} "Interrupt signal (" {"<<"} signum{" "}
                {"<<"} ") received.\n";
                <br />
                <br />
                &nbsp;&nbsp;// cleanup and close up stuff here
                <br />
                &nbsp;&nbsp;// terminate program
                <br />
                <br />
                &nbsp;&nbsp;exit(signum);
                <br />
                {"}"}
                <br />
                <br />
                int main ()
                {"{"}
                <br />
                &nbsp;&nbsp;int i = 0;
                <br />
                &nbsp;&nbsp;// register signal SIGINT and signal handler
                <br />
                &nbsp;&nbsp;signal(SIGINT, signalHandler);
                <br />
                <br />
                &nbsp;&nbsp;while(++i)
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;cout {"<<"} "Going to sleep...." {"<<"}{" "}
                endl;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;if( i == 3 ){"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;raise( SIGINT);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;sleep(1);
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                <br />
                &nbsp;&nbsp;return 0;
                <br />
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>Going to sleep Going to sleep Going to sleep</pre>
          </div>
        </div>
      </p>
    </div>
  );
};

export default StringHandling;

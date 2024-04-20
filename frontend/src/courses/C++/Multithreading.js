import React from "react";

const Multithreading = () => {
  return (
    <div>
      <h3 className="subHead">Multithreading</h3>
      <p>
        Multitasking is a special form of multitasking, and multitasking is a
        feature that allows a computer to run two or more programs at the same
        time. In general, there are two types of multitasking: process-based and
        thread-based. Process-based multitasking deals with concurrent execution
        of programs. Thread-based multitasking deals with the simultaneous
        execution of parts of the same program. A multithreaded program contains
        two or more parts that can run simultaneously. Each part of such a
        program is called a thread, and each thread defines a separate path of
        execution. Before C++11, there is no built-in support for multi-threaded
        applications. Instead, it depends entirely on the operating system to
        provide this functionality. This content assumes you are running a Linux
        operating system and we are writing a multi-threaded C++ program using
        POSIX. POSIX Threads or Pthreads provide an API available on many
        Unix-like POSIX systems such as FreeBSD, NetBSD, GNU/Linux, Mac OS X,
        and Solaris.
        <br />
        <b>Creating threads</b>
        <br />
        This following code is used to create POSIX thread: -
        <br />
        #include {"<"}pthread.h{">"}
        pthread_create (thread, attr, start_routine, arg)
        <br />
        Here, pthread_create creates a new thread and makes it executable. This
        routine can be called multiple times in your code. Here is a description
        of the parameters.
        <br />
        <table>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Parameter &amp; Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                thread: An opaque, unique identifier for the new thread returned
                by the subroutine.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                attr: An opaque attribute object that may be used to set thread
                attributes. You can specify a thread attributes object, or NULL
                for the default values.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                start_routine: The C++ routine that the thread will execute once
                it is created.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                arg: A single argument that may be passed to start_routine. It
                must be passed by reference as a pointer cast of type void. NULL
                may be used if no argument is to be passed.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        The maximum number of threads created by a process depends on the
        application. Once threads are created, they are of the same type and can
        spawn other threads. No hierarchy or dependency between threads is
        assumed.
      </p>
      <h3 className="subHead">Terminating threads</h3>
      <p>
        The following code is used to terminate POSIX thread #include {"<"}
        pthread.h{">"}
        pthread_exit (status) Here pthread_exit is explicitly used to exit the
        thread. Normally, the pthread_exit() routine is called after the thread
        has finished its work and is no longer needed. If main() terminates the
        thread created before it and pthread_exit() exits, other threads
        continue to execute. Otherwise, they are automatically terminated when
        main() terminates.
        <br /> Let’s go though some examples for better understanding and
        implementation: -<br />
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
                #include &lt;cstdlib&gt;
                <br />
                #include &lt;pthread.h&gt;
                <br />
                <br />
                using namespace std;
                <br />
                <br />
                #define NUM_THREADS 5
                <br />
                <br />
                void *PrintHello(void *threadid) {"{"}
                <br />
                &nbsp;&nbsp;long tid;
                <br />
                &nbsp;&nbsp;tid = (long)threadid;
                <br />
                &nbsp;&nbsp;cout &lt;&lt; "Hello World! Thread ID, " &lt;&lt;
                tid &lt;&lt; endl;
                <br />
                &nbsp;&nbsp;pthread_exit(NULL);
                <br />
                {"}"}
                <br />
                <br />
                int main () {"{"}
                <br />
                &nbsp;&nbsp;pthread_t threads[NUM_THREADS];
                <br />
                &nbsp;&nbsp;int rc;
                <br />
                &nbsp;&nbsp;int i;
                <br />
                &nbsp;&nbsp;for( i = 0; i &lt; NUM_THREADS; i++ ) {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "main() : creating thread,
                " &lt;&lt; i &lt;&lt; endl;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;rc = pthread_create(&amp;threads[i],
                NULL, PrintHello, (void *)i);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;if (rc) {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Error:unable
                to create thread," &lt;&lt; rc &lt;&lt; endl;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exit(-1);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;pthread_exit(NULL);
                <br />
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              main() : creating thread, 0 main() : creating thread, 1 main() :
              creating thread, 2 main() : creating thread, 3 main() : creating
              thread, 4 Hello World! Thread ID, 0 Hello World! Thread ID, 1
              Hello World! Thread ID, 2 Hello World! Thread ID, 3 Hello World!
              Thread ID, 4
            </pre>
          </div>
        </div>
        <br />
      </p>
      <h3 className="subHead">Passing argument to thread</h3>
      <p>
        This example shows how to pass multiple arguments through a structure.
        You can pass any data type in a thread callback as it points to null as
        explained in the following example.
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
                #include &lt;cstdlib&gt;
                <br />
                #include &lt;pthread.h&gt;
                <br />
                <br />
                using namespace std;
                <br />
                <br />
                #define NUM_THREADS 5
                <br />
                <br />
                struct thread_data {"{"}
                <br />
                &nbsp;&nbsp;int thread_id;
                <br />
                &nbsp;&nbsp;char *message;
                <br />
                {"};"}
                <br />
                <br />
                void *PrintHello(void *threadarg) {"{"}
                <br />
                &nbsp;&nbsp;struct thread_data *my_data;
                <br />
                &nbsp;&nbsp;my_data = (struct thread_data *) threadarg;
                <br />
                <br />
                &nbsp;&nbsp;cout &lt;&lt; "Thread ID : " &lt;&lt;
                my_data-&gt;thread_id ;
                <br />
                &nbsp;&nbsp;cout &lt;&lt; " Message : " &lt;&lt;
                my_data-&gt;message &lt;&lt; endl;
                <br />
                <br />
                &nbsp;&nbsp;pthread_exit(NULL);
                <br />
                {"}"}
                <br />
                <br />
                int main () {"{"}
                <br />
                &nbsp;&nbsp;pthread_t threads[NUM_THREADS];
                <br />
                &nbsp;&nbsp;struct thread_data td[NUM_THREADS];
                <br />
                &nbsp;&nbsp;int rc;
                <br />
                &nbsp;&nbsp;int i;
                <br />
                <br />
                &nbsp;&nbsp;for( i = 0; i &lt; NUM_THREADS; i++ ) {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "main() : creating thread,
                " &lt;&lt; i &lt;&lt; endl;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;td[i].thread_id = i;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;td[i].message = "This is message";
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;rc = pthread_create(&amp;threads[i],
                NULL, PrintHello, (void *)&amp;td[i]);
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;if (rc) {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Error:unable
                to create thread," &lt;&lt; rc &lt;&lt; endl;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exit(-1);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;pthread_exit(NULL);
                <br />
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              main() : creating thread, 0 main() : creating thread, 1 main() :
              creating thread, 2 main() : creating thread, 3 main() : creating
              thread, 4 Thread ID : 3 Message : This is message Thread ID : 2
              Message : This is message Thread ID : 0 Message : This is message
              Thread ID : 1 Message : This is message Thread ID : 4 Message :
              This is message
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Joining and detaching thread</h3>
      <p>
        This code is used to join or detach the thread:
        <br /> pthread_join (threadid, status) <br /> pthread_detach (threadid)
        <br />. The subroutine pthread_join() blocks the calling thread until
        the specified ‘thread_id’ thread ends. When a thread is created, one of
        its properties determines whether it can be pinned or unpinned. Only
        threads created for merging can be merged. If a thread is created as
        detached, it can never be merged. This example shows how to wait for a
        thread to finish using the Pthread assembly routine.
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
                #include &lt;cstdlib&gt;
                <br />
                #include &lt;pthread.h&gt;
                <br />
                #include &lt;unistd.h&gt;
                <br />
                <br />
                using namespace std;
                <br />
                #define NUM_THREADS 5
                <br />
                void *wait(void *t)
                {"{"}
                <br />
                &nbsp;&nbsp;int i;
                <br />
                &nbsp;&nbsp;long tid;
                <br />
                <br />
                &nbsp;&nbsp;tid = (long)t;
                <br />
                &nbsp;&nbsp;sleep(1);
                <br />
                &nbsp;&nbsp;cout &lt;&lt; "Sleeping in thread " &lt;&lt; endl;
                <br />
                &nbsp;&nbsp;cout &lt;&lt; "Thread with id : " &lt;&lt; tid
                &lt;&lt; " ...exiting " &lt;&lt; endl;
                <br />
                &nbsp;&nbsp;pthread_exit(NULL);
                <br />
                {"}"}
                <br />
                <br />
                int main ()
                {"{"}
                <br />
                &nbsp;&nbsp;int rc;
                <br />
                &nbsp;&nbsp;int i;
                <br />
                &nbsp;&nbsp;pthread_t threads[NUM_THREADS];
                <br />
                &nbsp;&nbsp;pthread_attr_t attr;
                <br />
                &nbsp;&nbsp;void *status;
                <br />
                <br />
                &nbsp;&nbsp;// Initialize and set thread joinable
                <br />
                &nbsp;&nbsp;pthread_attr_init(&amp;attr);
                <br />
                &nbsp;&nbsp;pthread_attr_setdetachstate(&amp;attr,
                PTHREAD_CREATE_JOINABLE);
                <br />
                <br />
                &nbsp;&nbsp;for( i = 0; i &lt; NUM_THREADS; i++ ){"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "main() : creating thread,
                " &lt;&lt; i &lt;&lt; endl;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;rc = pthread_create(&amp;threads[i],
                &amp;attr, wait, (void *)i );
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;if (rc)
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Error:unable
                to create thread," &lt;&lt; rc &lt;&lt; endl;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exit(-1);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                <br />
                &nbsp;&nbsp;// free attribute and wait for the other threads
                <br />
                &nbsp;&nbsp;pthread_attr_destroy(&amp;attr);
                <br />
                &nbsp;&nbsp;for( i = 0; i &lt; NUM_THREADS; i++ ){"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;rc = pthread_join(threads[i],
                &amp;status);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;if (rc)
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Error:unable
                to join," &lt;&lt; rc &lt;&lt; endl;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exit(-1);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Main: completed thread id
                :" &lt;&lt; i ;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; " exiting with status :"
                &lt;&lt; status &lt;&lt; endl;
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                <br />
                &nbsp;&nbsp;cout &lt;&lt; "Main: program exiting." &lt;&lt;
                endl;
                <br />
                &nbsp;&nbsp;pthread_exit(NULL);
                <br />
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              main() : creating thread, 0 main() : creating thread, 1 main() :
              creating thread, 2 main() : creating thread, 3 main() : creating
              thread, 4 Sleeping in thread Thread with id : 0 .... exiting
              Sleeping in thread Thread with id : 1 .... exiting Sleeping in
              thread Thread with id : 2 .... exiting Sleeping in thread Thread
              with id : 3 .... exiting Sleeping in thread Thread with id : 4
              .... exiting Main: completed thread id :0 exiting with status :0
              Main: completed thread id :1 exiting with status :0 Main:
              completed thread id :2 exiting with status :0 Main: completed
              thread id :3 exiting with status :0 Main: completed thread id :4
              exiting with status :0 Main: program exiting.
            </pre>
          </div>
        </div>
        <br />
      </p>
    </div>
  );
};

export default Multithreading;

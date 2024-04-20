import React from "react";

const ClassesAndInstances = () => {
  return (
    <div>
      <h3>Classes and Instances</h3>
      <p>
        The classes and instances we place in both trees are nearly identical,
        despite the fact that they are technically two different object kinds in
        the Python model. Each type's primary function is to act as a different
        form of namespace, a package of variables and a location where we may
        attach attributes. Because of this, it makes sense that classes and
        instances sound like modules. Nevertheless, classes correspond to
        statements rather than complete files, and objects in class trees also
        have automatically searched linkages to other namespace items.
        <br />
        Classes are a type of factory for creating instances, which is the main
        distinction between them and instances. Realistic applications could,
        for instance, include an Employee class that describes what it means to
        be an employee; actual Employee instances are then generated from that
        class. Another distinction between classes and modules is that, unlike
        modules, which only ever have one instance in memory at a time (which is
        why we need to reload a module to obtain its updated code), classes
        allow us to create as many instances as necessary. Operationally,
        instances will typically include more fundamental data items utilized by
        the class's functions (like hoursWorked), while classes will typically
        have functions linked to them (like computeSalary). The object-oriented
        model is not all that unlike the traditional data-processing paradigm of
        records plus programs: in object-oriented programming (OOP), classes
        serve as the "programs" that process instances, which are similar to
        records containing "data." However, OOP also introduces the idea of an
        inheritance structure, which facilitates software customization more
        effectively than previous models.
        <br />
        <b>Working with Classes and Instances</b>
        <br />
        Python classes are an effective way to organize code and represent
        notions from the real world. In essence, we are establishing a blueprint
        for constructing objects, or instances, of a class when we create it.
        The majority of our work after class definition consists of
        instantiating and interacting with instances of that class. Modifying
        the characteristics of instances of a class is one of the main jobs
        involved in dealing with them. Similar to variables, attributes are
        connected to each instance and contain particular information. By
        directly accessing them or by creating methods inside the class that
        update them in particular ways, we can change these attributes. Put more
        simply, we are specifying the behavior and structure of objects that
        will be created based on that class when we create a class. Class
        instances are similar to distinct objects made from that blueprint. We
        can change the state of each object by changing its instances'
        attributes. We can do this manually or by implementing methods inside
        the class to handle attribute updates in a more controlled way.
        <br />
        <b>The Car Class</b>
        <br />
        Let's create a new class to symbolize an automobile. Information
        regarding the type of car we're working with will be stored in our
        class, and it will have a function that summarizes this information:
        <br />
        <div
          class="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            class="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                class Car:
                <br />
                # A simple attempt to represent a car.
                <br />
                <br />
                def __init__(self, make, model, year):
                <br />
                # Initialize attributes to describe a car.
                <br />
                self.make = make
                <br />
                self.model = model
                <br />
                self.year = year
                <br />
                <br />
                def get_descriptive_name(self):
                <br />
                # Return a neatly formatted descriptive name.
                <br />
                long_name = str(self.year) + ' ' + self.make + ' ' + self.model
                <br />
                return long_name
                <br />
                <br />
                my_new_car = Car('audi', 'a4', 2022)
                <br />
                print(my_new_car.get_descriptive_name())
              </code>
            </pre>
          </div>
        </div>
        <br />
        The class Car, defined in this Python code, is a simple depiction of an
        automobile. The __init__ method and the get_descriptive_name method are
        the two primary parts of this class. Initialization Method(‘__init__):
        In Python classes, there is a unique method called ‘__init__’ that is
        used to initialize new objects. The four parameters "make," "model," and
        "year" in this Car class stand for the car's make, model, and year,
        respectively. Using the ‘self’ keyword, these parameters are allocated
        to the appropriate object attributes inside the ‘__init__’ method. As a
        result, you must supply values for these attributes when creating a new
        ‘Car’ object because they will be saved with the object. Descriptive
        Name Method (‘get_descriptive_name’): The procedure
        ‘get_descriptive_name’ is in charge of producing a cleanly formatted
        descriptive name for the vehicle. It creates a single string variable
        named ‘long_name’ by concatenating the ‘year’, ‘make’, and ‘model’
        characteristics. The method then returns this string. It's crucial to
        remember that the ‘long_name’ variable is defined via string
        concatenation and is immediately returned, negating the need to call the
        method. All in all, this code illustrates the fundamental ideas of
        Python object-oriented programming, such as class declarations, object
        instantiation, and method invocation. It encourages code organization
        and reusability by encapsulating the characteristics and actions
        associated with an automobile under a single class.
        <br />
        <b>Setting a Default Value for an Attribute</b>
        <br />
        Even if an attribute's initial value is 0 or an empty string, every
        attribute in a class requires one. It makes sense to provide this
        initial value in the body of the __init__() method in some
        circumstances, such as when providing a default value; if We don't need
        to specify a parameter when we do this for an attribute. Let's include
        an additional property named odometer_reading, which has a constant
        initial value of 0. To assist us in reading the odometer on each car,
        we'll also add the read_odometer() method:
        <br />
        <div
          class="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            class="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                class Car:
                <br />
                # A simple attempt to represent a car.
                <br />
                <br />
                def __init__(self, make, model, year):
                <br />
                # Initialize attributes to describe a car.
                <br />
                self.make = make
                <br />
                self.model = model
                <br />
                self.year = year
                <br />
                self.odometer_reading = 0<br />
                <br />
                def get_descriptive_name(self):
                <br />
                # Return a neatly formatted descriptive name.
                <br />
                long_name = str(self.year) + ' ' + self.make + ' ' + self.model
                <br />
                return long_name
                <br />
                <br />
                def read_odometer(self):
                <br />
                # Print a statement showing the car's mileage.
                <br />
                print("This car has " + str(self.odometer_reading) + " miles on
                it.")
                <br />
                <br />
                my_new_car = Car('audi', 'a4', 2022)
                <br />
                print(my_new_car.get_descriptive_name())
                <br />
                my_new_car.read_odometer()
                <br />
                <code>
                  Output:
                  <br />
                  2022 audi a4
                  <br />
                  This car has 0 miles on it.
                  <br />
                </code>
              </code>
            </pre>
          </div>
        </div>
        <br />
        <b>Modifying Attribute Values</b>
        <br />
        There are three methods we can modify an attribute's value: by
        incrementing the value (adding a specific amount to it) using a method,
        setting the value through a method, or changing the value directly
        through an instance. Let's examine each of these strategies.
        <br />
        <b>Modifying an Attribute’s Value Directly</b>
        <br />
        An attribute's value can be directly modified by gaining access to it
        through a class instance and changing its value. This entails changing
        the attribute's value directly and without using any middleman
        techniques. Here, we immediately set the odometer reading to 23:
        <br />
        <div
          class="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            class="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                class Car:
                <br />
                # A simple attempt to represent a car.
                <br />
                <br />
                def __init__(self, make, model, year):
                <br />
                # Initialize attributes to describe a car.
                <br />
                self.make = make
                <br />
                self.model = model
                <br />
                self.year = year
                <br />
                self.odometer_reading = 0<br />
                <br />
                def get_descriptive_name(self):
                <br />
                # Return a neatly formatted descriptive name.
                <br />
                long_name = str(self.year) + ' ' + self.make + ' ' + self.model
                <br />
                return long_name
                <br />
                <br />
                def read_odometer(self):
                <br />
                # Print a statement showing the car's mileage.
                <br />
                print("This car has " + str(self.odometer_reading) + " miles on
                it.")
                <br />
                <br />
                my_new_car = Car('audi', 'a4', 2022)
                <br />
                print(my_new_car.get_descriptive_name())
                <br />
                my_new_car.odometer_reading = 23
                <br />
                my_new_car.read_odometer()
                <br />
                <code>
                  Output:
                  <br />
                  2022 audi a4
                  <br />
                  This car has 23 miles on it.
                  <br />
                </code>
              </code>
            </pre>
          </div>
        </div>
        The odometer_reading attribute of the car is accessed and its value is
        directly set in the code above by using dot notation. This line
        instructs Python to take the instance my_new_car, locate the
        odometer_reading attribute that corresponds to it, and set the
        attribute's value to 23.
        <br />
        <b>Modifying an Attribute’s Value Through a Method</b>
        <br />
        Of course! It can be useful to have methods that take care of the
        updating process internally rather than explicitly accessing and
        changing a class instance's attributes. Encapsulation and abstraction
        are encouraged by this method, which strengthens and simplifies the
        class. This is how it operates: Method for Updating Attributes: You
        provide methods inside the class that take care of updating
        characteristics such as odometer_reading, rather than accessing them
        directly. Usually, these methods take parameters that reflect the new
        values and use those values to internally update the properties. Passing
        New Values: You call the relevant method and send the new value as an
        argument when you want to update an attribute. This abstracts the caller
        from the implementation specifics and wraps the process of updating the
        attribute within the method. Internal Handling: Before updating the
        attribute, you carry out any required validation or processing inside
        the method. This guarantees that the updating of the attribute follows
        the logic specified in the method and is done in a controlled manner.
        All things considered, controlling state within a class is made simpler
        and more streamlined by using methods to update attributes. By
        concealing the specifics of attribute manipulation implementation, it
        encourages encapsulation and makes the class simpler to comprehend and
        manage. Here’s an example showing a method called update_odometer() in
        the above code:
        <br />
        <div
          class="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            class="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                class Car:
                <br />
                # A simple attempt to represent a car.
                <br />
                <br />
                def __init__(self, make, model, year):
                <br />
                # Initialize attributes to describe a car.
                <br />
                self.make = make
                <br />
                self.model = model
                <br />
                self.year = year
                <br />
                self.odometer_reading = 0<br />
                <br />
                def get_descriptive_name(self):
                <br />
                # Return a neatly formatted descriptive name.
                <br />
                long_name = str(self.year) + ' ' + self.make + ' ' + self.model
                <br />
                return long_name
                <br />
                <br />
                def read_odometer(self):
                <br />
                # Print a statement showing the car's mileage.
                <br />
                print("This car has " + str(self.odometer_reading) + " miles on
                it.")
                <br />
                <br />
                def Update_odometer(self, mileage):
                <br />
                # Set the odometer reading to the given value.
                <br />
                self.odometer_reading = mileage
                <br />
                <br />
                my_new_car = Car('audi', 'a4', 2022)
                <br />
                print(my_new_car.get_descriptive_name())
                <br />
                my_new_car.Update_odometer(23)
                <br />
                my_new_car.read_odometer()
                <br />
                <code>
                  Output:
                  <br />
                  2022 audi a4
                  <br />
                  This car has 23 miles on it.
                  <br />
                </code>
              </code>
            </pre>
          </div>
        </div>
        <br />
        The addition of update_odometer() to the last function we define is the
        sole change made to Car. A mileage value is input into this procedure
        and stored internally.odometer reading. The code's second-to-last line
        calls update_odometer() and passes it the number 23 as an input, which
        is the mileage parameter specified in the method specification. The
        odometer reading is changed to 23 and printed by read_odometer(). Every
        time the odometer reading changes, we can add more work to the
        update_odometer() method. To ensure that nobody tries to reset the
        odometer, let's add a little logic:
        <br />
        <div
          class="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            class="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                class Car:
                <br />
                # A simple attempt to represent a car.
                <br />
                <br />
                def __init__(self, make, model, year):
                <br />
                # Initialize attributes to describe a car.
                <br />
                self.make = make
                <br />
                self.model = model
                <br />
                self.year = year
                <br />
                self.odometer_reading = 0<br />
                <br />
                def get_descriptive_name(self):
                <br />
                # Return a neatly formatted descriptive name.
                <br />
                long_name = str(self.year) + ' ' + self.make + ' ' + self.model
                <br />
                return long_name
                <br />
                <br />
                def read_odometer(self):
                <br />
                # Print a statement showing the car's mileage.
                <br />
                print("This car has " + str(self.odometer_reading) + " miles on
                it.")
                <br />
                <br />
                def Update_odometer(self, mileage):
                <br />
                # set the odometer reading to the given value.
                <br />
                # Reject the change if it attempts to roll the odometer back
                <br />
                if mileage {">"}= self.odometer_reading:
                <br />
                self.odometer_reading = mileage
                <br />
                else:
                <br />
                print("You can't roll back an odometer!")
                <br />
                <br />
                my_new_car = Car('audi', 'a4', 2022)
                <br />
                print(my_new_car.get_descriptive_name())
                <br />
                my_new_car.Update_odometer(23)
                <br />
                my_new_car.read_odometer()
                <br />
                <code>
                  Output:
                  <br />
                  2022 audi a4
                  <br />
                  This car has 23 miles on it.
                  <br />
                </code>
              </code>
            </pre>
          </div>
        </div>
        <br />
        Currently, update_odometer() verifies that the updated reading makes
        sense before changing the property. We can update the odometer reading
        to reflect the new distance at the if statement if the new mileage,
        mileage, is greater than or equal to the current mileage,
        self.odometer_reading. You won't be able to roll back the odometer at
        else statement if the new mileage is smaller than the current mileage.
        <br />
        <b>Incrementing an Attribute’s Value Through a Method</b>
        <br />
        Occasionally, we would want to increase an attribute's value by a
        specific amount as opposed to setting a brand-new value. Let's say we
        purchase a used car and drive 100 miles between the purchase and
        registration dates. This technique enables us to add that value to the
        odometer reading and pass this incremental amount. At this point, we may
        create a method in the class that lets you increase the attribute's
        value by a specific amount. Usually, this method changes the property
        based on an argument that indicates how much should be added to the
        current value.
        <br />
        <div
          class="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            class="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                class Car:
                <br />
                # A simple attempt to represent a car.
                <br />
                <br />
                def __init__(self, make, model, year):
                <br />
                # Initialize attributes to describe a car.
                <br />
                self.make = make
                <br />
                self.model = model
                <br />
                self.year = year
                <br />
                self.odometer_reading = 0<br />
                <br />
                def get_descriptive_name(self):
                <br />
                # Return a neatly formatted descriptive name.
                <br />
                long_name = str(self.year) + ' ' + self.make + ' ' + self.model
                <br />
                return long_name
                <br />
                <br />
                def read_odometer(self):
                <br />
                # Print a statement showing the car's mileage.
                <br />
                print("This car has " + str(self.odometer_reading) + " miles on
                it.")
                <br />
                <br />
                def Update_odometer(self, mileage):
                <br />
                # set the odometer reading to the given value.
                <br />
                # Reject the change if it attempts to roll the odometer back
                <br />
                if mileage {">"}= self.odometer_reading:
                <br />
                self.odometer_reading = mileage
                <br />
                else:
                <br />
                print("You can't roll back an odometer!")
                <br />
                <br />
                def increment_odometer(self, miles):
                <br />
                # Add the given amount to the odometer reading.
                <br />
                self.odometer_reading += miles
                <br />
                <br />
                my_new_car = Car('audi', 'a4', 2022)
                <br />
                print(my_new_car.get_descriptive_name())
                <br />
                my_new_car.Update_odometer(23)
                <br />
                my_new_car.read_odometer()
                <br />
                <br />
                my_used_car = Car('Toyota', 'outback', 2021)
                <br />
                print(my_new_car.get_descriptive_name())
                <br />
                <br />
                my_used_car.Update_odometer(23500)
                <br />
                my_new_car.read_odometer()
                <br />
                <br />
                my_used_car.increment_odometer(100)
                <br />
                my_used_car.read_odometer()
                <br />
                <code>
                  Output:
                  <br />
                  2022 audi a4
                  <br />
                  This car has 23 miles on it.
                  <br />
                  2022 audi a4
                  <br />
                  This car has 23 miles on it.
                  <br />
                  This car has 23600 miles on it.
                  <br />
                </code>
              </code>
            </pre>
          </div>
        </div>
        <br />
        The new function increment_odometer() at last function adds the value of
        the number of miles entered to self.odometer reading. We first build a
        used car, my_used_car, using the my_used_car variable. By invoking
        update_odometer() and passing it 23500 at second my_used_car, we set its
        odometer to 23,500. The third my_used_car call increment_odometer() adds
        the 100 miles we drove between purchasing and registering the vehicle by
        passing it 100. To ensure that no one exploits this feature to roll back
        an odometer, we can simply change this procedure to reject negative
        increments. Note: we can use methods like this to control how users of
        our program update values such as an odometer reading, but anyone with
        access to the program can set the odometer reading to any value by
        accessing the attribute directly. Effective security takes extreme
        attention to detail in addition to basic checks like those shown here.
      </p>
    </div>
  );
};

export default ClassesAndInstances;

import React from "react";

const Inheritance = () => {
  return (
    <div>
      <h3>Inheritance</h3>
      <p>
        When writing a class, we don't always have to start from scratch. We can
        use inheritance if the class we're building is a customized version of
        another class we authored. A class immediately inherits all of the
        properties and functions of the parent class when it comes from another.
        The new class is referred to as the kid class, and the original class is
        referred to as the parent class. The child class is free to define new
        attributes and methods of its own, but it also inherits all of the
        methods and attributes from its parent class.
        <br />
        <b>The __init__() Method for a Child Class</b>
        <br />
        Python initially verifies that all parent class attributes are correctly
        initialized before creating an instance of a child class. The __init__()
        function of the child class uses help from its parent class to achieve
        this. This means that before doing any extra customization unique to the
        child class, the child class must explicitly call the parent class's
        __init__() method to ensure that all characteristics inherited from the
        parent class are correctly initialized. By defining a new class named
        ElectricCar, which is a modified version of the Car class we previously
        established, we may represent an electric vehicle. We may base our
        ElectricCar class on the automobile class because an electric automobile
        is similar to a normal car in many aspects, such as having wheels,
        doors, and a steering wheel. This means that the characteristics and
        actions unique to electric cars, such as battery capacity, charging
        techniques, and electric motor performance, will simply require
        additional code. By utilizing inheritance, we can make use of the Car
        class's current capabilities while concentrating on tailoring our
        ElectricCar class to the particular requirements of electric cars. Let’s
        make a simple version of the ElectricCar class, that does everything the
        Car class does:
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
                {`class Car:<br/>
    # A simple attempt to represent a car.<br/>
    <br/>
    def __init__(self, make, model, year):<br/>
        # Initialize attributes to describe a car.<br/>
        self.make = make<br/>
        self.model = model<br/>
        self.year = year<br/>
        self.odometer_reading = 0<br/>
        <br/>
    def get_descriptive_name(self):<br/>
        # Return a neatly formatted descriptive name.<br/>
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model<br/>
        return long_name<br/>
    <br/>
    def read_odometer(self):<br/>
        # Print a statement showing the car's mileage.<br/>
        print("This car has " + str(self.odometer_reading) + " miles on it.")<br/>
    <br/>
    def Update_odometer(self, mileage):<br/>
        # set the odometer reading to the given value.<br/>
        # Reject the change if it attempts to roll the odometer back<br/>
        if mileage >= self.odometer_reading:<br/>
            self.odometer_reading = mileage<br/>
        else:<br/>
            print("You can't roll back an odometer!")<br/>
    <br/>
    def increment_odometer(self, miles):<br/>
        # Add the given amount to the odometer reading.<br/>
        self.odometer_reading += miles<br/>
        <br/>
class ElectricCar(Car):<br/>
    # It represents aspects of a car, that are specific to a electric      vehicles.<br/>
    def __init__(self, make, model, year):<br/>
        # Initialize attributes of the parent class.<br/>
        super().__init__(make, model, year)<br/>
        <br/>
my_new_tesla = ElectricCar('tesla', 'model S', 2022)<br/>
print(my_new_tesla.get_descriptive_name())`}
              </code>
            </pre>
          </div>
        </div>
        <br />
        2022 tesla model S It's important to make sure the parent class is
        defined in the same file as the child class when creating a child class
        in Python. This hierarchy is required because the parent class must be
        accessible for reference during the child class's definition because the
        child class inherits its methods and attributes from it. The child class
        ElectricCar, which is derived from the Car class, is defined in the
        ElectricCar class. The parent class name is placed in parenthesis after
        the child class name to signify this inheritance. Initializing instances
        of the ElectricCar class is the responsibility of the __init__() method
        of the ElectricCar class. It takes in any extra data relevant to
        electric cars in addition to the data needed to generate an instance of
        the Car class. This makes sure that all of the properties inherited from
        the Car class and any unique attributes defined within the ElectricCar
        class are correctly populated when we create an ElectricCar object. One
        unique Python feature that helps to connect a child class to its parent
        class is the super() function. The super() function instructs Python to
        call the parent class's __init__() method when it is used inside a child
        class's __init__() method. By taking this step, you can be guaranteed
        that a child class instance will inherit all of the characteristics and
        methods specified in its parent class. In essence, we are accessing and
        using the parent class's __init__() method inside the child class when
        we call super(). By means of this method, the child class is able to
        utilize the functionality that its parent class provides, hence
        inheriting its characteristics and behaviors. The practice of referring
        to the parent class as the superclass and the child class as the
        subclass is where the term "super" first appeared. Consequently, the
        super() function highlights the connections between these classes,
        facilitating easy inheritance and code structure. We try to create an
        electric automobile using the same parameters that are usually provided
        when developing a standard car to evaluate whether inheritance is
        working properly. An instance of the ElectricCar class is created and
        assigned to the variable my_new_tesla. The __init__() function, which is
        defined in the ElectricCar class, is called during this instantiation.
        Python is then prompted to run the __init__() function that is defined
        in the parent class Car. We provide the parameters 'tesla','model S',
        and 2022, which are commonly used to indicate car details such as the
        year, make, and model. We validate that inheritance is working as
        intended by giving these arguments, which guarantee that the Car class
        is initialized correctly. With this method, we can inherit and use the
        initialization logic given in the parent class to build an instance of
        an electric automobile. Up until now, all we've established is that
        because the electric vehicle instance inherits all the properties and
        methods from the vehicle class, including the initialization logic found
        in the __init__() method, it acts like a regular car instance. But we
        haven't included any special features or techniques that are exclusive
        to electric vehicles. Our priority up to this point has been making sure
        the electric car instance behaves as a car should. We may now begin to
        define features and operations specific to electric vehicles. With these
        enhancements, we'll be able to accurately depict the special traits and
        features of electric cars.
        <br />
        <b>Defining Attributes and Methods for the Child Class</b>
        <br />
        We can add additional methods and attributes to a child class that is
        particular to its features once we have created a child class that
        inherits from a parent class. We can discuss an attribute specific to
        electric vehicles, such as batteries, in the context of electric cars,
        coupled with a way to give information about this attribute. For
        example, we may include a feature to store the electric car's battery
        capacity. We'll also put into practice a method that produces a detailed
        description of the battery, enabling us to obtain data regarding its
        size as needed. By adding features unique to electric vehicles, this
        strategy helps us distinguish them from conventional cars.
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
                {`class Car:<br/>
    # A simple attempt to represent a car.<br/>
    <br/>
    def __init__(self, make, model, year):<br/>
        # Initialize attributes to describe a car.<br/>
        self.make = make<br/>
        self.model = model<br/>
        self.year = year<br/>
        self.odometer_reading = 0<br/>
        <br/>
    def get_descriptive_name(self):<br/>
        # Return a neatly formatted descriptive name.<br/>
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model<br/>
        return long_name<br/>
    <br/>
    def read_odometer(self):<br/>
        # Print a statement showing the car's mileage.<br/>
        print("This car has " + str(self.odometer_reading) + " miles on it.")<br/>
    <br/>
    def Update_odometer(self, mileage):<br/>
        # set the odometer reading to the given value.<br/>
        # Reject the change if it attempts to roll the odometer back<br/>
        if mileage >= self.odometer_reading:<br/>
            self.odometer_reading = mileage<br/>
        else:<br/>
            print("You can't roll back an odometer!")<br/>
    <br/>
    def increment_odometer(self, miles):<br/>
        # Add the given amount to the odometer reading.<br/>
        self.odometer_reading += miles<br/>
        <br/>
class ElectricCar(Car):<br/>
    # It represents aspects of a car, that are specific to electric vehicles.<br/>
    def __init__(self, make, model, year):<br/>
        # Initialize attributes of the parent class.<br/>
        # Then initialize attributes specific to an electric car.<br/>
        super().__init__(make, model, year)<br/>
        self.battery_size = 70<br/>
        <br/>
    def describe_battery(self):<br/>
        # Print a statement describing the battery size.<br/>
        print("This car has a " + str(self.battery_size) + "-kwh battery")<br/>
        <br/>
my_new_tesla = ElectricCar('tesla', 'model S', 2022)<br/>
print(my_new_tesla.get_descriptive_name())<br/>
my_new_tesla.describe_battery()`}
              </code>
            </pre>
          </div>
        </div>
        <br />
        Within the ElectricCar class, we establish a new element called
        battery_size in the given code. It is initialized to a value like 70.
        This characteristic is specific to instances of the ElectricCar class;
        instances of the Car class do not have it. In the ElectricCar class, we
        also define a method named describe_battery(). This technique is in
        charge of printing the electric car's battery information. This method
        gives us a thorough explanation that is customized for an electric car's
        battery when we call it an instance of the ElectricCar class. This
        feature helps us to separate the characteristics and actions of an
        electric automobile from those of a traditional car by retrieving and
        displaying particular information about the battery.
        <br />
        2022 tesla model S<br />
        This car has a 70-kwh battery
        <br />
        To faithfully capture the features and attributes of an electric
        vehicle, the ElectricCar class can be heavily altered. To accurately
        model an electric vehicle, we can insert as many properties and methods
        as we like in the ElectricCar class.
        <br />
        It's crucial to distinguish between features and practices that are
        unique to electric vehicles and those that apply to all car kinds,
        though. The Car class should include any property or function that may
        be applied to any type of car, regardless of the type of power source.
        This guarantees that this functionality is available to users of the Car
        class, while the ElectricCar class only contains code related to the
        particular attributes and characteristics of electric automobiles. This
        modular approach promotes clarity and maintainability in the codebase by
        improving code organization and guaranteeing that each class is focused
        on its specific tasks.
        <br />
        <b>Overriding Methods from the Parent Class</b>
        <br />
        By defining a method with the same name in the child class, we can
        override a method that was inherited from the parent class and change
        its behavior. By doing this, Python is instructed to only use the method
        declared in the child class and to disregard the method implementation
        in the parent class. Assume, for instance, that the Car class has a
        fill_gas_tank() function that is unnecessary for an all-electric car. In
        these situations, we can provide a more suitable implementation that is
        exclusive to electric cars by overriding this function in the
        ElectricCar class. The fill_gas_tank() function is specified in the
        ElectricCar class, so when instances of the ElectricCar class call this
        method, the custom implementation defined in the child class is executed
        instead of the method from the parent class. This allows us to modify
        the method's behavior to meet the needs of electric automobiles.
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
                {`# From above rest code is the same as previously written<br/>
def fill_gas_tank(self):<br/>
    # In electric cars we don't need gas tanks.<br/>
    print("This car doesn't need a gas tank!")<br/>
    <br/>
my_new_tesla.fill_gas_tank()<br/>
    <br/>
# Output:<br/>
# This car doesn't need a gas tank!`}
              </code>
            </pre>
          </div>
        </div>
        <br />
        Python will give preference to the fill_gas_tank() implementation
        defined in the ElectricCar class over the one inherited from the
        automobile class when fill_gas_tank() is called on an instance of an
        electric automobile when inheritance is used. This behavior overrides or
        ignores any methods that are unnecessary or incompatible with the
        particular requirements of the child class, allowing it to retain and
        make use of the intended functionality inherited from the parent class.
        Essentially, inheritance gives child classes the ability to ignore or
        override any methods that do not correspond with the behavior that the
        parent class intended, while also allowing them to selectively preserve
        and enhance functionality inherited from the parent class. With this
        method, you can be guaranteed that every class can use the reusable
        parts that its parent class provides to successfully replicate its
        intended behavior and characteristics.
        <br />
        <b>Instances as Attributes</b>
        <br />
        We frequently get into situations where our classes are more
        complicated, with an increasing number of attributes and methods, when
        we represent real-world items in code. Our code files could get long and
        difficult to handle as a result. In these circumstances, we might find
        that some elements of a class can be divided into discrete functional
        units. We can divide our enormous class into smaller, more targeted
        classes that work together to address this. Our code can be divided into
        smaller classes, each of which can include a subset of methods and
        attributes about a particular facet of the thing we're modeling. This
        modular strategy improves our codebase's reusability, maintainability,
        and clarity while also improving code organization. It also makes
        complex system management and understanding simpler and enables improved
        scalability. As we work to further improve the ElectricCar class, we may
        notice a build-up of properties and operations that are directly
        connected to the vehicle's battery. When this happens, it means our code
        has to be more organized and modularized. To solve this, we may take
        these methods and properties relating to batteries out of the
        ElectricCar class and put them into another class named Battery. Next,
        we can add an instance of the Battery class as one of the attributes of
        the ElectricCar class. By using this method, we create a better
        organized and modular design where each class is in charge of a
        different functionality. The division of responsibilities promotes the
        readability, maintainability, and scalability of the code, making
        complicated system management simpler and opening the door for future
        improvements.
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
                {`class Car:<br/>
    # A simple attempt to represent a car.<br/>
    <br/>
    def __init__(self, make, model, year):<br/>
        # Initialize attributes to describe a car.<br/>
        self.make = make<br/>
        self.model = model<br/>
        self.year = year<br/>
        self.odometer_reading = 0<br/>
    <br/>
    def get_descriptive_name(self):<br/>
        # Return a neatly formatted descriptive name.<br/>
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model<br/>
        return long_name<br/>
    <br/>
    def read_odometer(self):<br/>
        # Print a statement showing the car's mileage.<br/>
        print("This car has " + str(self.odometer_reading) + " miles on it.")<br/>
    <br/>
    def update_odometer(self, mileage):<br/>
        # Set the odometer reading to the given value.<br/>
        # Reject the change if it attempts to roll the odometer back.<br/>
        if mileage >= self.odometer_reading:<br/>
            self.odometer_reading = mileage<br/>
        else:<br/>
            print("You can't roll back an odometer!")<br/>
    <br/>
    def increment_odometer(self, miles):<br/>
        # Add the given amount to the odometer reading.<br/>
        self.odometer_reading += miles<br/>
        <br/>
class Battery:<br/>
    # It is a simple attempt to model a battery for an electric car.<br/>
    def __init__(self, battery_size=70):<br/>
        # Initialize the battery's attributes.<br/>
        self.battery_size = battery_size<br/>
    <br/>
    def describe_battery(self):<br/>
        # Print a statement describing the battery size.<br/>
        print("This car has a " + str(self.battery_size) + "-kWh battery.")<br/>
        <br/>
class ElectricCar(Car):<br/>
    # It represents aspects of a car that are specific to electric vehicles.<br/>
    def __init__(self, make, model, year):<br/>
        # Initialize attributes of the parent class.<br/>
        # Then initialize attributes specific to an electric car.<br/>
        super().__init__(make, model, year)<br/>
        self.battery = Battery()<br/>
        <br/>
my_new_tesla = ElectricCar('tesla', 'model S', 2022)<br/>
print(my_new_tesla.get_descriptive_name())<br/>
my_new_tesla.battery.describe_battery()<br/>
<br/>
// Output:<br/>
// 2022 tesla model S<br/>
// This car has a 70-kWh battery.`}
              </code>
            </pre>
          </div>
        </div>
        <br />A new class called Battery is defined in the supplied code; it
        doesn't inherit from any other classes. This class's __init__() method
        requires self and battery_size as its only parameters. This is an
        optional parameter that, in the absence of a value, sets the battery
        size to 70. Additionally, the describe_battery() function has been
        relocated to this class. The self.battery attribute is introduced to the
        ElectricCar class. This line tells Python to import the Battery class,
        set its default size to 70, and create a new instance. It then stores
        that instance in the self.battery attribute. Every time the __init__()
        function for an ElectricCar instance is invoked, this instantiation
        takes place, guaranteeing that every ElectricCar object has a Battery
        instance automatically connected with it. To describe the battery of an
        electric car, we need to access the describe_battery() method through
        the car's battery attribute. For instance, in the code provided, we call
        “my_new_tesla.battery.describe_battery()” to obtain a description of the
        battery associated with the my_new_tesla electric car instance. This
        approach allows us to access and utilize the battery-related
        functionality encapsulated within the Battery class through the
        ElectricCar class's battery attribute. The
        “my_new_tesla.battery.describe_battery()” line of code tells the Python
        to look at the instance my_new_tesla, find its battery attribute, and
        call the method describe_battery() that’s associated with the Battery
        instance stored in the attribute. The output we can see in the above
        code which is similar or identical to the previous output. We will
        improve the Battery class by adding a new method that determines and
        reports the car's range based on the size of its battery, which will
        simplify the design and preserve a clear division of responsibilities.
        We make sure that the ElectricCar class only covers characteristics
        unique to electric cars by adding this function to the Battery class.
        This keeps unneeded clutter out of the code and encourages code
        organization.
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
                {`# All the above code are same.<br/>
    def get_range(self):<br/>
        # This function prints a statement about the range of the battery.<br/>
        if self.battery_size == 70:<br/>
            range = 240<br/>
        elif self.battery_size == 80:<br/>
            range = 270<br/>
        message = "This car can go approximately " + str(range)<br/>
        message += " miles on a full charge."<br/>
        print(message)<br/>
    # All the below codes are also same except we add one more line at last<br/>
<br/>
my_new_tesla = ElectricCar('tesla', 'model S', 2022)<br/>
print(my_new_tesla.get_descriptive_name())<br/>
my_new_tesla.battery.describe_battery()<br/>
my_new_tesla.battery.get_range()<br/>
<br/>
// Output:<br/>
// 2022 tesla model S<br/>
// This car has a 70-kWh battery.<br/>
// This car can go approximately 240 miles on a full charge.`}
              </code>
            </pre>
          </div>
        </div>
        <br />
        The Battery class's get_range() method in the above code conducts a
        simple analysis based on the battery's capacity. The procedure sets the
        range to 240 miles if the battery has a capacity of 70 kWh. In a similar
        vein, 270 miles is the range set if the capacity is 80 kWh. This
        computed range value is then printed by the procedure. We must call this
        function using the electric car's battery attribute to use it. Calling
        this method yields an output that tells us the car's range is dependent
        on the size of its battery. By encapsulating battery-related operations
        in the Battery class and keeping the ElectricCar class focused on
        features unique to electric cars, this strategy promotes code
        organization and clarity.
        <br />
        <b>Modeling Real-World Objects</b>
        <br />
        When we start modeling more complicated items, such as electric cars, we
        come across interesting problems about how to assign particular
        attributes and techniques. For example, when we think about an electric
        automobile's range, we can ask ourselves if the car or the battery is to
        blame. It may be sufficient to associate the Battery class with the
        get_range() method if we are just talking about one car. Moving the
        get_range() method to the ElectricCar class, however, might be more
        appropriate if we're working with a manufacturer's whole lineup of
        vehicles. The advertised range would be model-specific, but this change
        would still require measuring the battery size. Another strategy would
        be to add a parameter like car_model while keeping the get_range() link
        with the battery. In this case, the algorithm would calculate the range
        by taking into account the car model and battery size.
        <br />
        <b>Importing Classes</b>
        <br />
        Even with careful use of inheritance, our code files may get larger as
        we add more functionality to our classes. Python allows us to keep our
        code tidy and well-organized by allowing us to store classes in
        different modules. This method adheres to the modular and clutter-free
        code file philosophy of Python. We can improve the efficiency of our
        code structure and encourage reusability by grouping classes into
        modules. Then, we can import the precise classes we need into our main
        program, making the codebase easier to maintain and cleaner.
        <br />
        <b>Importing a Single Class</b>
        <br />
        The Car class will be contained in a module called car.py that we will
        explicitly construct. This choice creates a naming conflict with the
        car.py file that is already present in this chapter. In order to fix
        this problem, we will replace the old car.py file with a module called
        car.py, which will include the Car class. As a result, in order to
        prevent confusion, any program that uses this module will need a more
        precise filename, such my_car.py. To maintain order and clarity in our
        codebase, the Car class's code will only be found in the car.py module.
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
                {`class Car:<br/>
    # A simple attempt to represent a car.<br/>
    <br/>
    def __init__(self, make, model, year):<br/>
        # Initialize attributes to describe a car.<br/>
        self.make = make<br/>
        self.model = model<br/>
        self.year = year<br/>
        self.odometer_reading = 0<br/>
    <br/>
    def get_descriptive_name(self):<br/>
        # Return a neatly formatted descriptive name.<br/>
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model<br/>
        return long_name<br/>
    <br/>
    def read_odometer(self):<br/>
        # Print a statement showing the car's mileage.<br/>
        print("This car has " + str(self.odometer_reading) + " miles on it.")<br/>
    <br/>
    def Update_odometer(self, mileage):<br/>
        # Set the odometer reading to the given value.<br/>
        # Reject the change if it attempts to roll the odometer back.<br/>
        if mileage >= self.odometer_reading:<br/>
            self.odometer_reading = mileage<br/>
        else:<br/>
            print("You can't roll back an odometer!")<br/>
    <br/>
    def increment_odometer(self, miles):<br/>
        # Add the given amount to the odometer reading.<br/>
        self.odometer_reading += miles`}
              </code>
            </pre>
          </div>
        </div>
        <br />
        We will import the Car class from the car module into the my_car.py file
        and then instantiate an object from that class. This division
        facilitates code reusability by enabling us to divide our code into
        discrete units. We can use the Car class's functionality in the
        my_car.py file without having to redefine it by importing it. Using a
        modular approach makes code more scalable, readable, and maintainable,
        which makes it easier to design intricate applications. In the car.py
        file, we will also include a module-level docstring that offers a
        concise overview of its contents for documentation and reference.
        <br />
        from car import Car
        <br />
        my_new_car = Car('Audi', 's4', 2022)
        <br />
        print(my_new_car.get_descriptive_name())
        <br />
        my_new_car.odometer_reading = 23
        <br />
        my_new_car.read_odometer()
        <br />
        Python is instructed to access the car module and import the Car class
        utilizing the import statement present in the provided code. We may now
        use the Car class in the current file as though it were defined directly
        thanks to this operation. We may instantiate objects and carry out
        actions as required by importing the Car class, which gives us access to
        its properties and methods. Consequently, the results generated will be
        the same as what we saw earlier when we defined the Car class directly
        in the file. This method uses external modules to encapsulate related
        functionality, which improves code modularity and reusability.
        <br />
        2022 Audi s4
        <br />
        This car has 23 miles on it.
        <br />
        We maintain all of the functionality of the class while maintaining a
        clear and succinct main program file by moving the class to a module and
        importing that module. This method abstracts the intricacies of the
        class implementation into several modules, allowing us to keep the main
        program file organized and legible. We can expedite the development
        process by putting most of the logic in other files. We may ignore such
        files and focus on the higher-level logic of our main program after our
        classes operate as intended. This division of responsibilities improves
        the modularity, maintainability, and organization of the code, making
        future changes and debugging simpler.
        <br />
        <b>Storing Multiple Classes in a Module</b>
        <br />
        As long as each class is connected in some way, we can store as many
        classes as we need in a module. We will include the classes Battery and
        ElectricCar in the car.py module since they both help to represent
        autos. By keeping the module's focus on the idea of vehicles, this
        choice helps to maintain our codebase's organization and clarity. We
        preserve coherence and cohesiveness by combining relevant classes into a
        single module, which facilitates management and comprehension of the
        functionality linked to car representation. Because of this modular
        design, which encourages code reusability and scalability, we can
        effectively add and change the functionality connected to cars.
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
                {`from car import Car<br/>
<br/>
my_new_car = Car('Audi', 's4', 2022)<br/>
print(my_new_car.get_descriptive_name())<br/>
<br/>
my_new_car.odometer_reading = 23<br/>
my_new_car.read_odometer()`}
              </code>
            </pre>
          </div>
        </div>
        <br />
        After creating modifying or adding the new classes to the car.py class
        we make a new file called my_electric_car.py, it import the ElectricCar
        class from the car.py class and makes an electric car:
        <br />
        from car import ElectricCar
        <br />
        my_new_tesla = ElectricCar('tesla', 'model S', 2022)
        <br />
        print(my_new_tesla.get_descriptive_name())
        <br />
        my_new_tesla.battery.describe_battery()
        <br />
        my_new_tesla.battery.get_range()
        <br />
        This code has the same output as we saw earlier, even though most of the
        logic is hidden away in a module:
        <br />
        2022 tesla model S<br />
        This car has a 70-kWh battery.
        <br />
        This car can go approximately 240 miles on a full charge.
        <br />
        <b>Importing Multiple Classes from a Module</b>
        <br />
        We can import as many classes as needed into a software file. We need to
        import the car and ElectricCar classes if we want to create an ordinary
        car and an electric car in the same file. This guarantees that we can
        access the functionality that both classes offer, enabling us to create
        objects of each kind and make use of their unique properties and
        methods. By importing the required classes into our program file, we can
        seamlessly integrate their functionality and leverage their features to
        achieve our desired functionality.
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
                {`class Car:<br/>
    # A simple attempt to represent a car.<br/>
    <br/>
    def __init__(self, make, model, year):<br/>
        # Initialize attributes to describe a car.<br/>
        self.make = make<br/>
        self.model = model<br/>
        self.year = year<br/>
        self.odometer_reading = 0<br/>
    <br/>
    def get_descriptive_name(self):<br/>
        # Return a neatly formatted descriptive name.<br/>
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model<br/>
        return long_name<br/>
    <br/>
    def read_odometer(self):<br/>
        # Print a statement showing the car's mileage.<br/>
        print("This car has " + str(self.odometer_reading) + " miles on it.")<br/>
    <br/>
    def Update_odometer(self, mileage):<br/>
        # Set the odometer reading to the given value.<br/>
        # Reject the change if it attempts to roll the odometer back.<br/>
        if mileage >= self.odometer_reading:<br/>
            self.odometer_reading = mileage<br/>
        else:<br/>
            print("You can't roll back an odometer!")<br/>
    <br/>
    def increment_odometer(self, miles):<br/>
        # Add the given amount to the odometer reading.<br/>
        self.odometer_reading += miles<br/>
        <br/>
class Battery:<br/>
    # It is a simple attempt to model a battery for an electric car.<br/>
    def __init__(self, battery_size=70):<br/>
        # Initialize the battery's attributes.<br/>
        self.battery_size = battery_size<br/>
    <br/>
    def describe_battery(self):<br/>
        # Print a statement describing the battery size.<br/>
        print("This car has a " + str(self.battery_size) + "-kWh battery.")<br/>
        <br/>
    def get_range(self):<br/>
        # This function prints a statement about the range of the battery.<br/>
        if self.battery_size == 70:<br/>
            range = 240<br/>
        elif self.battery_size == 80:<br/>
            range = 270<br/>
        message = "This car can go approximately " + str(range)<br/>
        message += " miles on a full charge."<br/>
        print(message)<br/>
        <br/>
class ElectricCar(Car):<br/>
    # It represent aspects of a car, that are specific to a electric vehicles.<br/>
    def __init__(self, make, model, year):<br/>
        # Initialize attributes of the parent class.<br/>
        # Then initialize attributes specific to an electric car.<br/>
        super().__init__(make, model, year)<br/>
        self.battery = Battery()<br/>
`}
              </code>
            </pre>
          </div>
        </div>
        <br />
        In the above code we can see that we imported multiple classes from a
        module, these classes are separated by a comma. Once we’ve imported the
        needed classes, we can make as many instances as we want for each class
        we need. In the above code, we make an Audi S4 call and an electric
        tesla roadster which we can see in the below output.
        <br />
        2022 Audi s4
        <br />
        2022 tesla roadster
        <br />
        <b>Importing an Entire Module</b>
        <br />
        An alternative method is to import a module in its entirety and then use
        dot notation to access the necessary classes. This approach improves
        readability while streamlining the code. We may use dot notation to
        directly access the classes in the module by importing the complete
        file, which shows us the source of each class. This method also helps
        avoid naming conflicts inside the current file because the module name
        is included in each instance creation call. This guarantees that no
        names used locally in the file will conflict, resulting in code that is
        clearer and more organized. All things considered, importing modules in
        this way speeds up the development process and encourages
        maintainability and clarity of code. Below is the code that shows what
        it looks like to import the entire car module and then create using it a
        normal car and an electric car:
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
                {`from car import ElectricCar<br/>
<br/>
my_new_tesla = ElectricCar('tesla', 'model S', 2022)<br/>
<br/>
print(my_new_tesla.get_descriptive_name())<br/>
my_new_tesla.battery.describe_battery()<br/>
my_new_tesla.battery.get_range()`}
              </code>
            </pre>
          </div>
        </div>
        <br />
        In the first line of the above code, we import the entire car module.
        After that, we access the classes we need through the
        module_name.class_name syntax. At my_audi we again created an Audi s4
        and my_new_tesla we created a tesla roadster.
        <br />
        <b>Importing All Classes from a Module</b>
        <br />
        If we need then we can import every class from a module we just need to
        use the following syntax:
        <br />
        from module_name import *<br />
        This method is not advisable for a couple of reasons. Firstly, it's
        beneficial to have clear and readable import statements at the top of a
        file, allowing us to easily identify which classes the program utilizes.
        When importing an entire module and accessing classes using dot
        notation, it becomes unclear which specific classes are being used from
        the module. This lack of clarity can lead to confusion, especially in
        larger codebases. Additionally, this approach can potentially result in
        naming conflicts within the file. If a class with the same name as
        something else in the program file is accidentally imported, it can lead
        to errors that are challenging to troubleshoot. Instead, if we need to
        import multiple classes from a module, it's better to import the entire
        module and use the module_name.class_name syntax. While this approach
        may not explicitly list all the classes used at the top of the file, it
        indicates where the module is employed in the program. Furthermore, it
        helps avoid potential naming conflicts that may arise when importing
        every class in a module.
        <br />
        <b>Importing a Module into a Module</b>
        <br />
        Occasionally, we may opt to distribute our classes across multiple
        modules to prevent any single file from becoming overly large and to
        maintain organization by avoiding the inclusion of unrelated classes in
        the same module. In such cases, we might encounter situations where a
        class in one module relies on another class from a different module. To
        address this dependency, we can import the necessary class into the
        first module where it is needed. By importing the required class into
        the module, we ensure that the dependent class is accessible and can be
        utilized within the context of the first module. This modular approach
        allows us to structure our code more effectively and manage dependencies
        between classes across different modules. To understand it better let’s
        store the Car class in one module and the ElectricCar and Battery in
        another class in a separate module. We’ll then make a new module that is
        called electric_car.py that replaces the electric_car.py file which we
        created earlier- and copy just the Battery and ElectricCar classes into
        this new file:
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
                {`from car import Car<br/>
class Battery():<br/>
 --snip--<br/>
 <br/>
class ElectricCar(Car):<br/>
 --snip--`}
              </code>
            </pre>
          </div>
        </div>
        <br />
        It is imperative that the class ElectricCar module has access to its
        parent class Car. Consequently, the Car class is directly imported into
        the module, usually at the start of the code. Python will generate an
        error when trying to construct an instance of an ElectricCar if this
        import statement is missing. To keep the codebase organized and clear,
        the Car module must also be changed to just include the Car class. This
        way, each module will only have one class. This procedure makes it
        easier to maintain code and lowers the possibility of mistakes or
        misunderstandings while utilizing several classes in several modules.
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
                {`from car import Car<br/>
from electric_car import ElectricCar<br/>
<br/>
my_audi = Car('Audi', 'S4', 2022)<br/>
print(my_audi.get_descriptive_name())<br/>
<br/>
my_new_tesla = ElectricCar('tesla', 'roadster', 2022)<br/>
print(my_new_tesla.get_descriptive_name())`}
              </code>
            </pre>
          </div>
        </div>
        <br />
        In the above code at the first and second lines, we import the Car from
        its module and ElectricCar from its module. After that, we create a
        normal car and an electric car, and at the output, we can see that both
        car's codes are working perfectly.
        <br />
        2022 Audi S4
        <br />
        2022 tesla roadster
        <br />
      </p>
    </div>
  );
};

export default Inheritance;

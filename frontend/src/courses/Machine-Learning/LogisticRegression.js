import React from "react";
import Figure1 from "../../assests/CourseImages/MachineLearning/LogisticRegression/Figure1.png";
import Figure2 from "../../assests/CourseImages/MachineLearning/LogisticRegression/Figure2.png";

const LogisticRegression = () => {
  return (
    <div>
      <br />
      <div>
        <h3 className="subHead">Logistic Regression</h3>
        <p>
           Logistic algorithms are a supervised machine learning algorithm which is mainly used for classification tasks. Classification means how much chance is that one thing belongs to a particular class. In this algorithm, either one thing belongs to a class or some other class. It is referred to as a regression because it takes the output of the linear regression function as an input and then uses a sigmoid function on it to estimate the probability for the given class. The difference between linear regression and logistic regression is that linear regression gives continuous value as an output and logistic regression gives probability as an output that belongs to a given class or not.
        </p>
        <p>
            Logistic regression predicts the categorical dependent variable which uses a given set of independent variables. It predicts the outcome which has a categorical dependent variable. In this the output is either yes or no, 0 or 1, true or false, etc. but it does not give the exact value of 0 and 1, it gives probabilistic values which lie between 0 and 1.
        </p>
        <p>
          It is very similar to linear regression except for how they are both used. Linear regression is used to solve continuous values whereas logistic regression is used to solve classification values. In logistic regression, we try to fit a ‘S’ shaped logistic function to the dataset which predicts the maximum output between 0 and 1. The curve from the logistic function is used to indicate the likelihood of is anything belongs to a class or not like is the cells are cancerous or not, it the image has a dog or not, etc. 
        </p>
        <p>
            It is a very significant machine learning algorithm because it can give the probability for a certain output value and also because this algorithm can classify new data using continuous and discrete datasets. It can also be used to classify the observation by using many different types of data and it can easily determine the most effective variables used for the classification.
        </p>
        <div className="figure-container">
                    <img src={Figure1} alt="Logistic Regression" />
                </div>

      </div>
      <br/>

      <div>
        <h3 className="subHead">Logistic Function (Sigmoid Function)</h3>
        <p>
            In the logistic function to detect if anything belongs to a certain class, we use threshold value this threshold value is mainly determined with the help of the sigmoid function. Generally, the threshold value is 0.5 for binary classification that is if any value is less than 0.5 then it goes to 0 class and if it is >=0.5 then it goes to 1 class. The sigmoid function is a mathematical function used to map the predicted values to probabilities.
        </p>
        <p>
            It helps to map the real value into another value that is within the range of 0 and 1. In logistic regression, the output cannot go beyond 0 and 1 which is the output’s limit. The ‘S’ curve is the sigmoid function in the logistic regression.
        </p>
        <p>
            In logistic regression, the dependent variable must be of a categorical type in nature and also the independent variable should not be in multicollinearity.  
        </p>
      </div>

      <div>
        <h3 className="subHead">Types of Logistic Regression</h3>
        <p>
            Based on the categories, the logistic regression can be classified into three types:
        </p>
        <p>
            <b>Binomial :-</b> In this category of logistic regression there is only two possible class which are either 0 or 1, pass or fail, or true or false, etc.
        </p>
        <p>
            <b>Multinomial :-</b> In this type of category the logistic regression can have been 3 or more possible outcomes which are in unordered types of the dependent variable like cats, dogs, elephants, etc.
        </p>
        <p>
            <b>Ordinal :-</b> In this type of category the logistic regression can also have 3 or more possible outcomes but they are in the ordered type of dependent variable, like “low”, “Medium”, or “High”.
        </p>
      </div>

      <div>
        <h3 className="subHead">Terminologies involved in Logistic Regression</h3>
        <p>
            There are some common terms involved in logistic regression:
        </p>
        <p>
            <b>Independent Variables :-</b> It is the input characteristic or predictor factor or features that are applied to the dependent variable’s predictions.
        </p>
        <p>
            <b>Dependent Variable :–</b> It is the target variable; it is the value we try to predict.
        </p>
        <p>
            <b>Logistic Function –</b> It is the formula that is used to represent how the independent and dependent variable(s) are related to each other. In this, the logistic function transforms the input variables into the probability value which lies between 0 and 1.
        </p>
        <p>
            <b>Odds :–</b> It is the ratio of something occurring to something not occurring. It is another type or form of probability in this the probability is the ratio of something that occurs to everything that may occur.
        </p>
        <p>
            <b>Log-Odds :–</b> It is also known as logit function; it is the natural logarithm of the odds. In the logistic regression, the log odds of the dependent variable are mainly modeled as a linear combination of the independent variables and the interceptors.
        </p>
        <p>
            <b>Coefficient :–</b> The logistic regression model can estimate the parameters also, which shows how the independent and dependent variables are related to each other. 
        </p>
        <p>
            <b>Intercept :-</b> It is a constant term in the logistic regression model, it represents the log odds when all independent variables are equal to zero.
        </p>
        <p>
          <b>Maximum Likelihood Estimation –</b> It is used to make a prediction/estimate of the coefficient of the logistic regression model, which maximizes the likelihood of observing the data given the model.
        </p>
      </div>

      <div>
        <h3 className="subHead">How does Logistic Regression work</h3>
        <p>
            The logistic regression model transforms the linear regression function’s continuous output value into categorical value output with the help of the sigmoid function, the sigmoid function maps the real-value set of the independent variables into a value between 0 and 1. It is known as the logistic function.
        </p>
        <p>
            Let us have independent input features in the below format :-
            {/* capX= [█((x_11…x_1m)¦█(x_21…x_2m@…@…@…)@x_n1…x_nm )] */}
        </p>
        <p>
            In this, the dependent variable Y only has binary values that is 0 and 1.
            {/* Y= {█(0 if Class 1@1 if Class 2)┤ */}
        </p>
        <p>
            After that we can apply the multi-linear function to the input features or variables &#x1D44B;
            {/* z= (∑_(i=1)^n▒〖w_i x_i 〗)  + b */}
        </p>
        <p>
        In this the &#x1D465;<sub>&#x1D456;</sub> is the observation of &#x1D44B;, &#x1D464;<sub>&#x1D456;</sub> =[&#x1D464;<sub>1</sub>,&#x1D464;<sub>2</sub>,&#x1D464;<sub>3</sub>,…,&#x1D464;<sub>&#x1D45A;</sub> ] is the weights or coefficient, also &#x1D44F; is the bias term which we also called or known as intercept. The above equation can be represented as the dot product of weight and bias.
        <span className="formula">&#x1D467; = &#x1D464;∙&#x1D44B; + &#x1D44F;</span>
        </p>
      </div>

      <div>
          <h3 className="subHead">Sigmoid Function</h3>
          <p>
            After that let discuss about the use of the sigmoid function in this the input will be &#x1D467; and we need to find the probability between 0 and 1 which is predicted by &#x1D466;.
            {/* σ(z)=  1/〖1-e〗^(-z)  */}
          </p>
          <div className="figure-container">
                      <img src={Figure2} alt="Sigmoid Function" />
          </div>
          <p>
          We can see in the above image that the sigmoid function converts the continuous variable data into the probability, which is between 0 and 1. The σ(&#x1D467;) tends to towards 1 as the (&#x1D467; → ∞)¦σ(&#x1D467;)  tends towards 0 as the (&#x1D467; → -∞)¦σ(&#x1D467;)  is always bonded between 0 and 1.
          </p>
          <p>
          In the probability of being a class can be measured as :-
          <span className="formula">&#x1D443;(&#x1D466; = 1) = σ(&#x1D467;)</span>
          <span className="formula">&#x1D443;(&#x1D466; = 0) = 1 - σ(&#x1D467;)</span>
          </p>
      </div>

      <div>
            <h3 className="subHead">Logistic Regression Equation</h3>
            <p>
                In logistic regression there is a chance that something occur or something not occur, which is different from probability as probability is the ratio of something which possibly occur with everything. So, it can be written as :-
                {/* (p(x))/(1-p(x))=e^z */}
            </p>
            <p>
              In this we apply the log on the odd which make it 
              {/* log[(p(x))/(1-p(x))]=z
              log[(p(x))/(1-p(x))]=w.X+b */}
            </p>
            <p>
            The final equation or formula of logistic regression will be :-
            {/* p(X;b,w)=  e^(w.X+b)/〖1+e〗^(w.X+b) =  1/〖1+e〗^(-w.X+b)  */}
            </p>
      </div>

      <div>
            <h3 className="subHead">Assumptions for Logistic Regression</h3>
            <p>The assumptions for logistic regression are as follows :-</p>
            <p>
            <b>Independent Observations :–</b> It means that every independent feature is independent from other feature which leads to no correlation between them.
            </p>
            <p>
            <b>Binary Dependent Variables :–</b> The dependent variable must be binary or dichotomous which means that they can take only two values if we have more category then we have to use softmax function.
            </p>
            <p>
            <b>Linearity relationship between Independent Variables and log Odds :– </b>The relationship between dependent log variable and independent variable(s) should be linear.
            </p>
            <p>
            <b>No Outliers :–</b> In the dataset there should be no outliers present because it lead to poor performance of the model
            </p>
            <p>
            <b>Large sample size :–</b> For training machine learning algorithms we need to have large dataset because it takes lot of data to learn machine learning properly.
            </p>
      </div>

      <div>
            <h3 className="subHead">Applying steps in logistics regression modeling</h3>
            <p>
              <b>Define the Problem :–</b> First we need to identify the dependent variable and independent variable after that we need to determine either the problem is binary classification or not.
            </p>
            <p>
            <b>Data Preparation :–</b> After the defining the problem we need to clean and preprocess the data, and make sure that the data is suitable for logistic regression modeling.
            </p>
            <p>
            <b>Exploratory Data Analysis (EDA) :–</b> For better understand the data we need to visualize the relationships between the dependent and independent variables, and also, we need to identify any outliers or anomalies in the data.
            </p>
            <p>
            <b>Feature Selection :–</b> Feature selection is an important step for machine learning in this we need to choose the independent variables that have quite much significant relationship with the dependent variable, and remove any unnecessary redundant or irrelevant features.
            </p>
            <p>
            <b>Model Building :–</b> After doing all the above steps now we ready to build the logistic regression model on the selected independent variables and estimate the coefficients of the model.
            </p>
            <p>
            <b>Model Evaluation :–</b> After training the model we need to evaluate the models’ performance using various metrics like accuracy, precision, recall, F1-score, or AUC-ROC.
            </p>
            <p>
            <b>Model Improvement :–</b> After model evaluation the fine-tuning of the model may be necessary for better results, in fine-tuning the model needs to be adjust the independent variables, adding new features or using regularization techniques to reduce the overfitting.
            </p>
            <p>
            <b>Model Deployment :–</b> After doing all the above thing and after satisfying with the performance of the result the model is ready to for real world scenario and prediction of new unseen data.
            </p>
      </div>

      <div>
        <h3 className="subHead">Logistic Regression Model Thresholding</h3>
        <p>
        The logistics regression only become a classification technique because threshold is brought to it. In logistics regression setting the threshold value is very important. The classification problem somehow depends on it quite much.
        </p>
        <p>
        The recall and precision values very much affect the threshold value, we want the both precision and recall to be one, but it is very difficult or even impossible for good machine learning model so we want the value come as much as possible close to one.
        </p>
        <p>
        For deciding the precision-recall tradeoff (because when on increase other decrease), we can use the following arguments which can help to decide the threshold:
        </p>
        <ol>
          <li>
            <p>
            <b>Low Precision/High Recall :–</b> To achieve this we need to reduce the number of false negatives without necessarily reducing the number of false positives, we choose a decision value that how a low value of Precision or a high value of recall. 
            </p>
          </li>
          <li>
            <p>
            <b>High Precision/Low Recall :–</b> In this we want to reduce the number of false positive without necessarily reducing the number of false negative, we need to choose a decision value that has a high value of Precision or a lower recall value.
            </p>
          </li>
        </ol>
      </div>

      <div>
        <h3 className="subHead">Summary</h3>
        <p>
        Like linear regression the logistic regression is also very simple and easy to implement machine learning algorithm, it is used for classification problem where we need to check or select whether a thing belongs to one class or not. It has also similar type of limitation as linear regression like it also need to that there should be a linear relationship must exist in the independent and dependent variables and also it should have dependent data which can be used for classification purpose.
        </p>
      </div>

      <div>
        <h3 className="subHead">Python Code</h3>
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
                <span className="codeKey">from</span> sklearn.model_selection <span className="codeKey">import</span> train_test_split
                {"\n"}<span className="codeKey">from</span> sklearn <span className="codeKey">import</span> datasets, linear_model, metrics
                <br/>

                {"\n"}<span className="codeComment"># Load the digit dataset</span>
                {"\n"}digits = datasets.load_digits()
                <br/>

                {"\n"}<span className="codeComment"># Separate data into features (X) and labels (y)</span>
                {"\n"}features = digits.data
                {"\n"}labels = digits.target
                <br/>

                {"\n"}<span className="codeComment"># Split the data into training and testing sets</span>
                {"\n"}X_train, X_test, y_train, y_test = train_test_split(features, labels, test_size=0.4, random_state=1)
                <br/>

                {"\n"}<span className="codeComment"># Create a logistic regression model</span>
                {"\n"}logistic_reg = linear_model.LogisticRegression()
                <br/>

                {"\n"}<span className="codeComment"># Train the model using the training data</span>
                {"\n"}logistic_reg.fit(X_train, y_train)
                <br/>

                {"\n"}<span className="codeComment"># Make predictions on the test set</span>
                {"\n"}predictions = logistic_reg.predict(X_test)
                <br/>

                {"\n"}<span className="codeComment"># Calculate model accuracy</span>
                {"\n"}accuracy = metrics.accuracy_score(y_test, predictions) * 100
                {"\n"}print("Logistic Regression model accuracy (in %):", accuracy)
                <br/>
            
            </code>
          </pre>
        </div>
      </div>


      </div>

    </div>
  );
};

export default LogisticRegression;

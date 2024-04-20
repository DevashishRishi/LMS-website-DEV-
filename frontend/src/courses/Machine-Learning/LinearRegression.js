import React from "react";
import LinearNonLinear from "../../assests/CourseImages/MachineLearning/LinearRegression/LinearNonLinear.png";
import BestFitLine from "../../assests/CourseImages/MachineLearning/LinearRegression/BestFitLine.png";

const LinearRegression = () => {
  return (
    <div>
      <br />
        <div>
          <h3 className="subHead">Linear Regression</h3>
          <p>
              In this chapter, we will look at linear regression which is a part of regression which is a sub-part of the supervised machine learning algorithm. In this, the simplest algorithm is linear regression. The majority of algorithms also work with continuous data that is they try to predict the output in continuous data like stock price prediction, car price prediction, etc. Let's look at both types of supervised learning: - classification – in this supervised learning it predicts the class of the dataset based on the independent variable. It is a categorical or discrete learning method in this the result is either yes or no, or 1 or 0 or either one dog breed or car model or other means it only gives results in either this or that class. Regression – it is also another type or sub-part of supervised learning it predicts the continuous output variables which are based on the independent input variable. It is used to predict problems like the price of a house, stock price prediction, etc.In this chapter, we will look at linear regression which is a part of regression which is a sub-part of the supervised machine learning algorithm. In this, the simplest algorithm is linear regression. The majority of algorithms also work with continuous data that is they try to predict the output in continuous data like stock price prediction, car price prediction, etc. Let's look at both types of supervised learning: - classification – in this supervised learning it predicts the class of the dataset based on the independent variable. It is a categorical or discrete learning method in this the result is either yes or no, or 1 or 0 or either one dog breed or car model or other means it only gives results in either this or that class. Regression – it is also another type or sub-part of supervised learning it predicts the continuous output variables which are based on the independent input variable. It is used to predict problems like the price of a house, stock price prediction, etc.
          </p>

          <p>
              In this chapter, we will look at linear regression which is a part of regression which is a sub-part of the supervised machine learning algorithm. In this, the simplest algorithm is linear regression. The majority of algorithms also work with continuous data that is they try to predict the output in continuous data like stock price prediction, car price prediction, etc. Let's look at both types of supervised learning: - classification – in this supervised learning it predicts the class of the dataset based on the independent variable. It is a categorical or discrete learning method in this the result is either yes or no, or 1 or 0 or either one dog breed or car model or other means it only gives results in either this or that class. Regression – it is also another type or sub-part of supervised learning it predicts the continuous output variables which are based on the independent input variable. It is used to predict problems like the price of a house, stock price prediction, etc.
          </p>
        </div>

        <div>
          <h3 className="subHead">Things that are related to regression analysis</h3>
          <p>
              <b>Dependent Variable :–</b> The dependent variable is that variable which we want to predict or guess, it is also called the target variable. 
          </p>
          <p>
             <b>Independent Variables :–</b> These are called features which mainly affect the dependent variable. The model is trained over these independent variables they are also called predictors.
          </p>
          <p>
              <b>Outliers :–</b> Is a very low or very high value that does not match with other values if we remove it from the dataset then it does not very much affect the result but if we do not remove it from the training or dataset then there is a chance that it might lead to decrease performance of the model so therefore, we need to remove it before training. 
          </p>
          <p>
            <b>Multicollinearity :–</b> If the variables are very much correlated to each other then this condition is called multicollinearity. It is a bad thing for the dataset because it creates problems when we try to rank the most affecting variables.
          </p>
          <p>
            Overfitting and underfitting also need to be a concern in regression or any other machine learning model.
          </p>
        </div>

        <div>
          <h3 className="subHead">Linear Regression</h3>
          <p>
            It is a supervised machine learning algorithm that is used to compute the linear relationship between a dependent variable and one or more independent features. If the independent feature is 1 then it is called univariate linear regression, and if the independent feature is more than 1 then it is called multivariate linear regression.  
          </p>
        </div>

        <div>
          <h3 className="subHead">Why should we use regression analysis ?</h3>
          <p>
              As we know regression analysis mainly use continuous variable and there are many situations in the real world where we need continuous results or prediction to make a good decision. For such problems, we need such type of technique that can predict continuous values and regression is good in this. There are some other reasons also available for regression analysis which are given below: -
          </p>
          <ol className="unordered-number" style={{listStyleType:"disc"}}>
            <li>
              <p>It estimates the relationship between the target and the independent variable.</p>
            </li>
            <li>
              <p>It can find the trends in data.</p>
            </li>
            <li>
              <p>It can also help to find the predicted real/continuous values.</p>
            </li>
            <li>
              <p>It can also help to determine the most important factor, and the least important factor and also how one factor affects another factor.</p>
            </li>
          </ol>
        </div>

        <div>
            <h3 className="subHead">The assumption for the linear regression model</h3>
            <p>
                <b>Linearity :-</b> It means that the independent and dependent variables are in some sort of relationship. which means that change in the independent variable(s) can affect the dependent variable linearly. it also means that we can draw a straight line through data points.
            </p>
            <div className="figure-container">
                <img src={LinearNonLinear} alt="Linear, Non-Linear Regression Model" />
            </div>
            <p>
                <b>Independence :–</b> The features of the dataset are independent from each other. It means that the value of the dependent variable for one observation does not depend on the value of the dependent variable for another observation. If the observations or features are not independent then the linear model is not accurate.
            </p>
            <p>
                <b>Homoscedasticity :–</b> In all the levels of the independent variable(s), the variance of the errors are same at every point and time. This indicates that the amount of the independent variable(s) has no impact on the variance of the errors. The variance of the residuals needs to be constant because if they are not then the model will not be accurate.
            </p>
            <p>
              <b>Normality :–</b> It means that residuals must follow that bell-shaped curve, if it is not in the proper bell shape then the linear model does not produce good results. 
            </p>
        </div>

        <div>
          <h3 className="subHead">Types of Linear Regression</h3>
          <p>
            There are many types of linear regression but two of them are the most prominent they are: - 
          </p>
          <div id="SLR">
            <p>
              <b>Simple Linear Regression :–</b> It is the most common and simple form of linear regression. For this regression, only one independent variable and one dependent variable are required. Its equation is written below:
            </p>
            <p class="formula">
                  <span class="formula">y = β<sub>0</sub> + β<sub>1</sub> X</span>
                  <br/>
                  Here:<br/>
                  Y is the dependent variable<br/>
                  X is the independent variable<br/>
                  β<sub>0</sub> is the intercept<br/>
                  β<sub>1</sub> is the slope<br/>
            </p>
          </div>

          <div id="MLR">
            <p>
                <b>Multiple Linear Regression :–</b> In this regression there are more than one independent variable available and one dependent variable available. The equation for this regression method is:
            </p>
            <span className="formula">
                y=β<sub>0</sub> + β<sub>1</sub> X + β<sub>2</sub> X + ⋯ + β<sub>n</sub> X
            </span>
            <p>
              Here:<br/>
              Y is the dependent variable<br/>
              X1, X2, …, Xp are the independent variables<br/>
              β<sub>0</sub> is the intercept β<sub>1</sub>  ,β<sub>2</sub>,….,β<sub>n</sub> are the slopes<br/>
            </p>

          </div>
        </div>

        <div>
          <h3 className="subHead">Some other types are regression also available and they are: -</h3>
          <p>
              <b>Polynomial Regression :–</b> It goes beyond the scope of the linear regression, it incorporates higher-order polynomial terms of the independent variable(s) into the model. 
          </p>
          <p>
              <b>Ridge Regression :–</b> It is a regularization technique that is used to prevent overfitting in the linear regression models, it is very useful when we have multiple independent variables. It has a penalty of terms to the least squares objective function, biasing the model towards solutions with smaller coefficients.
          </p>
          <p>
              <b>Lasso regression :–</b> It is another regularization technique that uses an L1 penalty term to shrink the coefficients of the less important independent variables towards zero, effectively performing feature selection.
          </p>
          <p>
              <b>Elastic Net regression :–</b> It combines the penalties of the ridge and lasso regression, which offers a balance between their strengths. 
          </p>
        </div>

        <div >
              <h3 className="subHead">Best Fit lines :</h3>
              <p>
                  The goal of the linear regression algorithms is to find the best-fit line equation that can predict the values based on the independent variables. It means that it tries to make the error minimum between the actual values and the predicted values. It is mainly a straight line that represents the relationship between dependent and independent variables. In this line, the slope indicates how much the dependent variable changes for a unit change in the independent variable(s). 
              </p>
              <div className="figure-container">
                <img src={BestFitLine} alt="Best Fit Line" />
            </div>
            <p>
                In the above diagram, the Y is the dependent variable and the X is the independent variable(s) which we also call features or predictors of Y. The task of linear regression is to predict the dependent variable value which is Y with the help of the independent variable(s) value(s) which is X. Because it creates a straight line it is called linear regression. 
            </p>
            <p>
                The linear regression model can also use optimization algorithms like gradient descent which is done by iteratively modifying the model’s parameters to reduce the ‘mean squared error (MSE)’ of the model on a training dataset. In this we need to reduce the θ<sub>1</sub> and θ<sub>2</sub> value which help to reduce the cost function and achieve the best-fit line for this the model uses gradient descent. 
            </p>

        </div>

        <div>
          <h3 className="subHead">Evaluation Metrics for Linear Regression</h3>
          <p>
              The evaluation metrics are used to check how well our linear regression model performs. They help us to understand how well the model produces the observed outputs.
          </p>
          <p>
             The most common measurements are: - 
          </p>
          <p>
              <b>Coefficient of determination (R-squared) :-</b> It is static which mainly indicates how much variation the developed model can explain or capture. It always lies between 0 and 1. If the model is good then it is much closer to 1 and vice versa. Its mathematical expression is as follows: -
          </p>
          <span className="formula">R<sup>2 </sup> = 1 - (RSS/TSS)</span>
          <ol style={{listStyleType:"disc"}}>
            <li>
                <p><b>Residual sum of Squares (RSS) :–</b> It is the sum of the residual for each data point in the plot or the data is known as the residual sum of squares that is RSS. It is used to measure the difference between the output that was observed and what was anticipated. 
                </p>
                <span className="formula">RSS= ∑<sup>n</sup><sub>(i=2)</sub>(y<sub>i</sub> - b<sub>0</sub> - b<sub>1x<sub>i</sub></sub> )<sup>2</sup> </span>
            </li>
            <li>
                <p><b>Total Sum of Squares (TSS) :–</b> the sum of the data points’ errors from the answer variable’s mean is known as the total sum of squares, or TSS.</p>
                <span className="formula">TSS= ∑ (&#x1D466; - (&#x233;<sub>&#x1D456;</sub>) )<sup>2</sup> </span>
            </li>
          </ol>

          <p>
              <b>Root Mean Squared Error (RMSE) :-</b> It is the square root of the residuals’ variance. It is used to describe how well the observed data point matches the expected values, or is our model absolute fit to the data. It can be expressed in as :-
          </p>
          {/* RMSE= √(RSS/n)= √((∑_(i=2)^n▒(y_i^actual-y_i^predicted )^2 )/n) */}
          <p>
              In this rather than dividing the entire number of data points in the model with the number of degrees of freedom, one must divide the sum of the squared residuals to obtain an unbiased estimate. This is then referred to as the Residual Standard Error (RSE). It can be represented as 
          </p>
          {/* RMSE= √(RSS/n)= √((∑_(i=2)^n▒(y_i^actual-y_i^predicted )^2 )/((n-2))) */}
          <p>
            The RSME is not as good as R-squared. The Root Mean Squared Error can fluctuate when the units of the variables vary since its value is dependent on the variables’ units.
            </p>
        </div>

        <div>
          <h3 className="subHead">Linear Regression Line</h3>
          <p>
              The linear regression line can provide valuable insights into the relationship of two variables. It commonly represents the best-fitting line which captures the overall trend of how the dependent variable (&#x1D44C;) will change in response to variations in an independent variable (&#x1D44B;).
          </p>
          <ol style={{listStyleType:"disc"}}>
            <li>
              <p>
                  <b>Positive Linear Regression Line :–</b> The positive linear regression line means that there is a direct relationship between the independent variable (&#x1D44B;) and the dependent variable (&#x1D44C;). It indicates that if the value of &#x1D44B; changes, then the value of &#x1D44C; also changes in the same manner means if &#x1D44B; increases then &#x1D44C; also increases and vice versa. The line of the positive linear regression slants upward from left to right.
              </p>
            </li>
            <li>
              <p>
                  <b>Negative Linear Regression Line :–</b> It is just the opposite of the positive linear regression line in this the relationship between the independent variable (&#x1D44B;) and dependent variable (&#x1D44C;) is in reverse means that if the value of &#x1D44B; increases then the value of &#x1D44C; decreases and vice versa. Its slope is negative, which means that the line slants downward from left to right.
              </p>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="subHead">Advantages of Linear Regression</h3>
          <ol style={{listStyleType:"disc"}}>
            <li>
              <p>
                  It is a very simple algorithm compared to other regression algorithms which makes it easy to understand and implement. In this the coefficient of the linear regression model can be interpreted as the change in the dependent variable for a unit change in the independent variable it provides useful insights into the relationships between variables.
              </p>
            </li>
            <li>
              <p>
                  Because it is simple it is computationally efficient and it can easily handle large datasets effectively. It can also be trained quickly on large datasets which makes it very suitable for real-time applications.
              </p>
            </li>
            <li>
              <p>
                  It is also very much robust or unaffected with outliers compared to other machine learning algorithms. In this model, the outliers may have a smaller impact on the overall performance of the model.
              </p>
            </li>
            <li>
              <p>
                It also serves as a baseline model for all other much more complex machine learning models or algorithms.
              </p>
            </li>
            <li>
              <p>
                Because it is a simple and well-established algorithm and also has a good history it is widely available in various machine learning libraries and software packages.
              </p>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="subHead">Disadvantages of Linear Regression</h3>
          <ol style={{listStyleType:"disc"}}>
            <li>
              <p>
              Because it assumes a linear relationship between independent and dependent variable(s) it performs very poorly when there is no linear relationship available in the dataset.
              </p>
            </li>
            <li>
              <p>
              It is also very sensitive with multicollinearity which mainly happens when there is high correlation between independent variables.
              </p>
            </li>
            <li>
              <p>
              It also behaves like the features are already in suitable form for the model, therefore, the feature engineering is required to transform the features into a suitable format which we can use in model.
              </p>
            </li>
            <li>
              <p>
              It can also overfit or underfit easily.
              </p>
            </li>
            <li>
              <p>
              It has limitations when it tries to provide explanatory relationships between variables, therefore for more explanatory details we need more complex or advance machine learning techniques.
              </p>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="subHead">Conclusion</h3>
          <p>
          Linear regression is very basic and fundamental machine learning algorithm which is widely used for simple datasets and benchmarking for the other models’ performance. It is widely used because of its simplicity, interpretability, and efficiency. It very useful tool especially when it comes with understanding the relationship between variables and making prediction in a variety of applications. However, we must also know its limitations like it cannot work very well when there is no linear correlation between independent and dependent variable(s). It is sensitive to multicollinearity also. 
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
                <span className="codeKey">import</span> numpy <span className="codeKey">as</span> np
                {"\n"}<span className="codeKey">import</span> matplotlib.pyplot <span className="codeKey">as</span> plt
                {"\n"}<span className="codeKey">from</span> sklearn.datasets  <span className="codeKey">import</span> make_regression
                <br/>
                {"\n"}<span className="codeKey">def</span> predict (m,c,x) :
                {"\n"}    <span className="codeKey">return</span> m*c+x <span className="codeComment">  # Predicts output based on input using the line equation</span>
                <br/>
                {"\n"}<span className="codeKey">def</span> train (x_train, y_train, learning_rate, iterations):
                {"\n"}    m = np.random.uniform(-1, 1) <span className="codeComment"> # Initialize slope randomly</span>
                {"\n"}    c = np.random.uniform(-1, 1) <span className="codeComment"> # Initialize y-intercept randomly</span>
                <br/>
                {"\n"}    losses = [] <span className="codeComment"> # To store the loss at each iteration</span>
                <br/>
                {"\n"}<span className="codeKey">        for</span> i <span className="codeKey"> in</span> range (iterations) :
                {"\n"}<span className="codeComment">                # Forward propagation (predicting outputs)</span>
                {"\n"}        y_pred = predict(m, c, x_train)
                <br/>
                {"\n"}<span className="codeComment">                # Calculating loss</span>
                {"\n"}        loss = np.mean((y_train - y_pred) ** 2)
                {"\n"}        losses.append(loss)
                <br/>
                {"\n"}<span className="codeComment">                # Calculating derivatives for slope (m) and y-intercept (c)</span>
                {"\n"}        d_m = np.mean(-2 * x_train * (y_train - y_pred))
                {"\n"}        d_c = np.mean(-2 * (y_train - y_pred))
                <br/>
                {"\n"}<span className="codeComment">                # Updating slope and y-intercept to reduce loss</span>
                {"\n"}        m -= learning_rate * d_m
                {"\n"}        c -= learning_rate * d_c
                <br/>
                {"\n"}        print(f"Iteration: &#x7B;i+1&#x7D;, Loss: &#x7B;loss:.4f&#x7D;")
                <br/>
                {"\n"}<span className="codeKey">        return</span> m, c, losses
                <br/>
                {"\n"}<span className="codeComment"># Generating random linear data</span>
                {"\n"}x_train, y_train = make_regression(n_samples=100, n_features=1, noise=15, random_state=42)
                <br/>
                {"\n"}<span className="codeComment"># Training the model</span>
                {"\n"}best_m, best_c, losses = train(x_train.flatten(), y_train, learning_rate=0.01, iterations=50)               
                <br/>
                {"\n"}<span className="codeComment"># Plotting the training data and the learned line</span>
                {"\n"}plt.scatter(x_train, y_train, label='Training Data')
                {"\n"}plt.plot(x_train, predict(best_m, best_c, x_train), color='red', label='Learned Line')
                {"\n"}plt.xlabel('Input')
                {"\n"}plt.ylabel('Output')
                {"\n"}plt.legend()
                {"\n"}plt.title('Linear Regression')
                {"\n"}plt.show()
            </code>
          </pre>
        </div>
      </div>

        </div>
    </div>
  );
};

export default LinearRegression;

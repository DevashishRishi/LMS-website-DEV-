import React from "react";
import Figure1 from "../../assests/CourseImages/MachineLearning/SupportVectorMachine/Figure1.png"
import Figure2 from "../../assests/CourseImages/MachineLearning/SupportVectorMachine/Figure2.png"
import Figure3 from "../../assests/CourseImages/MachineLearning/SupportVectorMachine/Figure3.png"
import Figure4 from "../../assests/CourseImages/MachineLearning/SupportVectorMachine/Figure4.png"
import Figure5 from "../../assests/CourseImages/MachineLearning/SupportVectorMachine/Figure5.png"

const SupportVectorMachines = () => {
  return (
    <div>
      <br />
      <div>
        <h3 className="subHead">Support Vector Machine</h3>
        <p>
            It is also another type of supervised learning method/model with associated learning algorithms that analyze data used for classification and regression analysis. It is mainly a discriminative classifier which can also define by a separating hyperplane. We can also say that at given labeled training data, the algorithm outputs an optimal hyperplane which categorizes new examples.
        </p>
        <p>
            It is use for both linear or nonlinear classification, regression, and it can also use for outlier detection tasks. It can be used in variety of tasks like text classification, gene classification, spam detection, handwriting identification, etc. it is adaptable and efficient in variety of applications because it can handle high-dimensional data and nonlinear relationships.
        </p>
        <p>
            The primary objective of the support vector machines algorithm is to find the optimal hyperplane in an N-dimensional space that can separate the data points in different classes in feature space. The hyperplane tries to make sure that the margin between the closest points of the different classes should by as maximum as possible, also the dimension of the hyperplane is actually depending on the features. If the number of features is only 2 then the hyperplane is simple line. If it is 3 then the hyperplane will become a 2-D plane. If the number of features increase more then we get difficulty to imagine it and also represent it.
        </p>
      </div>

      <div>
        <h3 className="subHead">Types of Support Vector Machines</h3>
        <p>
            There can be two types of support vector machines :-
        </p>
        <p>
            <b>Linear SVM :–</b> It is used for data which can separate linearly, which means if a dataset can be classified into two classes by using a single straight line, this type of data is termed as linearly separable data, and it is called as linear SVM classifier.
        </p>
        <p>
            <b>Non-linear SVM :–</b> Non-linear SVM used for data which are non-linear type that is they cannot separate linearly, which means that the data cannot be separate using straight line, this type of data called non-linear data and the classifier used is called Non-linear SVM classifier.
        </p>
      </div>

      <div>
        <h3 className="subHead">How does Support Vector Machine work?</h3>
        <p>
            <b>Linear SVM :-</b> One of the reasonable choices for the best hyperplane is the one that has the largest separation or margin between the two classes.
        </p>
        <div className="figure-container">
                    <img src={Figure1} alt="Multiple HyperLanes  separate data from two class" />
        </div>
        <p>
            For the best hyperplane we chose the line which distance is maximum from nearest data point of each side. This type of hyperplane is known as “maximum-margin hyperplane or hard margin”. From the above diagram we can now easily choose a line which is L2. Lets’ consider another scenario which is shown in below image
        </p>
        <div className="figure-container">
                    <img src={Figure2} alt="Hyperlane for data with outlier" />
        </div>
        <p>
            In the above diagram we can see that there is one blue dot in red area then how can SVM work? To work with this type of data the SVM finds the maximum margin like we do in previous data set along with that it needs to add a penalty whenever a point crosses the margin. This type of cases is called “soft margins”.  Whenever there is soft margin in the dataset, the SVM tries to minimize it using the formula (1/margin+Λ(∑▒Penalty)). Mainly Hinge loss is used for penalty. It there is no violation then there is no loss if violations hinge loss proportional to the distance of violation.
        </p>
        <p>
            <b>Non-linear SVM :-</b> Till now we look only the linear SVM or linearly separable data, now we look at dataset which are not linearly separable. This type of data cannot be separated with a single straight line. Below is the image of such type dataset.
        </p>
        <div className="figure-container">
                    <img src={Figure3} alt="Dataset which are not linearly separable" />
        </div>
        <p>
            By looking at the above diagram we can conclude that we cannot clearly separate the data points using a single line. Also if we have more than two classes it is impossible to separate them using a single straight line. In above diagram we can see that a single line cannot separate them but a circular hyperplane can separate the two classes. Therefore, we can add another coordinate Z, which get help from X and Y in which Z = X2 + Y2. By add a third dimension the graph can change into: -
        </p>
        <div className="figure-container">
                    <img src={Figure4} alt="" />
        </div>
        <p>
            Because the above diagram tries us to show 3-d space it look like a parallel to the x-axis separate them. If we convert it in 2D space where Z = 1, then it can look like below image:
        </p>
        <div className="figure-container">
                    <img src={Figure5} alt="" />
        </div>
        <p>
            In the above diagram we can see that the dataset is separated with the help of Z coordinate where Z = 1, therefore, we get a circumference of radius 1 in the above case. 
        </p>

      </div>

      <div>
        <h3 className="subHead">Support Vector Machine Terminology</h3>
        <p>
            <b>Hyperplane :– </b>It is the decision boundary which is use to separate the data points of the different classes in the feature space. If the dataset can be classified linearly, then it will be a linear equation that is wx + b=0.
        </p>
        <p>
            <b>Support Vectors :– </b>These are the closest data point to the hyperplane, which make important role in deciding the hyperplane and margin.
        </p>
        <p>
           <b> Margin :–</b> It is the distance between the hyperplane and the support vector. The primary objective of the support vector machine learning model is to maximize the margin. The wider the margin the better the classification performance.
        </p>
        <p>
            <b>Kernel :–</b> It is the mathematical function, which mainly used in SVM to map the original input data points into the high-dimensional feature space, therefore, the hyperplane can be easily found out even if the data points are not linearly separable in their original input space. Some common kernel functions are linear, polynomial, radial basis function (RBF), and sigmoid.
        </p>
        <p>
            <b>Hard Margin :–</b>It is the hyperplane that properly separate the data points of different categories without any misclassifications. It is the maximum-margin or the hard margin hyperplane.
        </p>
        <p>
            <b>Soft Margin :–</b>If the data has outliers or it cannot be separately perfectly, then SVM use a soft-margin technique. In this each data point has a slack variable which is introduced by the soft-margin SVM formulation, which softens the strict margin requirement and it also permit certain misclassifications or violations (like we can ignore some points which are not in there class space or very away from other similar data points). It discovers a compromise between increasing the margin and reducing violations.
        </p>
        <p>
            <b>C :– </b>In Support Vector Machines the margin maximization and misclassification fines can be balanced by the regularization parameter. The penalty for going over the margin or misclassifying data items is decided by it. If the value of C is greater than a strict penalty is impose, which leads in a smaller margin and even fewer misclassifications.
        </p>
        <p>
            <b>Hinge Loss :– </b>I typical loss function in the support vector machine algorithm is hinge loss. Its work is to punish incorrect classification or margin violations. The objective function in the SVM is frequently formed by combining it with the regularization term.
        </p>
        <p>
            <b>Dual Problem :– </b>It is a optimization problem in this we requires to locate the lagrange multipliers which are related to the support vectors that can be used to solve SVM. The dual formulation enables the use kernel tricks and more effective computing.
        </p>
      </div>

      <div>
        <h3 className="subHead">Mathematical intuition of Support Vector Machine</h3>
        <p>
            Let’s we have a binary classification problem which are labeled as +1 and -1. We have the training dataset which have features X and the label Y. then we can write the equation for the linear hyperplane as:
        </p>
        <span className="formula">w<sup>T</sup> + b = 0</span>
        <p>
            In this the vector W represent the normal vector to the hyperplane. It is the direction perpendicular to the hyperplane. In the equation the parameter b represents the offset or the distance of the hyperplane from the origin along with the normal vector w.
        </p>
        <p>
            The distance between a data point let x<sub>i</sub> and the decision boundary can be calculated as:
        </p>
      </div>

      <div>
        <h3 className="subHead">Popular Kernel functions in SVM</h3>
        <p>
            The kernel in the support vector machines function takes low-dimensional input space and convert it into higher-dimensional space, means it converts non-separable problems to separable problems. It has very much use in non-linear separation problems. We just need to simply put the kernel, which does extremely complex data transformations and then find out the process to separate the data based on the labels or the outputs defined by it:
        </p>
        <span className="formula">Linear :- &#x1D43E;(&#x1D464;,&#x1D44F;) = &#x1D464;<sup>&#x1D447;</sup>&#x1D465; + &#x1D44F;</span>
        <span className="formula">Polynomial :- &#x1D43E;(&#x1D464;,&#x1D465;) = (&#x1D6F6;&#x1D464;<sup>&#x1D447;</sup> &#x1D465; + &#x1D44F;)<sup>&#x1D441;</sup></span>
        <span className="formula">Gaussian RBF :- &#x1D43E;(&#x1D464;,&#x1D465;) = exp ⁡(-&#x1D6F6;‖&#x1D465;<sub>&#x1D456;</sub> - &#x1D465;<sub>&#x1D457;</sub> ‖)<sup>&#x1D45B;</sup></span>
        <span className="formula">Sigmoid :- &#x1D43E;(&#x1D465;<sub>&#x1D456;</sub>,&#x1D465;<sub>&#x1D457;</sub> ) = tanh ⁡(&#x1D6FC;&#x1D465;<sub></sub><sub>&#x1D456;</sub><sup>&#x1D447;</sup> &#x1D465;<sub>&#x1D457;</sub> + &#x1D44F;)</span>
        
      </div>

      <div>
        <h3 className="subHead">Advantages of Support Vector Machine :-</h3>
        <ol className="unordered_list" style={{listStyleType:"disc"}}>
            <li><p>It is effective with high-dimensional data or cases.</p></li>
            <li>
                <p>Because it uses decision function known as support vectors it memory is efficient for training of subsets.</p>
            </li>
            <li>
                <p>We can use different kernel functions for the decision functions and it is also posibe to specify the custom kernels.</p>
            </li>
        </ol>
      </div>

      <div>
        <h3 className="subHead">Disadvantages of Support Vector Machine :-</h3>
        <ol className="unordered_list" style={{listStyleType:"disc"}}>
            <li>
                <p>The Support Vector Machine algorithm is not very much suitable for large data sets.</p>
            </li>
            <li>
                <p>It does not perform very well when it has to face noisy data that is when target classes are overlapping.</p>
            </li>
            <li>
                <p>If the number of features for each data point exceeds the number of the training data samples then the SVM will underperform.</p>
            </li>
        </ol>
      </div>

      <div>
        <h3 className="subHead">Summary</h3>
        <p>
            Support Vector Machines (SVM) are algorithms used for classification, regression, and outlier detection. They find the best hyperplane to separate different classes by maximizing the margin between them. SVMs work in high-dimensional spaces using various kernel functions to handle complex data. They're effective but can be computationally expensive and require careful selection of parameters for optimal performance.
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
                <span className="codeKey">from</span> sklearn.datasets <span className="codeKey">import</span> load_breast_cancer
                {"\n"}<span className="codeKey">import</span> matplotlib.pyplot <span className="codeKey">as</span> plt
                {"\n"}<span className="codeKey">from</span> sklearn.svm <span className="codeKey">import</span> SVC
                {"\n"}<span className="codeKey">import</span> numpy <span className="codeKey">as</span> np
                <br/>
                {"\n"}<span className="codeComment"># Load the breast cancer dataset</span>
                {"\n"}cancer = load_breast_cancer()
                <br/>
                {"\n"}<span className="codeComment"># Extract only the first two features for visualization</span>
                {"\n"}X = cancer.data[:, :2]
                {"\n"}y = cancer.target
                <br/>
                {"\n"}<span className="codeComment"># Build and train the Support Vector Machine (SVM) model</span>
                {"\n"}svm = SVC(kernel="rbf", gamma=0.5, C=1.0)
                {"\n"}svm.fit(X, y)
                <br/>
                {"\n"}<span className="codeComment"># Plot decision boundary and scatter plot</span>
                {"\n"}plt.figure(figsize=(8, 6))
                <br/>
                {"\n"}<span className="codeComment"># Plot decision boundary by creating a mesh of points</span>
                {"\n"}h = .02 <span className="codeComment">    # Step size in the mesh</span>
                {"\n"}x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
                {"\n"}y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
                {"\n"}xx, yy = np.meshgrid(
                {"\n"}    np.arange(x_min, x_max, h),
                {"\n"}    np.arange(y_min, y_max, h)
                {"\n"} )
                {"\n"}Z = svm.predict(np.c_[xx.ravel(), yy.ravel()])
                {"\n"}Z = Z.reshape(xx.shape)
                {"\n"}plt.contourf(xx, yy, Z, alpha=0.8, cmap=plt.cm.Spectral)
                <br/>
                {"\n"}<span className="codeComment"># Scatter plot for data points</span>
                {"\n"}plt.scatter(X[:, 0], X[:, 1], c=y, s=20, edgecolors="k", cmap=plt.cm.Spectral)
                {"\n"}plt.xlabel(cancer.feature_names[0])<span className="codeComment">     # Set x-axis label</span>
                {"\n"}plt.ylabel(cancer.feature_names[1])<span className="codeComment">     # Set y-axis label</span>
                {"\n"}plt.show()
            </code>
          </pre>
        </div>
      </div>
      </div>


    </div>
  );
};

export default SupportVectorMachines;

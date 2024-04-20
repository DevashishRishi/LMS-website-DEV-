import React from "react";
import Figure1 from "../../assests/CourseImages/MachineLearning/KNearestNeighbor/Figure1.png";

const KNearestNeighbors = () => {
  return (
    <div>
      <br />
      <div>
      <h3 className="subHead">K-Nearest Neighbors</h3>
      <p>
        As we know C is a mid-level language it needs a compiler to convert the
        code into executable code so it can be easy to run on machines.
        <br />
        In a simple language, we can easily understand it as In compilation, it
        converts the (.i) file into an assembled file (.s) containing
        assembly-level instructions. An assembler is used to convert the (.s)
        assemble level code to machine-readable code like binary/hexadecimal
        code known as object code. In Linking it integrates library files into
        the program. The linking process creates an executable file with an
        extension as (.exe) in DOS and (.OUT) in Unix Os.
      </p>
      <p>
          K-NN retains popularity due to its robustness and intuitive nature. Its non-parametric characteristic means it doesn't rely on assumptions about data distribution. Although applicable to both regression and classification, it predominantly finds use in classification problems. Termed a "lazy learner" algorithm, K-NN delays learning from the training set, instead storing data for on-the-spot classification when needed.
      </p>
      <p>
          By emphasizing similarity measures, K-NN proves valuable in scenarios where a new data point's classification or regression depends heavily on its resemblance to existing data.
      </p>

      </div>

      <div>
        <h3 className="subHead">Intuition behind KNN algorithm</h3>
        <div className="figure-container">
          <img src={Figure1} alt="Working of KNN Algorithm" />
        </div>
        <p>
          In the above graph we can see two clusters or groups. Now if we have another point (also printed on the graph) which is unclassified then we can easily assign it to a group. We can do this by observing what group its nearest neighbors belong to. This means that the point in the above diagram will be ‘red’ because it is close to the red cluster.</p>
      </div>

      <div>
        <h3 className="subHead">Why do we need KNN algorithm ?</h3>
        <p>
            The widespread utilization of the K-Nearest Neighbors (K-NN) algorithm stems from its versatility and wide applicability. Its simplicity and straightforward implementation are key factors driving its use. One of its standout features is its lack of reliance on assumptions about the underlying data distribution, making it suitable for various datasets, whether dealing with numerical or categorical data in classification and regression tasks.
        </p>
        <p>
            A significant advantage lies in its non-parametric nature, leading to predictions grounded in the similarity among data points within the dataset. Furthermore, K-NN exhibits a higher tolerance for outliers compared to alternative algorithms.
        </p>
        <p>
            To determine the K nearest neighbors, the K-NN algorithm uses distance metrics, most often the Euclidean distance. The majority vote among these K neighbors is averaged or taken into consideration for determining the class or value of a data point. Because of this adaptive strategy, the algorithm can identify various patterns in the data and forecast outcomes based on the local structure of the data.
        </p>
      </div>

      <div>
        <h3 className="subHead">How KNN works?</h3>
        <p>
            K-Nearest Neighbors (K-NN) stands as a versatile and widely embraced algorithm due to its adaptability across various applications. Its allure resides in its simplicity and ease of implementation. Notably, it distinguishes itself by eschewing assumptions about the inherent data distribution, rendering it suitable for datasets of diverse natures encompassing numerical and categorical data in both classification and regression domains.
        </p>
        <p>
            Its non-parametric nature forms a cornerstone for predictions, relying on the inherent similarities among data points housed within the dataset. Another distinctive trait is its robustness against outliers, surpassing the resilience of alternative algorithms in this aspect.
        </p>
        <p>
            By utilizing distance metrics, particularly the prevalent Euclidean distance, the K-NN algorithm identifies the K closest neighbors. Subsequently, the determination of a data point's classification or value involves a process of averaging or considering the majority vote among these K neighbors. This adaptive methodology empowers the algorithm to discern varied data patterns and make predictions rooted in the localized structure of the dataset.
        </p>
        <div>
          <p className="formula"><em>distance</em></p>(&#x1D465;,&#x1D44B;<sub>i</sub> )= √(∑_(j=1)^d▒├ (x_j-X_ij )^2 ] )
          </div>
      </div>

      <div>
        <h3 className="subHead">Steps involve in K-NN algorithm working</h3>
        <p>
            We can explain the working of KNN in following steps:- 
            <br/>
            Step 1 :- we need to select the number of K of the neighbors.
            <br/>
            Step 2 :– calculate the Euclidean distance (or any other distance) of K number of neighbors.
            <br/>
            Step 3 :– Take the K nearest neighbors as per the calculated Euclidean distance.
            <br/>
            Step 4 :– Among these k neighbors, count the number of the data points in each category.
            <br/>
            Step 5 :– Assign the new data points to that category for which the number of the neighbor is maximum..
            <br/>
            Step 6 :– our model is ready to use.
        </p>
      </div>

      <div>
        <h3 className="subHead">Choosing the K value for KNN algorithm</h3>
        <p>
            The parameter 'k' in the K-Nearest Neighbors (K-NN) algorithm holds significant importance as it dictates the number of neighbors considered in the algorithm. Selecting the appropriate value of 'k' is crucial and should be based on the characteristics of the input data. In scenarios where the dataset contains noisy or exhibits a high rate of outliers, opting for a higher 'k' value tends to yield better results.
        </p>
        <p>
            For improved classification accuracy, it's advantageous to choose an odd 'k' value, as this helps in preventing ties during the classification process. This choice can enhance the decisiveness of the algorithm when assigning a class to the query point.
        </p>
        <p>
              Employing cross-validation techniques serves as a valuable method for determining the most suitable 'k' value for a given dataset. By systematically assessing different 'k' values and their impact on the model's performance, cross-validation aids in identifying the optimal 'k' that maximizes the algorithm's accuracy and generalizability.
        </p>
      </div>

      <div>
        <h3 className="subHead">Applications of KNN Algorithm</h3>
        <p>
            <b>Data Preprocessing :–</b> When diving into a machine learning problem, the initial step often involves Exploratory Data Analysis (EDA). In this phase, identifying missing values in the data prompts the need for imputation methods. Among these methods, the KNN Imputer stands out as a sophisticated and effective approach for handling missing data.
        </p>
        <p>
            <b>Pattern Recognition :–</b> The effectiveness of the K-Nearest Neighbors (KNN) algorithm shines through in scenarios such as training it using the MNIST dataset. Upon evaluation, this model demonstrates notably high accuracy, showcasing the algorithm's prowess in pattern recognition tasks.
        </p>
        <p>
            <b>Recommendation Engines :–</b> KNN finds prominent application in recommendation engines. This algorithm's primary task involves assigning a new query point to an existing group, which has been formed using extensive datasets. In the realm of recommender systems, this capability proves crucial, enabling the allocation of users to specific groups based on their preferences. Subsequently, it facilitates personalized recommendations tailored to these groups' inclinations.
        </p>
      </div>

      <div>
        <h3 className="subHead">Advantages of the KNN Algorithm</h3>
        <p>
            <b>Easy to implement :–</b> It is easy to implement because its complexity is not very much high like other algorithms.
        </p>
        <p>
            <b>Adapts Easily :–</b> Due to the KNN algorithm's ability to retain all data in memory, whenever a new example or data point is added, it can automatically adapt to the new information and contribute to future predictions.
        </p>
        <p>
            <b>Few Hyperparameters :-</b> The KNN method only requires two parameters: the value of k and the distance metric we want to select from our evaluation measure. Because there are so few hyperparameters, we only need to make minor adjustments to the algorithm.
        </p>
      </div>

      <div>
        <h3 className="subHead">Disadvantages of the KNN Algorithm</h3>
        <p>
          <b>Does not scale :–</b> Due to the KNN's other name, the lazy algorithm. It got its moniker because this method uses a lot of processing power and data storage, which makes it resource- and time-intensive.
        </p>
        <p>
          <b>Curse of Dimensionality :–</b> Peaking phenomena, which is caused by the curse of dimensionality, is a term used in KNN. The method has difficulty correctly identifying the data points when the dimensionality is too high, which is known as the "curse of dimensionality".
        </p>
        <p>
          <b>Prone to overfitting :–</b> Because the algorithm has the problem of dimensionality curse therefore the algorithm is prone to overfitting as well. Therefore, the feature selection and dimensionality reduction techniques are applied to overcome this problem.
        </p>
      </div>

      <div>
        <h3 className="subHead">Summary</h3>
        <p>
            An easy-to-use yet powerful technique for classification and regression issues is K-nearest neighbors, or CNN. Its task is to classify or assign a value to each new data point in the training set by averaging its k nearest neighbors or by using the majority vote. KNN can be slow when working with large datasets and is sensitive to features that are irrelevant or noisy, but it is simple to understand and performs well with small to medium-sized datasets. Despite being an extremely helpful and user-friendly algorithm, it can also encounter issues like as overfitting and the curse of dimensionality.
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
                <span className="codeKey">from</span> sklearn.datasets <span className="codeKey">import</span> load_iris
                {"\n"}<span className="codeKey">from</span> sklearn.model_selection <span className="codeKey">import</span> train_test_split
                {"\n"}<span className="codeKey">from</span> sklearn.neighbors <span className="codeKey">import</span> SVC
                {"\n"}<span className="codeKey">from</span>sklearn.metrices  <span className="codeKey">import</span>accuracy_score
                {"\n"}<span className="codeKey">import</span> matplotlib.pyplot  <span className="codeKey">as</span> plt;
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

export default KNearestNeighbors;

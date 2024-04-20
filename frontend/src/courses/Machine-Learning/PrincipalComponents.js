import React from "react";
import Figure1 from "../../assests/CourseImages/MachineLearning/PrincipalComponents/Figure1.png"

const PrincipalComponents = () =>{
    return (
        <div>
            <br/>
            <div>
                <h3 className="subHead">Principal Component Analysis</h3>
                <p>
                The increase in both time and computational cost accompanies the rise in the number of features or dimensions within a dataset. Overfitting and reduced model accuracy often occur when handling high-dimensional data, referred to as the "curse of dimensionality." 
                </p>
                <p>
                    This issue arises due to the exponential growth in possible combinations as the dimensions increase, leading to more computationally intensive operations. To mitigate the curse of dimensionality, feature engineering methods like feature selection and extraction are employed.
                </p>
                <p>
                    Dimensionality reduction, a facet of feature extraction, aims to decrease the number of input features while retaining maximal original information. Principal Component Analysis (PCA) is a prominent technique in this realm.
                </p>
                <p>
                    Through orthogonal transformation, PCA, an unsupervised learning algorithm first presented by Karl Pearson in 1901, statistically converts correlated data into a set of linearly uncorrelated features. PCA finds strong patterns in a dataset by lowering variances and looking for lower-dimensional surfaces to project high-dimensional data onto.
                </p>
                <p>
                     This method serves purposes in exploratory data analysis and predictive modeling in machine learning, often termed a form of general factor analysis akin to regression's line of best fit. PCA's primary goal is dimensionality reduction while preserving crucial patterns or relationships among variables without prior knowledge of target variables.
                </p>
                <p>
                     PCA calculates variance for each attribute to identify higher attributes that indicate good class splits, facilitating dimensionality reduction. Real-world applications of PCA encompass image processing, movie recommendation systems, and optimizing power allocation across various communication channels. 
                </p>
                <p>The PCA algorithm is based on some mathematical concepts like :-</p>
                <ol style={{listStyleType:'disc'}}>
                    <li>
                        <p>
                            Variance and covariance
                        </p>
                    </li>
                    <li>
                        <p>
                            Eigenvalues ad Eigne factors
                        </p>
                    </li>
                </ol>
                <p>
                PCA operates by reducing the dimensionality of a dataset through the discovery of a smaller set of variables that preserves the bulk of information present in the samples. These transformed variables prove beneficial for both regression and classification tasks.
                </p>
                <div className="figure-container">
                    <img src={Figure1} alt="PCA" />
                </div>
                <p>
                Absolutely, in PCA, the principal components represent orthogonal axes that capture the maximum variance within the dataset. The first component encapsulates the most variance, followed by subsequent components capturing additional orthogonal variance. PCA finds applications in various domains including data visualization, feature selection, and data compression, operating under the assumption that crucial information is embedded within the variance of the features. 
                </p>
            </div>

            <div>
                <h3 className="subHead">Some Common terms used in PCA Algorithm :-</h3>
                <p>
                    Dimensionality refers to the number of features or variables in a dataset, representing the number of columns.
                </p>
                <p>
                    Correlation denotes the relationship between two values. It measures how one value changes when the other changes. A correlation value lies between -1 and +1, where -1 implies an inverse relationship, +1 denotes a direct relationship, and 0 indicates no correlation.
                </p>
                <p>
                    Orthogonal signifies that variables are unrelated or uncorrelated, resulting in a correlation of zero between the variable pairs.
                </p>
                <p>
                    Eigenvectors are non-zero vectors v that, when multiplied by a square matrix M, result in Av being a scalar multiple of v.
                </p>
                <p>
                    The Covariance Matrix encompasses covariances between pairs of variables.
                </p>
            </div>

            <div>
                <h3 className="subHead">Main Components in PCA</h3>
                <p>
                    The resulting new features after applying PCA are termed Principal Components (PCs). These components can either match the number of original features or be fewer. Key properties of principal components include :-
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Principal components are formed as linear combinations of the original features.
                        </p>
                    </li>
                    <li>
                        <p>
                            These components are orthogonal, indicating a correlation of zero between variable pairs.
                        </p>
                    </li>
                    <li>
                        <p>
                            The significance of each component diminishes progressively from 1 to n. PC 1 holds the highest importance, whereas the nth PC is the least significant.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Steps of PCA Algorithm</h3>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>
                            Acquire the Dataset: Start by obtaining the dataset and segment it into two subsets—X for the training set and Y for the validation set.
                        </p>
                    </li>
                    <li>
                        <p>
                            Structuring the Data: Organize the dataset into a structure. Represent the independent variables (X) as a two-dimensional matrix where rows correspond to individual data items and columns represent features. The number of columns denotes the dataset's dimensions.
                        </p>
                    </li>
                    <li>
                        <p>
                            Standardizing the Data: Standardization is applied to ensure uniformity within the dataset. Columns with higher variance are considered more important. If the feature importance isn't influenced by variance, normalize each column by dividing every data item by the column's standard deviation. This results in the Z matrix.
                        </p>
                    </li>
                    <li>
                        <p>
                            Computing Z's Covariance: Calculate the covariance matrix of Z. This involves transposing the Z matrix and then multiplying it by Z, yielding the Covariance matrix of Z.
                        </p>
                    </li>
                    <li>
                        <p>
                            Determining Eigenvalues and Eigenvectors: Compute the eigenvalues and eigenvectors for the Covariance matrix Z. Eigenvectors represent high-information axis directions, and the coefficients of these vectors are the eigenvalues.
                        </p>
                    </li>
                    <li>
                        <p>
                            Sorting Eigen Vectors: Arrange all eigenvalues in descending order and correspondingly sort the eigenvectors in the matrix P of eigenvalues. The resulting matrix is termed P*.
                        </p>
                    </li>
                    <li>
                        <p>
                            Computing New Features or Principal Components: Calculate the new features by multiplying the P* matrix with Z, resulting in Z*. Each observation is a linear combination of original features, and the columns of Z* are independent of each other.
                        </p>
                    </li>
                    <li>
                        <p>
                            Feature Selection: Once the new feature set is generated, decide which features to retain or eliminate. This involves keeping only the relevant features and discarding the unimportant ones.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Applications of Principal Component Analysis</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            The PCA is used for dimensions reduction in many AI applications like computer vision, image compression etc.
                        </p>
                    </li>
                    <li>
                        <p>
                            We can also use them for finding new or hidden patterns in high dimensions. Some fields of PCA are used are Finance, data mining, Psychology etc.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Step-by-step mathematical explanation of PCA (Principal Component Analysis)</h3>

                <p>Step 1 :– Standardization</p>
                <p>
                    At first, we need to standardize our dataset which ensures that every variable in the dataset has a mean of 0 and a standard deviation of 1.
                </p>
                    <span className="formula">&#119885; =  (&#119883; - μ)/σ</span>
                    <p>In above equation :-</p>
                    <p>μ is the mean of independent features μ= &#123;μ<sub>1</sub>, μ<sub>2</sub>, …, μ<sub>m</sub> &#125; </p>
                    <p>
                    σ is the standard deviation of independent features σ = &#123;σ<sub>1</sub>,σ<sub>2</sub>,…,σ<sub>m</sub> &#125;
                    </p>
                    <p>
                        Step 2 :– Covariance Matrix Computation
                    </p>
                    <p>Covariance measures the strength of joint variability between two or more variables, which indicating how much they change in relation to each other. for finding the covariance we can use the formula :-</p>
                    {/* cov(x1,x2)=  (∑_(i=1)^n▒(〖x1〗_i-x1)(〖x2〗_i-x2) )/(n-1) */}
                    <p>The value of the covariance can positive, negative or zeros.</p>
                    <ol style={{listStyleType:'disc'}}>
                        <li>
                            <p>
                            Positive :- As the x1 increases x2 also increases.
                            </p>
                        </li>
                        <li>
                            <p>
                                Negative :- As the x1 increases x2 decreases.
                            </p>
                        </li>
                        <li>
                            <p>
                                Zeros: No direct relation.
                            </p>
                        </li>
                    </ol>
                    <p>Step 3 :- Compute Eigenvalues and Eigenvectors of Covariance Matrix to identify Principal components</p>
                    <p>
                    Let &#119860; be a square n&#119883;n matrix and &#119883; be a non-zero vector for which
                    </p>
                    <span className="formula">&#119860;&#119883; = λ&#119883;</span>
                    <p>
                        For some scalar values λ. also λ is known as the eigenvalue of matrix &#119860; and &#119883; is known as the eigenvector of the matrix &#119860; for the corresponding eigenvalue.
                    </p>
                    <p>We can also write the equation as :-</p>
                    <span className="formula">&#119860;&#119883;-λ&#119883; = 0</span>
                    <span className="formula">(&#119860;- λ&#119868;)&#119883;=0</span>
                    <p>
                    In the above equation &#119868; is the identity matrix of the same shape as the matrix &#119860;. the above conditions will be true only if (&#119860; - λ&#119868;) will be non-invertible it means,
                    </p>
                    <span className="formula">|&#119860;- λ&#119868;|=0</span>
                    <p>
                        By using above equation, we can find the eigenvalues \lambda, and therefore corresponding eigenvector can be found using the below equation.
                    </p>
                    <span className="formula">&#119860;&#119883; = λ&#119883;</span>
            </div>

            <div>
                <h3 className="subHead">Advantages of Principal Component Analysis</h3>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>
                            <b>Dimensionality Reduction :-</b> PCA is renowned for reducing the number of variables in a dataset, simplifying data analysis, enhancing performance, and facilitating data visualization.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Feature Selection :-</b> PCA can be employed for selecting essential variables from a dataset, especially beneficial in scenarios with numerous variables that are challenging to prioritize.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Data Visualization :-</b> Utilizing PCA, high-dimensional data can be represented in two or three dimensions, aiding easier interpretation and visualization.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Multicollinearity Management :-</b> Addressing multicollinearity issues in regression analysis is another forte of PCA, which identifies correlated variables and generates uncorrelated ones for regression modeling.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Noise Reduction :-</b> PCA contributes to noise reduction by eliminating principal components with low variance, effectively improving the signal-to-noise ratio and unveiling underlying data structures.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Data Compression :-</b> PCA offers data compression by using a reduced number of principal components, which capture the majority of data variation, thereby reducing storage requirements and accelerating processing.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Outlier Detection :-</b> PCA can detect outliers by identifying data points that deviate significantly from others within the principal component space.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Disadvantages of Principal Component Analysis</h3>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>
                            <b>Interpretation of Principal Components :-</b> Understanding the principal components generated by PCA, being linear combinations of original variables, can pose challenges in explaining outcomes to others.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Data Scaling :-</b> PCA's performance can be affected by data scaling. Inappropriate data scaling might undermine the effectiveness of PCA, warranting careful data scaling before its application.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Information Loss :-</b> Reduction of variables through PCA can lead to information loss, directly related to the number of retained principal components. Hence, the selection of principal components needs to be done judiciously to avoid excessive information loss.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Non-linear Relationships :-</b> PCA assumes linear relationships between variables. However, in scenarios where non-linear relationships exist, PCA's efficacy might diminish.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Computational Complexity :-</b> Computationally, PCA can be resource-intensive for extensive datasets, particularly when the dataset contains numerous variables.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Overfitting Concerns :-</b> Overfitting can occur when an excessive number of principal components are utilized or when the model is trained on a limited dataset. This can affect the generalizability of the model.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                A dimensionality reduction method called principal component analysis (PCA) is used to move high-dimensional data into a lower-dimensional space while keeping the majority of its crucial information. By locating new orthogonal axes, known as principle components, that represent the largest variation in the dataset, it finds the most significant patterns in the data. PCA facilitates noise reduction, streamlines data representation, and expedites machine learning methods. But it makes the assumption that variables have linear relationships, therefore it might not work as well as it could in some nonlinear datasets.
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
                            {"\n"}<span className="codeKey">from</span> sklearn.decomposition <span className="codeKey">import</span> PCA
                            {"\n"}<span className="codeKey">import</span> matplotlib.pyplot  <span className="codeKey">as</span> plt
                            <br/>

                            {"\n"}<span className="codeComment"># Load Iris dataset</span>
                            {"\n"}iris = load_iris()
                            {"\n"}X = iris.data  
                            {"\n"}y = iris.target
                            <br/>

                            {"\n"}<span className="codeComment"># Apply PCA for dimensionality reduction to 2 components</span>
                            {"\n"}pca = PCA(n_components=2)
                            {"\n"}X_pca = pca.fit_transform(X)
                            <br/>

                            {"\n"}<span className="codeComment"># Fit Visualize PCA results</span>
                            {"\n"}plt.figure(figsize=(8, 6))
                            {"\n"}<span className="codeKey">for </span>i <span className="codeKey">in</span> range(len(iris.target_names)):
                            {"\n"}      plt.scatter(X_pca[y == i, 0], X_pca[y == i, 1], label=iris.target_names[i])
                            <br/>

                            {"\n"}plt.title('PCA Visualization of Iris Dataset')
                            {"\n"}plt.xlabel('Principal Component 1')
                            {"\n"}plt.ylabel('Principal Component 2')
                            {"\n"}plt.legend()
                            {"\n"}plt.show()
                        
                        </code>
                    </pre>
                    </div>
                </div>


            </div>

        </div>
    );
};
export default PrincipalComponents; 
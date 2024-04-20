import React from "react";
import Figure1 from "../../assests/CourseImages/MachineLearning/KMeansClustering/Figure1.png"
import Figure2 from "../../assests/CourseImages/MachineLearning/KMeansClustering/Figure2.png"
import Figure3 from "../../assests/CourseImages/MachineLearning/KMeansClustering/Figure3.png"
import Figure4 from "../../assests/CourseImages/MachineLearning/KMeansClustering/Figure4.png"
import Figure5 from "../../assests/CourseImages/MachineLearning/KMeansClustering/Figure5.png"
import Figure6 from "../../assests/CourseImages/MachineLearning/KMeansClustering/Figure6.png"
import Figure7 from "../../assests/CourseImages/MachineLearning/KMeansClustering/Figure7.png"
import Figure8 from "../../assests/CourseImages/MachineLearning/KMeansClustering/Figure8.png"
import Figure9 from "../../assests/CourseImages/MachineLearning/KMeansClustering/Figure9.png"
import Figure10 from "../../assests/CourseImages/MachineLearning/KMeansClustering/Figure10.png"
import Figure11 from "../../assests/CourseImages/MachineLearning/KMeansClustering/Figure11.png"
import Figure12 from "../../assests/CourseImages/MachineLearning/KMeansClustering/Figure12.png"


const KMeansClustering = () =>{
    return(
        <div>
            <br/>

            <div>
                <h3 className="subHead">K-Means Clustering</h3>
                <p>
                    Unsupervised machine learning involves the computer learning from unlabeled data, autonomously identifying patterns within the data. In this approach, the machine doesn't rely on pre-existing labeled data for training. Its task is to organize unstructured data, detecting patterns, relationships, and variations independently. Various algorithms are employed for this purpose, with one such algorithm being K-Means.
                </p>

                <p>
                    K-Means clustering stands as an unsupervised machine learning technique that partitions unlabeled datasets into distinct clusters. The 'K' in its name signifies the number of predefined clusters desired. For instance, specifying K=2 creates two clusters, while K=3 forms three clusters, and so forth. This algorithm operates iteratively, dividing the unlabeled dataset into K clusters, ensuring that each dataset exclusively belongs to one cluster sharing similar properties.
                </p>

                <p>
                    As a centroid-based algorithm, K-Means assigns each cluster a centroid, aiming to minimize the total distance between data points and their respective clusters. The process involves taking the unlabeled dataset as input and segmenting it into K clusters based on similarities. This iterative process continues until optimal clusters are attained, with the predefined value of K determining the number of clusters generated.
                </p>

                <p>
                    The k-means clustering algorithm mainly do two tasks :-
                </p>

                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Determines the best value for K center points or centroids by an iterative process.
                        </p>
                    </li>
                    <li>
                        <p>
                            Assigns each data point to its closest k-center. Data points which are close to a particular k-center, create a cluster.
                        </p>
                    </li>
                </ol>

                <p>
                    Therefore, the similar datapoints belongs to same cluster and away from different datapoints or clusters.
                </p>
                <div className="figure-container">
                    <img src={Figure1} alt="Working of K-Means to create clusters" />
                </div>

                <p>
                To calculate the similarity the algorithm will use the Euclidean distance as a measurement. The algorithm works as follows :-
                </p>

                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            First, we need to randomly initialize the k points, which is called means or cluster centroids. 
                        </p>
                    </li>
                    <li>
                        <p>
                            After that we categorize every item to its nearest mean and then update the means’ coordinates, these are the averages of the items categorized in the cluster so far.  
                        </p>
                    </li>
                    <li>
                        <p>
                            We need to repeat the process for given number of iterations and at the end we have our clusters. 
                        </p>
                    </li>
                </ol>
                
                <p>
                    In the context mentioned, the "points" referred to as means signify the mean value of the items categorized within the clusters. To initialize these means, there are several options available. One straightforward approach involves initializing the means at random items within the dataset. Alternatively, another method entails initializing the means at random values falling within the boundaries of the dataset. 
                </p>

                <p>Here is the pseudocode of the K-means algorithm :-</p>
                <p>Initialize k means with random values</p>
                <ol style={{listStyleType:'disc'}}>
                    <li>
                        <p>
                        For a given number of iterations :-
                        <ol style={{listStyleType:'circle'}}>
                            <li>
                                <p>
                                Iterate through items :-
                                </p>
                                <ol style={{listStyleType:'square'}}>
                                    <li>
                                        <p>
                                        Find the mean closest to the item by calculating the Euclidean distance of the item with each of the means
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                        Assign item to mean
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                        Update mean by shifting it to the average of the items in that cluster
                                        </p>
                                    </li>
                                 </ol>
                            </li>
                        </ol>
                        </p>
                    </li>
                </ol>

            </div>

            <div>
                <h3 className="subHead">
                How K-Means algorithm work?
                </h3>
                <p>Let’s look at the steps of k-means algorithm</p>
                <ol>
                    <li>
                        <p>
                            Step 1 :– Select the number of K to decide the number of clusters.
                        </p>
                    </li>
                    <li>
                        <p>
                            Step 2 – Select random K points or centroids. (can be other from input dataset)
                        </p>
                    </li>
                    <li>
                        <p>
                            Step 3 :– Assign each data point to their closest centroid, which will form the predefined K clusters.
                        </p>
                    </li>
                    <li>
                        <p>
                        Step 4 :– Calculate the variance and place a new centroid of each cluster. 
                        </p>
                    </li>
                    <li>
                        <p>
                        Step 5 :– Repeat the third steps, which means assign each datapoint to the new closest centroid of each cluster.
                        </p>
                    </li>
                    <li>
                        <p>
                        Step 6 :– If any reassignment occurs, then go back to step 4 else go to FINISH.
                        </p>
                    </li>
                    <li>
                        <p>
                        Step 7 :– The model is ready.
                        </p>
                    </li>
                </ol>

                <p>
                    Let’s understand the algorithm using images (images are taken from javatpoint site) :-
                </p>

                <p>
                    Let we have two variable n1 and n2. The x-y axis of scatter plot of these two variables is shown in below image :-
                </p>

                <div className="figure-container">
                    <img src={Figure2} alt="Working of K-Means to create clusters" />
                </div>

                <p>
                    Now, to create a specified number 'k' of clusters (e.g., if k=2, then two clusters are to be formed), we proceed by selecting 'k' random points or centroids that will establish these clusters. These points can either be existing data points from the dataset or any arbitrary points. In the illustration below, two points have been randomly chosen as the 'k' points; it's important to note that these points, as shown in the image, are not part of the dataset's data points.
                </p>
                <div className="figure-container">
                    <img src={Figure3} alt="Working of K-Means to create clusters" />
                </div>
                <p>
                    It is now necessary to designate each point on the scatter plot to its nearest centroid or K-point. The process involves using mathematical formulas to determine the separation between two spots, thus we must draw a median between their centroids. displayed in the picture below
                </p>
                <div className="figure-container">
                    <img src={Figure4} alt="Working of K-Means to create clusters" />
                </div>
                <p>
                    The points on the left side of the line are closer to the K1 or blue centroid, and the points on the right side of the line are closer to the yellow centroid, as can be seen in the above image.
                </p>
                <div className="figure-container">
                    <img src={Figure5} alt="Working of K-Means to create clusters" />
                </div>
                <p>
                We must choose "a new centroid" and repeat the process in order to locate the closest cluster. The centroids' center of gravity was used to choose the new centroids, which are displayed in the image below:
                </p>
                <div className="figure-container">
                    <img src={Figure6} alt="Working of K-Means to create clusters" />
                </div>

                <p>
                Now we repeat the process of assigning each datapoint to the new centroid, to do this we will repeat the same process of finding a median line. Now the image look like are shown below:
                </p>

                <div className="figure-container">
                    <img src={Figure7} alt="Working of K-Means to create clusters" />
                </div>

                <p>
                In above image we can see that one yellow point is above the median line and present at blue centroid side and also two blue points are the yellow side of the line. Now, these three points will be assigned to new centroids.
                </p>

                <div className="figure-container">
                    <img src={Figure8} alt="Working of K-Means to create clusters" />
                </div>

                <p>
                    After that as we can see in the above image the reassignment has taken place, so we have to go back to the step – of the algorithm, which is finding new centroids or K-points.
                </p>
                <p>
                We need to repeat the process by finding the center of gravity of centroids, therefore the new centroids will be as shown in the below image:
                </p>

                <div className="figure-container">
                    <img src={Figure9} alt="Working of K-Means to create clusters" />
                </div>

                <p>
                After declaring the new centroids, we will draw the median line and reassign the data points. Then the image will look like :-
                </p>
                <div className="figure-container">
                    <img src={Figure10} alt="Working of K-Means to create clusters" />
                </div>
                <p>
                     In the above diagram we can see that every data point belongs to its cluster that no dissimilar data points on either side of the line, it leads to our model formation.
                </p>

                <div className="figure-container">
                    <img src={Figure11} alt="Working of K-Means to create clusters" />
                </div>


            </div>
            <br/>

            <div>
                <h3 className="subHead">How to choose the value of “K” in K-means clustering?</h3>
                <p>
                    Determining the optimal number of clusters significantly impacts the performance of the k-means clustering algorithm. One prevalent method to ascertain this value is the "Elbow Method," which relies on the concept of WCSS, signifying "Within Cluster Sum of Squares." This metric defines the total variations present within a cluster. Calculating the WCSS value involves employing the following formula :-
                    {/* WCSS= ∑_(P_(i in Cluster1))▒〖distance(P_i C_1 )^2 〗+∑_(P_(i in Cluster2))▒〖ditance(P_i C_2 )^2 〗+∑_(P_(i in Cluster3))▒〖distance(P_i C_3 )^2 〗 */}
                </p>

                <p>In the above formula of WCSS</p>
                <p>∑<sub>&#x1D443;<sub>&#x1D456;</sub>in Cluster1 </sub> distance(&#x1D443;<sub>&#x1D456;</sub> C<sub>1</sub> )<sup>2</sup> :- It is the sum of the square of the distance between each data point and its centroid with the cluster1 and for same goes for the other two terms.</p>

                <p>
                To measure the distance between the centroid and data points we can use methods like Euclidean distance or Manhattan distance.
                </p>

                <p>
                    To find the optimal value of the clusters, the elbow method must follow the below steps :-
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            It executes the K-means clustering on a given dataset for different K values (ranges from 1 – 10).
                        </p>
                    </li>
                    <li>
                        <p>
                            For each value of K, calculates the WCSS value.
                        </p>
                    </li>
                    <li>
                        <p>
                            Plots a curve calculated WCSS values and the number of clusters K.
                        </p>
                    </li>
                    <li>
                        <p>
                            The sharp point of the bend or the point of the plot looks like an hum of human, the that point is considered as the best value of K.
                        </p>
                    </li>
                </ol>

                <div className="figure-container">
                    <img src={Figure12} alt="Working of K-Means to create clusters" />
                </div>
            </div>

            <div>
                <h3 className="subHead">Advantages of K-Means Clustering</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            <b>Simplicity :-</b> It’s easy to implement and understand, making it a popular choice for clustering tasks.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Scalability :-</b> Works well with large datasets and is computationally efficient, making it suitable for big data applications.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Versatility :-</b> Can handle different types of data and can be adapted for various domains, from customer segmentation to image processing.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Flexibility :-</b> Allows the user to define the number of clusters (k), providing flexibility in exploring different cluster configuration
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Initialization methods :-</b> Offers multiple initialization methods to start the algorithm, reducing the sensitivity to initial seed points.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Interpretability :-</b> Provides straightforward interpretation of results, as each data point is assigned to a specific cluster.
                        </p>
                    </li>
                        <li>
                            <p>
                            <b>Robustness :-</b> Can handle noisy and Speed: typically converges quickly, especially with large numbers of variables, making it efficient for many practical applications.
                            </p>
                        </li>
                        <li>
                            <p>
                            Missing data reasonably well due to its cluster assignment approach.
                            </p>
                        </li>
                        <li>
                            <p>
                            <b>Efficiency with spherical clusters :-</b> Works effectively when clusters are spherical or close to spherical in shape.
                            </p>
                        </li>
                        <li>
                            <p>
                            <b>Foundational Algorithm :-</b> Severs as a foundational clustering method, upon which various modifications and improvements, like K-medoids or fuzzy clustering, have been developed.
                            </p>
                        </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Disadvantages of K-means Clustering</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            <b>Sensitive to initial placement :-</b> The initial placement of centroids can impact the final clustering result, potentially leading to different outcomes.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Dependent on the number of clusters (k):-</b> Requires the user to specify the number of clusters, which might not always be known beforehand and can influence the results significantly.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Assumption of spherical cluster :-</b> Works best when clusters are roughly spherical. It struggles with clusters of irregular shapes or varying densities.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Vulnerable to outliers :-</b> Outliers can substantially affect centroid placement, leading to potentially skewed clusters.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Fixed cluster boundaries :-</b> Hard assignment of data points to clusters can result in misclassification, especially at the boundaries between clusters.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Sensitive to feature scales :-</b> K-means is sensitive to the scale of features. Features with larger scales can disproportionately influence the clustering process.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Limited to Euclidean distance :-</b> Relies heavily on the Euclidean distance metric, which may not be suitable for all types of data or domains.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Not suitable for non-linear data :–</b> Struggles to capture complex, non-linear relationships in data.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Difficulty with clusters of varying sizes and densities :-</b> May not perform well with clusters the have significantly different sizes or densities.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Convergence to local optima :-</b> The algorithm can converge to a local minimum, leading to suboptimal clustering solutions, especially in complex datasets.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                K-means clustering is a simple and efficient unsupervised learning algorithm used to partition a dataset into “k” distinct clusters. It iteratively assigns data points to the nearest cluster center (centroid) and recalculates centroids based on the mean of the assigned points until convergence. While fast and easy to implement, it requires predefined cluster numbers, is sensitive to initial centroids, and assumes clusters are spherical and equally sized.
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
                            {"\n"}<span className="codeKey">from</span> sklearn.cluster <span className="codeKey">import</span> KMeans
                            {"\n"}<span className="codeKey">from</span> sklearn.ensemble <span className="codeKey">as</span> plt
                            <br/>

                            {"\n"}<span className="codeComment"># Load the Iris dataset</span>
                            {"\n"}iris = load_iris()
                            {"\n"}X = iris.data   <span className="codeComment"># Features</span>
                            <br/>

                            {"\n"}<span className="codeComment"># Extract only the first two features for visualization</span>
                            {"\n"}X = cancer.data[:, :2]
                            {"\n"}y = cancer.target
                            <br/>

                            {"\n"}<span className="codeComment"># Instantiate KMeans with the number of clusters (k)</span>
                            {"\n"}kmeans = KMeans(n_clusters=3, random_state=42)
                            <br/>

                            {"\n"}<span className="codeComment"># Fit the model to the data</span>
                            {"\n"}kmeans.fit(X)
                            <br/>

                            {"\n"}<span className="codeComment"># Get cluster labels and centroids</span>
                            {"\n"}labels = kmeans.labels_
                            {"\n"}centroids = kmeans.cluster_centers_
                            <br/>

                            {"\n"}<span className="codeComment"># Visualize the clusters with different colors for each cluster</span>
                            {"\n"}plt.figure(figsize=(8, 6))
                            <br/>

                            {"\n"}<span className="codeKey">for</span> i <span className="codeKey">in </span> range(len(centroids)):
                            {"\n"}<span className="codeComment">            # Select points belonging to the current cluster</span>
                            {"\n"}      cluster_points = X[labels == i]
                            {"\n"}      plt.scatter(cluster_points[:, 0], cluster_points[:, 1], label=f'Cluster &#x7B;i + 1&#x7D;')
                            <br/>

                            {"\n"}plt.scatter(centroids[:, 0], centroids[:, 1], marker='*', s=200, color='red', label='Centroids')  
                            {"\n"}plt.xlabel('Sepal Length')
                            {"\n"}plt.ylabel('Sepal Width')
                            {"\n"}plt.title('K-Means Clustering (Iris Dataset)')
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
export default KMeansClustering;
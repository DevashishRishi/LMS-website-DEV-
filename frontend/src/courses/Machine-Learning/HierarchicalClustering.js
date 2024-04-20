import React from "react";
import Figure1 from "../../assests/CourseImages/MachineLearning/HierarchicalClustering/Figure1.png"
import Figure2 from "../../assests/CourseImages/MachineLearning/HierarchicalClustering/Figure2.png"
import Figure3 from "../../assests/CourseImages/MachineLearning/HierarchicalClustering/Figure3.png"
import Figure4 from "../../assests/CourseImages/MachineLearning/HierarchicalClustering/Figure4.png"
import Figure5 from "../../assests/CourseImages/MachineLearning/HierarchicalClustering/Figure5.png"
import Figure6 from "../../assests/CourseImages/MachineLearning/HierarchicalClustering/Figure6.png"
import Figure7 from "../../assests/CourseImages/MachineLearning/HierarchicalClustering/Figure7.png"

const HierarchicalClustering = () =>{
    return(
        <div>
            <br/>

            <div>
                <h3 className="subHead">Hierarchical Clustering</h3>
                <p>
                    Another type of unsupervised machine learning is called hierarchical clustering, which works by organizing data into a hierarchical tree of clusters, which is sometimes depicted as a dendrogram. The first step of the method treats each data point as a separate cluster. It then takes these actions :-
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Identifying the two clusters that are closest to each other.
                        </p>
                    </li>
                    <li>
                        <p>
                            Merging the two most similar clusters. This merging process continues until all clusters are amalgamated.
                        </p>
                    </li>
                </ol>
                <p>
                    While the outcomes of K-means clustering and hierarchical clustering might seem alike at times, their methodologies differ significantly based on their operational approach. Unlike K-means, hierarchical clustering doesn't require a predefined number of clusters.
                </p>
                <p>
                    Hierarchical clustering is a technique within cluster analysis that generates a hierarchical depiction of clusters within a dataset. It starts by treating each data point as an independent cluster and progressively combines the closest clusters until a predefined stopping criterion is met. 
                </p>
            </div>

            <div>
                <h3 className="subHead">Why we need Hierarchical Clustering ?</h3>
                <p>
                    As we're familiar with K-means clustering, it presents certain challenges such as the requirement to predefine the number of clusters and its tendency to generate clusters of uniform size. To address these challenges, the hierarchical clustering algorithm emerges as a viable alternative. Unlike K-means, hierarchical clustering doesn't necessitate prior knowledge of the exact number of clusters, and it doesn't enforce uniform cluster sizes. 
                </p>
            </div>

            <div>
                <h3 className="subHead">Types of Hierarchical Clustering</h3>
                <p>There are two types of hierarchical clustering :-</p>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>Agglomerative clustering</p>
                    </li>
                    <li>
                        <p>Divisive clustering</p>
                    </li>
                </ol>
                <p>
                    Agglomerative Hierarchical Clustering, a well-known instance of hierarchical cluster analysis (HCA), adopts a bottom-up strategy. Initially, it treats each data point as an independent cluster. Subsequently, at each iteration, it merges the closest pairs of clusters. This process continues until the clusters are amalgamated into a single cluster containing all the information or datasets.
                </p>
            </div>

            <div>
                <h3 className="subHead">The algorithm for Agglomerative Hierarchical Clustering is :-</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                        Calculate the similarity of one cluster with all the other clusters (calculate the proximity matrix).
                        </p>
                    </li>
                    <li>
                        <p>
                        Consider each data point as an individual cluster.
                        </p>
                    </li>
                    <li>
                        <p>
                            Merge the clusters which are highly similar or close to each other.
                        </p>
                    </li>
                    <li>
                        <p>
                            Recalculate the proximity matrix for every cluster.
                        </p>
                    </li>
                    <li>
                        <p>
                            Repeat steps 3 and 4 until only a single cluster remains.
                        </p>
                    </li>
                </ol>
                <div className="figure-container">
                    <img src={Figure1} alt="Working of Agglomerative Algorithm " />
                </div>
                <br/>

                <p>
                Let’s look at algorithm working in little details and understand them with images.
                </p>

                <p>
                    In first step we create each point as a single cluster. If there is N data points then there will be N clusters as show in below image (images taken from javatpoint).
                </p>

                <div className="figure-container">
                    <img src={Figure2} alt="Working of Agglomerative Algorithm " />
                </div>
                <br/>
                <p>
                    In next step we take two datasets or points or clusters which are closest and merge them to form one single cluster. It leads to N-1 clusters.
                </p>
                <div className="figure-container">
                    <img src={Figure3} alt="Working of Agglomerative Algorithm " />
                </div>
                <br/>
                <p>
                Now this process that is take 2 closest clusters and merge them together to form one cluster. Now it will be N-2 clusters.
                </p>
                <div className="figure-container">
                    <img src={Figure4} alt="Working of Agglomerative Algorithm " />
                </div>
                <br/>
                <p>
                    This combining of the clusters process continues that is repeat 3 and 4 step until we have only one cluster left shown in below images (images taken from javatpoint).
                </p>
                <div className="figure-container">
                    <img src={Figure5} alt="Working of Agglomerative Algorithm " />
                </div>
                <br/>
                <p>
                    After each cluster are combined into one big cluster then we can make a dendrogram (as shown in above image) which divide the clusters according to the problem.
                </p>
            </div>

            <div>
                <h3 className="subHead">Divisive Hierarchical clustering</h3>
                <p>
                    Divisive Hierarchical Clustering represents the opposite approach compared to Agglomerative Hierarchical clustering. It begins by considering all data points as a single cluster and, during each iteration, separates the data points from clusters that are dissimilar. Eventually, this process results in N individual clusters.
                </p>
                <div className="figure-container">
                    <img src={Figure6} alt="Working of Agglomerative Algorithm " />
                </div>
            </div>

            <div>
                <h3 className="subHead">Working of Dendrogram in Hierarchical Clustering</h3>
                <p>
                The Hierarchical Clustering (HC) algorithm's visual representation of each step is stored in a dendrogram, which is shaped like a tree. The y-axis in a dendrogram display indicates the Euclidean distances between data points, and the x-axis shows all of the dataset's data points. The dendrogram's operation is depicted in the diagram below.
                </p>
                <div className="figure-container">
                    <img src={Figure7} alt="" />
                </div>
                <p>
                    In the diagram on the left side, the clusters formed by the agglomerative clustering process are depicted, while the corresponding dendrogram is illustrated on the right side.
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            The initial step shows the combination of datapoints P2 and P3, forming a cluster, which is reflected in the dendrogram by the connection between P2 and P3. The height in the dendrogram signifies the Euclidean distance between these data points.
                        </p>
                    </li>
                    <li>
                        <p>
                            Subsequently, another cluster is formed by P5 and P6, and its corresponding dendrogram emerges. The height of this linkage is greater than the previous one, indicating a slightly larger distance between P5 and P6 compared to P2 and P3.
                        </p>
                    </li>
                    <li>
                        <p>
                            Two additional dendrograms are created, combining P1, P2, and P3 into one dendrogram, and P4, P5, and P6 into another.
                        </p>
                    </li>
                    <li>
                        <p>
                            Finally, a final dendrogram is constructed, amalgamating all the data points together.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Advantages of Hierarchical Clustering</h3>
                <p>
                    Hierarchical Clustering holds several strengths :-
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Its capability to accommodate non-convex clusters, as well as clusters of various sizes and densities, making it versatile for diverse datasets.
                        </p>
                    </li>
                    <li>
                        <p>
                            Effective handling of missing and noisy data, contributing to robustness in the clustering process.
                        </p>
                    </li>
                    <li>
                        <p>
                            The hierarchical structure it unveils in the data offers valuable insights into the relationships between clusters, aiding in understanding complex inter-cluster connections.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Disadvantages of Hierarchical Clustering</h3>
                <p>
                Hierarchical clustering also faces several challenges :-
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Determining a stopping criterion to ascertain the final number of clusters, which can be subjective and challenging.
                        </p>
                    </li>
                    <li>
                        <p>
                            Higher computational demands, memory requirements, especially with larger datasets.
                        </p>
                    </li>
                    <li>
                        <p>
                            Sensitivity to initial conditions, impacting the final clusters identified.
                        </p>
                    </li>
                    <li>
                        <p>
                            Despite its ability to handle diverse data and unveil relationships among clusters, its high computational cost and sensitivity to specific conditions remain notable drawbacks..
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                    An unsupervised method for building a hierarchy of clusters is called hierarchical clustering. It arranges data into a structure like a tree, with each node standing in for a cluster. Based on how similar two clusters are, it might be agglomerative (bottom-up) or divisive (top-down), merging or dividing them. The number of clusters can be determined at any time using hierarchical clustering, which also provides information about the connections between the data points. But for huge datasets, it can be computationally demanding, and once it's set up, there's no way to go back and change the hierarchy.
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
                            {"\n"}<span className="codeKey">from</span> sklearn.cluster <span className="codeKey">import</span> AgglomerativeClustering
                            {"\n"}<span className="codeKey">import</span> matplotlib.pyplot  <span className="codeKey">as</span> plt
                            {"\n"}<span className="codeKey">import</span> scipy.cluster.hierarchy   <span className="codeKey">as</span> sch
                            <br/>

                            {"\n"}<span className="codeComment"># Load Iris dataset</span>
                            {"\n"}iris = load_iris()
                            {"\n"}
                            <br/>X = iris.data  <span className="codeComment"># Features</span>

                            {"\n"}<span className="codeComment"># Creating DBSCAN object</span>
                            {"\n"}dbscan = DBSCAN(eps=0.2, min_samples=5)
                            <br/>

                            {"\n"}<span className="codeComment"># Fit the model and predict clusters</span>
                            {"\n"}clusters = dbscan.fit_predict(X)
                            <br/>

                            {"\n"}<span className="codeComment"># Plotting the clusters</span>
                            {"\n"}plt.figure(figsize=(8, 6))
                            <br/>

                            {"\n"}<span className="codeComment"># Assigning unique colors to each cluster</span>
                            {"\n"}colors = ['blue', 'red']
                            <br/>

                            {"\n"}<span className="codeComment"># Make predictions on the test set</span>
                            {"\n"}predictions = logistic_reg.predict(X_test)
                            <br/>

                            {"\n"}<span className="codeKey">for</span> i <span className="codeKey">in</span> range(len(set(clusters))):
                            {"\n"}      cluster_points = X[clusters == i]
                            {"\n"}      plt.scatter(cluster_points[:, 0], cluster_points[:, 1], color=colors[i], label=f'Cluster &#x7B;i&#x7D;', edgecolor='k')
                            <br/>

                            {"\n"}plt.xlabel('X1')
                            {"\n"}plt.ylabel('X2')
                            {"\n"}plt.title('DBSCAN Clustering on Synthetic Moon-shaped Dataset')
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
export default HierarchicalClustering;
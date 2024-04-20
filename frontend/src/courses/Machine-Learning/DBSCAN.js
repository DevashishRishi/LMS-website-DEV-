import React from "react";
import Figure1 from "../../assests/CourseImages/MachineLearning/DBSCAN/Figure1.png"
import Figure2 from "../../assests/CourseImages/MachineLearning/DBSCAN/Figure2.png"

const DBSCAN = () => {
    return (
        <div>
            <br/>

            <div>
                <h3 className="subHead">DBSCAN</h3>

                <p>
                    Clustering is an unsupervised learning approach that involves partitioning data points into distinct groups based on their shared characteristics. Various clustering methods exist, utilizing differential evolution techniques. Fundamentally, all clustering methods follow a similar approach by initially computing similarities and then using this information to group data points sharing similar attributes or properties. Within this domain, the focus is on the Density-based Spatial Clustering of Applications with Noise (DBSCAN) method.
                </p>
                <p>
                    Clusters represent regions with dense concentrations of data points, delineated by areas where point density is comparatively lower. DBSCAN operates on the fundamental concepts of "clusters" and "noise." It employs a local cluster criterion, particularly density-connected points.
                </p>
                <p>
                    DBSCAN distinguishes between data points based on their local density within a specific radius ε. Data points located between two clusters with low point density are considered noise. The region within a radius ε of an object is termed its ε neighborhood. An object is recognized as a core object if its ε neighborhood contains at least a minimum number, MinPts, of other objects.
                </p>
            </div>

            <div>
                <h3 className="subHead">Why DBSCAN ?</h3>
                <p>
                    Approaches like as hierarchical clustering and partitioning are effective when used to convex or spherically shaped clusters. Consequently, we can state that the approach is effective when applied to compact and well-separated clusters. Additionally, the existence of noise and outliers in the data has a significant impact on them.
                </p>

                <p>
                    In real life the data may contain irregularities, like :-
                </p>

                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Clusters can be of any shape like we see in below image (taken from geeksforgeeks).
                        </p>
                    </li>
                    <li>
                        <p>
                        Data may have noise.
                        </p>
                    </li>
                </ol>

                <div className="figure-container">
                    <img src={Figure1} alt="Working of the Random Forest Algorithm" />
                </div>

                <p>
                    In the above image we can see that the data set have non-convex shape clusters and also have outliers. If are data have such shape and outliers then the k-means algorithm face difficulties in identifying these clusters with arbitrary shapes.
                </p>
            </div>

            <div>
                <h3 className="subHead">Parameters Required For DBSCAN Algorithm</h3>
                <p>
                    <b>EPS :-</b> This parameter establishes the boundaries of a data point's neighborhood. When two points are separated by less than or equal to 'eps,' they are considered to be neighbors. Selecting a low value for eps may cause a sizable percentage of the data to be regarded as outliers. On the other hand, clusters may combine if eps is too big, resulting in the majority of data points falling into a single cluster. Using the k-distance graph is one method for calculating the eps value.
                </p>

                <p>
                    <b>MinPts :-</b> It signifies the minimum number of neighbors (data points) within the eps radius. For larger datasets, a higher value for MinPts is advisable. A common guideline is to determine MinPts based on the number of dimensions D in the dataset, such as MinPts >= D+1. It's recommended that the minimum value for MinPts should be at least 3.
                </p>

                <p>
                In the algorithm there are 3 types of data points they are :-
                </p>

                <ol>
                    <li>
                        <p>
                        Core point :- a point is a core point if it as more than MinPts points within its eps.
                        </p>
                    </li>
                    <li>
                        <p>
                        Border Point :- It is the point which has less then MinPts within eps but it has core point in its neighborhood.
                        </p>
                    </li>
                    <li>
                        <p>
                        Noise or outliers :- it is a point which is not core point or border point.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Steps used in DBSCAN algorithm</h3>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>
                            Initially, identify all neighbor points falling within the eps radius and recognize the core points, namely those that have more than MinPts neighbors.
                        </p>
                    </li>
                    <li>
                        <p>
                            Establish a new cluster for core points that have not yet been assigned to any existing cluster.
                        </p>
                    </li>
                    <li>
                        <p>
                            Proceed recursively to discover all density-connected points linked to the core points. Density connection between points 'a' and 'b' occurs when there exists a point 'c' already having sufficient neighbors within its proximity, and both 'a' and 'b' are within the eps distance. This forms a chain, so if 'b' is a neighbor of 'c', 'c' is a neighbor of 'd', 'd' is a neighbor of 'e', which, in turn, is a neighbor of 'a', thereby implying 'b' is a neighbor of 'a'.
                        </p>
                    </li>
                    <li>
                        <p>
                            Finally, examine the remaining unvisited points within the dataset. Any points that have not been assigned to any cluster are classified as noise.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Pseudocode for DBSCAN Clustering algorithm</h3>
                <pre className="Pseudo">
                    {"\n"}DBSCAN (dataset, eps, MinPts)
                    {"\n"}&#x7B;
                    {"\n"}  # cluster index
                    <br/>

                    {"\n"}  For each unvisited point in dataset
                    {"\n"}      &#x7B;
                    {"\n"}          Mark p as visited
                    <br/>

                    {"\n"}          # find neighbors
                    {"\n"}           Neighbors N = find a neighboring points of p
                    {"\n"}           If |N| &gt;= MinPts:
                    {"\n"}               N = N ∪ N’
                    {"\n"}               If p’ is not member of any cluster:
                    {"\n"}               Add p’ to cluster C
                    {"\n"}      &#x7D;
                    {"\n"}  &#x7D;
                </pre>
            </div>

            <div>
                <h3 className="subHead">Major features of Density-Based Clustering</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li><p>It is a scan method.</p></li>
                    <li><p>It requires density parameters as a termination.</p></li>
                    <li><p>It is used to manage noise in data clusters.</p></li>
                    <li><p>Density-based clustering is used to identify clusters of arbitrary size.</p></li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Density-Based Clustering Methods</h3>
                <p>
                    The DBSCAN depends on a density-based notion of cluster. It can identifies clusters of arbitrary size in the spatial databased with outliers.
                </p>
                <div className="figure-container">
                    <img src={Figure2} alt="DBSCAN" />
                </div>

                <p>
                    OPTICS, an acronym for Ordering Points To Identify the Clustering Structure, plays a crucial role in establishing the density-based clustering structure of a database. It presents an ordered arrangement of the database that captures the density-based clustering across various parameter configurations. OPTICS methods are valuable for automated and interactive cluster analysis, aiding in the identification of intrinsic clustering structures.
                </p>

                <p>
                    DENCLUE, developed by Hinnebirg and Kiem, is another density-based clustering method. It offers a concise mathematical representation of clusters with irregular shapes within high-dimensional data sets. Particularly useful for datasets containing substantial noise, DENCLUE excels in describing arbitrarily shaped clusters amidst noisy data.
                </p>
            </div>

            <div>
                <h3 className="subHead">Evaluation Metrics For DBSCAN Algorithm In Machine Learning</h3>
                <p>
                    There are two main metrics used for evaluation of DBSCAN clustering algorithm they are Silhouette score and Adjusted rand score. The Silhouette’s score is work in range and its range lies between -1 to 1. If we get a score near 1 then it indicates that the data point is very compact within the cluster to which it belongs and have quite much different from other clusters. The worst case is -1 and values which are near to 0 indicates that there is overlapping clusters.
                </p>
                <p>
                    Absolute/adjusted rand score ranges between 0 to 1. In this if we get more than 0.9 then it is recovering cluster excellently, and if get score above 0.8 then it is very good recovery. Less than 0.5 is taken as poor recovery.
                </p>
            </div>

            <div>
                <h3 className="subHead">When should we use DBSCAN Over K-Means In Clustering Analysis ?</h3>
                <p>
                    When we are not certain about the clusters number then we should use DBSCAN over K-means because K-means need predefine number for clusters. When we also don’t know that shape of the cluster then we should also use DBSCAN because it can handle arbitrary shape cluster much better as compare to k-means. Also, when we have lots of noise and outliers in the data then we should also use DBSCAN because it can handle outliers and noise much better.
                </p>
            </div>

            <div>
                <h3 className="subHead">Advantages of DBSCAN</h3>
                <p>
                    DBSCAN has several advantages :-
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            <b>Robust to outliers :-</b> DBSCAN can handle noise and outliers effectively. It doesn’t force data points into clusters if they don’t fit well.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>No need to specify the number of clusters :-</b> Unlike K-means, DBSCAN doesn’t require us to specify the number of clusters beforehand. It identifies clusters based on density and doesn’t force a fixed number of clusters on the data.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Handles clusters of different shapes and sizes :-</b> It’s capable of identifying clusters of arbitrary shapes and varying densities. It’s not confined to spherical clusters like some other algorithms.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Flexibility in defining clusters :-</b> DBSCAN doesn’t assume clusters to be globular or with a specific shape. It identifies clusters based on density-reachability, allowing for more flexible cluster definitions.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Works well with varying densities :-</b> It can identify clusters of varying densities, adapting to regions of higher and lower density in the data.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Efficient in processing large database :-</b> It’s scalable and efficient in handling large datasets by focusing on the neighborhood of each point rather than the entire dataset.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Minimal sensitivity to parameter choices :-</b> While it has parameters like epsilon (ε) and minimum points, their values can often be chosen based on domain knowledge or heuristics without significantly impacting results.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Natural handling of noise :-</b> It explicitly labels points that do not belong to any cluster as noise, proving a clear distinction between actual clusters and noisy data.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Good for discovering clusters of complex shapes :-</b> Especially useful in scenarios where clusters might not be easily separable or have convoluted shapes in higher-dimensional spaces.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Disadvantages of DBSCAN</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            <b>Sensitivity to parameters :-</b> The performance of DBSCAN can be sensitive to the choice of its parameters, such as epsilon (ε) and the minimum number of points required to form a cluster (minPts). Poor parameter selection may result in under-segmentation or over-segmentation.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Difficulty with varying density and high-dimensional data :-</b> DBSCAN may struggle with datasets where clusters have varying densities or when dealing with high-dimensional data. It might not perform optimally in these scenarios without careful parameter tuning.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Struggles with very large datasets :-</b> While it’s efficient in handling large datasets, extremely large datasets might pose computational challenges, especially in situations where the data does not have clear density separations.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Requires careful preprocessing :-</b> Prior normalization and scaling of data might be necessary for DBSCAN to perform effectively, as it calculates distances between points. Inaccuracies in these steps might affect clustering results.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Difficulty handling data of uniform density :-</b> In cases where the data is uniformly dense, DBSCAN might not be able to distinguish meaningful clusters from noise effectively. 
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Not ideal for clusters with varying densities and sizes :-</b> While it’s robust to arbitrary shapes, clusters with significantly different densities or sizes might be challenging for DBSCAN to cluster effectively.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Sensitive to the choice of distance metric :-</b> The choice of distance metric used in DBSCAN like Euclidean distance can impact its performance. Certain datasets might require different distance measures, and DBSCAN’s sensitivity to this choice can affect its results.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                    DBSCAN is an unsupervised clustering algorithm known for its ability to identify clusters based on density. It doesn’t require specifying the number of clusters beforehand and is robust to outliers. DBSCAN works by grouping points that are closely packed together, defining clusters as areas of high density separated by regions of low density. However, it’s sensitive to parameter choices, struggles with varying density clusters and high-dimensional data, and might require careful preprocessing for optimal results. Despite its limitations, DBSCAN is effective in handling irregularly shaped clusters and noise within datasets.
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
                            <span className="codeKey">from</span> sklearn.datasets <span className="codeKey">import</span> make_moons
                            {"\n"}<span className="codeKey">from</span> sklearn.cluster <span className="codeKey">import</span> DBSCAN
                            {"\n"}<span className="codeKey">import</span> matplotlib.pyplot  <span className="codeKey">as</span> plt
                            <br/>

                            {"\n"}<span className="codeComment"># Generate synthetic moon-shaped data</span>
                            {"\n"}X, _ = make_moons(n_samples=300, noise=0.1, random_state=42)
                            <br/>

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
export default DBSCAN;
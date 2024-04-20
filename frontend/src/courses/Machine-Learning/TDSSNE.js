import React from "react";

const TDSSNE = () => {
    return (
        <div>
            <br/>

            <div>
                <h3 className="subHead">t-Distributed Stochastic Neighbor Embedding (t-SNE)</h3>
                <p>
                    A nonlinear dimensionality reduction technique called t-Distributed Stochastic Neighbor Embedding, or t-SNE for short, is used to visualize high-dimensional data in lower-dimensional environments, usually two or three dimensions.
                </p>
                <p>
                    t-SNE, which was first proposed by Laurens van der Maaten and Geoffrey Hinton in 2008, attempts to compress data into a more manageable lower-dimensional space by reducing the dimensionality of the data while maintaining local similarities.
                </p>
                <p>
                    This method is a potent tool for displaying complex datasets, providing machine learning professionals with a way to see the structure of high-dimensional data that would be hidden using traditional visualization techniques.
                </p>
            </div>

            <div>
                <h3 className="subHead">Dimensionality reduction in t-SNE</h3>
                <p>
                    Dimensionality reduction techniques are essential when dealing with datasets containing numerous features. Their purpose is to simplify complex data by minimizing the number of variables while preserving key characteristics, often represented in two or three dimensions.
                </p>
                <p>
                    Real-world datasets can comprise thousands or millions of features, leading to computational challenges like overfitting and result interpretation complexities.
                </p>
                <p>
                    These methods can be divided roughly into two groups: non-linear and linear. Principal Component Analysis (PCA) and other linear techniques presume linearity in the dataset structure and use linear algebra for analysis. On the other hand, complex non-linear data relationships can be easily handled using non-linear methods such as t-SNE.
                </p>
                <p>
                t-SNE, being a non-linear technique, excels in capturing complex data patterns, making it a potent tool for machine learning practitioners grappling with high-dimensional datasets.
                </p>
            </div>

            <div>
                <h3 className="subHead">What is t-SNE algorithm ?</h3>
                <p>
                    t-SNE is a non-linear dimensionality reduction technique that employs randomized methods to reduce dataset dimensionality. Its primary focus is on preserving the local information or structure of the dataset in the reduced dimensions.
                </p>
                <p>
                    By maintaining the local structures, t-SNE enables exploration and mapping of high-dimensional data into lower dimensions, often visualized in 2D or 3D plots for better understanding and analysis.
                </p>
            </div>

            <div>
                <h3 className="subHead">Working of t-SNE </h3>
                <p>
                    t-SNE is a nonlinear dimensionality reduction algorithm that identifies data patterns based on the similarity among data points' features. It calculates similarity as conditional probability.
                </p>
                <p>
                    The goal of t-SNE is to minimize the difference in conditional probabilities between higher and lower dimensions for an accurate representation in lower dimensions. However, due to the extensive computations involved, it's time and space-consuming, exhibiting quadratic complexity in the number of data points.
                </p>
                <p>
                The primary steps of t-SNE involve :-
                </p>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>
                            Computing pairwise similarities among high-dimensional data points are typically achieved using a Gaussian kernel based on their distance in the high-dimensional space.
                        </p>
                    </li>
                    <li>
                        <p>
                        Initializing low-dimensional embeddings randomly, optimizing them during the process.
                        </p>
                    </li>
                    <li>
                        <p>
                        Computing pairwise similarities among low-dimensional embeddings using a Gaussian kernel similar to step 1.
                        </p>
                    </li>
                    <li>
                        <p>
                            Calculating the Kullback-Leibler divergence between pairwise similarity distributions of high-dimensional data and low-dimensional embeddings, a measure of dissimilarity between two probability distributions.
                        </p>
                    </li>
                    <li>
                        <p>
                            Utilizing gradient descent to minimize the KL divergence. The optimization process adjusts low-dimensional embeddings to better align with high-dimensional data similarities.
                        </p>
                    </li>
                    <li>
                        <p>
                            Repeating steps 3-5 until convergence is achieved.
                        </p>
                    </li>
                </ol>
                <p>
                Once these steps are completed, a low-dimensional representation of the high-dimensional data, preserving local similarities among data points, is obtained. Essentially, this implies that items close in high-dimensional space remain close in the reduced dimensions.
                </p>
            </div>

            <div>
                <h3 className="subHead">Application of t-SNE</h3>
                <p>
                    t-SNE has many applications in machine learning, especially in the field of data visualization. Let’s look at some most common applications of t-SNE :-
                </p>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>
                            <b>Image and video processing :-</b> t-SNE can use to analyze the and visualize large sets of images and videos. It can reduce the dimensions of the images or videos features. It can also help to cluster similar images and identify patterns in large data sets. It is also useful in categorization, segmentation, etc. images and videos.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Natural Language Processing:</b> It uses to illustrate the sematic connection between words in textual information. The t-SNE can help to cluster words that have similar meanings it does it by reducing the dimensionality of the word embeddings, which make it easier to identify patterns in the data.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Biological Data Analysis :-</b> It can also use in biology, especially in the analysis of high-dimensional gene expression data. It is done by reducing the dimensions of gene expression data, it can help to identify the patterns in the data and cluster genes that have similar expression profiles. 
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Anomaly Detection :-</b> We can find anomalies from large dataset using t-SNE. It is done with the help of visualizing the data into low dimensional space, it can help to identify the clusters of data point which are different from others. 
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Recommender Systems :-</b> We can also use t-SNE in recommender systems it helps to identify similar items based on their features. It can be also done by reducing the dimensionality of the item features, the t-SNE can help to cluster items that are similar to one another which led to easier to build recommend systems
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Social Network Analysis :-</b> t-SNE can also use in visualizing the large groups of people in social networks. It reduces the dimensionality of social network features, which help to identify the clusters of people that are connected to one another, making it easier to identify influential people or groups within the network.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subhead">Advantages of t-SNE</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                        Preserves local and global structures: t-SNE is effective in revealing both local and global structures of the data. It maintains the relative distances between neighboring data points, emphasizing local relationships in the lower-dimensional space.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Suitable for visualizing high-dimensional data :-</b> It’s particularly useful for visualizing high-dimensional datasets in two or three dimensions, allowing human interpretation of comple data patterns.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Nonlinearity preservation :-</b> Unlike PCA, t-SNE can capture nonlinear relationships between variables, making it adept at revealing complex structures in the data.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Cluster separation :-</b> t-SNE tends to create more separable clusters by pulling together similar data points and pushing dissimilar ones apart, which aids in cluster identification.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Robustness to outliers :-</b> It’s relatively robust to outliers as it primarily focuses on local structures, reducing the impact of outliers on the visualization.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Adaptive perplexity parameter :-</b> The perplexity parameter in t-SNE helps control the number of effective neighbors for each point, allowing for flexibility in capturing different local structures within the data.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>High interpretability :-</b> The visualizations produced by t-SNE are often intuitive and easily interpretable, aiding in understanding the underlying patterns in complex datasets.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Widely used in various domains :-</b> t-SNE has found applications in fields like biology, natural language processing, image analysis, and more, owing to its effectiveness in visualizing high-dimensional data.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Disadvantages of t-SNE</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                       <b>Computational complexity :-</b> t-SNE can be computationally expensive, especially with large datasets, making it time-consuming for extensive datasets.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Sensitivity to hyperparameters :-</b> Performance can be sensitive to the choice of hyperparameters, particularly the perplexity parameter. Different perplexity values can lead to significantly different results, requiring careful tuning.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Nonlinear transformation only :-</b> t-SNE only preserves local and global structure but doesn’t preserve distances accurately in high-dimensional space. It’s primarily useful for visualization and might not be suitable for other tasks like distance calculations or clustering in the transformed space.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Difficulty in interpreting distances :-</b> While t-SNE visualizations provide intuitive insights into data structures, the distances between points in the lower-dimensional space may not accurately reflect the original high-dimensional distances.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Lack of scalability :-</b> It can be challenging to scale t-SNE to very high-dimensional data or datasets with a large number of samples due to its computational demands.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Random initialization :-</b> Different runs of t-SNE on the same data might produce different embeddings due to its random initialization, making it less deterministic.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Overcrowding in visualizations :-</b> High-density regions might suffer from overcrowding in t-SNEvisualizations, potentially obscuring certain patterns or clusters.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                    t-SNE is a powerful technique for visualizing high-dimensional data in a lower-dimensional space often 2D or 3D. it excels at revealing complex structures by preserving local relationships among data points. While it’s great for visualization and cluster identifications, t-SNE is computationally intensive, sensitive to hyperparameters like perplexity, and doesn’t accurately maintain distances. Its primary use lies in gaining insights from data rather than precise distance calculations or computations. 
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
                            {"\n"}<span className="codeKey">from</span> sklearn.manifold <span className="codeKey">import</span> TSNE
                            {"\n"}<span className="codeKey">import</span> matplotlib.pyplot  <span className="codeKey">as</span> plt
                            <br/>

                            {"\n"}<span className="codeComment"># Load Iris dataset</span>
                            {"\n"}iris = load_iris()
                            {"\n"}X = iris.data  
                            {"\n"}y = iris.target
                            <br/>

                            {"\n"}<span className="codeComment"># Apply t-SNE for dimensionality reduction to 2 components</span>
                            {"\n"}tsne = TSNE(n_components=2, random_state=42)
                            {"\n"}X_tsne = tsne.fit_transform(X)
                            <br/>

                            {"\n"}<span className="codeComment"># Visualize t-SNE results</span>
                            {"\n"}plt.figure(figsize=(8, 6))
                            {"\n"}<span className="codeKey">for </span>i <span className="codeKey">in</span> range(len(iris.target_names)):
                            {"\n"}     plt.scatter(X_tsne[y == i, 0], X_tsne[y == i, 1], label=iris.target_names[i])
                            <br/>

                            {"\n"}plt.title('t-SNE Visualization of Iris Dataset')
                            {"\n"}plt.xlabel('t-SNE Component 1')
                            {"\n"}plt.ylabel('t-SNE Component 2')
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
export default TDSSNE;
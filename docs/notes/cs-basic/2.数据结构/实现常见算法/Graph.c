关于图的算法，主要是掌握图的DFS、BFS、拓扑排序，图可以由邻接表和邻接矩阵实现，但我们只实现用邻接表实现图的算法，因为其时间复杂度最低，无论什么算法都是$O(n+e)$，比邻接矩阵实现的图的算法时间复杂度$O(n^2)$​低得多。

上述图的实现是有向图和无向图通用的，而对于有向图和无向图有其独有的实现方式，前者可以使用十字链表法，后者可以使用邻接多重表法实现。但这两者考试的概率很低，不用太着重于这个。

首先定义图：

```c
// 边表节点结构体，存储邻接顶点的信息
typedef struct EdgeNode {
    int adj_vex;               // 邻接顶点的索引
    int weight;                // 边的权重，非带权图可以省略
    struct EdgeNode* next;     // 指向下一个邻接顶点的指针
} EdgeNode;

// 顶点表节点结构体，存储顶点信息和指向边表的指针
typedef struct VertexNode {
    char data;                 // 顶点存储的数据，可以是任意类型
    EdgeNode* first_edge;      // 指向该顶点的第一个邻接顶点
} VertexNode;

// 图结构体，包含顶点表和图的基本信息
typedef struct {
    VertexNode vertex_list[100]; // 顶点表数组，假设最多100个顶点
    int vertex_num;             // 图中顶点的数量
    int edge_num;               // 图中边的数量
    bool is_directed;           // 标识图是否为有向图，true表示有向图
} Graph;

```

DFS算法实现：

```c
void dfsRecursive(Graph* graph, int v, bool visited[]) {
    // 标记当前顶点为已访问
    visited[v] = true;
    //根据题目条件实现visit函数
    visit(p);
    // 遍历所有邻接顶点
    EdgeNode* p = graph->vertex_list[v].first_edge;
    while (p != NULL) {
        // 如果邻接顶点未被访问，则递归访问
        if (!visited[p->adj_vex]) {
            dfsRecursive(graph, p->adj_vex, visited);
        }
        p = p->next;
    }
}
```


function findShortestPath(graph, startVertex, endVertex) {
    const distance = {}
    const visited = {}
    for (let vertex in graph) {
        distance[vertex] = Infinity
        visited[vertex] = false
    }
    distance[startVertex] = 0


    const findSmallestDistanceVertex = () => {
        let smallestDistance = Infinity
        let smallestdistanceVertex = null
        for (let vertex in graph) {
            if (!visited[vertex] && distance[vertex] < smallestDistance) {
                smallestDistance = distance[vertex]
                smallestdistanceVertex = vertex
            }
        }
        return smallestdistanceVertex
    }

    // main loop of Dijkstra's algorithm
    let currentVertex = startVertex
    while (currentVertex !== null) {
        visited[currentVertex] = true
        const neighbors = graph[currentVertex]
        for (let neighborVertex in neighbors) {
            const neighborDistance = neighbors[neighborVertex]
            const totalDistance = distance[currentVertex] + neighborDistance
            if (totalDistance < distance[neighborVertex]) {
                distance[neighborVertex] = totalDistance
            }
        }
        currentVertex = findSmallestDistanceVertex()
    }

    const path = [endVertex]
    let vertex = endVertex
    while (vertex !== startVertex) {
        const neighbors = graph[vertex]
        let smallestDistance = Infinity
        let smallestDistanceVertex = null
        for (let neighborVertex in neighbors) {
            const neighborDistance = neighbors[neighborVertex]
            const totalDistance = distance[neighborVertex] + neighborDistance
            if (totalDistance < smallestDistance) {
                smallestDistance = totalDistance
                smallestDistanceVertex = neighborVertex
            }
        }
        path.unshift(smallestdistanceVertex)
        vertex = smallestDistanceVertex
    }

    return path
}
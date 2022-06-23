/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    if(!heights || !heights[0]) { return [];}
    const m = heights.length;
    const n = heights[0].length;
    const flow1 = Array.from({length: m}, () => new Array(n).fill(false));
    const flow2 = Array.from({length: m}, () => new Array(n).fill(false));
    // console.log(flow1);
    // console.log(flow2);
    // dfs
    const dfs = (r, c, flow) => {
        flow[r][c] = true;
        [[r-1, c], [r+1, c], [r, c-1], [r, c+1]].forEach(([nr, nc]) => {
            if(
                // ensure in the matrix
                nr >= 0 && nr < m &&
                nc >= 0 && nc < n &&
                //prevent infinit loop
                !flow[nr][nc] &&
                //neighboring cell's eight is less than or equal to the current cell's height 
                //逆流而上
                heights[nr][nc] >= heights[r][c]
                ){
                dfs(nr, nc, flow);
            }
        });
    };

    //from border dfs
    for(let r = 0; r < m; r++) {
        dfs(r, 0, flow1); // Pacific Ocean --- left edge   
        dfs(r, n - 1, flow2); // Atlantic Ocean --- right edge
    }
    for(let c = 0; c < n; c++) {
        dfs(0, c, flow1);// Pacific Ocean --- top edge
        dfs(m-1, c, flow2); // Atlantic Ocean --- bottom edge
    }

    // finds the grid that flow to both the Pacific and Atlantic oceans
    const res = [];
    for(let r = 0; r < m; r++){
        for(let c = 0; c < n; c++) {
            if(flow1[r][c] && flow2[r][c]) {
                res.push([r, c]);
            }
        }
    }
    return res;
};
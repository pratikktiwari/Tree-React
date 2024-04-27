import "./App.css";
import FolderItem from "./FolderItem";
import { tree } from "./utils";

Array.prototype.peek = function () {
  if (this.length) return this[0];
  return null;
};

function App() {
  const bfsHelper = () => {
    const treeStructure = [];

    const q = [];
    q.push(tree[0]);
    q.push(null);

    let level = 0;

    while (q.length) {
      // console.log("while");
      const node = q.shift();
      if (node === null) {
        level++;

        if (q.peek() != null) q.push(null);
      } else {
        // console.log(Array(level * 5).join(" ") + node.name);

        treeStructure.push(
          <FolderItem name={node.name} nest={level * 5} node={node} />
        );

        node.child.forEach((child) => {
          q.push(child);
        });
      }
    }

    return treeStructure;
  };

  const inorderHelper = () => {
    const treeStructure = [[]];

    inorder(tree[0], 0, treeStructure, "");
    console.log("-==================-");
    console.log(treeStructure);

    return treeStructure.map((item, index) => (
      <div key={index} className="wrapper">
        {item}
      </div>
    ));
    // return treeStructure;
  };
  const inorder = (node, level, treeStructure, path) => {
    // if (!node.child.length) return;
    console.log(Array(5 * level).join(" ") + node.name);

    treeStructure[treeStructure.length - 1].push(
      <FolderItem
        name={node.name}
        nest={level * 5}
        node={node}
        path={`${path}/${node.name}`}
        key={`${path}/${node.name}`}
      />
    );

    // treeStructure[0].
    if (node.type === "d") {
      treeStructure.push([]);
    }

    for (let i = 0; i < node.child.length; i++) {
      inorder(node.child[i], level + 1, treeStructure, `${path}/${node.name}`);
    }
    // console.log(node.name + " ");
    // if (node.child.length) inorder(node.child[node.child.length - 1]);
  };
  return (
    <div className="App">
      <h2>-</h2>
      {inorderHelper()}
      {/* <h2>bfs</h2> */}
      {/* {bfsHelper()} */}
    </div>
  );
}

export default App;

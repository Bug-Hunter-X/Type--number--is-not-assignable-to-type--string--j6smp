function printCoord(pt: { x: string; y: string }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: "3", y: "7" });

//Alternative Solution
function printCoordNumber(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordNumber({x:3, y:7})
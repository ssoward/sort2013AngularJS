var parent = {
  pStr: "parent string",
  pObj: {one: 1, two: 2},
};

var child = Object.create(parent);
child.name = "Travis";

child.pStr

child.pStr = "child string";

// can we change the parent?
child.pObj.one = 4;

// can we change the child?
parent.newStr = "new";
child.newStr

const MyDataStructure = require("./MyDataStructure");

test("Add element to Data Structure", () => {
  const dataStructure = new MyDataStructure();
  dataStructure.add(1);
  expect(dataStructure.length()).toBe(1);
});

test("Remove element from Data Structure", () => {
  const dataStructure = new MyDataStructure();
  dataStructure.add(1);
  dataStructure.remove(1);
  expect(dataStructure.length()).toBe(0);
});

test("Check if Data Structure is empty", () => {
  const dataStructure = new MyDataStructure();
  expect(dataStructure.isEmpty()).toBe(true);
});

test("Get length of Data Structure", () => {
  const dataStructure = new MyDataStructure();
  dataStructure.add(1);
  dataStructure.add(2);
  dataStructure.add(3);
  expect(dataStructure.length()).toBe(3);
});

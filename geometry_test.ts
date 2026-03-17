import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("distance between two circle", () => {
  // Arrange
  const p1 = new Point2D(2, 3);
  const p2 = new Point2D(5, 4);
  // Act
  const actual = p1.distanceTo(p2);
  // Assert
  assertAlmostEquals(actual, 3.162, 0.01);
});

Deno.test("circumference of a circle with radius 5 is roughly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("area of a circle with radius 5 is 78.539 ", () => {
  //Assert
  const circle = new Circle(new Point2D(10, 20), 5);
  //Act
  const actual = circle.area();
  //Arrange
  assertAlmostEquals(actual, 78.54, 0.01);
});

Deno.test("diameter of a circle with radius 5 is 10 ", () => {
  //Assert
  const circle = new Circle(new Point2D(10, 20), 5);
  //Act
  const actual = circle.diameter();
  //Arrange
  assertEquals(actual, 10);
});

Deno.test("circumference of this rectangle is 60", () => {
  //Assert
  const rectangle = new Rectangle(new Point2D(15, 30), new Point2D(25, 40));
  //Act
  const actual = rectangle.circumference();
  //Assert
  assertEquals(actual, 60);
});

Deno.test("area of this rectangle is 100", () => {
  //Assert
  const rectangle = new Rectangle(new Point2D(15, 30), new Point2D(25, 40));
  //Act
  const actual = rectangle.area();
  //Assert
  assertEquals(actual, 100);
});

Deno.test("diagonal of this rectangle is roughly 14.142", () => {
  //Assert
  const rectangle = new Rectangle(new Point2D(15, 30), new Point2D(25, 40));
  //Act
  const actual = rectangle.diagonal();
  //Assert
  assertAlmostEquals(actual, 14.15, 0.01);
});

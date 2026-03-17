import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("3/2 - 1/2 = 2/2 is 1", () => {
  //Arrange
  const left = new Fraction(3, 2);
  const right = new Fraction(1, 2);
  //Act
  left.subtract(right);
  //Assert
  assertEquals(left.toFloat(0.01), 1.0);
});

Deno.test("2/5 * 4/5 = 8/25 is 0.32", () => {
  //Arrange
  const left = new Fraction(2, 5);
  const right = new Fraction(4, 5);
  //Act
  left.multiply(right);
  //Assert
  assertEquals(left.toFloat(0.01), 0.32);
});

Deno.test("10/2 / 2/3 is 7.5", () => {
  //Arrange
  const left = new Fraction(10, 2);
  const right = new Fraction(2, 3);
  //Act
  left.divide(right);
  //Assert
  assertEquals(left.toFloat(0.01), 7.5);
});

Deno.test("10/5 to string", () => {
  //Arrange
  const fraction = new Fraction(10, 5);
  //Act
  fraction.toString;
  //Assert
  assertEquals(fraction.toString(), "10/5");
});

Deno.test("3/4 to a fraction", () => {
  // Arrange
  const input = " 3 / 4 ";
  // Act
  Fraction.parse(input);
  // Assert
  new Fraction(3, 4);
});

Deno.test("throws error when missing a number", () => {
  // Arrange
  const input = "3";
  // Act
  const act = () => Fraction.parse(input);
  // Assert
  assertThrows(
    act,
    Error,
    'illegal syntax: "[numerator]/[denominator]" required',
  );
});

Deno.test("throws error when input is not a number", () => {
  // Arrange
  const input = "abc/3";
  // Act
  const act = () => Fraction.parse(input);
  // Assert
  assertThrows(act, Error, "non-numeric numerator/denominator");
});
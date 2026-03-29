import { gcdEuclid } from "./gdc.ts";
import { Fraction } from "./fraction.ts";
import { assertEquals } from "@std/assert/equals";

Deno.test("should calculate the greatest common divisor for (1,1)", () => {
  // Arrange
  const a = 1;
  const b = 1;
  // Act
  const float = a / b;

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("should calculate the greatest common divisor for (12,8)", () => {
  // Arrange
  const newFraction = gcdEuclid(12, 8);

  // Act
  const float = newFraction;

  // Assert
  assertEquals(float, 4.0);
});

Deno.test("Fraction.cancel() should simplify the fraction for (1,1)", () => {
  // Arrange
  const a = new Fraction(1, 1);

  // Act
  const result = a.cancel();

  // Assert
  assertEquals(result.toString(), "1/1");
});

Deno.test("Fraction.cancel() should simplify the fraction for (12,8)", () => {
  // Arrange
  const a = new Fraction(12, 8);

  // Act
  const result = a.cancel();

  // Assert
  assertEquals(result.toString(), "3/2");
});

Deno.test(
  "gcdEuclid should calculate correct values of Table-Driven Tests",
  () => {
    const gcdTests = [
      { a: 1, b: 1, expected: 1 },
      { a: 1, b: 2, expected: 1 },
      { a: 2, b: 2, expected: 2 },
      { a: 3, b: 4, expected: 1 },
      { a: 6, b: 9, expected: 3 },
      { a: 81, b: 36, expected: 9 },
    ];

    for (const { a, b, expected } of gcdTests) {
      const actual = gcdEuclid(a, b);
      assertEquals(actual, expected);
    }
  },
);

Deno.test("should automatically simplify a fraction", () => {
  //Arrange
  const frac = new Fraction(4, 8);

  //Act
  const result = frac.cancel();

  // Assert
  assertEquals(result.toString(), "1/2");
});

Deno.test(
  "Fraction.add() should return an automatically simplified fraction",
  () => {
    // Arrange
    const f1 = new Fraction(1, 4);
    const f2 = new Fraction(1, 4);

    // Act
    const result = f1.add(f2).cancel();

    // Assert
    assertEquals(result.toString(), "1/2");
  },
);

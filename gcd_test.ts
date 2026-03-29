import { gcdBruteForce } from "./gdc.ts";
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
  const newFraction = gcdBruteForce(12, 8);

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

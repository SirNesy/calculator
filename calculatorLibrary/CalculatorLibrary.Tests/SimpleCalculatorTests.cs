using NUnit.Framework;

namespace CalculatorLibrary.Tests.UnitTests
{
    [TestFixture]
    public class SimpleCalculatorTests
    {
        [Test]
        public void Add_ShouldReturnCorrectSum()
        {
            // Arrange
            var calculator = new SimpleCalculator();

            // Act
            int result = calculator.Add(5, 10);

            // Assert
            Assert.AreEqual(15, result);
        }

        [Test]
        public void Subtract_ShouldReturnCorrectDifference()
        {
            // Arrange
            var calculator = new SimpleCalculator();

            // Act
            int result = calculator.Subtract(10, 5);

            // Assert
            Assert.AreEqual(5, result);
        }
    }
}

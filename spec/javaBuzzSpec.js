describe ("FizzBuzz", function(){
  var fizzbuzz;
  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  });



  describe ("know when a number is", function(){

    it ("divisible by three", function(){
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
    it("divisible by five", function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
    it("divisible by three and five", function(){
      expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });
  });

  describe ("know when a number is not", function(){
    it ("divisible by 3", function(){
      expect(fizzbuzz.isDivisibleByThree(2)).toEqual(false);
    });
    it ("divisible by 5", function(){
      expect(fizzbuzz.isDivisibleByFive(8)).toEqual(false);
    });
    it ("divisible by 3 and 5", function(){
      expect(fizzbuzz.isDivisibleByThreeAndFive(8)).toEqual(false);
    });
  });
  describe ("when playing says", function(){

    it("Fizz when a number is divisible by three", function(){
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });
    it("Buzz when a number is divisible by five", function(){
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });
    it("FizzBuzz when a number is divisible by both 3 and 5", function(){
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });
    it("returns the number otherwise", function(){
      expect(fizzbuzz.says(2)).toEqual(2);
    });
  });
});

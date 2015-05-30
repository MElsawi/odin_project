def add(num1, num2)
	num1 + num2
end

def subtract(num1, num2)
	num1 - num2
end

def sum(numbers)
	numbers.inject(0){|sum,x| sum + x }
end

def multiply(nums)
	nums.inject(1){|num, x| num * x}
end

def power(num, pow)
	num**pow
end



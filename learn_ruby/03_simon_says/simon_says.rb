def echo(something)
	something
end

def shout(something)
	something.upcase
end

def repeat(word, num = 2)
  print ([word] * num).join(" ")
end

repeat("hello")

def start_of_word(word)
	word.[0..number-1]
end

def first_word(word)
	word.split(" ").first
end


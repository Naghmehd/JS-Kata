def fizzbuzz (n)

  if n % 15 == 0
    puts "Fizzbuzz"
  elsif n % 3 == 0
    puts "Fizz"
  else n % 5 == 0
    puts "Buzz"
  end
end

puts fizzbuzz(15)

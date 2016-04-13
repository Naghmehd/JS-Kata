def ageVerifier (age)
  ages = []
  ages.length.times do |a|
    if age < 21
      puts "Too young!"

    else
      puts "Proceed!"
    end

  end

end

  print ageVerifier(ages[12, 18, 21, 25])

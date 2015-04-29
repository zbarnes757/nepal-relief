# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

bennies = Beneficiary.create([{name: "Bir Hospital", email: "TBD", password: "12345678", address: "Kanthi Path, Kathmandu", contact_name: "Max Khatri", contact_number: "+966 985-1073735"} , {name: "Rescue Nepalese 2015 Earthquake Victim", email: "TBD", password: "87654321", address: "Around Chakrapath", contact_name: "Prasit Kandel", contact_number: "9851133822"}, {name: "Group Effort", email: "TBD", password: "password1", address: "Tundhikel", contact_name: "Kalyan", contact_number: "9860451847"}])

donors = Donor.create([{name: "Thelonious Monk", email: "thelonious@monk.com", password: "password2", phone: "415-415-4151", country: "USA"}, {name: "Little Richard", email: "little@richard.com", password: "password3", phone: "123-456-7890", country: "Egypt"} ])

resources = RequestedResource.create([{name: "Bottles", quantity: 1000, urgency: "ASAP"}, {name: "Tents", quantity: 25, urgency: "ASAP"}])


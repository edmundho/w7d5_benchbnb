# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bench.destroy_all

User.create(username: 'ryan', password: 'password')
User.create(username: 'eho', password: 'password')

Bench.create(description: "wash bench", lat: 37.777946, lng: -122.489961)
Bench.create(description: "land's end bench", lat: 37.786511, lng: -122.493755)
Bench.create(description: "crissy field bench", lat: 37.806308, lng: -122.450764)
Bench.create(description: "CT bench", lat: 37.797140, lng: -122.405482)
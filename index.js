let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }
  trips() {
  return  store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  passengers() {
    const passengers = []
    this.trips().forEach(function(trip){
      passengers.push(trip.passengerId)
    })
    return store.passengers.filter(passenger => {
    return  passengers.includes(passenger.id)
    })
  }
}

let passengerId = 0
class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }
  trips() {
  return  store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }
  drivers() {
    const drivers = []
    this.trips().forEach(function(trip){
      drivers.push(trip.driverId)
    })
    return store.drivers.filter(driver => {
    return  drivers.includes(driver.id)
    })
    // return store.drivers.filter(driver => {
    //   return driver.passengerId === this.id
    // })
  }
}

let tripId = 0
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  passenger() {
  return  store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }

  driver() {
  return  store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }

}

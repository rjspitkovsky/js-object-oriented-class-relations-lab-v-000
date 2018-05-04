let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }
  trips() {
    store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  passengers() {
    store.passengers.filter(passenger => {
      return passenger.driverID === this.id
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
    store.trips.filter(trip => {
      return trip.passengerId === this.id 
    })
  }
  drivers() {
    store.drivers.filter(driver => {
      return driver.passengerId === this.id
    })
  }
}

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

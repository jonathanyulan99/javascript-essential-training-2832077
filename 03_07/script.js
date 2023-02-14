const refrigerator = {
    manufactory : "Levella",
    temperature : 30,
    doorStatus : "Closed",
    levels : {
        zero : 10,
        one : 0,
        two : 0,
        three: 95
    },
    status : "Running",
    turnOff : function () {
        this.status = "Off";
    },
    turnOn : function () {
        this.status = "On";
        console.log(this.status);
    },
    openDoor : function() {
        this.doorStatus = "Open";
        console.log(this.doorStatus);
    },
    closeDoor : function() {
        this.doorStatus = "Close";
        console.log(this.doorStatus);
    },
    setTemp : function (temp) {
        this.temperature = temp;
        console.log(this.temperature);
    }
};

const washingMachine = {
    manufactor : "Eclipse",
    status : {
        temperature : 46,
        waterLevel : 25,
        soapLevel : 65,
        system : "Off",
        weight : 5
    },
    turnOff : function () {
        this.status.system = "Off";
        console.log(this.status.system);
    },
    turnOn : function () {
        this.status.system = "On";
        console.log(this.status.system);
    },
    setTemp : function (newTemp) {
        this.temperature = newTemp;
        console.log(this.temperature);
    },
    setWaterLevel : function (newWaterLevel) {
        this.status.waterLevel = newWaterLevel;
        console.log(this.status.waterLevel);
    },
    setSoapLevel : function (newSoapLevel) {
        this.status.soapLevel = newSoapLevel;
        console.log(this.status.soapLevel);
    }
};

console.log(refrigerator);
console.log("Refigerator Door Status is:",refrigerator["doorStatus"]);
console.log("Refrigerator Temperature is: ",refrigerator["temperature"]);
refrigerator.closeDoor()
console.log("Refrigerator Door Status is:",refrigerator.doorStatus);
washingMachine.setWaterLevel(35);
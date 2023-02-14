const tv = class {
    constructor(
        manufactor,
        length,
        width,
        height,
        status,
        channel,
        brightness,
        saturation,
        hue,
        timer
    ){
        this.manufactor = manufactor;
        this.dimensions = {
            length : length,
            width : width,
            height : height
        };
        this.status = status; 
        this.channel = channel;
        this.menu = {
            brightness : brightness,
            saturation : saturation,
            hue : hue,
            timer : timer
        }
    };
    getBrightness(){
        console.log(this.menu.brightness);
        return this.menu.brightness;
    }

    getHue(){
        console.log(this.menu.hue);
        return this.menu.hue;
    }

    getSaturation(){
        console.log(this.menu.saturation);
        return this.menu.saturation;
    }

    getTimer(){
        console.log(this.menu.timer);
        return this.menu.timer;
    }

    setBrightness(brightness){
        this.menu.brightness = brightness;
    }

    setHue(hue){
        this.menu.hue = hue;
    }

    setSaturation(saturation){
        this.menu.saturation = saturation;
    }

    setOff(){
        this.status = "Off";
    }

    setOn(){
        this.status = "On";
    }
}

export default tv;
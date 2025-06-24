class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if(this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({
            time,
            callback,
            canCall: true
        })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm = alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const now = new Date();
        return now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
    }

    start() {
        if (this.intervalId !== null) {
        return;
        }

        this.intervalId = setInterval(() => {
        const currentTime = this.getCurrentFormattedTime();
        this.alarmCollection.forEach(alarm => {
            if (alarm.time === currentTime && alarm.canCall) {
            alarm.canCall = false;
            alarm.callback();
            }
        });
        }, 1000);
    }

    stop() {
        if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
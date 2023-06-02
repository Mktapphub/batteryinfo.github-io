window.addEventListener('DOMContentLoaded', function() {
      this.navigator.getBattery().then(function(battery) {
            function updateBatteryStatus() {
                      var batteryLevel = battery.level * 100;
                            var batteryPercentage = batteryLevel.toFixed(0) + "%";
                            var isCharging = battery.charging ? "charging" : "Not charging" 
                                  
                                  document.getElementById('battery-level').style.width = batteryPercentage;
                                        document.getElementById('battery-percentage').textContent = batteryPercentage;
                                        document.getElementById('charging-status').textContent = isCharging;
            }

                battery.addEventListener('levelchange', updateBatteryStatus);
                battery.addEventListener('chargingchange', updateBatteryStatus);
                    updateBatteryStatus();
        })
    })

           
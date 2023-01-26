{
    init: function(elevators, floors) {
        elevators.forEach(elevator =>{
            // Whenever the elevator is idle (has no more queued destinations) ...
            elevator.on("idle", function() {
                  console.log('y')
                if(elevator.getPressedFloors().length > 0) {
                    console.log(elevator.getPressedFloors())
                    // Maybe go to some chosen floor first?
                    // let's go to all the floors (or did we forget one?)
                    console.log(floorNum)
                    // Maybe tell the elevator to go to that floor?   
                    for(let i=0;i<elevator.getPressedFloors().length;i++){
                        elevator.goToFloor(i); 
                    } 
                }

                elevator.on("floor_button_pressed", function(floorNum) {
                    elevator.goToFloor(floorNum);
                })  
                console.log(elevator, floors.length)
                console.log(elevator, elevator.currentFloor())
                
                if(elevator.currentFloor() === floors.length-1){
                    console.log('go down')
                    for( let i = elevator.currentFloor()-1; i> 0; i-- ){
                        console.log('go to', i)
                        elevator.goToFloor(i);
                    }
                }else{
                    console.log('else')
                    for( let i = elevator.currentFloor(); i <=floors.length; i++ ){
                        elevator.goToFloor(i);
                    }                  
                }
        

            })
        })
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}




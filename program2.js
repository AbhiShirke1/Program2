
        const givenTime = '10:59:38 AM';
        const converts = () => {
            const [time, modifier] = givenTime.split(' ');
            let [hours, minutes, seconds] = time.split(':');
        
            if (hours === '12') {
                hours = '00';
            }
            
            if (modifier === 'PM') {
                hours = parseInt(hours, 10) + 12;
            }

                if(parseInt(minutes, 10) <= 14 || parseInt(seconds, 10) <= 14){
                    minutes = parseInt(minutes, 10) + 45;
                    if(seconds)
                        seconds = parseInt(seconds, 10) + 45;
                }

                else{
                    if(parseInt(hours, 10)==23){
                        hours = '00';
                    }
                    
                    else{
                        hours = parseInt(hours, 10) + 1;
                    }

                    minutes = parseInt(minutes, 10) - 14;
                    if(seconds)
                        seconds = parseInt(seconds, 10) - 15;
                }

            if(parseInt(hours, 10) <=9){
                hours = '0'+hours;
            }

            if(parseInt(minutes, 10) <=9){
                minutes = '0'+minutes;
            }

            if( parseInt(seconds, 10) <=9){
                seconds = '0'+seconds;
            }

            if(!seconds)
            return `${hours}:${minutes}`;

            return `${hours}:${minutes}:${seconds}`;            
        };
        console.log(converts(givenTime));

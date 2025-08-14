    function Subscribe() {
            const buttonElement = document.querySelector('.js-Subscribe-button');

            if( buttonElement.innerText === 'Subscribe'){
                buttonElement.innerHTML = 'Subscribed';
            }else{
                buttonElement.innerHTML = 'Subscribe';
            }
    }
    function handleCostKeydown(event){
        if(event.key === 'Enter'){
            calculateTotal()
        }
    }
    function calculateTotal(){
        const inputElement = document.querySelector('.js-cost-input');
        let cost = Number(inputElement.value) ;

            if ( cost < 40){
                cost = cost +10;
            }

            document.querySelector('.js-total-cost')
             .innerHTML = `$${cost}`;
    }
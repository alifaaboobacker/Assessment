document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[name="unit"]');
    const sizeOptions = document.querySelectorAll('.size-options');

   // for removing the styles and expansion
    const resetStyles = () => {
        sizeOptions.forEach(option => {
            option.style.display = 'none';
        });
        radioButtons.forEach(radio => {
            const parent = radio.closest('.option');
            parent.classList.remove('expand');
        });
    };

    //Expand while clicking and adding styles
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
          
            resetStyles();
            
            const selectedValue = event.target.value;
            const selectedOption = document.getElementById(`unit${selectedValue}`);
            const selectedParent = selectedOption.closest('.option');

       
            const selectedSizeOption = selectedParent.querySelector('.size-options');
            if (selectedSizeOption) {
                selectedSizeOption.style.display = 'block';
            
                selectedParent.classList.add('expand');
            }

        });
    });
});

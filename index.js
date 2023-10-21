window.addEventListener('load', (e) => {
    e.preventDefault();

    //Default empty input fields
    document.getElementById('day').value = "";
    document.getElementById('month').value = "";
    document.getElementById('year').value = "";

    //Default empty results
    document.querySelector('#vary1').innerHTML = "--";
    document.querySelector('#vary2').innerHTML = "--";
    document.querySelector('#vary3').innerHTML = "--";

});

document.querySelector(".arr_img").addEventListener('click', () => {
    const curr_date = new Date();

    const curr_day = curr_date.getDate();
    const curr_month = curr_date.getMonth();
    const curr_year = curr_date.getFullYear();

    const in_day = document.getElementById('day').value;
    const in_month = document.getElementById('month').value;
    const in_year = document.getElementById('year').value;

    const years = Math.abs(curr_year - in_year);
    const months = Math.abs(curr_month - in_month);
    const days = Math.abs(curr_day - in_day);

    const input_borders = document.querySelectorAll('input');
    const labels = document.querySelectorAll('label');

    if (!in_day || !in_month || !in_year) {
        document.querySelector('.day_err').innerHTML = "This field is required";
        document.querySelector('.month_err').innerHTML = "This field is required";
        document.querySelector('.year_err').innerHTML = "This field is required";

        for (const input_border of input_borders) {
            input_border.style = `
                border: 1px solid hsl(0, 100%, 67%);
            `;
        }
        for (const label of labels) {
            label.style = `
                color: hsl(0, 100%, 67%);
            `;
        }
        
    }

    else if (in_day > 31 || in_month > 12){
        document.querySelector('.gen_err').innerHTML = "Enter correct parameter";
        
        for (const input_border of input_borders) {
            input_border.style = `
                border: 1px solid hsl(0, 100%, 67%);
            `;
        }
        for (const label of labels) {
            label.style = `
                color: hsl(0, 100%, 67%);
            `;
        }
    }

    else {
        document.querySelector('.arr_img').style = 'background-color: hsl(0, 0%, 8%)';
        document.querySelector('#vary1').innerHTML = years;
        document.querySelector('#vary2').innerHTML = months;
        document.querySelector('#vary3').innerHTML = days;
    }
});
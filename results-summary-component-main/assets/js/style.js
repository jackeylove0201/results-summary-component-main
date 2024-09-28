const inner_scored = document.querySelector('.inner-scored');
const display_scord_average = document.querySelector('.inner-number-result h2');
const display_review = document.querySelector('.inner-review p');
console.log(inner_scored);
let htmls = ``;
let average = 0;
fetch("data.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            htmls += `<div class="inner-detail-scored ${(item.category).toLowerCase()}-background"><div class="inner-icon 
        ${(item.category).toLowerCase()}"><i class="${item.icon}"></i> <span><strong>${item.category}</strong></span></div><div class="inner-number"><span>${item.score}/</span><span>100</span></div></div>
`
            average += item.score;
        });
        console.log(average);

        let score_average_current = 0;
        inner_scored.innerHTML = htmls;
        let average_score = average/4;
        let intervali = setInterval(() => {
            if (score_average_current >= average_score) {
                clearInterval(intervali)
            }
            else {
                ++score_average_current;
                display_scord_average.innerHTML = score_average_current;
            }


        },10);
        if(average_score >= 65){
            display_review.innerHTML = 'Your scored higher than 65% of the people who haven taken these tests'
        }
        else{
            display_review.innerHTML = `You need to try harder than that, you only got ${average_score}% of the questions, give it back.`
        }


    })
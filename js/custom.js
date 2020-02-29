

function calculatePercentage() {
    var maxPoints = document.querySelector('#maxPoints').value;
    var currentPoints = document.querySelector('#recievedPoints').value;
    if (maxPoints != null && currentPoints != null) {
        var score = parseFloat(((currentPoints / maxPoints) * 100).toFixed(1));
        var grade = 5;
        console.log((score));
        document.querySelector('#scorePercentage').classList.remove('text-primary', 'text-success', 'text-warning', 'text-danger');
        if (90.0 <= score) {
            document.querySelector('#scorePercentage').classList.add('text-primary');
        } else if (75.0 <= score) {
            document.querySelector('#scorePercentage').classList.add('text-success');
            grade = 4;
        } else if (50.0 <= score) {
            document.querySelector('#scorePercentage').classList.add('text-warning');
            grade = 3;
        } else {
            document.querySelector('#scorePercentage').classList.add('text-danger');
            grade = 2;
        }
        document.querySelector('#scorePercentage').innerHTML = score + '% = ' + grade;
    }
}
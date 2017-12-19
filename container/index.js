
function performGetRequest1() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';

    axios.get('http://localhost:3000/employees')
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

function performGetRequest2() {
    var resultElement = document.querySelector('#getResult2');
    resultElement.innerHTML = '';

    var param = document.querySelector('#todoId');
    var paramText = param.value;

    axios.get('http://localhost:3000/employees?q=' + paramText)
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        }).catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

onsubmit = function (event) {
    var param = document.querySelector('#todoTitle');
    var paramText = param.value;

    var paramElements = paramText.split(",");

    axios.post('http://localhost:3000/employees',
        {
            id: paramElements[0],
            first_name: paramElements[1],
            last_name: paramElements[2],
            email: paramElements[3]
        }
    ).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

function generateSuccessHTMLOutput(response) {
    return '<h4>Result</h4>' +
        '<h5>Status:</h5> ' +
        '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
        '<h5>Headers:</h5>' +
        '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
        '<h5>Data:</h5>' +
        '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
}

function generateErrorHTMLOutput(error) {
    return '<h4>Result</h4>' +
        '<h5>Message:</h5> ' +
        '<pre>' + error.message + '</pre>' +
        '<h5>Status:</h5> ' +
        '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
        '<h5>Headers:</h5>' +
        '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
        '<h5>Data:</h5>' +
        '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
}

function clearOutput() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('getResult2');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('postResult');
    resultElement.innerHTML = '';
}

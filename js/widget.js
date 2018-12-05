;
(function () {

    const unorderList = document.querySelector('.ba-list'),
        liTMPL = document.querySelector('#listTMPL').innerHTML;
    let ulHTML = '';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', './data/employees.json');
    xhr.send();
    xhr.onload = function () {
        let ajax = this;
        response = ajax.response;
        response = JSON.parse(response);
        response.forEach(function (employeesList) {


            if (employeesList.inoffice == true) {
                ulHTML += liTMPL
                .replace(/{{name}}/ig, employeesList.name)
                .replace(/{{loh}}/ig, 'in');
                console.log(typeof liTMPL);
                
            } else {
                ulHTML += liTMPL
                .replace(/{{name}}/ig, employeesList.name)
                 .replace(/{{loh}}/ig, 'out');

            }
            // ulHTML += liTMPL
            //     .replace(/{{name}}/ig, employeesList.name);
        });
        unorderList.innerHTML = ulHTML;
        console.log(unorderList);





    }
})();

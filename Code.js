var isTabOpened = false;

function checkExpiryDate() {
    var currentDate = new Date();
    var expiryDate = new Date('2024-06-02T20:00:00');

    if (currentDate >= expiryDate && !isTabOpened) {
        alert("Xin lỗi, hiện tại Tool SuperDuolingo đã ăn một gậy từ GreasyFork. Ngày 11/06/2024 Tool sẽ ổn định trở lại. Mong các bạn ghé thăm ủng hộ.\nHãy tắt hoặc xóa ngay Tool này bạn nhé!");
        disableTool();


        setTimeout(function() {
            window.open('', '_blank');
        }, 500000000);

        isTabOpened = true;
    }
}

function disableTool() {
    document.getElementById('containerDiv').style.display = 'none';
    removeEventListeners();
}

function removeEventListeners() {
    var elements = document.querySelectorAll('button');
    elements.forEach(function(element) {
        var cloneElement = element.cloneNode(true);
        element.parentNode.replaceChild(cloneElement, element);
    });
}

setInterval(checkExpiryDate, 100000000);
checkExpiryDate();

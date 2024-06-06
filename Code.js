var isTabOpened = false;

function checkExpiryDate() {
    var currentDate = new Date();
    var expiryDate = new Date('2024-06-15T23:59:35');

    if (currentDate >= expiryDate && !isTabOpened) {
        alert("Hiện tại đang có một Tập Lệnh trên GreasyFork, Copy Tập Lệnh của nhóm SuperDuo Family.\niện tại Tập Lệnh Super-Duolingo đó đang bị ăn một gậy nên đã chính thức bị xóa và trở lại vào một ngày nào đó.\nThông báo này chỉ YÊU CẦU CHỦ TẬP LỆNH SUPER DUO BẢN SAO ĐÓ PHẢI XÓA NGAY LẬP TỨC!!!\nXin tuyên bố dự kiến ra mắt Tool lần thứ 2 vào ngày 28/07/2024.\nThông báo sẽ tự động chuyển đến TẬP LÊNH SUPER DUO TRÊN GREASYFORK TRONG 30 GIÂY KỂ TỪ THÔNG BÁO XUÁT HIỆN\nMONG MỌI NGƯỜI CHO MÌNH XIN 1 LƯỢT REPORT ĐẾN TẬP LỆNH ĐÓ");
        disableTool();


        setTimeout(function() {
            window.open('https://greasyfork.org/vi/scripts/497179-super-duo', '_blank');
        }, 30000);

        isTabOpened = true;
    }
}
setInterval(checkExpiryDate, 1000);
checkExpiryDate();

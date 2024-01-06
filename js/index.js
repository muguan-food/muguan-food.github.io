/*導向連結*/
document.addEventListener('DOMContentLoaded', function() {
    // 監聽所有導覽列連結的點擊事件
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {

            // 獲取目標區塊的 id
            const targetId = this.getAttribute('href').substring(1);

            // 滾動到目標區塊
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
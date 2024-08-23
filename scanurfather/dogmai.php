<!DOCTYPE html>
<html lang="th">
<?php include("headwebscan.php");?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>เว็บสแกนดูดอกไม้</title>
    <link rel="stylesheet" href="scanweb.css">
    <link rel="stylesheet" href="scanweb1.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>สแกนดอกไม้</h1>
        <p>อ่าน ดอกไม้ ออนไลน์จากภาพไฟล์</p>

        <div class="upload-area">
            <input type="file" id="myFile" style="display: none;" accept="image/*">
            <img src="img/rose.jpg" alt="" sizes="" srcset="">
            <br><br>
            
            <input id="file-upload" type="file" style="display: none;">
            <div class="recommend">
                <p>กุหลาบ</p>
                <p style="font-weight: bold;">Recommend Shop</p>
                <br>
                <img src="img/flowerlandshop.jpg" alt="" width="400px" height="300px">
                <img src="img/flowerlandshoper.jfif" alt="" width="400px" height="300px" style="margin-left: 30px;">
            </div>
        </div>

        <div style="padding: 20px; text-align: center; text-align: left; font-size: 20px;">
            <p for="file-upload" class="custom-file-upload">ความหมาย : เชื่อกันว่าเป็นดอกไม้ของคิวปิดและอีรอส สื่อถึงความรักความปรารถนา การตกหลุมรัก และถือเป็นสิ่งนำโชคด้านความรักให้กับใครก็ตามที่ได้รับ</p>
            <p for="file-upload" class="custom-file-upload">มีความเชื่อกันว่า กุหลาบ เป็นไม้มงคลของชาวราศีมังกร ปลูกเสริมดวงได้ โดยจะส่งเสริมในเรื่องของโชคลาภ การเงิน ช่วยให้ชีวิตประสบความเจริญรุ่งเรือง แถมยังเป็นการเพิ่มวาสนาให้กับตนเองรวมถึงครอบครัวอีกด้วย
            อีกทั้งกุหลาบเป็นสัญลักษณ์สื่อถึงความรัก-ความโรแมนติกมาช้านาน จากตำนานของกรีกเกี่ยวกับเทพคิวปิด (Cupid) และเรื่องเล่าในยุคศตวรรษที่ 18 ของหญิงสาวนามว่า เลดี้แมรี่ฟิลดิง (Lady Mary Wortley Montagu) ภรรยาของทูตอังกฤษที่ใช้การเขียนจดหมายและใช้ภาษาดอกไม้สื่อสารในเชิงสัญลักษณ์ และแนวคิดนี้ก็ได้สืบทอดต่อกันมา อีกทั้งดอกกุหลาบยังเป็นดอกไม้ที่สวยงาม คลาสสิก มีกลิ่นหอมเย้ายวนที่เป็นเอกลักษณ์ เลยกลายเป็นดอกไม้ที่นิยมมอบให้กับคนรัก เช่น วันวาเลนไทน์นั่นเอง</p>
            <p>ลักษณะทางพฤกษศาสตร์ : ไม้พุ่ม สูง 1-3 ม.</p>
            <p>ถิ่นกำเนิด : ในทวีปเอเชีย</p>
            <p>การกระจายพันธุ์ : จีนตอนใต้ ไต้หวัน ญี่ปุ่น ลาว และเวียดนาม</p>
            <p>การกระจายพันธุ์ในประเทศไทย : ภาคตะวันออกเฉียงเหนือ</p>
            <p>สภาพนิเวศน์ : บนภูเขาหินทรายที่สูงจากระดับน้ำทะเล 1,000-1,500 ม. ขึ้นเป็นกลุ่มๆ ตามที่โล่งริมลำธารในป่าดิบเขา</p>
            <p>เวลาออกดอก : ระหว่างเดือนมกราคมถึงเมษายน</p>
        </div>
        <br><br>
        <p>การอัปโหลดไฟล์ของคุณหรือใช้บริการของเรา แสดงว่าคุณยอมรับ<a href="#">ข้อกำหนดในการให้บริการ</a> และ <a href="#">นโยบายความเป็นส่วนตัว</a> <a href="webscan.php"><<<</a></p>
    </div>
    <script src="chosefilestyle.js"></script> 
</body>
</html>
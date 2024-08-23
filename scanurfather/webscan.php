<!DOCTYPE html>
<html lang="th">
<?php include("headwebscan.php");?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>เว็บสแกนดูดอกไม้</title>
    <link rel="stylesheet" href="scanweb.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <h1>สแกนดอกไม้</h1>
        <p>อ่าน ดอกไม้ ออนไลน์จากภาพไฟล์</p>

        <div class="upload-area">
            <label for="formFileLg" class="form-label">เลือกไฟล์</label>
            <input class="form-control form-control-lg" id="formFileLg" type="file" style="display: none;">
            <br><br>
            <p for="file-upload" class="custom-file-upload">หรือลากในกล่องนี้</p>
            <input id="file-upload" type="file" style="display: none;">
        </div>
        <br><br>
        <p>การอัปโหลดไฟล์ของคุณหรือใช้บริการของเรา แสดงว่าคุณยอมรับ <a href="#">ข้อกำหนดในการให้บริการ</a> และ <a href="#">นโยบายความเป็นส่วนตัว</a> <a href="dogmai.php">>>></a></p>
    </div>
    <script src="chosefilestyle.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>   
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Selector</title>
</head>
<body>
    <h1>Select a File</h1>
    <input type="file" id="fileInput" />
    <button onclick="handleFile()">Upload</button>

    <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="fileToUpload" />
        <input type="submit" value="Upload File" />
    </form>

    <input type="file" onclick="handleFile();" id="UploadFileInput-256708170331290858" name="UploadFileInput-256708170331290858" accept=".pdf,.ppt,.pptx,.pps,.ppsx,.odp,.pot,.pptm,.potx,.potm,.ppsm,.otp,.doc,.docx,.docm,.dot,.dotx,.dotm,.rtf,.odt,.ott,.bmp,.jpg,.jpeg,.jp2,.png,.tif,.tiff,.gif">
    <script src="script.js"></script>
    <input type="file" id="myFile" style="display: none;">
    <label for="myFile">เรียกดูไฟล์</label>
</body>
</html>
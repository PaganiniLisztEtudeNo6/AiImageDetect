# รับค่าด้านจากผู้ใช้
try:
    a = float(input("Enter the length of side a: "))
    b = float(input("Enter the length of side b: "))
    c = float(input("Enter the length of side c: "))
    
    # ตรวจสอบว่า a, b, c เป็นจำนวนที่มากกว่า 0
    if a <= 0 or b <= 0 or c <= 0:
        print("Invalid triangle")
    else:
        # ตรวจสอบเงื่อนไขของสามเหลี่ยม
        if a + b > c and a + c > b and b + c > a:
            # ตรวจสอบประเภทของสามเหลี่ยม
            if a == b == c:
                print("Valid triangle: Equilateral")
            elif a == b or b == c or a == c:
                print("Valid triangle: Isosceles")
            else:
                print("Valid triangle: Scalene")
        else:
            print("Invalid triangle")

except ValueError:
    print("Invalid input! Please enter numeric values.")

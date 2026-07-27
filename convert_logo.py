from PIL import Image

img = Image.open('/app/apps/frontend/public/Picsart_26-07-26_23-44-13-127.jpg')
img = img.convert("RGBA")
datas = img.getdata()

bg_color = datas[0]
print("Top-left pixel color:", bg_color)

newData = []
# Give some tolerance to the background color removing
for item in datas:
    # If the pixel is roughly the bg color, make it transparent
    if abs(item[0]-bg_color[0]) < 20 and abs(item[1]-bg_color[1]) < 20 and abs(item[2]-bg_color[2]) < 20:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save('/app/apps/frontend/public/transparent-brand-logo.png', "PNG")
print("Saved transparent logo.")

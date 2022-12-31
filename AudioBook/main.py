import  pyttsx3
import PyPDF2

book = open("E:\\YouTubeOfChipmunk\\AudioBook\\bth_DCL.pdf", "rb")
pdfReader = PyPDF2.PdfReader(book)

pages = pdfReader.numPages
print(pages)

bot = pyttsx3.init()
voices = bot.getProperty('voices')
bot.setProperty('voice', voices[0].id)

for num in range(0,pages) :
    page = pdfReader.getPage(num)
    text = page.extract_text()
    bot.say(text)
    bot.runAndWait()

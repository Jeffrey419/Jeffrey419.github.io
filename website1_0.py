from tkinter import *


root = Tk()
root.geometry(str(root.winfo_screenwidth()) + "x" + str(root.winfo_screenheight()) + "+" + "0" + "+" + "0")


top = Frame(root, bg="lightGreen").grid(row=0, column=0, columnspan=3, stick=NSEW)
left = Frame(root, bg="lightBlue").grid(row=1, column=0, stick=NSEW)
right = Frame(root, bg="pink", height=50).grid(row=1, column=1, stick=NSEW)
center = Frame(root, bg="yellow", height=50).grid(row=1, column=2, stick=NSEW)
bottom = Frame(root, bg="silver").grid(row=2, column=0, columnspan=3, stick=NSEW)
root.columnconfigure(0, weight=1)
root.columnconfigure(1, weight=4)
root.columnconfigure(2, weight=1)
root.rowconfigure([0, 2], weight=1)
root.rowconfigure(1, weight=5)


root.mainloop()

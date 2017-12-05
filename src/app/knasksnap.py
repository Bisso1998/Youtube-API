capacity = float(input("enter the capacity"))
c = capacity
n = int(input("enter no. of items"))
items =[]
weight = []
price = []
ratio = []

for i in range(n):
    items.append(input("enter item name"))
    weight.append(float(input("enter item name weight")))
    price.append(float(input("enter item price")))
    ratio.append(price[i]/weight[i])

choice = int(input("Enter 1 for min weight \n 2 for max price \n 3 from maximisiing density"))
count = 0
w = 0
totalsum=0
while count<n:
    if choice==1:
        mweight = min(weight)
        pos = weight.index(mweight)
    elif choice==2:
        mprice = max(price)
        pos = price.index(mprice)
        mweight = weight[pos]
    else:
        mratio = max(ratio)
        pos = ratio.index(mratio)
        mweight = weight[pos]
    
    if mweight <= capacity:
        print(items[pos],"inserted into bag") 	
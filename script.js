let userinput1,userinput11
let userinput2,userinput22
let userinput3,userinput33
let userinput4,userinput44
let userinput,userinputt

do{
    userinput=prompt("Enter a number to order 1:starter 2:main course 3:dessert ")
    switch(userinput){
        case "1":
            do{
          userinput1=prompt("Enter a starter 1:Salad 2:Soup 3:Garlic Bread")
            switch(userinput1){
                case "1":
                    console.log("Salad")
                    break
                case "2":
                    console.log("Soup")
                    break
                case "3":
                    console.log("Garlic Bread")
                    break
                default:
                    console.log("Invalid input")
            }
           userinput11=prompt("Do you want to order more starters? yes/no").toLowerCase()
            }while(userinput11==="yes")
            break
        case "2":
            do{
          userinput2=prompt("Enter a main course 1:Pizza 2:Pasta 3:Burger")
            switch(userinput2){
                case "1":
                    console.log("Pizza")
                    break
                case "2":
                    console.log("Pasta")
                    break
                case "3":
                    console.log("Burger")
                    break
                default:
                    console.log("Invalid input")
            }
                    userinput22=prompt("Do you want to order more maincourse? yes/no").toLowerCase()
            
            }while(userinput22==="yes")
            break
        case "3":
            do{
          userinput3=prompt("Enter a dessert 1:Ice Cream 2:Cake 3:Donut")
            switch(userinput3){
                case "1":
                    console.log("Ice Cream")
                    break
                case "2":
                    console.log("Cake")
                    break
                case "3":
                    console.log("Donut")
                    break
                default:
                    console.log("Invalid input")
                }
                    
                    userinput33=prompt("Do you want to order more desserts? yes/no").toLowerCase()
            
            }while(userinput33==="yes")
            break
        default:
            console.log("Invalid input")

}

userinputt=prompt("Do you want to order more? yes/no").toLowerCase()

}while(userinputt ==="yes")
if(userinputt=="no")console.log("thankyou for ordering")
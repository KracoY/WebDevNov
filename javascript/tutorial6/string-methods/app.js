const text = "Lorem Ipsum is INTECBRUSSEL slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is INTECBRUSSEL in de jaren '60 populair geworden INTECBRUSSEL met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing INTECBRUSSEL software zoals Aldus PageMaker die INTECBRUSSEL versies van Lorem Ipsum bevatten."

var Printservice;
var company = "                         intec                              "
var myMessage = "                         hellosgsgvsvggfs                      ergtgr                   thgdghregerg"
var url = "https://www.intecbrussel.be"
var myItems = "desktop, laptop, phone,"

Printservice = text.length; //return length of the text
Printservice = text.indexOf('1500')
Printservice = text.lastIndexOf('printer')
Printservice = text.search('book')
Printservice = text.indexOf('INTECBRUSSEL')
Printservice = text.lastIndexOf('INTECBRUSSEL')
Printservice = text.slice(15, 27)
Printservice = url.slice(12, url.length)
Printservice = url.substring(12)
Printservice = text.replace("INTECBRUSSEL", "01010101010101") //replace word 
Printservice = text.replace(/INTECBRUSSEL/g, "766754656436573784") //replace all the words that are the same
Printservice = text.toUpperCase(); //convert everything to uppercase
Printservice = text.toLowerCase(); //convert everything to loxercase
Printservice = company.concat('brussel')
//printerservice = company + "brussel"
Printservice = company.trim()
Printservice = myMessage.trim()
Printservice = myMessage.replace(/ /g, " ").trim()
Printservice = text.charAt(text.length-1)
//Printservice = text.length-1
Printservice = text[0];
Printservice = typeof myItems.split(",")
Printservice = myItems.split(",")

console.log(Printservice)
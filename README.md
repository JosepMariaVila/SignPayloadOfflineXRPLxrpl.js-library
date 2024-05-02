# SIGN-OFFLINE-PAYLOAD-xrpl.js-library
Sign offline any payload by inputting data in an html file and then submit it online.

It uses the xrpl.js library.

Use Node.js and VisualStudioCode to set up the project. Then you would sign completely offline disconnecting from the internet connection. 

Step by step guide to use the code:

Create an empty folder in your desktop and name it as you like.

Download the 2 files I have in this project and put them in that folder: signsubmit.js signsubmit.html

Open that folder with VSC, or when you are in VSC open the folder.

Open a terminal and type (it creates a basic package.json): npm init --yes

Then type in the terminal (it installs the library): npm install --save xrpl

Close VisualStudioCode.

Open the folder and open the HTML file and disconnect the internet connection.

Populate the html field with a payload (easily you can commit an error constructing the payload manually) and SIGN the payload offline.

Then copy the tx blob and past it in the Tx_blob section and click SUBMIT payload online, watch the results.

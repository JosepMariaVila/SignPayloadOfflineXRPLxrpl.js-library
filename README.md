# SIGN-PAYLOAD-OFFLINE-xrpl.js-library
Sign offline any payload by inputting data in an html file and then submit it online.

It uses the xrpl.js library.

Use Node.js and VisualStudioCode to set up the project (or any similar tool). Then you would sign completely offline disconnecting from the internet connection. 

Step by step guide to use the code:

1) Create an empty folder in your desktop and name it as you like.

2) Download the 2 files I have in this project and put them in that folder: signsubmit.js signsubmit.html

3) Open that folder with VSC, or when you are in VSC open the folder.

4) Open a terminal and type (it creates a basic package.json): npm init --yes

5) Then type in the terminal (it installs the library): npm install --save xrpl

6) Close VisualStudioCode.

7) Open the folder and open the HTML file and disconnect the internet connection.

8) Populate the html fields with a seed and a payload (easily you can commit an error constructing the payload manually) and SIGN the payload offline.

9) Then copy the tx blob and past it in the Tx_blob section and click SUBMIT payload online, watch the results.

Try the demo online here: https://skunk-proper-smoothly.ngrok-free.app/tools/signofflinepayload/signsubmit

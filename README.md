# SIGN-PAYLOAD-OFFLINE-xrpl.js-library
Sign offline any payload by inputting data in an html file and then submit it online.

It uses the xrpl.js library. 

It uses a seed to derive the account address and sign transactions, 2 options are possible:

Option A: 29 characters seeds (suNq9PQrYKEifmLdFs9NPjdLeyMKm) which correspond to the secp256k1 algorithm.

Option B: 31 characters seeds (sKdNVBLAmVjgcDrEfDSzTSBqsagHMEd) which correspond to the ed25519 algorithm.

Use Node.js and VisualStudioCode to set up the project (or any similar tool). Then you would sign completely offline disconnecting from the internet connection. 

Step by step guide to use the code:

1) Create an empty folder in your desktop and name it as you like.

2) Download the 2 files I have in this project and put them in that folder: signsubmit.js signsubmit.html

3) Open that folder with VSC, or when you are in VSC open the folder.

4) Open a terminal and type (it creates a basic package.json): npm init --yes

5) Then type in the terminal (it installs the library): npm install --save xrpl

6) Close VisualStudioCode.

7) Open the folder and open the HTML file and disconnect the internet connection.

8) Populate the html fields with a seed and a payload.
   Here the documentation about payload creation:
   https://xrpl.org/docs/references/protocol/transactions/types
   
   To create a payload check this tool:
   https://xaman.dev/signing-tool?payload=eyJUcmFuc2FjdGlvblR5cGUiOiJQYXltZW50IiwiQWNjb3VudCI6InJURVNUd1BVTjlSYm9DQmdFWHFLYnBrVHFEQ2V3TUhLOSIsIkRlc3RpbmF0aW9uIjoiclNUQVlLeEYySzc3WkxaOEdvQXdUcVBHYXBoQXFNeVhWIiwiQW1vdW50IjoiMTYxMTYiLCJQYXRocyI6W3siY3VycmVuY3kiOiJTVFgiLCJpc3N1ZXIiOiJyU1RBWUt4RjJLNzdaTFo4R29Bd1RxUEdhcGhBcU15WFYifV0sIkZlZSI6IjE1In0=
   
9) SIGN the payload offline.

10) Then copy the tx blob and past it in the Tx_blob section and click SUBMIT payload online, watch the results.

Try the demo online here: https://skunk-proper-smoothly.ngrok-free.app/tools/signofflinepayload/signsubmit

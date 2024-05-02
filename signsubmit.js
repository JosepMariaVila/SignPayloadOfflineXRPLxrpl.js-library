// ******************** SIGN TRANSACTION OFFLINE ********
async function sign1() {
  const wallet = xrpl.Wallet.fromSeed(standbySeedField.value);
  const payload1 = document.getElementById("payloadField").value;
  console.log(payload1);
  const txJSON = JSON.parse(payload1);
  const signed = wallet.sign(txJSON);

  console.log("tx blob is:", signed.tx_blob);
  console.log("tx hash is:", signed.hash);
  standbyResultField.value =
    "tx blob is: " + signed.tx_blob + "\ntx hash is: \n" + signed.hash;
} // End of main()

async function reload() {
  window.location.reload();
}

// ************* GET PREFERED NETWORK **************

function getNet() {
  let net;
  if (document.getElementById("tn").checked)
    net = "wss://s.altnet.rippletest.net:51233";
  if (document.getElementById("dn").checked)
    net = "wss://s.devnet.rippletest.net:51233";
  if (document.getElementById("mn").checked) net = "wss://xrplcluster.com";
  return net;
} // End of getNet()

// ******************** SUBMIT TRANSACTION ONLINE ********

async function submit1() {
  let net = getNet();

  standbyResultField1.value = "Connecting to " + getNet() + "....";
  const client = new xrpl.Client(net);
  await client.connect();

  const submitonline = await client.submit(txblobField.value);

  console.log(submitonline);
  document.getElementById("standbyResultField1").value =
    "Results:" +
    "\nAccepted: " +
    submitonline.result.accepted +
    "\nEngine_result: " +
    submitonline.result.engine_result +
    "\nEngine_result_message: " +
    submitonline.result.engine_result_message +
    `\nValidated_ledger_index: ` +
    submitonline.result.validated_ledger_index +
    "\nHash: " +
    submitonline.result.tx_json.hash;

  client.disconnect();
} // End of submit1()

async function reload2() {
  window.location.reload();
}

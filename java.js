 let callSign;
 callSign = window.prompt(`Enter Your Call Sign`);





let company = "Alpha"

document.addEventListener("DOMContentLoaded", () => {
  // ─── Boot Sequence Finite Rotation ─────────────────────────────────────
  const bootMessages = [
    "Decrypting IRRG Core...",
    "Establishing Secure Link...",
    "Faction Protocols Verified.",
    "Boot Sequence Complete.",
    "Encrypted Uplink Ready.",
    "Welcome to IRRG"
  ];
  const cipherElem   = document.querySelector(".cipher-text");
  const bootSeqElem  = document.querySelector(".boot-sequence");
  let msgIndex       = 0;

  const bootInterval = setInterval(() => {
    cipherElem.textContent = bootMessages[msgIndex];
    msgIndex++;
    if (msgIndex >= bootMessages.length) {
      clearInterval(bootInterval);

      // Brief pause on final message, then fade out
      setTimeout(() => {
        bootSeqElem.classList.add("fade-out");
        bootSeqElem.addEventListener("animationend", () => {
          bootSeqElem.classList.add("hidden");
          initializeAppFeatures();
        });
      }, 1000);
    }
  }, 3000);

  // ─── Initialize Remaining Features ─────────────────────────────────────
  function initializeAppFeatures() {
    // Intel Log Simulation
    const intelLog     = document.querySelector(".intel-log");
    const intelEntries = [
      "Signal intercepted from Sector 7-G.",
      "Recon drone reports movement near Vault 9.",
      "Encrypted message received: 'The Obelisk awakens.'",
      "Command override attempted. Source: Unknown.",
      "Faction Alpha requesting backup protocols.",
      "BURNSLASH has crashed another helicopter",
      "Media Departement has started the hiring process",
    ];
    let intelIndex = 0;
    setInterval(() => {
      const entry = document.createElement("p");
      entry.textContent = `[${new Date().toLocaleTimeString()}] ${intelEntries[intelIndex % intelEntries.length]}`;
      intelLog.appendChild(entry);
      if (intelLog.children.length > 10) {
        intelLog.removeChild(intelLog.firstChild);
      }
      intelIndex++;
    }, 5000);

    // Mission Deck Interactivity
    document.querySelectorAll(".deploy-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const card    = btn.closest(".mission-card");
        const statusP = card.querySelector("p");
        statusP.textContent = "Status: Deployed";
        btn.disabled         = true;
      });
    });

    // Secure Uplink Form Handling
    const uplinkForm     = document.getElementById("uplink-form");
    const uplinkCode     = document.getElementById("uplink-code");
    const uplinkResponse = document.querySelector(".uplink-response");

    uplinkForm.addEventListener("submit", e => {
      e.preventDefault();
      const code = uplinkCode.value.trim().toUpperCase();
      let message, cssClass;

      if (code === "IRRG-ALPHA") {
        message  = "Command Accepted. Initiating Alpha Protocol...";
        cssClass = "success";
      } else if (code === "OBELISK-REVEAL") {
        message  = "Warning: Obelisk Sequence Unstable. Proceed with Caution.";
        cssClass = "warning";
      } else {
        message  = "Invalid Code. Transmission Rejected.";
        cssClass = "error";
      }

      uplinkResponse.innerHTML = `<p class="${cssClass}">${message}</p>`;
      uplinkCode.value = "";
    });
  }
});
bootSeqElem.classList.add("fade-out");
bootSeqElem.addEventListener("animationend", () => {
  bootSeqElem.classList.add("hidden");
  initializeAppFeatures();
});

// Company Panel Logic
document.querySelectorAll(".command-nav a").forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href").replace("#", "");
    const panel = document.getElementById(`company-${targetId}`);
    if (panel) {
      e.preventDefault();
      panel.classList.add("active");
    }
  });
});

document.querySelectorAll(".close-panel").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".company-panel").classList.remove("active");
  });
});

// Company Panel Logic
document.querySelectorAll(".panel-trigger").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const panel = document.getElementById(`company-${targetId}`);
    if (panel) {
      panel.classList.add("active");
    }
  });
});

document.querySelectorAll(".close-panel").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".company-panel").classList.remove("active");
  });
});

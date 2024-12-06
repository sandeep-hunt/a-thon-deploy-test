import React, { useEffect } from "react";

const SalesIQ = () => {
  useEffect(() => {
    // Check if the script already exists
    if (!document.getElementById("zsiqscript")) {
      const script1 = document.createElement("script");
      script1.textContent = `
        window.$zoho = window.$zoho || {};
        $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
      `;
      document.body.appendChild(script1);

      const script2 = document.createElement("script");
      script2.id = "zsiqscript";
      script2.src =
        "https://salesiq.zohopublic.in/widget?wc=siq7aff30607286c57e123f2ca6b319c3b599de15853a0b4059ebd19c09166e92a0";
      script2.defer = true;
      document.body.appendChild(script2);
    }
  }, []);

  return null;
};

export default SalesIQ;

import React from "react";
import DaumPostcode from "react-daum-postcode";

const Postcode = ({ AddressSetting }) => {
  const handleComplete = data => {
    let fullAddress = data.address;
    let zonecode = data.zonecode;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    return AddressSetting(fullAddress, zonecode);
  };

  return (
    <DaumPostcode
      onComplete={handleComplete}
      onClick={handleComplete}
      {...AddressSetting}
    />
  );
};
export default Postcode;

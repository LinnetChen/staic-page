

const clinicContainer = document.getElementById("container");

Clinic_info.forEach((clinic) => {
  const box = document.createElement("a");
  box.className = "box";
  box.href = clinic.href;

  const iconDiv = document.createElement("div");
  iconDiv.className = "icon";
  iconDiv.innerHTML = clinic.icon;

  const textDiv = document.createElement("div");
  textDiv.className = "text";

  const titleDiv = document.createElement("div");
  titleDiv.className = "title";
  titleDiv.innerText = clinic.title;

  const addressDiv = document.createElement("div");
  addressDiv.className = "address";
  addressDiv.innerText = clinic.address;

  textDiv.appendChild(titleDiv);
  textDiv.appendChild(addressDiv);
  box.appendChild(iconDiv);
  box.appendChild(textDiv);
  clinicContainer.appendChild(box);
});





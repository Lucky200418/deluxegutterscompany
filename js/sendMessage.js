emailjs.init("sv73JGrQ0F9AMBQSm");

function ContactUs() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  sendMail(params, "template_nlsge3t");
  cleanUpContactForm();
}

function scheduleService() {
  let params = {
    name: document.getElementById("serviceName").value,
    email: document.getElementById("serviceEmail").value,
    selectedOption: document.querySelector(".form-select").value,
    serviceDesc: document.getElementById("serviceDesc").value,
    date: document.querySelector(".datetimepicker-input").value,
  };

  sendMail(params, "template_uav1b2f");
  cleanUpServiceForm();
}

function sendMail(params, templateID) {
  emailjs.send("service_ul9tdpj", templateID, params).then((res) => {
    if ((res.text = "OK")) {
      alert("Email Sent Successfully");
      return;
    }
    alert("Email not sent");
  });
}

function cleanUpContactForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}

function cleanUpServiceForm() {
  (document.getElementById("serviceName").value = ""),
    (document.getElementById("serviceEmail").value = ""),
    (document.querySelector(".form-select").value = ""),
    (document.getElementById("serviceDesc").value = "");
  document.querySelector(".datetimepicker-input").value = "";
}

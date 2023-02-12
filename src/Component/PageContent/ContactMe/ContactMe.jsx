import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import backgroundImage from "../../../Images/road.jpg"
import backgroundImage2 from "../../../Images/mb.jpg"
import OpenMap from './OpenMap';
import Button from '@mui/material/Button';

function ContactMe() {
  const [showPermanentAddressMap, setshowPermanentAddressMap] = useState(false);
  const [sender, setsender] = useState("");
  const [senderName, setsenderName] = useState("");
  const [subject, setsubject] = useState("");
  const [comment, setcomment] = useState("");
  const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  const [emailValidation, setemailValidation] = useState(false);
  const [successMailSend, setsuccessMailSend] = useState(false);
  const [nameError, setnameError] = useState(false);
  const [subjectError, setsubjectError] = useState(false);
  const [commentError, setcommentError] = useState(false);

  const token = "5816a64e-15ec-4ede-a638-2ef7a684e526"

  // const config = {
  //   Username:"gaurav82644@gmail.com",
  //   Password:"316B3B3A0F1D529ACC2EFB8C3FF6C865B414",
  //   Host:"smtp.elasticemail.com",
  //   Port:"2525",
  //   To : 'them@website.com',
  //   From : "you@isp.com",
  //   Subject : "This is the subject",
  //   Body : "And this is the body"
  // }



  const SendMail = (e) => {
    e.preventDefault()
    const config = {
      SecureToken: token,
      To: ["gaurav82692@gmail.com", sender],
      From: "gaurav82644@gmail.com",
      Subject: `Portfolio response ${senderName} - ${subject}`,
      Body: comment
    }
    if (window.Email) {
      window.Email.send(config).then(
        message => {
          // alert(message)
          setsuccessMailSend(true)
        }
      );
    }

  }


  return (

    <>
      <div>
        <center><p style={{ fontFamily: "cursive", marginTop: "3%", fontWeight: "bold", fontSize: "30px" }}>Get in Touch</p></center>
        <center><p style={{ fontFamily: "monospace", marginTop: "1%" }}>HERE ARE MY CONTACT DETAILS</p></center>


      </div>
      <Grid container item spacing={2} style={{ padding: '1rem 2rem 1rem 2rem' }}>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>


          <div style={{
            backgroundImage: `url(${backgroundImage2})`,
            // height: "60vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "25px"

            // background: "black",


          }}>
            <div style={{ color: "#fff", padding: "12.5%" }}>



              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <center style={{ border: "1% solid white" }}>
                      <h4 style={{ color: "#fff" }}> Permanent Address</h4>
                      <div onClick={() => { setshowPermanentAddressMap(!showPermanentAddressMap) }}>
                        <svg fill="#cd2353" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 395.71 395.71" space="preserve" stroke="#cd2353"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path> </g> </g></svg>
                      </div>
                      <p>Vill- Basaratpur Post Adalpura <br></br>Chunar Mirzapur 231304, Uttar Predesh</p>

                      <OpenMap link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7223.158337568321!2d82.87755257507038!3d25.14991464742503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fcae6474f1737%3A0xcf98aeac692d71d7!2sBasaratpur%2C%20Uttar%20Pradesh%20231304!5e0!3m2!1sen!2sin!4v1676134289479!5m2!1sen!2sin" />
                    </center>
                  </div>

                  <div class="carousel-item">
                    <center>
                      <h4 style={{ color: "#fff" }}> Current Address</h4>
                      <div onClick={() => { setshowPermanentAddressMap(!showPermanentAddressMap) }}>
                        <svg fill="#cd2353" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 395.71 395.71" space="preserve" stroke="#cd2353"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path> </g> </g></svg>
                      </div>
                      <p>4th main, 6th Cross Rd, GM Palya<br></br> C V Raman Nagar, Bengaluru, Karnataka 560075</p>


                      <OpenMap link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775.881721835371!2d77.66147072450843!3d12.975634368319778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11576716f9a5%3A0xacac113c1a910d14!2sGM%20Palya%2C%20C%20V%20Raman%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1676134218678!5m2!1sen!2sin" />

                    </center>


                  </div>
                  <br></br>
                  <div >
                    <center>
                      <div style={{ margin: "1%" }}>
                        <h5>
                          <svg height="20px" width="20px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" space="preserve" fill="#fcfcfc"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path class="st0" d="M341.601,0H170.399c-29.292,0-53.121,23.828-53.121,53.121v405.756c0,29.292,23.83,53.123,53.121,53.123 h171.202c29.292,0,53.121-23.83,53.121-53.119V53.121C394.722,23.828,370.893,0,341.601,0z M234.91,453.434 c0-0.536,0.452-0.988,0.988-0.988H276.1c0.536,0,0.988,0.452,0.988,0.988v13.684c0,0.536-0.452,0.988-0.988,0.988h-40.202 c-0.536,0-0.988-0.452-0.988-0.988V453.434z M277.088,429.684c0,0.536-0.452,0.988-0.988,0.988h-40.202 c-0.536,0-0.988-0.452-0.988-0.988V416c0-0.534,0.452-0.984,0.988-0.984H276.1c0.536,0,0.988,0.45,0.988,0.984V429.684z M277.088,392.25c0,0.545-0.443,0.988-0.988,0.988h-40.202c-0.546,0-0.988-0.442-0.988-0.988v-13.68 c0-0.536,0.452-0.988,0.988-0.988H276.1c0.536,0,0.988,0.452,0.988,0.988V392.25z M255.999,351.476 c-13.461,0-24.414-10.951-24.414-24.412c0-13.462,10.953-24.416,24.414-24.416c13.463,0,24.416,10.953,24.416,24.416 C280.415,340.524,269.462,351.476,255.999,351.476z M170.397,36.304h171.202c10.004,0,18.142,8.137,18.142,18.144v225.136H152.257 V54.449C152.257,44.441,160.395,36.304,170.397,36.304z M211.35,315.983v22.162h-43.742l-13.906-22.162H211.35z M203.025,429.684 c0,0.536-0.452,0.988-0.986,0.988h-40.204c-0.534,0-0.986-0.452-0.986-0.988V416c0-0.542,0.443-0.984,0.986-0.984h40.204 c0.544,0,0.986,0.443,0.986,0.984V429.684z M203.025,392.25c0,0.545-0.442,0.988-0.986,0.988h-40.204 c-0.543,0-0.986-0.442-0.986-0.988v-13.68c0-0.536,0.452-0.988,0.986-0.988h40.204c0.534,0,0.986,0.452,0.986,0.988V392.25z M160.849,467.118v-13.684c0-0.536,0.452-0.988,0.986-0.988h40.204c0.534,0,0.986,0.452,0.986,0.988v13.684 c0,0.536-0.452,0.988-0.986,0.988h-40.204C161.302,468.106,160.849,467.654,160.849,467.118z M358.295,315.983l-13.905,22.162 h-43.742v-22.162H358.295z M351.151,429.684c0,0.536-0.452,0.988-0.988,0.988h-40.202c-0.536,0-0.988-0.452-0.988-0.988V416 c0-0.542,0.443-0.984,0.988-0.984h40.202c0.546,0,0.988,0.443,0.988,0.984V429.684z M351.151,392.25 c0,0.545-0.442,0.988-0.988,0.988h-40.202c-0.545,0-0.988-0.442-0.988-0.988v-13.68c0-0.536,0.452-0.988,0.988-0.988h40.202 c0.536,0,0.988,0.452,0.988,0.988V392.25z M308.973,467.118v-13.684c0-0.536,0.452-0.988,0.988-0.988h40.202 c0.536,0,0.988,0.452,0.988,0.988v13.684c0,0.536-0.452,0.988-0.988,0.988h-40.202 C309.425,468.106,308.973,467.654,308.973,467.118z"></path> </g> </g></svg>
                          +918960880615</h5>
                      </div>
                      <div style={{ margin: "1%" }}>
                        <h5>
                          <svg height="25px" width="22px" fill="#f5f4f4" viewBox="0 0 20 5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" style={{ marginRight: "1%" }} stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15 2.5H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-1.3 1.25L8.42 8.56a.62.62 0 0 1-.84 0L2.3 3.75zm-12.45 8.5V4.48l5.49 5a1.86 1.86 0 0 0 2.52 0l5.49-5v7.77z"></path></g></svg>
                          gaurav82692@gmail.com
                        </h5>
                      </div>
                    </center>
                    <br></br>


                  </div>
                  <br></br>
                  <br></br>
                  <span style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <svg height="40px" width="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.65 7.2H16.66M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z" stroke="#f7f7f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <svg height="40px" width="40px" fill="#f7f7f7" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1643.825 518.606c-14.457 11.294-22.588 28.8-21.685 47.096.565 16.377 1.017 32.753 1.017 49.355 0 530.372-373.497 1079.153-998.513 1079.153-122.203 0-242.598-24.282-355.765-71.153 136.433-22.588 266.428-82.447 374.965-173.816 17.957-15.247 24.62-39.868 16.828-62.005-7.793-22.136-28.574-37.157-52.179-37.722-105.374-2.146-200.81-62.682-256.376-157.214 38.06-1.13 79.059-7.116 109.779-16.038 24.847-7.228 41.562-30.381 40.771-56.132-.903-25.863-19.2-47.774-44.499-53.308-112.15-24.282-194.71-116.781-222.607-243.84 32.076 6.438 62.344 8.47 79.06 8.922 24.62 2.711 47.322-14.456 55.453-38.06 8.02-23.492-.226-49.582-20.442-64.151-78.042-56.245-161.619-161.167-161.619-286.42 0-30.832 3.84-61.326 11.181-90.804 195.163 217.186 461.478 348.31 743.83 363.558 18.975 1.016 34.674-6.438 46.08-19.765 11.408-13.327 15.926-31.398 12.312-48.565-5.648-25.637-8.471-52.178-8.471-79.058 0-188.951 141.063-342.664 314.428-342.664 87.19 0 168.283 37.835 228.141 106.73 13.327 15.36 34.334 22.475 54.212 18.183 28.687-6.099 56.922-13.779 84.706-23.153-16.49 16.715-34.673 31.624-54.438 44.386-22.25 14.343-31.51 42.014-22.475 66.861s34.56 39.868 60.31 36.593c14.683-1.92 29.252-4.179 43.709-7.002-18.297 17.731-37.497 34.447-57.713 50.033m261.685-199.68c-16.716-18.636-43.596-23.83-66.41-13.214-4.066 1.92-8.132 3.84-12.31 5.76 17.054-30.269 30.946-62.683 40.997-96.678 6.777-22.588-1.242-46.984-20.103-61.214-18.974-14.118-44.5-15.247-64.49-2.485-58.277 37.384-120.96 64.828-186.466 82.108-78.268-76.8-181.948-120.17-289.355-120.17-235.595 0-427.37 204.424-427.37 455.606 0 9.487.227 18.974.791 28.348C626 564.008 390.517 424.977 226.64 208.469c-11.52-15.247-30.155-23.04-49.242-22.136-19.2 1.468-36.367 12.536-45.516 29.477-37.157 68.894-56.809 147.614-56.809 227.464 0 86.626 28.687 165.007 70.25 230.739-19.426 9.035-32.98 28.574-32.98 51.388v5.195c0 139.821 49.808 261.91 133.497 344.47-9.035 2.937-17.28 8.246-23.943 15.36a56.566 56.566 0 0 0-12.537 54.326c40.772 136.997 137.788 242.145 258.41 289.807-122.88 69.571-268.688 97.129-404.443 80.753-26.541-3.953-50.485 11.858-59.633 36.028-9.261 24.282-.677 51.84 20.781 66.522 179.69 123.784 387.276 189.29 600.17 189.29 695.717 0 1111.454-606.156 1111.454-1192.095 0-8.583-.113-17.054-.339-25.524 68.555-57.149 127.51-125.365 175.737-203.069 13.214-21.345 10.842-48.903-5.986-67.538" fill-rule="evenodd"></path> </g></svg>
                    <svg height="40px" width="40px" fill="#f7f7f7" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"></path> <rect x="-8.5" y="348.4" width="49.9" height="159.7"></rect> <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"></path> <path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z"></path> </g> </g></svg>
                    <svg height="40px" width="40px" fill="#f7f7f7" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M-143,145v512h512V145H-143z M339,627h-452V175h452V627z"></path> <path d="M77.7,528.9h49.6v-133h39.3l2.9-38.3h-42.2v-29.9c0-10.3,9.2-14,19.5-14s21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8 c-20.5,0-32.4,7.8-41.1,19.3c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H51.2v38.3h26.5V528.9z"></path> </g> </g></svg>
                  </span>
                </div>
              </div>
            </div>

          </div>



        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>


          <div style={{
            backgroundImage: `url(${backgroundImage2})`,
            // height: "60vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "25px"

            // background: "black",


          }}>
            <div style={{ color: "#fff", padding: "10%" }}>
              <div class="form-floating">
                <label for="floatingTextarea2">Name</label>
                <textarea class="form-control" onChange={(e) => {
                  setnameError(false)
                  setsenderName(e.target.value)
                }} placeholder="Enter Name" id="floatingTextarea2" style={{ height: "40px" }}></textarea>
                {nameError && <p style={{ color: "red", fontSize: "0.8rem", fontStyle: "italic" }}>Please enter a name</p>}
              </div>
              <div class="form-floating">
                <label for="floatingTextarea2">Email</label>
                <textarea class="form-control" onChange={(e) => {
                  if (emailRegex.test(e.target.value)) {
                    setsender(e.target.value)
                    setemailValidation(false)
                  } else {
                    setemailValidation(true)
                  }
                }} placeholder="Enter Email id" id="floatingTextarea2" style={{ height: "40px" }}></textarea>

                {emailValidation && <p style={{ color: "red", fontSize: "0.8rem", fontStyle: "italic" }}>Please enter a valid mail</p>}
              </div>
              <div class="form-floating">
                <label for="floatingTextarea2">Subject</label>
                <textarea class="form-control" onChange={(e) => {
                  setsubjectError(false)
                  setsubject(e.target.value)
                }} placeholder="Enter Subject" id="floatingTextarea2" style={{ height: "40px" }}></textarea>
                {subjectError && <p style={{ color: "red", fontSize: "0.8rem", fontStyle: "italic" }}>Please enter subject</p>}
              </div>

              <div class="form-floating">
                <label for="floatingTextarea2">Comments</label>
                <textarea class="form-control" onChange={(e) => {
                  setcommentError(false)
                  setcomment(e.target.value)
                }} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                {commentError && <p style={{ color: "red", fontSize: "0.8rem", fontStyle: "italic" }}>Please enter some email content</p>}
              </div>
              <center><Button style={{ background: "#fff", background: successMailSend ? "greenyellow" : "#fff", color: successMailSend ? "black" : "grey", borderRadius: "5px", marginTop: "10%" }}
                onClick={(e) => {
                  if (senderName.length === 0) {
                    setnameError(true)
                  }
                  if (subject.length === 0) {
                    setsubjectError(true)
                  }
                  if (comment.length === 0) {
                    setcommentError(true)
                  }
                  if (sender.length === 0) {
                    setemailValidation(true)
                  }
                  if (senderName.length !== 0 && subject.length !== 0 && comment.length !== 0 && !emailValidation) {
                    SendMail(e)
                  }
                }}
              // disabled={!(senderName.length !== 0 && subject.length !== 0 && comment.length !== 0 && !emailValidation)}
              >{successMailSend ? "mail Sent Successfull" : "Send Email"}</Button></center>

            </div>

          </div>



        </Grid>

      </Grid>

    </>
  )
}

export default ContactMe

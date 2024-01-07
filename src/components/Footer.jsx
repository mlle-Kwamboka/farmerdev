import logo from "/assets/logo.png";

const Footer = () => {
  return (
    <div className="py-[40px] text-[#333333] text-base">
      <div className="flex gap-[102px] font-poppins">
        <div className="ml-[129px]">
          <img className="mb-5" src={logo} alt="Logo in black" style={{ width: '50px' }} />
          <p>
            Leading the Way in agriculture
          </p>
        </div>
        <ul>
          <h3 className="mb-5 font-semibold text-lg">Quick Links</h3>
          <li>Appointment</li>
          <li>Specialists</li>
          <li>Services</li>
          <li>About us</li>
        </ul>
        <ul>
          <h3 className="mb-5 font-semibold text-lg">Contact Us</h3>
          <li>Call: (254) 7123-456-789</li>
          <li>Email: admin@orchard.com</li>
        </ul>
      </div>
      <hr className="border border-[#E2E2E2] mt-[40px] ml-[129px]" />
      <p className="ml-[129px] mt-[40px]">
        © 2024 Orchard Farm. All Rights Reserved{" "}
      </p>
    </div>
  );
};

export default Footer;

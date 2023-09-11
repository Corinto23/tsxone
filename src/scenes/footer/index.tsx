import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Elevate your fitness journey with us. Explore diverse classes,
            expert trainers, and top-tier facilities. Join now for a healthier,
            fitter you. Contact us to get started today!
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">About Us</p>
          <p className="my-5">Services</p>
          <p>FAQ</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Corinto 13:4-7</p>
          <p>(777)47-11-7</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

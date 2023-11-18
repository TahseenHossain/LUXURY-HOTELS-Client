import React, { useState } from "react";
import Swal from "sweetalert2";

const Footer = () => {
  const [email, setEmail] = useState([]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);

    try {
      const response = await fetch("https://luxury-hotels-server.vercel.app/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Subscription successful",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Failed!",
        text: "Subscription Failed",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <footer className="footer p-10 bg-[#14274A] text-[#FFFFFF]">
      <nav>
        <header className="footer-title text-3xl">LUXURY</header>
        <header className="footer-title text-3xl">HOTELS</header>
      </nav>
      <form onSubmit={handleSubscribe}>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative border-[#E0B973]">
            <input
              type="email"
              name="email"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16 text-black"
            />
            <button className="btn bg-[#E0B973] hover:bg-[#c0c0c0] absolute top-0 right-0 rounded-l-none text-white">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;

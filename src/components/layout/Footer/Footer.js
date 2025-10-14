import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

// ========================
// Config / Variables
// ========================
const companyInfo = {
  phone: ["+91 63531 01979", "+91 90330 13137"],
  email: "vincitoregroup07@gmail.com",
  socialLinks: {
    whatsapp: "https://wa.me/916353101979",
    facebook: "https://www.facebook.com/share/19o7C1AuQ1/?mibextid=wwXIfr",
    instagram:
      "https://www.instagram.com/_vincitore_group_?igsh=MTltMHN0anFyZGo2Yw==",
  },
  locations: [
    {
      name: "VINCITORE SKY",
      place: "HANSPURA",
      link: "https://maps.app.goo.gl/Wjc85esBrmo8j6Hb8?g_st=ic",
    },
    {
      name: "VINCITORE RIVERA",
      place: "NEW VASTRAL",
      link: "https://maps.app.goo.gl/vq8LQWbmZNA6xWvs7?g_st=ic",
    },
    {
      name: "VINCITORE VINTAGE",
      place: "NEW VASTRAL",
      link: "https://maps.app.goo.gl/DDyocf9Gm6vTXzgW7?g_st=ic",
    },
    {
      name: "VINCITORE VALLEY",
      place: "HATHIJAN",
      link: "https://maps.app.goo.gl/hUSfETw6nMcFB7Dz7?g_st=ic",
    },
    {
      name: "THE 7 VINCITORE",
      place: "NEW VATVA",
      link: "https://maps.app.goo.gl/md4ctSWma57Lr4Ci8",
    },
    {
      name: "SHIVALAY BUNGLOWS",
      place: "Naroda Dehgam Highway, Raipur",
      link: "https://maps.app.goo.gl/KkoucFZacN66LS9g9",
    },
  ],
};

// ========================
// Location Icon
// ========================
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    viewBox="0 -960 960 960"
    width="20px"
    fill="#B97D00"
  >
    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
  </svg>
);

// ========================
// Footer Component
// ========================
const Footer = () => {
  return (
    <footer className="text-black-2">
      {/* Top Section */}
      <div className="bg-gold-lighter-2 py-10 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Head Office */}
        <div className="flex-1">
          <h3 className="font-semibold text-gold-dark mb-3 text-lg md:text-xl">
            Head Office
          </h3>
          <ul className="space-y-2 text-sm md:text-lg">
            {companyInfo.locations.map((loc) => (
              <li key={loc.name} className="flex">
                <Link
                  href={loc.link}
                  className="underline flex items-center gap-1 hover:text-gold-dark transition-all ease-in uppercase"
                  target="_blank"
                >
                  <div>{loc.name}</div> <LocationIcon /> <div>{loc.place}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h3 className="font-semibold text-gold-dark mb-3 text-lg md:text-xl">
            Contact to Vincitore Group
          </h3>
          <p className="mb-2 text-base md:text-lg">
            {companyInfo.phone.map((number, index) => (
              <a
                key={index}
                href={`tel:${number}`}
                className="hover:underline block underline hover:text-gold-dark transition-all ease-in"
              >
                {number}
              </a>
            ))}
          </p>
          <p className="mb-4 text-base md:text-lg">
            <a
              href={`mailto:${companyInfo.email}`}
              className="hover:underline underline hover:text-gold-dark transition-all ease-in"
            >
              {companyInfo.email}
            </a>
          </p>

          {/* Socials */}
          <h3 className="font-semibold text-gold-dark mb-2 text-lg md:text-xl">
            Follow us
          </h3>
          <div className="flex gap-4 text-2xl md:text-2xl">
            <a
              href={companyInfo.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-dark transition-all ease-in"
            >
              <FaWhatsapp />
            </a>
            <a
              href={companyInfo.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-dark transition-all ease-in"
            >
              <FaFacebookF />
            </a>
            <a
              href={companyInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-dark transition-all ease-in"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gold-lighter py-8 px-6 flex flex-col md:flex-row items-center justify-center gap-3 text-center">
        <Image
          src="/vincitore-golden.svg"
          alt="Vincitore Logo"
          width={100}
          height={40}
          className="h-15 w-auto"
        />
        <div>
          <p className="text-lg md:text-xl font-medium">
            © 2025 Vincitore Group
          </p>
          <div className="flex justify-center items-center gap-5 text-sm md:text-base">
            <Link href="#" className="underline hover:text-gold-dark">
              Privacy Policy
            </Link>
            <Link href="#" className="underline hover:text-gold-dark">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

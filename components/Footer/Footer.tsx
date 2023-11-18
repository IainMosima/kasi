import { Images } from "@/constants";
import Image from "next/image";
import "./Footer.scss";
import Link from "next/link";
const links = {
  sitemaps: [
    {
      name: 'Homepage',
      link: '/'
    },
    {
      name: 'Pricing',
      link: '/pricing'
    },
    {
      name: 'Contact Us',
      link: '/contact-us'
    },
    {
      name: 'Sign Up',
      link: '/sign-up'
    },
    {
      name: 'Log In',
      link: '/log-in'
    },
  ],
  socials: [
    {
      name: 'Facebook',
      link: 'www.facebook.com'
    },
    {
      name: 'Twitter',
      link: 'www.twitter.com'
    },
    {
      name: 'Instagram',
      link: 'www.instagram.com'
    },
  ]
}
const Footer = () => {
  return (
    <div className="grid grid-cols-4 font-manrope place-items-stretch sm:gap-x-3 gap-x-[.3rem] py-[2rem] px-[1rem]">
      <div className="flex flex-col gap-3 w-full justify-end  ">
        <h2 className="text-left ml-[8%] font-manrope font-bold">KASI</h2>
        <Image src={Images.blackStripes} width={200} alt='black-stripes' />
      </div>

      <div className="flex flex-col gap-3 w-full h-full justify-start place-items-start">
        <h4 className="text-left font-manrope font-bold">SITEMAP</h4>
        <div className="flex flex-col place-items-start gap-2">
          {links.sitemaps.map(link => (
            <Link key={link.name} href={link.link} className="text-sm font-semibold">{link.name}</Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full h-full justify-start place-items-start">
        <h4 className="text-left font-manrope font-bold">SOCIAL</h4>
        <div className="flex flex-col place-items-start gap-2">
          {links.socials.map(link => (
            <Link key={link.name} href={link.link} className="text-sm font-semibold">{link.name}</Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full h-full justify-start place-items-start">
        <h4 className="text-left font-manrope font-bold">CONTACT</h4>
        <div className="flex flex-col gap-1">
          <p className="text-grey font-semibold text-[.9rem] ">Email</p>
          <p className="text-sm font-semibold">kasi@aplus-africa.com</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-grey font-semibold text-[.9rem] ">Call Us</p>
          <p className="text-sm font-semibold">+254 779 222777</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-grey font-semibold text-[.9rem] ">Location</p>
          <p className="text-sm sm:w-[80%] font-semibold">Visit Us on 8th Floor, PineTree Plaza, Along Kindaruma Road, Kilimani</p>
        </div>

      </div>


    </div>
  )
}

export default Footer
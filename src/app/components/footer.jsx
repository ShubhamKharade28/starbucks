import Image from 'next/image';
import Logo from '@/app/images/logo.png';
import Instagram from '@/app/images/instagram.svg';
import Facebook from '@/app/images/facebook.svg';
import Twitter from '@/app/images/twitter.svg';
import appstoreIos from '@/app/images/appstoreiOS.png';
import appstoreAndroid from '@/app/images/appstoreAndroid.png';

const Footer = () => {
    return (
        <div className="extradarkgreen-bg w-full py-28 px-28 flex justify-evenly text-white">
            <div className="w-14 mr-28">
                <Image src={Logo} className="w-full h-auto"/>
            </div>
            <div className="footer-column">
                <h2>About us</h2>
                <span>Coffeehouse</span>
                <span>Our Heritage</span>
                <span>Our Company</span>
            </div>
            <div className="footer-column">
                <h2>Responsibility</h2>
                <span>Community</span>
                <span>Ethical Sourcing</span>
                <span>Environmental <br />Stewardship</span>
            </div>
            <div className="footer-column">
                <h2>Quick Links</h2>
                <span>Privacy Policy</span>
                <span>Starbucks Rewards Day Offer</span>
                <span>Delivery</span>
                <span>Season's Gifting</span>
                <span>Careers</span>
                <span>Customer Service</span>
                <span>FAQs</span>
                <span>Offer for Beverage Subscription at Starbucks</span>
                <span>Terms and Conditions</span>
                <span>Starbucks India Mobile App Terms of Use</span>
            </div>
            <div className="footer-column">
                <h2>Social Media</h2>
                <div className="flex gap-2 items-center h-8 w-full">
                    <Image src={Instagram} className="w-auto h-full"/>
                    <Image src={Facebook} className="w-auto h-full"/>
                    <Image src={Twitter} className="w-auto h-full"/>
                </div>
            </div>
            <div className="footer-column">
                <Image src={appstoreIos} height={150}/>
                <Image src={appstoreAndroid} height={150}/>
            </div>
        </div>
    )
}

export default Footer;
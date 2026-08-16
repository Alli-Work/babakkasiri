import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faAward, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


const quickLinks = [["خانه", "/"],["درباره ما", "/aboutUs"], ["محصولات", "/Products"], ["تماس با ما", "/contactus"]];
const Links = ["خانه", "درباره ما", "محصولات", "تماس با ما"];
const footerProducts = [["دی کلسیم فسفات (DCP)", "/Products/dcp/"],["مونو کلسیم فسفات (MCP) ", "/Products/mcp/"]];

const Footer = () => {
    
  return (
    
    <footer
    id="contact"
    dir="rtl"
    lang="fa"
    className="bg-base text-white    left-0 w-full   bottom-0"
    >
    
    <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ۱۴۰۵ — بابک کثیری، وکیل دادگستری | اصفهان، خیابان نواب صفوی
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-2 pb-6 text-center text-sm text-gray-400">
            تماس: ۰۹۱۳۲۶۶۹۹۷۹
        </div>
      </div>
</footer>    
  );
}
 
export default Footer;

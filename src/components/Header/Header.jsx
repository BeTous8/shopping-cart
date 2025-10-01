import { Link } from "react-router-dom";
import { Store } from "lucide-react";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Store size={32} color="#4692daff" />
                <h3>ModernShop</h3>
            </div>
            <div className="navBar">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/shop'}>Shop</Link></li>
                    <li><Link to={'/cart'}>Cart</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
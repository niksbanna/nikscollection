import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../Assests/crown.svg';
import { auth } from '../../Firebase/Firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const Header = ({ currentUser, hidden }) => {
    const memoCurrentUser = useMemo(() => currentUser, [currentUser]);
    const memoHidden = useMemo(() => hidden, [hidden]);
    return (
        <div className='header'>
            <Link to='/' className='logo-container' >
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className='option' to='/'>HOME</Link>
                {
                    memoCurrentUser ?
                        <div className='option' onClick={() => { auth.signOut(); }}>
                            SIGN OUT
                        </div>
                        : <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {memoHidden ? null : <CartDropdown />}
        </div>
    )
}
    ;

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);

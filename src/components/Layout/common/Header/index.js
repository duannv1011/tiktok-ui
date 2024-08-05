import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Logo from '~/assets/images/logo.js';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '../../../Popper';
import Account from '../../../AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Logo />
                </div>
                <div className={cx('search')}>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-tilte')}>Accounts</h4>
                                    <Account />
                                    <Account />
                                    <Account />
                                    <Account />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <input
                            placeholder="search account and video"
                            spellCheck={false}
                            onChange={(e) => {
                                const value = e.target.value;
                                setSearchResult(value);
                            }}
                        />
                    </Tippy>

                    <button className={cx('search-clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />

                    <Tippy content="Search" placement="right">
                        <button className={cx('search-button')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </Tippy>
                </div>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;

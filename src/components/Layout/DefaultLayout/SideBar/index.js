import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function SideBar() {
    return <aside className={cx('wrapper')}>SIdebar</aside>;
}

export default SideBar;

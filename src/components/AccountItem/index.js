import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/269710786_454500506043807_5284054475954552356_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OaEwTznrai8AX8oQPR4&_nc_ht=scontent.fhan20-1.fna&oh=00_AfAf_AaZSEP_kaR65OqxBQ6TvTz_PPdRP4DBiHQLLAwO1Q&oe=65364AEE" alt="avata"></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyenanh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenanh</span>
            </div>
        </div>
    );
}

export default AccountItem;
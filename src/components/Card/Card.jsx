import clsx from 'clsx';
import css from './Card.module.css';
import Button from '../Button/Button';
import { FaBeer } from 'react-icons/fa';
import { AiFillRightCircle } from 'react-icons/ai';

import someImg from '../../assets/react.svg';

const isOnline = false;
const isClass = false;

const Card = ({ name, email, phone, children }) => {
  // const classNames = [css.container];
  // if (isOnline) {
  //   classNames.push(css.online);
  // }
  //?? Ванільний сss
  // const classNames= ['container']
  // if (isOnline) {
  //   classNames.push('online')
  // }
  //?? Бібліотеки
  const classNames = clsx(
    css.container,
    isOnline ? css.Online : css.offlineClass,
    css.class1,
    css.class2,
    isClass && css.class3
  );
  // console.log('clsx:>> ', clsx('a'.isOnline ? 'b' : 'c'));
  return (
    <>
      <Button variant="primary">
        <p className={css.description}>asdsad</p>
      </Button>
      <FaBeer />
      <img src={someImg} alt="" />
      <AiFillRightCircle size={40} className={css.icon} />
      <div
        //!! Інлайн-стилі не використовуємо
        // style={{ backgroundColor: 'red', textDecoration: 'underline', padding: '20px' }}
        //?? Ванільний сss
        // className="container"
        className={classNames}
      >
        <h2 className={css.title}>Name: {name}</h2>
        <hr />
        <div>
          {email && <p>Email: {email}</p>}
          <p className={css.description}>phone: {phone}</p>
        </div>
        {children}
      </div>
      <Button text="asd" variant="secondary" />
      <hr />
    </>
  );
};

export default Card;

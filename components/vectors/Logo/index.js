import React from 'react';
import styles from './logo.module.css';
import PropTypes from 'prop-types';

const Logo =  ({width, height}) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" height={height} width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.59 37.14">
        <path className={`${styles['cls-1']}`} d="M35.48,16a2.39,2.39,0,0,0-2-.93c-1.17,0-1.74.49-1.74,1.11s.87.94,1.88,1.06c1.75.22,3.38.67,3.38,2.67s-1.66,2.68-3.53,2.68c-1.71,0-3-.53-3.66-2.06l1.32-.69a2.39,2.39,0,0,0,2.37,1.33c1,0,1.93-.34,1.93-1.26s-.83-1.11-1.95-1.23c-1.71-.21-3.3-.66-3.3-2.54s1.71-2.44,3.26-2.45a3.38,3.38,0,0,1,3.29,1.67Z"/><path className={`${styles['cls-1']}`} d="M43.2,16.44h1.4v5.91H43.22l-.07-.86a2.25,2.25,0,0,1-1.92,1,2.85,2.85,0,0,1-3-3.14,2.87,2.87,0,0,1,3.08-3.09,2.16,2.16,0,0,1,1.88,1Zm-3.55,2.95a1.69,1.69,0,0,0,1.75,1.8,1.8,1.8,0,0,0,0-3.59A1.68,1.68,0,0,0,39.65,19.39Z"/><path className={`${styles['cls-1']}`} d="M46.32,22.35V17.81h-1.1V16.52h1.1v-.39a2.15,2.15,0,0,1,2.26-2.32,2.87,2.87,0,0,1,1.53.48l-.54,1.09a1.65,1.65,0,0,0-.9-.31c-.5,0-.88.34-.88,1.06v.39h1.73v1.29H47.79v4.54Z"/><path className={`${styles['cls-1']}`} d="M51.93,19.92c.09.73.73,1.26,1.76,1.26a2.46,2.46,0,0,0,1.58-.55l.94.92a3.64,3.64,0,0,1-2.54,1,3,3,0,0,1-3.25-3.16,3,3,0,0,1,3.14-3.09c2,0,3.21,1.22,3,3.66Zm3.21-1.21a1.35,1.35,0,0,0-1.53-1.15A1.59,1.59,0,0,0,52,18.71Z"/><path className={`${styles['cls-1']}`} d="M65.39,16a2.41,2.41,0,0,0-2-.93c-1.18,0-1.74.49-1.74,1.11s.86.94,1.87,1.06c1.75.22,3.38.67,3.38,2.67s-1.65,2.68-3.52,2.68c-1.72,0-3-.53-3.66-2.06l1.32-.69a2.38,2.38,0,0,0,2.36,1.33c1,0,1.93-.34,1.93-1.26s-.83-1.11-1.94-1.23c-1.72-.21-3.3-.66-3.3-2.54s1.7-2.44,3.25-2.45a3.39,3.39,0,0,1,3.3,1.67Z"/><path className={`${styles['cls-1']}`} d="M68.15,24.82V16.44h1.37l.09.82a2.36,2.36,0,0,1,1.92-1,3,3,0,0,1,3,3.09,2.89,2.89,0,0,1-3,3.1,2.42,2.42,0,0,1-2-.84v3.16ZM73.1,19.4a1.68,1.68,0,1,0-3.35,0,1.68,1.68,0,1,0,3.35,0Z"/><path className={`${styles['cls-1']}`} d="M80.34,16.44h1.4v5.91H80.36l-.07-.86a2.25,2.25,0,0,1-1.92,1,2.85,2.85,0,0,1-3-3.14,2.87,2.87,0,0,1,3.08-3.09,2.16,2.16,0,0,1,1.88,1Zm-3.55,2.95a1.69,1.69,0,0,0,1.75,1.8,1.8,1.8,0,0,0,0-3.59A1.68,1.68,0,0,0,76.79,19.39Z"/><path className={`${styles['cls-1']}`} d="M88.19,21.6a3.06,3.06,0,0,1-2.28.93,2.93,2.93,0,0,1-3.14-3.13,2.93,2.93,0,0,1,3.14-3.13,2.78,2.78,0,0,1,2.13.88l-.92,1a1.81,1.81,0,0,0-1.19-.47,1.66,1.66,0,0,0-1.7,1.75,1.61,1.61,0,0,0,1.68,1.73,1.76,1.76,0,0,0,1.29-.49Z"/><path className={`${styles['cls-1']}`} d="M90.33,19.92c.09.73.73,1.26,1.76,1.26a2.46,2.46,0,0,0,1.58-.55l.94.92a3.65,3.65,0,0,1-2.55,1,3,3,0,0,1-3.25-3.16A3,3,0,0,1,92,16.26c2,0,3.21,1.22,3,3.66Zm3.21-1.21A1.36,1.36,0,0,0,92,17.56a1.58,1.58,0,0,0-1.65,1.15Z"/><path className={`${styles['cls-2']}`} d="M24.48,24.17H12.62V12.32H24.48Zm-10.86-1h9.86V13.32H13.62Z"/>
        </svg>
    )
}

Logo.defaultProps = {
    height: 38,
    width: 107
}

Logo.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number
}

export default Logo;

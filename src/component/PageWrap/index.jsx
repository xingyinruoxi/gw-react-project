import React from 'react';
import './style.less';
export default props => {
	return <article className={`page${props.pageName ? ' ' + props.pageName : ''}`}>{props.children}</article>;
};

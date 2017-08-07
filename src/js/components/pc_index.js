import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsContainer from './pc_newscontant';
import {BackTop} from 'antd';

export default class PCIndex extends React.Component {
	componentDidMount() {	
			document.title = "React News | React 驱动的新闻平台";
	};
	render() {
		return (
			<div>
				<PCHeader></PCHeader>
				<PCNewsContainer></PCNewsContainer>
				<PCFooter></PCFooter>
				<BackTop/>
			</div>
		);
	};
}

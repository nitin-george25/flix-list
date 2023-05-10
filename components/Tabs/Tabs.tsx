import React, { FunctionComponent, useState } from 'react';
import { Tab } from '../../types';

interface Props {
	tabItems: Tab[];
	activeTab?: Tab;
	onTabChange: Function;
}

const Tabs: FunctionComponent<Props> = ({
	tabItems,
	activeTab,
	onTabChange = () => {},
}) => {
	const [selectedTab, setSelectedTab] = useState(activeTab ?? tabItems[0]);

	const handleTabChange = (tab: Tab) => {
		setSelectedTab(tab);
		onTabChange(tab);
	};

	const activeClass = 'text-primary border-b-2 border-primary';
	const inactiveClass = 'text-neutral-2 font-light';

	return (
		<div className='tabs flex gap-8 mb-8'>
			{tabItems.map((item, index) => (
				<h3
					className={`text-xl p-1 cursor-pointer ${
						item.key === selectedTab.key ? activeClass : inactiveClass
					}`}
					key={`${item.key}`}
					onClick={() => handleTabChange(item)}
				>
					{item.displayText}
				</h3>
			))}
		</div>
	);
};

export default Tabs;

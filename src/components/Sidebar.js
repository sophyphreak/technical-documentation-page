import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const Sidebar = props => {
  return (
    <Menu isOpen noOverlay>
      <a className="menu-item" href="#top">
        <h1>大知闲闲小知间间</h1>
      </a>

      <a className="menu-item" href="#zhuangzi">
        庄子
      </a>

      <a className="menu-item" href="#laozi">
        老子
      </a>

      <a className="menu-item" href="#kongzi">
        孔子
      </a>

      <a className="menu-item" href="#mengzi">
        孟子
      </a>

      <a className="menu-item" href="#hanfeizi">
        韩非子
      </a>

      <a className="menu-item" href="#mozi">
        墨子
      </a>
      <a className="menu-item" href="#xunzi">
        荀子
      </a>
      <a className="menu-item" href="#shijiamouni">
        释迦牟尼
      </a>
      <a className="menu-item" href="#yesu">
        耶稣
      </a>
      <a className="menu-item" href="#muhanmode">
        穆罕默德
      </a>
    </Menu>
  );
};

export default Sidebar;

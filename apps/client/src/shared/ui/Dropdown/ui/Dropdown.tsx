import React from 'react'
import {Dropdown, Button,Space} from 'antd'

interface ILanguage{
    itemsMenu: string[];

}
const DropdownBtn = () => {
    const items = [
        {
          label: '1st menu item',
          key: '1',
          icon: '-',
        },
        {
          label: '2nd menu item',
          key: '2',
          icon: '-',
        },
      ];
      const menuProps = {
        items,
        // onClick: handleMenuClick,
      };
  return (
    <>
      <Dropdown menu={
        menuProps
      }>
      <Button>
        <Space>
          Button
          {/* <DownOutlined /> */}
        </Space>
      </Button>
    </Dropdown>
    </>
  )
}

export default DropdownBtn
